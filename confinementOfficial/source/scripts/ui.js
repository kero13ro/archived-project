
$( document ).ready(function() {
  
  $(".imgLiquidFill").imgLiquid();


  
  // if (!/MSIE|IEMobile|Firefox|iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini|Trident/i.test(window.navigator.userAgent)) {
  //   $('.scrollbarY').mCustomScrollbar({
  //     axis: "y",
  //   });
  // }

  /* ==========================================================================
        * nav
  ==========================================================================*/
  // var navTop = document.getElementById("nav").getBoundingClientRect().top;


  var nav = document.getElementById("nav");
  var navTop = nav.offsetTop;
  // console.log(navTop);

  $(document).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > navTop) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });


//   if (  $( window ).width() < 769 ) {    /                       //language語系
//     $(".language").click(function() {    
//       if ( $(this).children("ul").is(":visible") ) {
//         $(this).children("ul").stop().css("display", "none");
//       } else {
//         $(this).children("ul").fadeIn().css("display", "flex");
//       }
//     });
//   } else {
//     $(".language").hover(function() {    
//       $(this).children("ul").fadeIn().css("display", "flex");
//     },function () {
//       $(this).children("ul").stop().css("display", "none");
//     });
//   }
  var $menu = $("#nav .menu");

  $menu.on("click", function () {
    // $(this).addClass("expend");

    $menu.find(".panel-wrap").stop(true).fadeIn(300);
  });

  $menu.find(".close").on("click", function (e) {
    e.stopPropagation();
    // $menu.removeClass("expend");
    $menu.find(".panel-wrap").stop(true).fadeOut(300);

  });

//   $(".menu .panel").on("click", function(e) {
//     e.stopPropagation();
//   });

//   if (  $( window ).width() < 769 ) {
//     $("#nav .primary .arrow ").on('click', function(e) {
//       e.preventDefault();
//       $("#nav .primary + ul").stop(true).slideUp(300);
//       $(this).parent(".primary").next("ul").stop(true).slideToggle(300);
  
//       $(this).parent(".primary").toggleClass("expend");
//       $(this).parent(".primary").parent("li").siblings("li").children(".primary").removeClass("expend");
//     });

//   } else {
    
//     $("#nav .primary .arrow ").on('click', function(e) {
//       e.preventDefault();
//     });

//     var timer;
//     $("#nav .primary .arrow").hover(function(e) {
//         var $this = $(this);
                
//         timer = setTimeout(function() {
//           $("#nav .primary + ul").stop(true).slideUp(300);
//           $this.parent(".primary").next("ul").stop(true).slideDown(300);
//           $this.parent(".primary").addClass("expend");
          
//         }, 200);
//       }, function() {
//         clearTimeout(timer);
//         $(this).parent(".primary").parent("li").siblings("li").children(".primary").removeClass("expend");
//       });
//   }

//   $("#nav .primary .all-dropdwon ").on('click', function(e) {  //Application 特殊情況
//     e.preventDefault();
//     $(this).next(".arrow").trigger("click");
//   });

//   $(".search").on('click', function() {
//     $(this).toggleClass("expend");

//     if ( $(".menu").hasClass("expend") ) {
//       $(".menu").removeClass("expend");
//     }
//   });

//   $(".search .panel").on("click", function(e) {
//     e.stopPropagation();
//   });


//   if (  $( window ).width() < 769 ) {
//     $("#footer .logo a[data-wallpaper]").replaceWith("<a href='http://weixin.qq.com/r/hypSSl-EFAJrrRsp93_V' , target='_blank'><span class='icon-linkedin'></span></a>");
//     // $("#footer .logo a[data-wallpaper]").replaceWith("<a href='weixin://scanqrcode/r/hypSSl-EFAJrrRsp93_V' , target='_blank'><span class='icon-linkedin'></span></a>");
    
//   }
  
// /* ==========================================================================
//             * nav End
//   ==========================================================================*/

