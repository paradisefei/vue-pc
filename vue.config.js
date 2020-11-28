const path = require("path");

module.exports = {
  /*
    和webpack相关
  */
  configureWebpack: {
    resolve: {
      alias: {
        // 配置路径别名 属性名用来是用，属性值用来指明具体路径
        "@views": path.resolve(__dirname, "src/views"),
        "@comps": path.resolve(__dirname, "src/components"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@api": path.resolve(__dirname, "src/api"),
      },
    },
  },
};
