// 1. npm run build build 打包代码
// 2.把代码给后端
// 3.后端把前端代码放入后端工程,后端重启后端服务
// *容易出问题的就是下面的配置
// 访问项目通过域名加路径的形式去访问
// public需要配置根目录下面的名字
// vue2强调的是执行的流程,vue3讲的是数据驱动
module.exports = {
    publicPath:'/jingdong'
}