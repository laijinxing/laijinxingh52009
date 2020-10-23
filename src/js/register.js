//注册
$('.user-default-btn').on('click',judge)
function judge(){
    var User = $('input[name=user]').val();
    var Pwd = $('input[name=pwd]').val();
    var isChecked = $('input[name=agree]').is(':checked');
    var isTrueUser = /^\d{11}$/.test(User);
    // 至少八个字符，至少一个字母和一个数字
    var isTruePwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(Pwd);
    if(isChecked){
        if(!isTrueUser){
            alert('手机号码11位')
        }
        if(!isTruePwd){
            alert('密码至少八个字符，包含一个字母和一个数字')
        }
        if(isTrueUser&&isTruePwd){
            console.log(1)
            $.ajax({
                url:'http://localhost/src/php/adduser.php',
                data:{
                    id:User,
                    pwd:Pwd
                },
                success:function(res){
                    console.log(res)
                    if(res.code){
                        console.log('注册成功')
                        location.href="http://localhost/src/login.html";
                    }else{
                        alert('已经存在该用户')
                    }
                },
                error:function(){
                    alert('出错了')
                },
                dataType:'json'
            })
        }
    }else{
        alert('请先阅读隐私政策')
    }
    
}