$(function () {
    //购物车的下拉框
    $(".shopCar").find("a").hover(function () {
        //hover方法 带两个回调函数,一个是鼠标移入 一个是鼠标移出
        $(".shopCar_select").slideDown(100);
    }, function () {
        $(".shopCar_select").slideUp(100);
    });

    function getTime() {

        let nowTime = new Date();
        //得到现在的时间
        let endTime = new Date("2020/08/20 20:00:00");
        //自定义时间
        let time = endTime - nowTime;
        //时间差

        let h = parseInt(time / 1000 / 60 / 60 / 24);
        let m = parseInt(time / 1000 / 60 % 60);
        let s = parseInt(time / 1000 % 60);

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        let liHour = document.querySelector(".liHour");
        let liMin = document.querySelector(".liMin");
        let liSec = document.querySelector(".liSec");

        liHour.innerHTML = h;
        liMin.innerHTML = m;
        liSec.innerHTML = s;
        if (h == 0 && m == 0 && s == 0) {
            clearInterval(timeId);
        }

    }

    //轮播图
    // let count = 0;
    // //声明一个下标代表当前的图片位置
    // let lis = $(".bg_right img");
    // console.log(lis);

    // //声明一个变量来存储slider里面所有的li元素(是个伪数组来的)
    // $(".right_arrow").click(function () {
    //     count++;
    //     //每次走一张图片
    //     if (count > lis.length) {
    //         count = 0;
    //         //如果这张图的下标比最后一张图的下标还大的话 那么证明他的下一章图就是第一张
    //     }

    //     lis.eq(count).fadeIn(500).siblings().fadeOut(500);
    //     //代表每次点击都是当前的照片. 渐入没0.1秒一次 其他的图片渐出
    // });

    // $(".left_arrow").click(function () {
    //     if (count < 0) {

    //         count = lis.length;
    //         //判断 如果这张图的坐标比0还小的话 那么它的上一张肯定是最后一张图
    //     }
    //     count--;
    //     lis.eq(count).fadeIn(500).siblings().fadeOut(500);
    // });


    //自动轮播

    // let timeId = setInterval(function () {
    //     //开启一个定时器
    //     $(".right_arrow").click()
    //     //进行从右方向进行点击播放
    // }, 1500)

    // $(".bg_right").mouseover(function () {
    //     //当鼠标移入到图片上面的时候,自动播放就停止
    //     clearInterval(timeId);
    //     //清除定时器
    // })

    // $(".bg_right").mouseout(function () {
    //     //当鼠标移开的时候
    //     timeId = setInterval(function () {
    //         //再次开启定时器
    //         $(".right_arrow").click()
    //     }, 1500)
    // })
    // 轮播图部分
    let swiper = new Swiper('.swiper-container-bg', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            // preventClicksPropagation: true,
        },
        loop: true,
        //effect: 'fade',
        effect: 'coverflow',
        centeredSlides: true,

    });

    //定时器部分
    getTime();
    let timeId = setInterval(getTime, 1000);



    // let h = document.querySelector(".liHour");
    // let m = document.querySelector(".liMin");
    // let s = document.querySelector(".liSec");

    // let timeId = setInterval(function () {
    //     let hTime = parseInt(h.innerHTML);
    //     let mTime = parseInt(m.innerHTML);
    //     let sTime = parseInt(s.innerHTML);

    //     sTime--;
    //     if (sTime < 0) {
    //         sTime = 59;
    //         mTime--;
    //     }
    //     if (mTime < 0) {
    //         mTime = 59;
    //         hTime = 0;
    //     }

    //     h.innerHTML = hTime;
    //     m.innerHTML = mTime;
    //     s.innerHTML = sTime;

    //     if (hTime == 0 && mTime == 0 && sTime == 0) {
    //         clearInterval(timeId);
    //     }

    // }, 1000)
    //导航栏下拉框



    //鼠标移入移出事件
    $(".nav_head li").eq(0).hover(function () {
        $(".nav_select ").stop().slideDown(500);
    }, function () {
        $(".nav_select ").stop().slideUp(500);
    });

    $(".nav_head li").eq(1).hover(function () {
        $(".nav_select1 ").stop().slideDown(500);
    }, function () {
        $(".nav_select1 ").stop().slideUp(500);
    });

    $(".nav_head li").eq(2).hover(function () {
        $(".nav_select2 ").stop().slideDown(500);
    }, function () {
        $(".nav_select2 ").stop().slideUp(500);
    });

    $(".nav_head li").eq(3).hover(function () {
        $(".nav_select3 ").stop().slideDown(500);
    }, function () {
        $(".nav_select3 ").stop().slideUp(500);
    });

    $(".nav_head li").eq(4).hover(function () {
        $(".nav_select4 ").stop().slideDown(500);
    }, function () {
        $(".nav_select4 ").stop().slideUp(500);
    });

    $(".nav_head li").eq(5).hover(function () {
        $(".nav_select5 ").stop().slideDown(500);
    }, function () {
        $(".nav_select5 ").stop().slideUp(500);
    });

    $(".nav_head li").eq(6).hover(function () {
        $(".nav_select6 ").stop().slideDown(500);
    }, function () {
        $(".nav_select6 ").stop().slideUp(500);
    });
    //导航栏鼠标移出事件
    $(".bg_left li").eq(0).hover(function () {
        $(".bg_select ").show();
    }, function () {
        $(".bg_select ").hide();
    });
    $(".bg_left li").eq(1).hover(function () {
        console.log($(".bg_left li").eq(1));
        $(".bg_select1 ").show();
    }, function () {
        $(".bg_select1 ").hide();
    });



    $(".bg_left li").eq(2).hover(function () {
        $(".bg_select2 ").show();
    }, function () {
        $(".bg_select2 ").hide();
    });

    $(".bg_left li").eq(3).hover(function () {
        $(".bg_select3 ").show();
    }, function () {
        $(".bg_select3 ").hide();
    });

    $(".bg_left li").eq(4).hover(function () {
        $(".bg_select4 ").show();
    }, function () {
        $(".bg_select4 ").hide();
    });

    $(".bg_left li").eq(5).hover(function () {
        $(".bg_select5 ").show();
    }, function () {
        $(".bg_select5 ").hide();
    });

    $(".bg_left li").eq(6).hover(function () {
        $(".bg_select6 ").show();
    }, function () {
        $(".bg_select6 ").hide();
    });

    $(".bg_left li").eq(7).hover(function () {
        $(".bg_select7 ").show();
    }, function () {
        $(".bg_select7 ").hide();
    });

    $(".bg_left li").eq(8).hover(function () {
        $(".bg_select8 ").show();
    }, function () {
        $(".bg_select8 ").hide();
    });

    $(".bg_left li").eq(9).hover(function () {
        $(".bg_select9 ").show();
    }, function () {
        $(".bg_select9 ").hide();
    });
    //   侧边栏部分

    $(".sideBar li:first").hover(function () {
        $(".sideBar_info").show();
    }, function () {
        $(".sideBar_info").hide();
    })
    //回到顶部
    $(window).scroll(function () {
        let top = $(window).scrollTop();
        console.log(top);

        let cutTop = ($("header").height()) + ($("nav").height()) + ($(".bg").height());

        if (top > cutTop) {
            $(".goTop").show(100);
        } else {
            $(".goTop").hide(100);
        }
    })
    //返回顶部
    $(".goTop").click(function () {

        $("html").animate({
            scrollTop: 0
        }, 1000)

    })

})


