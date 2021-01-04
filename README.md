# vue3-demo3

## 总结

这是vue3demos repository中的第三个demo。是跟着视频教程做的。

项目github代码地址[在这里](https://github.com/bitfumes/vue3-for-beginners)。

（没有外挂字幕）视频教程youtube地址[在这里](https://www.youtube.com/watch?v=e-E0UB-YDRk&ab_channel=Bitfumes)。

最后一部分部署该app到netlify我自己改为部署到heroku了，因为netlify总是提示无法打开链接，也无法登录到github去。关于部署到heroku要注意的一些事项我记录在了个人博客中。

点击查看[该app在Heroku上的部署结果](https://vue3-10app.herokuapp.com/)。

## 相关技术

- 提供简易化css的tailwindcss，但是感觉有点麻烦，写在template中很冗杂。注意配置文件的时候不仅要有`tailwind.config.js`还要一起配置`postcss.config.js`，报错看官方文档。
- 提供数据库的google firebase，在Chat页面实现依据用户id显示对话。使用方法看google firebase的官方文档。
- 提供机器识别的tensorflow.js cocossd
- 提供API数据的网站reqres
- 供API以及CRUD操作的网站crudcrud
- 计算机设备的读取与使用，在Tensorflow页面。
- 使用npm markdown进行markdown操作
- teleport的概念使用
- composition API的使用
- router的meta field与用户认证modal的结合

## 项目运行

```shell
git clone git@github.com:MachaCroissant/vue3-demo3.git
npm install
npm run serve
```

