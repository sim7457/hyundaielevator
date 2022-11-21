$('.mainSlide').on('init reInit afterChange', function (e, s, c) {
    console.log(e, s, c);
    var current = $('.slick-current');
    current.addClass('on').siblings().removeClass('on');
    $('.num span').text('0' + ((c ? c : 0) + 1));
    $('.mainVisual .right li').eq(c).addClass('on')
        .siblings().removeClass('on');
    //c가 없으면 c고, c가 없으면 0
    //if(c) {c}else{0} c? c : 0
})

$('.mainSlide').slick({
    //arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
});

$('.test button').on('click', function () {
    $('.test h2'.toggleClass('on'))
})

$('.mainVisual .right li').on('click', function () {
    var idx = $(this).index();
    $('.mainSlide').slick('slickGoTo', idx)
})

$('.buildSlide').on('init reInit afterChange', function (e, s, c) {
    $('.build .port').eq(c).addClass('on').siblings().removeClass('on');
    $('.build .num span').text('0' + (c ? c + 1 : 1));
    $('.build .num strong').text('0' + s.slideCount);
})

$('.buildSlide').slick({
    arrows: false,
    canterMode: true,
    centerPadding: '300px',
    dots: true,
});

$('.build .arrows .left').on('click', function () {
    $('.buildSlide').slick('slickPrev')
});
$('.build .arrows .right').on('click', function () {
    $('.buildSlide').slick('slickNext')
});
$("#AD").YTPlayer({
    videoURL: 'https://youtu.be/raw3Nu0_mBQ',
    containment: '.movieWrap',
    //autoPlay: true,
    mute: true,
    playOnlyIfVisible: true,
});

//$('.movie .pause').on('click', function () {
//    $('#AD').YTPPause();
//});

//$('.movie .play').on('click', function () {
//    $('#AD').YTPPlay();
//});

var cntMovie = true;
$('.movie .play').on('click', function () {
    $(this).toggleClass('on');
    $('#AD').YTPPause();
    if (cntMovie) {
        $('#AD').YTPPause();
    } else {
        $('#AD').YTPPlay();
    }
    cntMovie = !cntMovie;
})