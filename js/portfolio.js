$(document).ready(function () {
    // $all = $('.grid-item:not(.web):visible');
    // $design = $('.grid-item .design');
    // $photo = $('.grid-item .photo');
    // $type = $('.grid-item .type');
    // var grids = [$all, $design, $photo, $type];

    // $.each(grids, function(i, val) {

    $('.grid-item:not(.web)').magnificPopup({
        delegate: 'a', // Default for all items
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.img.attr('alt') || '';
            }
        }
    });
    // });


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
        $mp = $.magnificPopup.instance;
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
        $(this).addClass('active').siblings().removeClass('active');
        console.log("Before " + $mp.items);
        $mp.items = $.find(filterValue);
        console.log("After " + $mp.items);

        $mp.updateItemHTML();

        // $.each(grids, function(i, val){
        //     if(i == filterValue.substr(1))
        //         val.show();
        //     else
        //         val.hide();
        // });


        // $popup.magnificPopup({
        //     delegate: "" + $('a').parent()
        // });
        // if(filterValue == "*"){
        // make headings visible
        // }
        // this.backgroundColor = "#6c757d";
    });
});