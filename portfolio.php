<?php?>
<html>
<head>
    <link href="css/portfolio.css" rel="stylesheet">
</head>

<div class="grid">
    <div class="grid-sizer"></div>
<?php
$dirname = "img/portfolio/fullsize/photo/";
$images = scandir($dirname);
shuffle($images);
$ignore = Array(".", "..",);
foreach($images as $current){
    if(!in_array($current, $ignore)) {
        echo "<div class='grid-item'><img src='".$dirname.$current."' alt='' /></div>\n";
    }
}
?>
</div>


<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/masonry.pkgd.min.js"></script>
<script src="vendor/imagesloaded.pkgd.min.js"></script>
<!--<script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>-->
<script src="js/portfolio.js" type="application/javascript"></script>

</html>
