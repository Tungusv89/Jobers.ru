//перемещение меню для мобильной адаптации
document.addEventListener('DOMContentLoaded', function() {
    var menu = document.body.getElementsByClassName('header__column-menu');
    var w = $(window).outerWidth();
    if (w < 780) {
        $('header').append($(menu));
        // document.getElementsByTagName('header').insertAdjacentHTML('afterend', menu);

    }
}, false);

//выбор активного элемента в сайтбаре слева
$('.sidebar-filters__list-items').click(function() {
    if (!$(this).hasClass('sidebar-filters__list-items--active')) {
        console.log("ненашел");
        $(this).find('.circle').children().attr('src', '/img/sidebar/icons/checkedcircle.svg');
        $(this).find('.square').children().attr('src', '/img/sidebar/icons/checkedsquare.svg');
        $(this).addClass('sidebar-filters__list-items--active');
        $(this).find('.circle').next().addClass('active');
        $(this).find('.square').next().addClass('active');
    } else {
        console.log("нашел");
        $(this).find('.circle').next().removeClass('active');
        $(this).find('.square').next().removeClass('active');
        $(this).find('.circle').children().attr('src', '/img/sidebar/icons/checkcircle.svg');
        $(this).find('.square').children().attr('src', '/img/sidebar/icons/checksquare.svg');
        $(this).removeClass('sidebar-filters__list-items--active');

    }
});
//Вызов фильтров в мобильном меню
const mobilMenu = document.querySelector('.header-menu__icon')
const sidebar = document.querySelector('.sidebar-filters')
document.addEventListener('click', burger)

function burger(event) {
    if (event.target.closest('.header-menu__icon')) {
        if (!mobilMenu.classList.contains('active')) {
            mobilMenu.classList.add('active')
            sidebar.style.display = "block"
        } else {
            mobilMenu.classList.remove('active');
            sidebar.style.display = "none"
        }
    }
    if (!event.target.closest('.header-menu__icon') && !event.target.closest('.sidebar-filters')) {
        console.log('click');
        if (mobilMenu.classList.contains('active')) {
            mobilMenu.classList.remove('active');
            sidebar.style.display = "none"
        }
    }
}


//вызов модального окна "Еще"
$('.header-bottom-menu__list').find('li').eq(3).on('click', function() {
    if (!$('.more').hasClass('active')) {
        $('.more').addClass('active');
        $('.more').css('display', 'block');
    } else {
        $('.more').removeClass('active');
        $('.more').css('display', 'none');
    }
});
//вызов модального окна "Профиль"
$('.header__column-login').on('click', function() {
    if (!$('.profile').hasClass('active')) {
        $('.profile').addClass('active');
        $('.profile').css('display', 'block');
    } else {
        $('.profile').removeClass('active');
        $('.profile').css('display', 'none');
    }
});

//вызов модального окна "Поддержка"
$('.support').parent().on('click', function() {
    console.log($('.support').parent());
    if (!$('.support').hasClass('active')) {
        $('.support').addClass('active');
        $('.support').css('display', 'block');
    } else {
        $('.support').removeClass('active');
        $('.support').css('display', 'none');
    }
});

$('.vacancy-btn__more').click(function() {
    var elem = $(this).parent().parent().next();
    if (!elem.hasClass('active')) {
        elem.addClass('active');
        $(this).addClass('active');
        elem.show(2000);

    } else {
        elem.removeClass('active');
        $(this).removeClass('active');
        elem.hide(2000);
    }
});