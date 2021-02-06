$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    });

    var $grid = $('.grid').isotope({
        filter: '*',
        // main isotope options
        itemSelector: '.grid-item',
        // set layoutMode
        layoutMode: 'masonry',
        percentPosition: true,
        // options for masonry layout mode
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });

    $('.shuffle').on( 'click', function() {
        $grid.isotope('shuffle');
    });

// layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
        $(this).addClass('active').siblings().removeClass('active');
    });


    $('.art-grid').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: false,
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.img.attr('alt') || '';
            }
        }
    });

    // Single image popup boxes for filtering
    // $('.art-grid').magnificPopup({
    //     type: 'image',
    //     delegate: 'img-mfp'
    //     closeOnContentClick: true,
    //     closeBtnInside: false,
    //     fixedContentPos: true,
    //     mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    //     image: {
    //         verticalFit: true
    //     },
    //     gallery: {
    //         enabled: false
    //     }
    //     zoom: {
    //         enabled: true,
    //         duration: 300 // don't forget to change the duration also in CSS
    //     }
    // });
});