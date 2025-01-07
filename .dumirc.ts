import { defineConfig } from 'dumi';

let base = '/leo-ui/';
let publicPath = '/leo-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = '/';
  publicPath = '/';
}

export default defineConfig({
  title: 'Leo UI', // 站点名称
  outputPath: 'doc-site', // 输出文件夹
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  base,
  publicPath,
});
