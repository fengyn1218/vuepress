module.exports = {
    title: '搅碎一池星月',
    port: 8080,
    description: 'Welcome to Feng.Home',
    themeConfig: {
        nav: [
            {text: 'feng-shop', link: 'https://github.com/fengyn1218/feng-shop.github.io'},
            {text: 'parseSQL', link: 'https://github.com/fengyn1218/ParseHiveSQL'},
            {text: '作者CSDN博客', link: 'https://blog.csdn.net/weixin_45518155'},
            {text: '联系作者', link: 'http://wpa.qq.com/msgrd?v=3&uin=2318699921&site=qq&menu=yes'}
        ],
        sidebar: {
            '/': [
                // "/", //指的是根目录的md文件 也就是 README.md 里面的内容
                // "csdn", //根目录创建 csdn.md文件
                // "api", //根目录创建 api.md文件
                // "error" //根目录创建 error.md文件
            ]
        },
        sidebarDepth: 2
    }

};