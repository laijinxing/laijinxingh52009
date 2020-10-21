//鼠标移入显示隐藏商品列表
var productList = document.querySelector('.classify-nav')
// console.log(productList)
productList.parentElement.onmouseenter=function(){
    productList.style.display = 'block'
}
productList.parentElement.onmouseleave=function(){
    productList.style.display = 'none'
}