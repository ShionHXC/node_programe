# node js 项目   v8.4.0

    监控node自启动  nodemon 

## 问题一   

http 模块中  `res.write("")` 中 中文出现乱码     
解决 `res.writeHead(200,{"Content-Type":"text/html;charset:utf-8"})`  
注意 `utf-8` 不能加引号

## 问题二

req.url 会获取 /favicon.ico 处理 URL 参数时  需要过滤掉