//   /* ==========================================================================
//             * 頁面區塊
//   ==========================================================================*/

	$(".scroll-down").each(function () {
	  $(this).click(function () {
	    $("html,body").animate({
	      scrollTop: $("#scroll-here").offset().top // - $("#header").height()
	    }, 1500, 'easeInOutCubic');
	    return false;
	  });
	});

	$(".scroll-top").each(function () {
	  $(this).click(function () {
	    $("html,body").animate({
	      scrollTop: 0
	    }, 1500, 'easeInOutCubic');
	    return false;
	  });
	});

	$(".navbar").each(function () {
	  $(".navbar .toggle").click(function () {
	    $(this).next("ul").slideToggle();
	  });
  });

  $(".wp").on('mousewheel', function () {
    $('html,body').stop();
  });
  

//   /*== 01-index.html =========================== */

//   if( $( window ).width() <= 400 ){

//     if( $(" #index .slider").hasClass("onlyText") ){
//       $("#index .sub + ul").show();

//     } else {
//       $("#index .bgc1").css("backgroundImage", "url(./styles/images/01-landing02.jpg)");
//       // $("#index .bgc1 .group img.replace").attr("src", "./styles/images/01-all-03-360.jpg");
//     }
//   }
//   /*== 03-about.html =========================== */

//   $("#support .context .question").click(function(){
//     $(this).next(".answer").slideToggle(200);
//     $(this).toggleClass("active");
//   });
//   $window.on("load", function() {
//     $("#support .context li:nth-child(3) .question").trigger("click");
//   });

//   /*== 09-RMA.html =========================== */


//   $("#RMA .container .btn").click(function () {

//     $(this).hide();
    
//     $("#RMA .login").slideDown().css("display","flex");

//   });

//   $('#video a[data-rel^=lightcase]').lightcase();

//   $('#inquiry a[data-rel^=lightcase]').lightcase();

//   /*== 31- inquiry.html =========================== */


//   var lists = JSON.parse(localStorage.getItem("lists")) || [];
//   console.log(lists.length);
  
//   function checkTypelist(){
//     if ( lists.length == 0 ) {
//       $("#inquiry .typelist").hide();
//     }  
//   }
//   checkTypelist();
  

//   function addList() {                        //將勾選的型號記錄到locaol storage
//     $("#infobox .btn").on("click", function () {
//       lists = [];

//       $("#infobox input:checkbox").each(function () {
//         if ($(this).is(":checked")) {
//           var value = $(this)[0].value;
//           lists.push(value);
//         }
//       });
//       localStorage.setItem("lists", JSON.stringify(lists));
//     });
//   }

//   // $('#detail a[data-rel^=lightcase]').lightcase({    //開啟infobox時
//   $('a[href="#infobox"]').lightcase({    //開啟infobox時
//     onBeforeShow : {
//       quux: function() {
//         $("a[href='#confirm']").lightcase();  //初始化下一個lightcase
//         addList();                            //綁定按鈕事件，因為按鈕原先為display none
//       }
//     },
//   });
  
//   function renewlocalStorage() {
//     $("#inquiry .row .mark").each(function(){
//       lists.push($(this).attr("data-type"));
//     });
//   }

//   if($('main').children().is('#inquiry')){    
//     lists = JSON.parse(localStorage.getItem("lists"));  //讀取已勾選的型號
//     lists.forEach(function (i) {
//       $("#inquiry [data-type="+i+"]").addClass("mark"); //標記圖案
//     });

//     $("#inquiry .block").click(function () {  
//       $(this).removeClass("mark");

//       lists = [];
//       renewlocalStorage();                              //每次點擊，更新locaol storage紀錄
//       localStorage.setItem("lists", JSON.stringify(lists));
//       console.log(lists);
//       checkTypelist();  
//     });
//   }

  
//   if ($('.submenu.slick').hasClass("slick-initialized")) {
    
//     $(window).on('resize', function() {
//       $('.submenu.slick').slick('resize');
//     });
//   }


}); // document ready End


