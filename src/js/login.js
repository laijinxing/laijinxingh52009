// 登录表单
var Form = $('.login-box');
var Btn = Form.find('.user-default-btn')
Btn.on('click',function(){
    var UserTel = $(Form.find('input[name=user]')).val();
    var UserPwd = $(Form.find('input[name=pwd]')).val();
    console.log(UserTel,UserPwd)
    var isTUserTel = /^\d{11}$/.test(UserTel);
    // 8位以上至少一个字母和数字
    var isTUserPwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(UserPwd);
    console.log(isTUserPwd,isTUserTel)
    if(isTUserTel&&isTUserPwd){
        console.log('格式正确')
        $.ajax({
            url:'http://localhost/src/php/login.php',
            data:{
                id:UserTel,
                pwd:UserPwd
            },
            success:function(res){
                console.log(res)
                if(res.code){
                    // console.log('账号密码正确')
                    location.href="http://localhost/src/index1.html";
                }else{
                    // console.log('账号密码错误')
                    alert('账号或密码错误')
                }
            },
            error:function(){
                console.log(res);
                console.log('数据库连接失败');
            },
            dataType:'json'
        })
    }else{
        alert('账号为11位数字，密码8位以上至少一个字母和数字')
    }
})