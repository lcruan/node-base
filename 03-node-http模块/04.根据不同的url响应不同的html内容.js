const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    // 1. 获取请求 url 地址
    const url = req.url
    // 2. 设置响应内容为 404 not found
    let content = "<h1>404 Not Found !</h1>"
    // 3. 判断用户请求内容是否为 / 或 index.html 首页
    // 4. 判断用户请求内容是否为 /about 关于页面
    if (url === '/' || url === "/index.html") {
        content = "<h1>首页</h1>"
    } else if (url === "/about.html") {
        content = "<h1>关于</h1>"
    }
    // 5. 设置 Content-Type 响应头 防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 6. 使用 res.end() 把内容响应给客户端
    res.end(content)
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})