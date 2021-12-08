//перемещение меню для мобильной адаптации
document.addEventListener('DOMContentLoaded', function() {
    var menu = document.body.getElementsByClassName('header__column-menu');
    var w = $(window).outerWidth();
    if (w < 780) {
        $('header').append($(menu));
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
        elem.show();

    } else {
        elem.removeClass('active');
        $(this).removeClass('active');
        elem.hide();
    }
});

//адаптация фильтров
$(document).ready(function() {
    var filterOn = $('.top-filters__row-setting')
    var upRow = $('.top-filters__row-action-list--btn')
    var buttons = $('.top-filters__row-action-btn')

    var w = $(window).outerWidth();

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
var btnSet = $('.sidebar-filters__setting')
var btnSave = $('.none')
var list = $('.sidebar-filters__list')
var label = list.find('label')
var input = list.find('input')
var checkbox = $('.sidebar-filters__setting').find('.checkbox__label')

btnSet.click(function(e) {
    btnSet.css('display', 'none')
    btnSave.css('display', 'block')
    list.addClass('setting')

    for (let i = 0; i < label.length; i++) { 
        if(!label[i].classList.contains('no-edit')) {
            label[i].classList.add('edit')
        } else {
            label[i].classList.add('no-before')
        }
        if(label[i].classList.contains('delete')){            
            label[i].classList.add('del-active')
        }
    }    
    label.find('strong').css('display', 'none')
    input.prop('checked', false)
});
btnSave.click(function(e) {
    btnSet.css('display', 'block')
    btnSave.css('display', 'none')
    list.removeClass('setting')     
    label.removeClass('edit')
    label.removeClass('no-before')
    label.removeClass('del-active')
    label.find('strong').css('display', 'inline-block')
});
//Отключение действий input по умолчанию
$('.checkbox__input').click(function (event) {
    if($(this).parent().parent().hasClass('setting')){
        event.preventDefault()
    }
})

//Hover при настройке фильтров слева

        $('.sidebar-filters__list-items').hover(function () {
            if ($(this).parent().hasClass('setting')) {
                if (!$(this).hasClass('hover')) {
                    $(this).prepend('<img src="/img/sidebar/icons/drag.svg">')
                    $(this).addClass('hover')                    
                } else {
                    $(this).find('img').detach()
                    $(this).removeClass('hover')
                } 
            }               
        })
    

//Поворот стрелки select'а
$('.select').click(function() {
    if (!$(this).hasClass('revert')) {
        $(this).addClass('revert').focus();
    } else {
        $(this).removeClass('revert')
    }
});

//Изменение текста в кнопке
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

//Адаптация на странице профиля
$(document).ready(function () {
    const w = $(window).outerWidth();
    const elemX = $('.profile__img');
    const elemXParent = $('.profile__img').parent().next();
    const input = elemXParent.children().eq(0);
    const linkLoad = elemXParent.children().eq(4);
    if (w < 480) {
        elemX.after(linkLoad)
        elemX.before(input)
    }
})
$(document).ready(function () {
    const w = $(window).outerWidth();
    if (w < 1100) {
        
        $('.header-menu__icon-none').css('display', 'none')
    }
    
})
//Появление блока в форме вакансии
$('.form-btn').click(function () {
    $('.form-hidden').css('display', 'block')
    $(this).next().css('display', 'inline-block')
})
//Адаптация карты Яндекс
setTimeout(() => {     
    const w = $(window).outerWidth();    
    if (w < 480) {               
        $('.ymaps-2-1-79-map').eq(0).css('height', '132px') 
        $('ymaps').eq(0).css('height', '132px')       
    }   
}, 1000);
//Появление контактов
$('.page-vacancies__btn').click(function () {
    $('.page-vacancies__contacts').css('display', 'block')
    $(this).css('display', 'none')
})