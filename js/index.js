(function ($) {
    $(function () {

        $('ul.services').on('click', 'li:not(.activeService)', function () {
            $(this)
                .addClass('activeService').siblings().removeClass('activeService')
                .closest('ul.services').find('div.hide').removeClass('activeService').eq($(this).index()).addClass('activeService');
        });

    });
})(jQuery);


// ---------section_5---------
//hover categories


let header = document.getElementById("myDIV");
let btns = header.getElementsByClassName("categories-style");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("categories-active");
        current[0].className = current[0].className.replace(" categories-active", "");
        this.className += " categories-active";
    });
}

let fActive = '';

function filterColor(color) {
    if (fActive != color) {
        $('.sort').filter('.' + color).show("slow");
        $('.sort').filter(':not(.' + color + ')').hide("slow");
        fActive = color;
    }
}

$('.filter-graphic').click(function () {
    filterColor('graphic');
});
$('.filter-web').click(function () {
    filterColor('web');
});
$('.filter-landing').click(function () {
    filterColor('landing');
});
$('.filter-wordpress').click(function () {
    filterColor('wordpress');
});

$('.filter-all').click(function () {
    $('.sort').show("slow");
    fActive = 'all';
});

$(".images-section div").slice(12, 24).css("display", "none")
$(".images-section div").slice(24, 36).css("display", "none")
$(".filter-all").click(function () {
    $(".images-section div").slice(0, 12).css("display", "flex")
})

$(".load-more").click(function () {
    $(".images-section").css("height", "1200px")
    $(".images-section div").slice(12, 24).css("display", "flex")
    $(".images-section").css("flex-wrap", "wrap")
    $(".load-more").click(function () {
        $(".images-section").show("fast").css("height", "1800px")
        $(".images-section div").slice(24, 36).css("display", "none").show("fast").css("display", "flex")
        $(".load-more").css("display", "none")
    })
})

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav'
});


$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: "<span class='slick-prev'><i class='fas fa-angle-left'></i></span>",
    nextArrow: "<span class='slick-next'><i class='fas fa-angle-right'></i></span>"
});


// $('a[data-slide]').click(function(e) {
//     e.preventDefault();
//     var slideno = $(this).data('slide');
//     $('.slider-nav').slick('slickGoTo', slideno - 1);
// });

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 386
});

