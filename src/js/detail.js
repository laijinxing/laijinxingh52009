var ID = window.location.href.split('?')[1]
$.ajax({
    type:"GET",
    url:"./data/data.json",
    success:function(data){
        // 渲染小图列表
        $.each(data[ID].imgarr,function(item,v){
            $('.list-ul').append(`<li class="">
            <img width="59" height="58" bimg="${v}" src="${v}"alt="">
        </li>`)
        // 渲染型号
        $('.check-color-list').append(`
        <li class="">
        <a href="#" title="">
            <img src="${v}" alt="">
        </a>
        </li>`)
        })
        // 鼠标移入添加active类名
        $('.list-ul').children().first().addClass('active')
        $('.list-ul').children().on('mouseenter',function(){
            $(this).addClass('active')
            .siblings()
            .removeClass('active')
            $('#productBigImg').children()[0].src = $(this).children()[0].src
            $('#big').children()[0].src = $(this).children()[0].src
        })
        // 渲染大图
        $('#productBigImg').children()[0].src = data[ID].img;
        // 渲染文字
        $('.goods-text-box').prepend(`<h1 class="product-title">${data[ID].name}</h1>`)
        // 渲染价格
        $('#spLimiPrice').text(data[ID].price)
        // 售出数量
        $('.sale-number').children().text(data[ID].sold)
    },
    error:function(){
        alert('获取数据失败')
    }
})
$('.cut-btn').on('click',function(){
    if(Number($('#txtCount').val())==1){
        return
    }else{
        $('#txtCount').val(Number($('#txtCount').val())-1)
    }
})
$('.add-btn').on('click',function(){
    $('#txtCount').val(Number($('#txtCount').val())+1)
})
var XID = 0;
$('.product-add-cart-btn').on('click',function(){
    var IMG,NAME,NUM,PRICE;
    IMG = $('.list-ul').children().first().children()[0].src;
    console.log(IMG)
    NAME = $('.product-title').text();
    NUM = $('#txtCount').val();
    PRICE = $('#spLimiPrice').text();
    $.ajax({
        url:'./php/addwq.php',
        data:{
            id:XID++,
            name:NAME,
            num:NUM,
            img:IMG,
            price:PRICE
        },
        success:function(res){
            if(res){
                if(res.code){
                    alert('加入成功')
                }
            }
        },
        datatype:'json',
    })
})
$('.user-cart').click(function(){
    location.href="./shoppingcart.html"
})