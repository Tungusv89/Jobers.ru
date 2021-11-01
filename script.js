//Adaptive function
// $(window).resize(function(event) {
//     adaptive_function();
// });

// function adaptive_header(w, h) {
//     var headerMenu = $('.header-menu');
//     var headerLang = $('.header-top-lang');
//     if (w < 767) {
//         if (!headerLang.hasClass('done')) {
//             headerLang.addClass('done').appendTo(headerMenu);
//         }
//     } else {
//         if (headerLang.hasClass('done')) {
//             headerLang.removeClass('done').prependTo('.header-top');
//         }
//     }

//     if (w < 767) {
//         if (!$('.header-bottom-menu').hasClass('done')) {
//             $('.header-bottom-menu').addClass('done').appendTo(headerMenu);
//         }
//     } else {
//         $.each($('.header-bottom-menu'), function(index, val) {
//             if ($(this).hasClass('header-bottom-menu--right')) {
//                 if ($(this).hasClass('done')) {
//                     $(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
//                 }
//             } else {
//                 if ($(this).hasClass('done')) {
//                     $(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
//                 }
//             }
//         })
//     }
// }

// function adaptive_function() {
//     var w = $(window).outerWidth();
//     var h = $(window).outerHeight();
//     adaptive_header(w, h);
// }
// adaptive_function();

//header_menu

// $('.header-menu__icon').click(function(event) {
//     $(this).toggleClass('active');
//     $('.header-menu').toggleClass('active');
//     if ($(this).hasClass('active')) {
//         $('body').data('scroll', $(window).scrollTop());
//     }
//     $('body').toggleClass('lock');
//     if (!$(this).hasClass('active')) {
//         $('body,html').scrollTop(parseInt($('body').data('scroll')))
//     }
// });

//ibg

function ibg() {
    $.each($('.ibg'), function(index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}
// ibg();

//Клик вне области
$(document).on('click touchstart', function(e) {
    if (!$(e.target).is(".select *")) {
        $('.select').removeClass('active');
    }
});
//перемещение меню для мобильной адаптации
$(document).ready(function() {
    var menu = $('.header-body').find('.header__column').eq(1);
    var w = $(window).outerWidth();
    if (w < 769) {
        $('header').append($(menu));
    }
});

//выбор активного элемента в сайтбаре слева
if ($('.sidebar-filters__list-items').hasClass('.sidebar-filters__list-items--active')) {
    console.log("нашел");
    $('.sidebar-filters__list-items').on('click', function() {
        $(this).find('.circle').children().attr('src', '/img/sidebar/icons/checkcircle.svg');
        $(this).find('.square').children().attr('src', '/img/sidebar/icons/checksquare.svg');
        $(this).removeClass('sidebar-filters__list-items--active');
        $(this).find('.circle').next().removeClass('active');
        $(this).find('.square').next().removeClass('active');
    });
} else {
    console.log("ненашел");
    $('.sidebar-filters__list-items').on('click', function() {
        $(this).find('.circle').children().attr('src', '/img/sidebar/icons/checkedcircle.svg');
        $(this).find('.square').children().attr('src', '/img/sidebar/icons/checkedsquare.svg');
        $(this).addClass('sidebar-filters__list-items--active');
        $(this).find('.circle').next().addClass('active');
        $(this).find('.square').next().addClass('active');
    });
}
$(document).ready(function() {
    var w = $(window).outerWidth();
    if (w < 930) {
        $('.header__column-logo').children().attr('src', '/img/logo-black.svg');
    }

});