$(document).ready(function () {git

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
});