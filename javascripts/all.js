$(document).ready(function(){
    // меню
    $(".menu_button").click(function(){
        if ($(".menu").hasClass("none")) {
            $(".menu").removeClass("none");
            $(".menu").addClass("exist");
            $("div").css({'opacity': '0.3'});
            $(".line_1 > div, .line_1, .line0").css({'opacity': '1'});
            $(".menu").css({'opacity': '1'});
        }
        else if ($(".menu").hasClass("exist")) {
                $(".menu").removeClass("exist");
                $(".menu").addClass("none");
                $("div").css({'opacity': '1'});
        }
    });
    
    // ГЛАВНАЯ СТРАНИЦА

    // кнопки
    $(".b0").click(function(){
        $(this).toggleClass("orange");
    });
    //  счетчик
    $(".l_1").click(function(){
        $(".l_1").text('2');
    });
    let i = 2;
    setInterval(function() {
        $(".l_1").text(i);
        i++;
        if (i == 10) {
            i = 1;
        }
    }, 100000000000)
    let j = 1;
    setInterval(function() {
        $(".l_2").text(j);
        j++;
        if (j == 10) {
            j = 0;
        }
    }, 10000000000)
    let i1 = 1;
    setInterval(function() {
        $(".l_3").text(i1);
        i1++;
        if (i1 == 10) {
            i1 = 0;
        }
    }, 1000000000)
    let i2 = 1;
    setInterval(function() {
        $(".l_4").text(i2);
        i2++;
        if (i2 == 10) {
            i2 = 0;
        }
    }, 100000000)
    let i3 = 1;
    setInterval(function() {
        $(".l_5").text(i3);
        i3++;
        if (i3 == 10) {
            i3 = 0;
        }
    }, 1000000)
    let i4 = 1;
    setInterval(function() {
        $(".l_6").text(i4);
        i4++;
        if (i4 == 10) {
            i4 = 0;
        }
    }, 100000)
    let i5 = 1;
    setInterval(function() {
        $(".l_7").text(i5);
        i5++;
        if (i5 == 10) {
            i5 = 0;
        }
    }, 10000)
    let i6 = 1;
    setInterval(function() {
        $(".l_8").text(i6);
        i6++;
        if (i6 == 10) {
            i6 = 0;
        }
    }, 1000)
    let i7 = 1;
    setInterval(function() {
        $(".l_9").text(i7);
        i7++;
        if (i7 == 10) {
            i7 = 0;
        }
    }, 100)
    // слайдер 'экстерьера

    // вперед
    let photo = 0;
    let h1 = 0;
    $(".fo_1").click(function(){
        h1 += -96.1;

        if (photo == 4)
        {
            photo = 0;
        }
        if (photo == 3) {
            $(".exterior").css({'background-position': h1+ 'vw'});
            setTimeout(function() {
                $(".exterior").css({'transition': '.0s'});
            }, 100);
            h1 = 0;
            setTimeout(function() {
                $(".exterior").css({'background-position': h1 +'vw'});
            }, 500);
            setTimeout(function() {
                $(".exterior").css({'transition': '.5s'});     
            }, 510);
        }
        if (photo < 3) {
            $(".exterior").css({'background-position': h1+ 'vw'});
        }
        photo +=1;
    });
    // назад
    $(".ba_1").click(function(){
        h1 -= -96.1;

        if (photo == -4)
        {
            photo = 0;
        }
        if (photo == -3) {
            $(".exterior").css({'background-position': h1+ 'vw'});
            setTimeout(function() {
                $(".exterior").css({'transition': '.0s'});
            }, 100);
            h1 = 0;
            setTimeout(function() {
                $(".exterior").css({'background-position': h1 +'vw'});
            }, 500);   
            setTimeout(function() {
                $(".exterior").css({'transition': '.5s'});     
            }, 510);  
        }
        if (photo > -3) {
            $(".exterior").css({'background-position': h1+ 'vw'});
        }
        photo -=1;
    });
    // слайдер диспетчерской
    // вперед
    let photo1 = 0;
    let h2 = 0;
    $(".fo_2").click(function(){
        h2 += -71.7;

        if (photo1 == 3)
        {
            photo1 = 0;
        }
        if (photo1 == 2) {
            $(".control_room_photo").css({'background-position': h2+ 'vw'});
            setTimeout(function() {
                $(".control_room_photo").css({'transition': '.0s'});
            }, 100);
            h2 = 0;
            setTimeout(function() {
                $(".control_room_photo").css({'background-position': h2 +'vw'});
            }, 500);
            setTimeout(function() {
                $(".control_room_photo").css({'transition': '.5s'});     
            }, 510);
        }
        if (photo1 < 2) {
            $(".control_room_photo").css({'background-position': h2+ 'vw'});
        }
        photo1 +=1;
    });
    // назад
    $(".ba_2").click(function(){
        h2 -= -71.7;

        if (photo1 == -3)
        {
            photo1 = 0;
        }
        if (photo1 == -2) {
            $(".control_room_photo").css({'background-position': h2+ 'vw'});
            setTimeout(function() {
                $(".control_room_photo").css({'transition': '.0s'});
            }, 100);
            h2 = 0;
            setTimeout(function() {
                $(".control_room_photo").css({'background-position': h2 +'vw'});
            }, 500);   
            setTimeout(function() {
                $(".control_room_photo").css({'transition': '.5s'});     
            }, 510);  
        }
        if (photo1 > -2) {
            $(".control_room_photo").css({'background-position': h2+ 'vw'});
        }
        photo1 -=1;
    });
});