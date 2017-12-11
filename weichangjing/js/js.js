var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
     // autoplay: {
     // delay: 1000,
     //},
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     navigation: {
      nextEl: '.swiper-button-next'
    },

    //Swiper4.x 动画插件
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
    });

    var mp3=document.querySelector(".mp3");
    var mp3Btn=document.querySelector(".mp3Btn");
mp3Btn.onclick=function(){
    if(mp3.paused) {
        mp3Btn.style.animationPlayState = 'running';
        mp3.play()
    }else{
        mp3Btn.style.animationPlayState = 'paused';
        mp3.pause()
    }
}

