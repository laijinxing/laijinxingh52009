showTbody();
function showTbody(){
    $.ajax({
        url:'http://localhost/src/php/showlist.php',
        success:function(res){
            if(res.code){
                var arr = res.data;
                if(res.data.length){
                    $('#ShoppingCartList').show()
                    $.each(arr,function(index,item){
                        $('#ShoppingCartList').append(`<tbody class="Tbody">
                        <tr id="${item.product_id}" class="">
                            <td>
                                <label class="mn-check checks"></label>
                            </td>
                            <td>
                                <div class="cart-table-product">
                                    <div class="cart-table-img">
                                        <a href="#">
                                            <img src="${item.product_img}">
                                        </a>
                                    </div>
                                    <div class="cart-table-name">
                                        <a href="#">${item.product_name}</a>
                                    </div>
                                </div>
                            </td>
                            <td class="price" data-pointpay="0">￥${item.product_price}</td>
                            <td>
                                <div class="cart-table-number">
                                    <a href="javascript:void(0);" class="add-product" onclick="AddCount(this,1)">+</a>
                                    <input name="BuyNum" value="${item.product_num}" disabled="disabled" type="text">
                                    <a href="javascript:void(0);" class="cut-product" onclick="AddCount(this,-1)">-</a>
                                </div>
                            </td>
                            <td class="a-price">￥${item.product_price}</td>
                            <td>
                                <a class="delete"href="#">
                                    <i class="icon-delete"></i>删除</a>
                            </td>
                        </tr>
                    </tbody>`)
                    $('.delete').click(function(){
                        $.ajax({
                            url:'http://localhost/src/php/delwq.php',
                            data:{
                                id:$('.delete').parents('tr').attr('id')
                            },
                            success:function(res){
                                if(res.code){
                                    showTbody()
                                }
                            },
                            dataType:'json'
                        })
                    })
                    })
                }else{
                    $('.Tbody').hide()
                }

            }
        },
        dataType:'json',
        cache:'flase'
    })
};


