var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.get("/api", (req, res) => {
    res.json({
        msg: 123,
    });
});

app.get("/cookie", (req, res) => {
    res.cookie("userName", "lee", {
        // 设置该Cookie只可以由服务端访问，即前端JavaScript无法访问document.cookie获取该值，但控制台还是可以查看和修改
        httpOnly: true,
        // 只有通过HTTPS请求的Cookie才被使用，否则都认为是错误的Cookie
        // secure: true,
        // 设置保存Cookie的域名，浏览器查找Cookie时，子域名（如translate.google.com）可以访问主域名（google.com）下的Cookie，而主域名（google.com）不可以访问子域名（如translate.google.com）下的Cookie
        // 本地测试可直接设置为localhost
        domain: ".juejin.im",
        // 设置保存Cookie的路径，浏览器查找Cookie时，子路径（如/map）可以访问根路径（'/'）下设置的Cookie，而根路径（'/'）无法访问子路径（如/map）下设置的Cookie
        path: "/",
        // 通过expires设置Cookie过期时间为14天后
        // expires: new Date(new Date().getTime() + 14 * 86400000),
        // 通过maxAge设置Cookie过期时间为14天后
        maxAge: 14 * 86400000,
    });

    // 读取cookieParser解析的Cookie
    console.log(res);

    res.send(`cookies123: ${JSON.stringify(req.cookies)}`);
});

app.get("/cookie2", (req, res) => {
    res.cookie("pathAge", 1, {
        httpOnly: false,
        domain: "localhost",
        path: "/users",
        maxAge: 14 * 86400000,
    });
    res.send(`cookies123: ${JSON.stringify(req.cookies)}`);
});

app.get("/cookie-domain", (req, res) => {
    res.cookie("localabc", 1, {
        httpOnly: false,
        domain: "localhost",
        path: "/users",
        maxAge: 14 * 86400000,
    });
    res.send(`cookies123: ${JSON.stringify(req.cookies)}`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
