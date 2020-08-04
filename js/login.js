/*
1.分析需求(交互)：
    1.1 点击扫码登陆
        账号登陆文字颜色不高亮;扫码登陆文字颜色高亮
        显示二维码 ; 隐藏输入账号框
    1.2 点击账号登陆
        与上面的相反
2.思路分析（事件三要素）
    获取元素：事件源：
    注册事件：事件类型
    事件处理：
*/

// 入口函数
$(function () {
    //账号登陆点击事件
    $('.login-hd #id-name').on('click', function () {
        //显示账号输入框;文字高亮
        $('.login-num').css('display', 'block').next().css('display', 'none');
        //文字高亮
        $(this).css('color', '#f56600').siblings('a').css('color', '#7f7f7f');
    });

    //二维码点击事件
    $('.login-hd #qr-code').on('click', function () {
        //显示二维码图片,文字高亮
        $('.login-qr-code').css('display', 'block').prev().css('display', 'none');
        //文字高亮
        $(this).css('color', '#f56600').siblings('a').css('color', '#7f7f7f');
    })
});