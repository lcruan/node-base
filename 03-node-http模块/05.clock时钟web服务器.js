// 1.1 导入 http 模块
const http = require('http')
// 1.2 导入 fs 模块
const fs = require('fs')
// 1.3 导入 path 模块
const path = require('path')

// 2.1 创建 web 服务器
const server = http.createServer()

// 2.2 监听 web 服务器的 request 事件
server.on('request', (req, res) => {
    // 3.1 获取到 客户端请求的 URL 地址
        // /clock/index.html
        // /clock/index.css
        // /clock/index.js
    const url = req.url
    // 3.2 把请求的 URL 地址映射为具体文件的存放路径
    // const fPath = path.join(__dirname, url)

    // 为满足用户直接输入ip进入页面和不用加clock目录 将fPath进行改写
    // 5.1 预定义一个空白的文件存放路径
    let fPath = ""
    if (url === '/') {
        fPath = path.join(__dirname, './clock/index.html')
    } else {
        fPath = path.join(__dirname, './clock', url)
    }

    // 4.1 根据映射过来的文件路径读取文件内容
    fs.readFile(fPath, "utf8", function(err, dataStr) {
        // 4.2 读取失败，向客户端响应固定的错误信息
        if (err) return res.end("404 not found.")
        // 4.3 读取成功，将读取成功的内容，响应给客户端
        res.end(dataStr)
    })

})
// 2.3 启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})