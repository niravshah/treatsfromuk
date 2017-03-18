$(document).ready(function () {

    $(function () {
        starttestimonial2();
    });


    function starttestimonial2() {
        $('.testimonial-slider2').slick({
                                            slidesToShow: 4,
                                            slidesToScroll: 1,
                                            dots: true,
                                            arrows: false,
                                            focusOnSelect: false,
                                            autoplay: true,
                                            autoplaySpeed: 1000,
                                            responsive: [
                                                {
                                                    breakpoint: 980,
                                                    settings: {
                                                        slidesToShow: 1,
                                                        slidesToScroll: 1
                                                    }
                                                }
                                            ]

                                        });
    }
});
