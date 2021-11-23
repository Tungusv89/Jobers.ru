//перемещение меню для мобильной адаптации
document.addEventListener('DOMContentLoaded', function() {
    var menu = document.body.getElementsByClassName('header__column-menu');
    var w = $(window).outerWidth();
    if (w < 780) {
        $('header').append($(menu));
        // document.getElementsByTagName('header').insertAdjacentHTML('afterend', menu);

    }
}, false);


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
//адаптация 
document.addEventListener('DOMContentLoaded', function() {
    var filterOn = document.body.querySelector('.top-filters__row-setting')
    var upRow = document.body.querySelector('.top-filters__row-action-list--btn')
    var buttons = document.body.querySelector('.top-filters__row-action-btn')

    var w = $(window).outerWidth();
    //фильтров
    if (w < 1020) {
        upRow.append(filterOn)
        upRow.after(buttons)
    }
}, false);
//адаптация полей зарплаты
$(document).ready(function() {
    // var groupFields = document.body.querySelector('.list-mobile')
    var elemInput = $('.list-mobile').find('input')
    var w = $(window).outerWidth();
    var attr = 4;

    if (w < 425) {
        elemInput.attr('size', '1')
    }
});

// настройка / сохранение воронки
var btnSet = document.body.querySelector('.sidebar-filters__setting')
var btnSave = document.body.querySelector('.none')
var list = document.body.querySelector('.sidebar-filters__list')
btnSet.addEventListener('click', function(e) {
    btnSet.style.display = 'none'
    btnSave.style.display = 'block'
    list.classList.add('setting')
});
btnSave.addEventListener('click', function(e) {
    btnSave.style.display = 'none'
    btnSet.style.display = 'block'
    list.classList.remove('setting')
});

$('.select').click(function() {
    if (!$(this).hasClass('revert')) {
        $(this).addClass('revert').focus();
    } else {
        $(this).removeClass('revert')
    }
});
$(document).ready(function() {
    var w = $(window).outerWidth();
    const btn = $('.top-filters__row-action-btn').find('a').eq(2)
    if (w < 350) {

        btn.html('В папку')
    }

})

//Показать, скрыть фильтры
$('.top-filters__row-setting').click(function() {
    if ($('.advansed-filters').hasClass('active')) {
        $('.advansed-filters').hide()
        $('.advansed-filters').removeClass('active')
        $('.top-filters__row--second').find('.top-filters__row-setting-title').html('Показать фильтры')
        $('.btn__group').find('.top-filters__row-setting-title').html('Показать фильтры')
            // $(this).
    } else if (!$('.advansed-filters').hasClass('active')) {

        $('.advansed-filters').show()
        $('.advansed-filters').addClass('active')
        $('.top-filters__row--second').find('.top-filters__row-setting-title').html('Скрыть фильтры')
        $('.btn__group').find('.top-filters__row-setting-title').html('Скрыть фильтры')
    }

})

//Кнопки по чекбоксу
$('.vacancy-header__id--response').click(function() {

    const i = $('.main').find('.checkbox__input__vacancy--response')
    console.log(i)
    if (i.is(':checked')) {
        $('.top-filters__row-action-btn').css('display', 'flex')
    } else {
        $('.top-filters__row-action-btn').css('display', 'none')
    }
})