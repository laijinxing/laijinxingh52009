// 鼠标移入显示隐藏盒子
var warpArr = document.getElementsByClassName('item');
var boxArr = document.getElementsByClassName('detail');
for(i=0;i<boxArr.length;i++){
    warpArr[i].index = i;
    warpArr[i].onmouseover=function(){
        boxArr[this.index].style.display = 'block'
    }
    warpArr[i].onmouseout=function(){
        boxArr[this.index].style.display = 'none'
    }
}

// 点击回到顶部
var topBtn = warpArr[3];
function goTop(){
    topBtn.onclick = function(){
        console.log(11111);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
}
goTop()