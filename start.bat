@echo off
chcp 65001 >nul
title ACONCN v2 服务器
echo ========================================
echo   ACONCN v2 网站服务器
echo ========================================
echo.

:: 杀掉占用 8001 端口的旧进程
echo 1. 清理旧进程...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :8001') do (
    taskkill /F /PID %%a >nul 2>&1
)
timeout /t 1 /nobreak >nul

:: 启动 Node.js 服务器
echo 2. 启动服务器...
start "" "C:\Program Files\nodejs\node.exe" "%CD%\server.js"
timeout /t 2 /nobreak >nul

echo 3. 服务器已启动！
echo.
echo    后台管理: http://localhost:8001/admin/index.html
echo    前端网站: http://localhost:8001
echo.
echo 4. 关闭此窗口，服务器继续运行
echo    如需停止服务器，请按任意键
echo.
pause >nul
taskkill /F /IM node.exe >nul 2>&1