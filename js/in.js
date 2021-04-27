/*添加图片top*/
// 判断移动端设备
browserRedirect();
function browserRedirect() {
    var top_up = "<img class='upj' src='https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif'>";
    /*添加到返回顶部按钮下*/
    document.getElementById("go-up").innerHTML += top_up;
}