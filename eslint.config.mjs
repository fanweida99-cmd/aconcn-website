import js from '@eslint/js';
import globals from 'globals';

// admin.js 是浏览器脚本（defer 加载，用 fetch/document/window 等）
// server.js / scripts 是 Node CommonJS。统一配 browser+node globals。
export default [
  { ignores: ['node_modules/', 'screenshots/', 'assets/images/', 'assets/uploads/'] },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // 这两项设为 warn：作为提示而非提交阻断（避免一上来几百条 warning 卡死提交）
      'no-undef': 'warn',
      'no-unused-vars': 'warn',
      'no-empty': 'warn',
      // 模板字符串里合法转义，admin.js 用得多
      'no-useless-escape': 'off',
      // redeclare 在大文件里常见，先放行
      'no-redeclare': 'warn',
    },
  },
];
