// //Adaptive

// //function
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

// //header_menu

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




//перемещение меню для мобильной адаптации
$(document).ready(function() {
    var menu = $('.header-body').find('.header__column-menu');
    var w = $(window).outerWidth();
    if (w < 780) {
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
// //Вызов фильтров в мобильном меню
// $('.header-menu__icon').on('click', function() {
//     if ($(this).find('.active')) {

//         $(this).toggleClass('active');
//         $('.sidebar-filters').css('display', 'block');
//     } else {
//         console.log($(this).find('.active'));
//         $(this).removeClass('active');
//         $('.sidebar-filters').css('display', 'none');
//     }
// });

// $(document).mouseup(function(e) { // событие клика по веб-документу
//     var div = $('.sidebar-filters'); // тут указываем ID элемента
//     if (!div.is(e.target) // если клик был не по нашему блоку
//         &&
//         div.has(e.target).length === 0) { // и не по его дочерним элементам
//         div.hide(); // скрываем его
//         $('.header-menu__icon').removeClass('active');
//     }
// });

// //вызов модального окна "Еще"
// $('.header-bottom-menu__list').find('li').eq(3).on('click', function() {
//     // $(this).toggleClass('active');
//     $('.more').css('display', 'block');
//     // $('.sidebar-filters').toggleClass('active');
// });

// $(document).mouseup(function(e) { // событие клика по веб-документу
//     var div = $('.more'); // тут указываем ID элемента
//     if (!div.is(e.target) // если клик был не по нашему блоку
//         &&
//         div.has(e.target).length === 0) { // и не по его дочерним элементам
//         div.hide(); // скрываем его
//     }
// });
//Вызов окна в вакансиях в мобильной версии
$('.vacancy-btn__more').click(function() {
    var elem = $(this).parent().parent().next();
    if (!elem.hasClass('active')) {

        elem.addClass('active');
        // $(this).addClass('active');
        elem.show(2000);
    } else {

        elem.removeClass('active');
        // $(this).removeClass('active');
        elem.hide(2000);
    }
});