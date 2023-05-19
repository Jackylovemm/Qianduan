module.exports = {   
    devServer: {
        proxy: {
            '^/api1': {
                target: 'http://localhost:3000/',//接口的前缀
                ws:true,//代理websocked
                changeOrigin:true,//虚拟的站点需要更管origin
                pathRewrite:{
                    '^/api1':''//重写路径
                }
            },
            '^/api2': {
                target: 'https://c.m.163.com//',//接口的前缀
                ws:true,//代理websocked
                changeOrigin:true,//虚拟的站点需要更管origin
                pathRewrite:{
                    '^/api2':''//重写路径
                }
            },
        }
    }
}
