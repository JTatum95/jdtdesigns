// $('.grid').masonry({
//     // set itemSelector so .grid-sizer is not used in layout
//     itemSelector: '.grid-item',
//     // use element for option
//     columnWidth: '.grid-sizer',
//     percentPosition: true
// })

// init Masonry
var $grid = $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true

});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry();
});
