// var ID = window.location.href.split('?')[1]

$.ajax({
    type:"GET",
    url:"./data/data.json",
    success:function(data){
        $.each(data,function(i,v){
            $('.productList-list-ul').append(`<li class="list">
        <div class="list-box">
            <p class="p-img">
                <a href="http://localhost/src/detail.html?${i}" target="_blank">
                    <img src="${v.img}" alt="" />
                </a>
            </p>
            <p class="p-name">
                <a href="#" title="">${v.name}</a>
            </p>
            <p class="p-price-comment">
                <span class="price">
                    商城价
                    <strong>
                        <em>￥</em>${v.price}
                    </strong>
                </span>
                <span class="comment">0 评价</span>
            </p>
            <p class="p-tool" id="7300">
                <a class="p-tool-btn no" href="#" onclick="addCart(this)">加入购物车</a>
            </p>
        </div>
    </li>`)
        })     
    },
    error:function(){
        alert('获取数据失败')
    }
})