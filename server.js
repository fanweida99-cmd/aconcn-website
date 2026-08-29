#!/usr/bin/env node
/**
 * ACONCN v2 — 本地开发服务器
 * 纯静态文件服务（图片上传统一走 Supabase Storage，见 admin.js）
 * 线上部署到 GitHub Pages 时无需此文件
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = Number(process.env.ACONCN_PORT) || 8001;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  const parsed = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsed.pathname;
  const method = req.method;

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, apikey');

  if (method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Static file serving. Resolve directory URLs to their index page so that
  // /admin/ works consistently with the site root.
  let filePath = path.join(PUBLIC_DIR, pathname === '/' ? 'index.html' : pathname);

  fs.stat(filePath, (statErr, stats) => {
    if (!statErr && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Try index.html for SPA-like routing
        const altPath = path.join(PUBLIC_DIR, pathname + '.html');
        fs.readFile(altPath, (err2, data2) => {
          if (err2) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
            return;
          }
          sendFile(res, data2, 'text/html');
        });
        return;
      }
      res.writeHead(500);
      res.end('Server error');
      return;
    }
      sendFile(res, data, mime);
    });
  });
});

function sendFile(res, data, mime) {
  // HTML 文件不缓存，静态资源缓存 1 天
  var cacheControl;
  if (mime === 'text/html') {
    cacheControl = 'no-cache';
  } else {
    cacheControl = 'max-age=86400'; // 1 day
  }
  const acceptEncoding = (res.req.headers['accept-encoding'] || '');
  if (/\bgzip\b/.test(acceptEncoding) && data.length > 1024) {
    zlib.gzip(data, (err, compressed) => {
      if (err) {
        res.writeHead(500);
        res.end('Compression error');
        return;
      }
      res.writeHead(200, {
        'Content-Type': mime,
        'Content-Encoding': 'gzip',
        'Cache-Control': cacheControl,
        'Vary': 'Accept-Encoding'
      });
      res.end(compressed);
    });
  } else {
    res.writeHead(200, {
      'Content-Type': mime,
      'Cache-Control': cacheControl
    });
    res.end(data);
  }
}

// Port conflict handling
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} in use. Attempting to free...`);
    const { execSync } = require('child_process');

    try {
      if (process.platform === 'win32') {
        // Windows
        const out = execSync(`netstat -ano | findstr :${PORT} | findstr LISTENING`, { encoding: 'utf8' }).trim();
        const pid = out.split(/\s+/).pop();
        if (pid) {
          execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
          console.log(`Killed PID ${pid}. Restarting in 2s...`);
          setTimeout(() => { server.close(); server.listen(PORT, '0.0.0.0'); }, 2000);
        }
      } else if (process.platform === 'linux' || process.platform === 'darwin') {
        // Linux / macOS
        const out = execSync(`lsof -ti :${PORT}`, { encoding: 'utf8' }).trim();
        if (out) {
          execSync(`kill -9 ${out}`, { stdio: 'ignore' });
          console.log(`Killed PID ${out}. Restarting in 2s...`);
          setTimeout(() => { server.close(); server.listen(PORT, '0.0.0.0'); }, 2000);
        }
      }
    } catch (e) {
      console.error(`Failed to free port ${PORT}. Please kill the process manually and retry.`);
      console.error(`On Windows: netstat -ano | findstr :${PORT}`);
      console.error(`On Linux/Mac: lsof -i :${PORT}`);
    }
  } else {
    console.error('Server error:', err);
  }
});

console.log(`
  ╔══════════════════════════════════════╗
  ║   ACONCN v2 — Local Dev Server      ║
  ║   http://localhost:${PORT}              ║
  ║   http://localhost:${PORT}/admin        ║
  ╚══════════════════════════════════════╝
`);
console.log(`Gzip: enabled`);

server.listen(PORT, '0.0.0.0');
