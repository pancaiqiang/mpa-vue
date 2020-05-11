# mpa-vue

> 基于vue-cli3 的单页应用项目模板,



### 移动端页面适配

> 移动端适配使用的是vm的方案，以750px为基准换算成vw单位

```js
// vw适配核心配置文件 .postcssrc.js
"postcss-px-to-viewport": {
  viewportWidth: 750,  //视窗的宽度，对应的是我们设计稿的宽度，一般是750
  unitPrecision: 3, //指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
  viewportUnit: 'vw', //指定需要转换成的视窗单位，建议使用vw
  selectorBlackList: ['.ignore', '.hairlines'], //指定不转换为视窗单位的类，可以自定义
  minPixelValue: 1,   // 小于或等于`1px`不转换为视窗单位
  mediaQuery: false   // 媒体查询里的单位是否需要转换单位
}
```

#### 兼容rem单位

```css
/* 超小屏幕（手机，小于 768px） */
html {
  /* 这样设置字体大小完全是随屏幕正比变化； rem动态计算的情况用这vw个代替 4.267 * 750 / 100 = 32px */
  font-size: 4.267vw;
}
/* 小屏幕（平板，大于等于 768px） */
@media screen and (min-width: 768px) {
  html { font-size: 16px; }
}
/* 中等屏幕（桌面显示器，大于等于 992px） */
@media screen and (min-width: 992px) {
  html { font-size: 16px; }
}
/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media screen and (min-width: 1200px) {
  html { font-size: 16px; }
}
```



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 本地预览dist文件夹
dist 目录需要启动一个 HTTP 服务器来访问 (除非你已经将 publicPath 配置为了一个相对的值)，所以以 file:// 协议直接打开 dist/index.html 是不会工作的。
在本地预览生产环境构建最简单的方式就是使用一个 Node.js 静态文件服务器，例如 serve：

```
npm install -g serve
# -s 参数的意思是将其架设在 Single-Page Application 模式下
# 这个模式会处理即将提到的路由问题
serve -s dist
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
