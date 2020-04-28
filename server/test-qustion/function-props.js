const httP = (...props) => {
    console.log(props);
    console.log(...props);
};

httP(`www.baodi.com`, {
    "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
});
