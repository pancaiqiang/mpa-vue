const path = require('path')
const glob = require('glob')

// 统一配置多页
const pages = {
  index: {
    // page 的入口
    entry: 'src/main.js',
    // 模板来源
    template: 'public/index.html',
    // 在 dist/index.html 的输出
    filename: 'index.html',
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'Index Page',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  }
}

glob.sync('./src/pages/**/*.js').forEach((filePath) => {
  console.log(filePath)
  // eg: filePath:  './src/pages/aboutus/main.js'
  // basename:  'main',
  // filename: 'aboutus/main.js'
  // dirname: 'aboutus'
  let basename = path.basename(filePath, path.extname(filePath));
  let filename = filePath.split('./src/pages/')[1]
  let dirname = filename.split(`/${basename}.js`)[0]

  pages[`${dirname}/${basename}`] = {
    entry: `src/pages/${filename}`,
    template: 'public/index.html',
    title: basename,
    filename: `${dirname}/${basename}.html`
  }
})

console.log(pages)

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: '',
  pages,
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true
}