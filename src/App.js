
const http = require('http')
const express = require("express");
const path = require("path")
const fs = require("fs")
var ejs = require('ejs'); 
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const log = console.log


const app = express();

// 以下四项是模板引擎的配置
app.engine('html', ejs.__express)
app.set('view engine', 'html')
// 注意模板引擎静态目录的配置
app.set('views', __dirname + './../views/build')
app.set("view options", {layout: false});

// 静态资源目录
app.use(express.static(path.join(__dirname, './../views/build')));

// 中间件
app.use(bodyParser.json())
app.use(cookieParser())


app.get("*", function(req, res) {
    log('router /')
    res.render("index");
});

var httpServer = http.createServer(app)


const host = 'localhost'
httpServer.listen(3000, host, function () {
    console.log( 'http on 3000' );
} );
