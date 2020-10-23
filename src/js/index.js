// 轮播图部分
var sliderArr = document.getElementsByClassName('sc_container')[0].children[0].children;
for(i=0;i<sliderArr.length;i++){
    sliderArr[i].style.position = 'absolute'
    sliderArr[i].style.top = 0;
    sliderArr[i].style.left = 0;
    sliderArr[i].style.width = '100%';
    sliderArr[i].style.display = 'block';
    sliderArr[i].style.opacity = 100;
    sliderArr[i].style.zIndex = 1;

}
var index = 0;
var sliderTime = setInterval(nextImg,4000);
function nextImg(){
    for(i=0;i<sliderArr.length;i++){
        sliderArr[i].style.opacity = 0;
        sliderArr[i].style.zIndex = 1;
    }
    for(i=0;i<sliderArr.length;i++){
        sliderArr[i].style.display = 'none';
    }
    var newIndex = index + 1;
    if(newIndex>sliderArr.length-1){
        newIndex=0;
    }
    index = newIndex;
    sliderArr[index].style.display = 'block';
    animate(sliderArr[index],{"opacity":100});
    light()
}
// 商品列表hover特效
var hoverArr = document.getElementById("Nav").children;
for(i=1;i<hoverArr.length;i++){
    hoverArr[i].onmouseover = function(){
        this.className='active';
    }
    hoverArr[i].onmouseout = function(){
        this.className='';
    }
}
var ddArr = document.querySelectorAll('dd a')
for(i=0;i<ddArr.length;i++){
    ddArr[i].onmouseover=function(){
        this.className = 'redactive';
    }
    ddArr[i].onmouseout=function(){
        this.className = '';
    }
}
// 广告位3
var adThree = document.getElementsByClassName('banner-box');
for(i=0;i<adThree.length;i++){
    adThree[i].onmouseover=function(){
        this.style.marginLeft = '-10px'
    }
    adThree[i].onmouseout=function(){
        this.style.marginLeft = '0px'
    }
}
var dotArr = document.getElementsByClassName('sc_index')[0].children;
light()
//点击小圆点，更新图片，点亮小圆点
function light(){
    for(var i=0;i<dotArr.length;i++){
        dotArr[i].className = ""
    }
    dotArr[index].className = "current";
}
for(i=0;i<dotArr.length;i++){
    dotArr[i].onclick = function(e){
        e = e||window.event;
        var target = e.target||e.srcElement;
        var newIndex = target.getAttribute('data-index');
        for(i=0;i<sliderArr.length;i++){
            sliderArr[i].style.opacity = 0;
            sliderArr[i].style.zIndex = 1;
        }
        for(i=0;i<sliderArr.length;i++){
            sliderArr[i].style.display = 'none';
        }
        index = newIndex;
        sliderArr[index].style.display = 'block';
        animate(sliderArr[index],{"opacity":100});
        light()
    }
}
// 鼠标移入sliderBox停止自动轮播,移出开启自动轮播
var sliderBox = document.getElementsByClassName('index-slider')
sliderBox[0].onmouseenter = function(){
    clearInterval(sliderTime)
}
sliderBox[0].onmouseleave = function(){
    clearInterval(sliderTime);
    sliderTime = setInterval(nextImg,4000);
}