// /* ==========================================================================
//           *animation scroll trigger
// ==========================================================================*/


// var $animation_elements = $(".animate");

var $window = $(window);

// function check_if_in_view() {
//   var window_height = $window.height();
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = window_top_position + window_height;


//   function addView() {
//     var $element = $(this);
//     var element_height = $element.outerHeight();
//     var element_top_position = $element.offset().top;
//     var element_bottom_position = element_top_position + element_height;

//     if (
//       element_bottom_position >= window_top_position &&
//       element_top_position <= (window_bottom_position - (window_height / 6))  //讓主體物件在viewport中央位置，再起始動畫
//     ) {
//       $element.addClass("in-view");
//     }
//     if ($element.hasClass("bottom")) {
//       if (element_top_position <= (window_bottom_position)) { $element.addClass("in-view"); }
//     }
//   }

//   $.each($animation_elements, addView);
//   $("main").each(addView);
// }

$window.on("load", function() {
  // $window.on("scroll resize", check_if_in_view);
  $window.trigger("scroll");
});

/* ==========================================================================
          * slick
==========================================================================*/


$('.slick.landing').slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 1200,

  fade: true,
});
$('.slick.basic').slick({
  arrows: true,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
});

  
// $(".slider").slick({
//   arrows: true,
//   dots: true,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 1200,
//   fade: true,
//   responsive: [
//     {
//       breakpoint: 540,
//       settings: {
//         dots: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false
//       }
//     }
//   ]
// });

// $(".slider-application").slick({
//   arrows: false,
//   dots: true,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 1200,
//   fade: true,
// });

// $(".slicker-4").slick({
//   arrows: true,
//   dots: false,
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   autoplay: true,
//   speed: 1200,

//   responsive: [
//     {
//       breakpoint: 991,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       }
//     },
//     {
//       breakpoint: 400,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       }
//     }
//   ]
// });

// $(".slicker-3").slick({
//   arrows: true,
//   dots: false,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   autoplay: true,
//   speed: 1200,

//   responsive: [
//     {
//       breakpoint: 781,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       }
//     },
//     {
//       breakpoint: 481,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       }
//     }
//   ]
// });



// $( document ).ready(function() {

//   var elem = document.querySelectorAll("#location .slicker-3 .block");
//   var heightArray = [];
  
//   for(var i = 0; i < elem.length; i++){
//     heightArray.push(elem[i].clientHeight);
//   }
//   //   for(i = 0; i < elem.length; i++){
//   //     elem[i].style.height = Math.min(...heightArray)+"px";
//   //   }
//   $("#location .slicker-3 .block").css("height", Math.max(...heightArray));
// });


// /*==  19 detail =========================== */

// var tiSlick = $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   autoplay: true,
//   fade: true,
//   asNavFor: '.slider-nav',
//   responsive: [
//     {
//       breakpoint: 991,
//       settings: {
//         autoplay: false,
//       }
//     }
//   ]
// });

// $(".slider-nav").slick({
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   asNavFor: ".slider-for",
//   dots: false,
//   arrows: false,
//   focusOnSelect: true,
  

// });

// $( document ).ready(function() {

//   var nav = $('.slider-nav .slick-slide');

//   nav.removeClass('slick-active');
//   nav.eq(0).addClass('slick-active');
//   $('.slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//     var mySlideNumber = nextSlide;
//     nav.removeClass('slick-active');
//     nav.eq(mySlideNumber).addClass('slick-active');
//   });
  
//   $('.slider-wrap .nav-wrap .slick-prev').on('click', function(){
//     $(".slider-for").slick('slickPrev');
//   });
//   $('.slider-wrap .nav-wrap .slick-next').on('click', function(){
//     $(".slider-for").slick('slickNext');
//   });

//   // setTimeout(function () {
//   //   $('.slider-for').slick('slickGoTo', 1);
//   // },1000);

// });
