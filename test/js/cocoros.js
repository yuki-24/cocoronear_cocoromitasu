$(function(){
  var randomContent = [];
  $('.rdlst li').each(function() {
    randomContent.push($(this).html());
  });

  randomContent.sort(function() {
    return Math.random() - Math.random();
  });

  $('.rdlst li').empty();
  i = 0;
  $('.rdlst li').each(function() {
    $(this).append(randomContent[i]);
    i++;
  });
});
//random
$(function(){
  var randomContent = [];
  $('.rdlst2 li').each(function() {
    randomContent.push($(this).html());
  });

  randomContent.sort(function() {
    return Math.random() - Math.random();
  });

  $('.rdlst2 li').empty();
  i = 0;
  $('.rdlst2 li').each(function() {
    $(this).append(randomContent[i]);
    i++;
  });
});
//random
$(function(){
  var randomContent = [];
  $('.rdlst3 li').each(function() {
    randomContent.push($(this).html());
  });

  randomContent.sort(function() {
    return Math.random() - Math.random();
  });

  $('.rdlst3 li').empty();
  i = 0;
  $('.rdlst3 li').each(function() {
    $(this).append(randomContent[i]);
    i++;
  });
});
//random
$(function(){
  var randomContent = [];
  $('.rdlst4 li').each(function() {
    randomContent.push($(this).html());
  });

  randomContent.sort(function() {
    return Math.random() - Math.random();
  });

  $('.rdlst4 li').empty();
  i = 0;
  $('.rdlst4 li').each(function() {
    $(this).append(randomContent[i]);
    i++;
  });
});
//random
$(function() {
    $(".tgl_in1").css("display","none");
    $(".tgl1").on("click", function() {
        $(".tgl_in1").slideToggle("slow");
    });
});
$(function() {
    $(".tgl_in2").css("display","none");
    $(".tgl2").on("click", function() {
        $(".tgl_in2").slideToggle("slow");
    });
});
$(function() {
    $(".tgl_in3").css("display","none");
    $(".tgl3").on("click", function() {
        $(".tgl_in3").slideToggle("slow");
    });
});
$(function() {
    $(".tgl_in4").css("display","none");
    $(".tgl4").on("click", function() {
        $(".tgl_in4").slideToggle("slow");
    });
});
//toggle
$(function(){
	$('.idx_gr_omob_r_sl').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 10,
        ticker: true,
        speed: 100000,
        slideWidth: 2000
	});
});
//slider
$(function(){
  $('.mh').matchHeight();
});
$(function(){
  $('.mh2').matchHeight();
});
$(function(){
  $('.mh3').matchHeight();
});
$(function(){
  $('.idx_omo li').matchHeight();
});
$(function(){
  $('.fa_item li').matchHeight();
});
$(function(){
  $('.om_box li').matchHeight();
});
//matchheight
$(function() {
    $(".burger_menu").css("display","none");
    $(".burger a").on("click", function() {
        $(".burger_menu").fadeToggle("slow");
    });
});
$(function(){
    $('.menu-trigger').on('click', function(){
        $(this).toggleClass('active');
    });
});
//burger_menu
$(function() {
    $(".nws_menu").css("display","none");
    $(".nws_hdmn_box1").on("click", function() {
        $(".nws_menu").slideToggle("slow");
    });
});
$(function() {
    $(".nws_menu2").css("display","none");
    $(".nws_hdmn_box2").on("click", function() {
        $(".nws_menu2").slideToggle("slow");
    });
});
//newssp
$(function(){
		$("ul.hd_mn li").hover(function(){
			$("ul.hd_mn_in:not(:animated)", this).fadeToggle("fast");
		}, function(){
			$("ul.hd_mn_in",this).fadeToggle("fast");
		});
	});

$(function(){
		$("ul.burger_menu li").hover(function(){
			$("ul.bag_more_in:not(:animated)", this).slideDown();
		}, function(){
			$("ul.bag_more_in",this).slideUp("fast");
		});
	});

//burger inside

$(function() {
    var topBtn = $('.ft_tel');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn("slow");
        } else {
            topBtn.fadeOut();
        }
    });
});
//pan
function init() {
var px_change  = 100;
window.addEventListener('scroll', function(e){
if ( $(window).scrollTop() > px_change ) {
$("header").addClass("smaller");
} else if ( $("header").hasClass("smaller") ) {
$("header").removeClass("smaller");
}
});
}
window.onload = init();
// header_smaller
$(function(){
  $('a[href^=#]').click(function(){
    var speed = 1300;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
//smoothscroll
$(function(){
  $(".lib_tgl dt").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("active");//追加部分
  });
});
//toggle系のアコーディオン
$(function domReady() {
  $('.rsv_wrap').focused();
});
//予約セレクタ