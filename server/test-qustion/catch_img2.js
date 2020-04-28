// document.body.innerHTML.match(/(<img(.|\n)*?)>/g).map(item=>item.match(new RegExp(`(data-original=['"].*?)['"]`, "g"))).filter(item=>item)
const https = require("https");
const http = require("http");
const fs = require("fs");

const browser = {
    "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
};

const httpP = (...props) =>
    new Promise((resolve, reject) => {
        //console.log(props[0]);
        const req = http.request(...props, function (req) {
            const { statusCode } = req;
            // console.log("httpP", statusCode);
            if (statusCode >= 200 && statusCode < 300) {
                resolve(req);
            } else {
                reject(req);
            }
        });
        req.end();
    });

const httpsP = (...props) =>
    new Promise((resolve, reject) => {
        const req = https.request(...props, function (req) {
            const { statusCode } = req;
            // console.log("httpsP", statusCode);
            if (statusCode >= 200 && statusCode < 300) {
                resolve(req);
            } else {
                reject(req);
            }
        });
        req.on("error", function (err) {
            console.log("请求报错", err);
            reject(req);
        });
        req.end();
    });

const getData = (req) =>
    new Promise((resolve, reject) => {
        if (req.on) {
            let data = "";
            req.on("data", function (chunk) {
                data += chunk;
            });
            req.on("end", function () {
                resolve(data);
            });
        } else {
            reject(req);
        }
    });

function getImgUrlFormDocument(document, imgProps = "src") {
    const img = document.match(/(<img(.|\n)*?)>/g);
    if (imgProps === "img") {
        return img;
    }

    const imgUrlProps = new RegExp(`(${imgProps}=['"].*?)['"]`, "g");
    const imgUrl = img.map((item) => item.match(imgUrlProps) && item.match(imgUrlProps)[0]).filter((item) => item);
    if (!imgUrl.length) {
        throw new Error(`未匹配img属性${imgProps}`);
    }
    return imgUrl;
}

const saveImg = (imgData, saveLoaclPath, fileName) =>
    new Promise((resolve, reject) => {
        fs.mkdir(saveLoaclPath, { recursive: true }, function () {
            fs.writeFile(saveLoaclPath + "/" + fileName, imgData, "binary", function (err) {
                if (err) {
                    reject(err);
                    return console.log("图片保存失败", err);
                }
                resolve(`${saveLoaclPath.slice(2)}/${fileName} save success !!!`);
                // console.log(`${saveLoaclPath.slice(2)}/${fileName} save success !!!`);
            });
        });
    });

const query = (page) =>
    httpsP(`https://www.doutula.com/photo/list/?page=${page}`, browser)
        // 获取html
        .then((req) => getData(req))
        // 获取页面图片的路径
        .then((data) => getImgUrlFormDocument(data, "data-original").map((item) => item.slice(15, -1)))
        // 请求图片
        .then((img) => Promise.all(img.map((item) => httpP(item, browser))))
        // 保存图片数据
        .then((dataAll) =>
            dataAll.map((item) => {
                item.setEncoding("binary");
                const path = item.connection._httpMessage.path;
                return { data: getData(item), name: path.split("/").pop() };
            })
        )
        .then(
            (imgData) =>
                Promise.all(
                    imgData.map((item) =>
                        item.data.then((imgData) => saveImg(imgData, `./biaoqing/第${page}页`, item.name))
                    )
                )
            // imgData.forEach((item, index) => {
            //   item.data.then((imgData) => {
            //     saveImg(imgData, `./Biaoqing/第${page}页`, item.name);
            //   });
            // })
        )
        .then((result) => {
            console.log(`./Biaoqing/第${page}页`, result);
            return result;
        })
        .catch((err) => {
            //console.error("ERROR: ", err);
            return err;
        });

Promise.all([1, 2, 3, 4, 5].map((item, index) => query(item))).then((res) => console.log("全部请求完成!!!"));
