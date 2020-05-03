/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";
    // inialize animate WOW Js
    new WOW().init();

    function closeModal() {
        $('.news-details').removeClass('show-it');
    }

    $('.news-link').on('click', function(e) {
        e.preventDefault();
        
        var title = $(this).find('h4').html();
        var images = $(this).find('.img-src');
        var imagecarousel = "";
        console.log(images);
        for(var i = 0; i < images.length; i++) {
            // images[i] = new Image();
            if(i === 0) {
                console.log(images[i])
                imagecarousel = '<div class="carousel-item active"><figure><img src="' + images[i].value + '" alt="" /></figure></div>';
            } else {
                console.log(images[i])
                imagecarousel = '<div class="carousel-item"><figure><img src="' + images[i].value + '" alt="" /></figure></div>';
            }

            $('.news-details .carousel-inner').append(imagecarousel);
        }
        /*$.map(images, function(  value, index ) {
            console.log( index + ": " + value );
            value = new Image();
            if(index === 0) {
                imagecarousel = '<div class="carousel-item active"><figure>' + value + '</figure></div>';
            } else {
                imagecarousel = '<div class="carousel-item"><figure>' + value + '</figure></div>';
            }

            $('.news-details .carousel-inner').append(imagecarousel);
            // console.log(imagecarousel);
        });*/

        var video = $(this).find('.video-src');
        console.log(video.children());
        $("#news-video").html(video.children());
        var date = $(this).find('span').html();
        var text = $(this).find('.news-text').html();

        var ifram = $(this).find('.ifram-src').val();
        $("#iframe-youtube").attr('src', ifram);
        
        // $('.news-details figure img').attr('src', image);
        $('.news-details .news-title').html(title);
        $('.dates').html(date);
        $('.stripped-text').html(text);
        
        $('.news-details').addClass('show-it');
        
        $('.closeDetails').on('click', function() {
            closeModal();
        });
    });
    
    $('[data-toggle="popover"]').popover({
        html: true,
        content: function() {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
        }
    });

    $('#OpenMenu, #innerToggle').click(function () {
        $('.side-menu').css("right", 0).css("opacity", 1);
        $('.side-overlay').fadeIn();
        $('body, html').css("overflow-y", "hidden");
        $('.side-overlay').click(function () {
            $('.side-menu').css("right", "-400px").css("opacity", 0);
            $('.side-overlay').fadeOut();
            $('body, html').css("overflow-y", "auto");
        });
    });

    $('.main-menu-btn, .menu-togle').on('click', function() {
        $('.main-menu').css('right', 0).css('opacity', 1);
        $('.menu-overlay').fadeIn();
        $('.menu-overlay').click(function () {
            $('.main-menu').css("right", "-400px").css("opacity", 0);
            $('.menu-overlay').fadeOut();
        });
    });

    $('.khutab-item').on('click', function (e) {
        e.preventDefault();
        var type = $(this).attr('data-type');


        var imgsrc = $(this).find('.author figure img').attr('src');
        $('.news-details .detial-hed figure img').attr('src', imgsrc);
        var name = $(this).find('.media-body h5').html();
        $('.news-details .detial-hed h5').html(name);
        var time = $(this).find('.media-body p').html();
        $('.news-details .detial-hed p').html(time);
        var title = $(this).find('.khutab-text h4').html();
        $('.news-title').html(title);

        if(type === 'text-thutab') {
            // alert(type);
            var detail = $(this).find('.khutab-strip').html();
            $('.stripped-text').html(detail);

            $('.khutab-text-details').addClass('show-it');
        } else {
            // alert(type);
            var video = $(this).attr('data-src');
            $('#youtube-video').attr('src', video);
            setTimeout(function () {
                $('.video-khutab').addClass('show-it');
            }, 1000);
        }

        $('.closeDetails').on('click', function() {
            closeModal();
        });
    });

    $('.task-item').on('click', function(e) {
        e.preventDefault();

        var imgsrc = $(this).find('.author figure img').attr('src');
        $('.news-details .detial-hed figure img').attr('src', imgsrc);
        var name = $(this).find('.media-body h5').html();
        $('.news-details .detial-hed h5').html(name);
        var time = $(this).find('.media-body p').html();
        $('.news-details .detial-hed p').html(time);
        var detail = $(this).find('.text-task').html();
        $('.stripped-text').html(detail);
        var status = $(this).find('.task-actions a').html();
        $('.news-details .task-actions a').html(status);
        var date = $(this).find('.task-actions span').html();
        $('.news-details .task-actions span').html(date);

        $('.news-details').addClass('show-it');

        $('.closeDetails').on('click', function() {
            closeModal();
        });
    });

    $('.tasks-hed .dropdown-menu').on('click', function (e) {
        e.stopPropagation();
    });

    if($('.date-from').length != 0 ) {
        $('.date-from').datepicker({
            rtl: true,
            autoclose: true,
            language: 'ar',
            orientation: "bottom auto"
        });
    }

    if($('.date-to').length != 0 ) {
        $('.date-to').datepicker({
            rtl: true,
            autoclose: true,
            language: 'ar',
            orientation: "bottom auto"
        });
    }

    if($('.datePick').length != 0 ) {
        $('.datePick').datepicker({
            rtl: true,
            autoclose: true,
            language: 'ar',
            orientation: "bottom auto"
        });
    }

    $('.task-item .author a').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    //material contact form
    $('.register-form').find('.form-control').each(function () {
        var targetItem = $(this).parent();
        if ($(this).val()) {
            $(targetItem).find('label').css({
                'top': '10px',
                'fontSize': '14px'
            });
        }
    });
    $('.register-form').find('.form-control').focus(function () {
        $(this).parent('.input-block').addClass('focus');
        $(this).parent().find('label').animate({
            'top': '10px',
            'fontSize': '14px'
        }, 300);
    });
    $('.register-form').find('.form-control').blur(function () {
        if ($(this).val().length == 0) {
            $(this).parent('.input-block').removeClass('focus');
            $(this).parent().find('label').animate({
                'top': '25px',
                'fontSize': '18px'
            }, 300);
        }
    });

    $('.register-form').find('select.form-control').parent('.input-block').find('label').animate({
            'top': '10px',
            'fontSize': '14px'
        }, 300);

    if($('#datepicker').length !== 0) {
        $('#datepicker').datepicker({
            rtl: true,
            autoclose: true,
            language: 'ar',
            orientation: "bottom auto",
            daysOfWeekHighlighted: [
                5
            ]
        });
        $('#datepicker').on('changeDate', function() {
            $('#my_hidden_input').val(
                $('#datepicker').datepicker('getFormattedDate')
            );

            $('.calendar-list .simplebar-content').html("");

            var objData = [
                {
                    title: 'ملتقى "منبر الأقصى للخطباء والدعاة" الأول',
                    details: 'فعاليات ملتقى "منبر الأقصى للخطباء والدعاة" الذي تنظمه لجان القد سلمين وهيئة',
                    date: '20-10-2015'
                },
                {
                    title: 'ملتقى "منبر الأقصى للخطباء ',
                    details: 'فعاليات ملتقى "منبر الأقصى للخطباء  القدس في الاتحاد العالمي لعلماء المسلمين وهيئة',
                    date: '58-10-2015'
                },
                {
                    title: 'ملتقى "منبر الأقصى للخطباء والدعاة" الأول',
                    details: 'فعاليات ملتقى "منبر الأقصى للخطباء والدعاة" الذي تنظمه لجان القد سلمين وهيئة',
                    date: '20-10-2015'
                },
                {
                    title: 'ملتقى "منبر الأقصى للخطباء ',
                    details: 'فعاليات ملتقى "منبر الأقصى للخطباء  القدس في الاتحاد العالمي لعلماء المسلمين وهيئة',
                    date: '58-10-2015'
                },
                {
                    title: 'ملتقى "منبر الأقصى للخطباء والدعاة" الأول',
                    details: 'فعاليات ملتقى "منبر الأقصى للخطباء والدعاة" الذي تنظمه لجان القد سلمين وهيئة',
                    date: '20-10-2015'
                },
                {
                    title: 'ملتقى "منبر الأقصى للخطباء ',
                    details: 'فعاليات ملتقى "منبر الأقصى للخطباء  القدس في الاتحاد العالمي لعلماء المسلمين وهيئة',
                    date: '58-10-2015'
                },
                {
                    title: 'ملتقى "منبر الأقصى للخطباء والدعاة" الأول',
                    details: 'فعاليات ملتقى "منبر الأقصى للخطباء والدعاة" الذي تنظمه لجان القد سلمين وهيئة',
                    date: '20-10-2015'
                },
                {
                    title: 'ملتقى "منبر الأقصى للخطباء ',
                    details: 'فعاليات ملتقى "منبر الأقصى للخطباء  القدس في الاتحاد العالمي لعلماء المسلمين وهيئة',
                    date: '58-10-2015'
                },
            ];
            // $('#demo').html(objData[0].title);
            for(var i = 0; i < objData.length; i++) {
                var item = '<article class="calendar-item"><h4>'+ objData[i].title +'</h4><p>'+ objData[i].details +'</p><span>'+ objData[i].date +'</span></article>';
                $('.calendar-list .simplebar-content').append(item);
            }
        });
    }

    if ($('[data-simplebar]').length !== 0) {
        new SimpleBar($('[data-simplebar]')[0]);
    }
    
    if ($('.scroll-menu').length !== 0) {
        new SimpleBar($('.scroll-menu')[0]);
    }

    $('.donate-item').on('click', function (e) {
        var title = $(this).find('h4').html();
        $('.detial-hed h4').html(title);

        var images = $(this).find('.img-src');
        var imagecarousel = "";
        console.log(images);
        for(var i = 0; i < images.length; i++) {
            // images[i] = new Image();
            if(i === 0) {
                console.log(images[i])
                imagecarousel = '<div class="carousel-item active"><figure><img src="' + images[i].value + '" alt="" /></figure></div>';
            } else {
                console.log(images[i])
                imagecarousel = '<div class="carousel-item"><figure><img src="' + images[i].value + '" alt="" /></figure></div>';
            }

            $('.news-details .carousel-inner').append(imagecarousel);
        }

        var detail = $(this).find('.donate-text').html();
        $('.news-details .strip-text').html(detail);

        $('.news-details').addClass('show-it');

        $('.closeDetails').on('click', function() {
            closeModal();
        });
    });

    $('.story-btn-open').on('click', function () {
        $('.story').fadeIn();

        $('.close-story').on('click', function () {
            $('.story').fadeOut();
        });
    });


    /*var stickyOffset = $('.main-header').offset().top;

    $(window).scroll(function(){
        var sticky = $('.main-header'),
            scroll = $(window).scrollTop();

        if (scroll >= stickyOffset + 5) {
            sticky.addClass('fixed-top');
            sticky.css("background", "var(--main-color)");
        } else {
            sticky.removeClass('fixed-top');
            sticky.css("background", "none");
        }
    });*/

    
});