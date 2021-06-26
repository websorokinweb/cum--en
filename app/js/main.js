'use strict';

$(function () {

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle(300)
    });

    $('.team__more--768').on('click', function(){
        $('.team__items').toggleClass('team__items--more')
        if ($('.team__items').hasClass('team__items--more')){
            $(this).text('Скрыть')
        } else{
            $(this).text('Показать еще')
        }
    });

    var responsiveOptions = [
        ['screen and (max-width: 425px)', {
            width: 163,
            height: 161,
            donutWidth: 25,
        }]
    ];

    new Chartist.Pie('.distribution__chart', data, options, responsiveOptions);

    $('.team__items').slick({
        slidesToShow: 4,
        prevArrow: '<svg class="slick-arrow slick-prev" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" xml:space="preserve"><g><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8 c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712 L143.492,221.863z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
        nextArrow: '<svg class="slick-arrow slick-next" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" xml:space="preserve"><g><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8 c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712 L143.492,221.863z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
        responsive: [
            {
              breakpoint: 1160,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 870,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: 'unslick',
            },
        ]
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });
    
    $('.questions__accordion-head').on('click', function(){
        $(this).parent().siblings().removeClass('questions__accordion--active');
        $(this).parent().toggleClass('questions__accordion--active');
    });
    
});