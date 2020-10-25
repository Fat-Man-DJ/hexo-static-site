var OriginTitile = document.title,
titleTime;
document.addEventListener("visibilitychange",
function() {
    if (document.hidden) {
        document.title = "News:震惊!Windows底层代码开放!";
        clearTimeout(titleTime)
    } else {
        $('[rel="shortcut icon"]').attr("href", "//www.ihewro.com/favicon.ico");
        document.title = "(/≧▽≦/) 你回来啦! ";
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        },
        2000)
    }
});
