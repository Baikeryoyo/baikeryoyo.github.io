/*添加图片top*/
var top_up = "<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-80px);' src='https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif' title='回到顶部' >";
/*添加到返回顶部按钮下*/
// 当网页向下滑动 20px 出现"返回顶部" 按钮
document.getElementById("go-up").innerHTML += top_up;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("go-up").style.display = "block";
    } else {
        document.getElementById("go-up").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// document.getElementById("go-up").innerHTML += top_up;
// document.getElementById("go-up").innerHTML += rightSideFn.scrollToTop();