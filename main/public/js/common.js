$(document).ready(function () {

    'user strict';

    // Header Sticky

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $(".topbar").addClass("sticky-scroll");
        } else {
            $(".topbar").removeClass("sticky-scroll");
        }

        if (scroll >= 1000) {
            $(".topbar2").addClass("sticky");
            $(".topbar2").addClass("sticky-scroll");
        } else {
            $(".topbar2").removeClass("sticky");
            $(".topbar2").removeClass("sticky-scroll");
        }

        if (scroll >= 450) {
            $(".topbar3").addClass("sticky");
            $(".topbar3").addClass("sticky-scroll");
        } else {
            $(".topbar3").removeClass("sticky");
            $(".topbar3").removeClass("sticky-scroll");
        }

    });

    // Menu

    $('.nav-toggle').on('click', function () {
        if ($('.menu').hasClass('menu-active')) {
            $('.menu').removeClass('menu-active');
            $('.nav-toggle').removeClass('nav-active');
            $('.menu').slideUp();
        } else {
            $('.menu').addClass('menu-active');
            $('.nav-toggle').addClass('nav-active');
            $('.menu').slideDown();
        }

    });

    $('.nav-toggle2').on('click', function () {

        if ($('.menu').hasClass('menu-show')) {

            $('.menu').removeClass("menu-show");

        } else {
            $('.menu').addClass("menu-show");

        }
        if ($('.nav-toggle2').hasClass('nav-active')) {

            $('.nav-toggle2').removeClass("nav-active");

        } else {
            $('.nav-toggle2').addClass('nav-active');
        }
    });


    $(function () {

        glio.init(
            ['top', function () {

                $.magnificPopup.open({
                                         items: {
                                             src: 'img/banner/banner18.jpg'
                                         },
                                         type: 'image'
                                     });

            }
            ],
            ['top-left', function () {

                $.magnificPopup.open({
                                         items: {
                                             src: 'img/banner/banner18.jpg'
                                         },
                                         type: 'image'
                                     });
            }
            ],
            ['top-right', function () {

                $.magnificPopup.open({
                                         items: {
                                             src: 'img/banner/banner18.jpg'
                                         },
                                         type: 'image'
                                     });

            }
            ]
        );
    });

    // Button Effect

    var ink, d, x, y;
    $(".btn-effect-1").on('click', function (e) {
        if ($(this).find(".ink").length === 0) {
            $(this).prepend("<span class='ink'></span>");
        }

        ink = $(this).find(".ink");
        ink.removeClass("animate");

        if (!ink.height() && !ink.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({height: d, width: d});
        }

        x = e.pageX - $(this).offset().left - ink.width() / 2;
        y = e.pageY - $(this).offset().top - ink.height() / 2;

        ink.css({top: y + 'px', left: x + 'px'}).addClass("animate");
    });

    // #Anchor Handle

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
                                           'scrollTop': $target.offset().top
                                       }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


});