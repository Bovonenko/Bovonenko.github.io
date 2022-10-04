'use strict';

$(document).ready(function() { 
    
    var $uiAccordion = $('.js-ui-accordion');

    $uiAccordion.accordion({
    collapsible: true,
    heightStyle: 'content',

    activate: function activate(event, ui) {
        var newHeaderId = ui.newHeader.attr('id');

        if (newHeaderId) {
        history.pushState(null, null, '#' + newHeaderId);
        }
    },

    create: function create(event, ui) {
        var $this = $(event.target);
        var $activeAccordion = $(window.location.hash);

        if ($this.find($activeAccordion).length) {
        $this.accordion('option', 'active', $this.find($this.accordion('option', 'header')).index($activeAccordion));
        }
    }
    });

    $(window).on('hashchange', function (event) {
    var $activeAccordion = $(window.location.hash);
    var $parentAccordion = $activeAccordion.parents('.js-ui-accordion');

    if ($activeAccordion.length) {
        $parentAccordion.accordion('option', 'active', $parentAccordion.find($uiAccordion.accordion('option', 'header')).index($activeAccordion));
    }
    });
	$(function(){
        $('a[href^="#"]').on('click', function(event) {
            event.preventDefault();
            var sc = $(this).attr("href"),
            dn = $(sc).offset().top;  
            $('html, body').animate({scrollTop: dn}, 1000);
        });
    });
    
    $("#navToggle").click(function() {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        $("body").toggleClass("locked");
    });
    $('.overlay').click(function() {
        $(this).removeClass('open');
        $('.navBurger').removeClass('active');
    });
	
    $('.sl').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: '<button class="slider-button"><img src="img/Block10/arrowleft.png" alt="Стрелка"></button>', 
        nextArrow: '<button class="slider-button-right"><img src="img/Block10/arrowright.png" alt="Стрелка"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
        ]
    });
	
    $('.sl2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider-button2"><img src="img/Block10/arrowleft.png" alt="Стрелка"></button>', 
        nextArrow: '<button class="slider-button2-right"><img src="img/Block10/arrowright.png" alt="Стрелка"></button>'
    });

    $('.sl3').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider-button3"><img src="img/Modal/leftarrowmodal.png" alt="Стрелка"></button>', 
        nextArrow: '<button class="slider-button3-right"><img src="img/Modal/rightarrowmodal.png" alt="Стрелка"></button>'
    });

    $('.sl4').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider-button4"><img src="img/Block8/arrowleft.png" alt="Стрелка"></button>', 
        nextArrow: '<button class="slider-button4-right"><img src="img/Block8/arrowright.png" alt="Стрелка"></button>'
    });

    $('.sl5').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider-button5"><img src="img/Block8/arrowleft.png" alt="Стрелка"></button>', 
        nextArrow: '<button class="slider-button5-right"><img src="img/Block8/arrowright.png" alt="Стрелка"></button>'
    });   

    $('form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            alert("Сообщение успешно отправлено");
            $("form").trigger("reset");
        });
        return false;
    });
}); 