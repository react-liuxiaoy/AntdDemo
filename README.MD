# AntdDemo

[按需加载组件代码和样式]

在 src/App.css文件顶部引入 antd/dist/antd.css。
  @import '~antd/dist/antd.css';
实际上加载了全部的 antd 组件的样式（对前端性能是个隐患）。
这里使用 react-app-rewired （一个对 create-react-app 进行自定义配置的社区解决方案）。
使用 babel-plugin-import 一个用于按需加载组件代码和样式的 babel 插件（原理(http://ant-design.gitee.io/docs/react/getting-started-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD)）

[自定义主题]

按照 配置主题 的要求，自定义主题需要用到 less 变量覆盖功能。可以引入 react-app-rewire 的 less 插件 react-app-rewire-less 来帮助加载 less 样式。

[eject]

可以使用 create-react-app 提供的 yarn run eject 命令将所有内建的配置暴露出来。

