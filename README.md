




按需加载组件代码和样式

在 src/App.css文件顶部引入 antd/dist/antd.css。
  @import '~antd/dist/antd.css';
实际上加载了全部的 antd 组件的样式（对前端性能是个隐患）。

此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 react-app-rewired （一个对 create-react-app 进行自定义配置的社区解决方案）。

使用 babel-plugin-import 一个用于按需加载组件代码和样式的 babel 插件（原理(http://ant-design.gitee.io/docs/react/getting-started-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD)）









