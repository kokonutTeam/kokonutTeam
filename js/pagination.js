var counter = 50;
var timeOut = 5000;
var count_page2 = -1;
var count_sub_page2 = -1;
var count_page3 = -1;
var count_page4 = -1;
var count_page1 = -1;

function sub_page_4_animate() {
    arr = $(".sub_page4_content").find("span");
    if (count_page4 <= 5) {
        count_page4 = count_page4 + 1
        var temp = arr[count_page4]
        $(".sub_page4_content").find(temp).css("max-width", "100%")
        setTimeout(function() {
            sub_page_4_animate()
        }, 1500)
    } else {
        //sub_sub_page_2_animate()
    }
}
$("#start_the_card").click(function() {
    book_3d();
    $("#start_the_card").css("transition", "3s");
    $("#start_the_card").css("left", "-100%");
    setTimeout(function() {
        $("#start_the_card").css("display", "none");
    }, 3000)
});

function book_3d() {
    $(".D3_contain").css("transform", "rotate3d(1, 1, 0.5, -45deg)");
    $(".scale_trans").css("transform", "scale(0.8)");
    setTimeout(nextPage1, 3000)
}

function sub_page_3_animate() {
    arr = $(".sub_page3_content").find("span")
    if (count_page3 == 2) {
        count_page3 = count_page3 + 1
        var temp = arr[count_page3]
        $(".sub_page3_content").find(temp).css("max-width", "100%")
        setTimeout(function() {
            sub_page_3_animate();
        }, 4000)
    } else {
        if (count_page3 <= 3) {
            count_page3 = count_page3 + 1
            var temp = arr[count_page3]
            $(".sub_page3_content").find(temp).css("max-width", "100%")
            setTimeout(function() {
                sub_page_3_animate();
            }, 1500)
        } else {
            //sub_sub_page_2_animate()
        }
    }
}

function txt_ml3() {
    var textWrapper = document.querySelector('.ml3_1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({
            loop: false
        })
        .add({
            targets: '.ml3_1 .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 15 * (i + 1)
        }).add({
            targets: '.ml3',
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}

function sub_page_1_animate() {
    count_page1++;
    if (count_page1 <= 3) {
        arr = $(".sub_page1_content").find("span")
        var temp = arr[count_page1]
        $(".sub_page1_content").find(temp).css("max-width", "100%");
        setTimeout(function() {
            sub_page_1_animate()
        }, 1800)
    }
}


function sub_page_2_animate() {
    arr = $(".sub_page2_content").find("span");
    if (count_page2 <= 5) {
        count_page2 = count_page2 + 1
        var temp = arr[count_page2]
        $(".sub_page2_content").find(temp).css("max-width", "100%")
        setTimeout(function() {
            sub_page_2_animate()
        }, 1000)
    } else {
        sub_sub_page_2_animate()
    }
}



function sub_sub_page_2_animate() {

    arr_sub_2 = $(".sub_sub_page_2").find("span")
    if (count_sub_page2 <= 6) {
        count_sub_page2 = count_sub_page2 + 1
        var temp = arr_sub_2[count_sub_page2]
        $(".sub_sub_page_2").find(temp).css("max-width", "100%")
        setTimeout(function() {
            sub_sub_page_2_animate()
        }, 1500)
    }
}

function nextPage1() {
    $("#hard_page").css("transform", "rotate3d(0, 1, 0, 180deg)");
    setTimeout(ml16(), 2000);
    setTimeout(() => {
        sub_page_4_animate();
        $(".outer").css("transition", "0s");
        $(".outer").css("background-image", " url('./img/b_0.jpg')");
        $(".outer").css("filter", "brightness(85%)");
    }, 900);
    setTimeout(function() {
        $(".header_1_outer").css("visibility", "hidden");
    }, 950)
    setTimeout(nextPage2, timeOut + 8000);
}

function nextPage2() {
    //txt_ml3();
    $("#page_1").css("z-index", "6");
    $("#page_1").css("transition", "3s");
    $("#page_1").css("transform", "rotate3d(0, 1,0, 170deg)");


    setTimeout(() => {
        sub_page_1_animate();
        arr = $(".sub_page4_content").find("span").css("transition", "0s");
        $(".page_in_4 ").children().css("transition", "0s");
        $(".page_in_4 ").children().css("visibility", "hidden");
        $(".page_in_4").css("background-image", "url('https://raw.githubusercontent.com/kokonutTeam/kokonutTeam.github.io/master/img/backPage_2.jpg')");
    }, 900);
    ml10();
    setTimeout(nextPage3, timeOut + 7000);
}

function nextPage3() {

    $("#page_2").css("z-index", "8");
    $("#page_2").css("transition", "3s");
    $("#page_2").css("transform", "rotate3d(0, 1, 0, 167.5deg)");
    setTimeout(() => {
        // $(".page_in_2").children().css("visibility", "hidden");

        sub_page_2_animate();
        arr = $(".sub_page1_content").find("span").css("transition", "0s");
        $(".page_in ").children().css("transition", "0s");
        $(".page_in ").children().css("visibility", "hidden");
        $(".page_in").css("background-image", "url('https://raw.githubusercontent.com/kokonutTeam/kokonutTeam.github.io/master/img/backPage_2.jpg')");
    }, 900);
    setTimeout(function() {
        $("#page_3").css("z-index", "9");
    }, 900)
    setTimeout(ml10_1(), 1500);
    setTimeout(nextPage4, timeOut + 17000);

}

function nextPage4() {
    $("#page_3").css("z-index", "9");
    $("#page_3").css("transition", "3s");
    $("#page_3").css("transform", "rotate3d(0, 1, 0, 165deg)");
    setTimeout(() => {
        $("#page_4").css("z-index", "10");
    }, 1500);
    setTimeout(() => {
        //  $(".page_in_3").children().css("visibility", "hidden");
        arr = $(".sub_page2_content").find("span").css("transition", "0s");
        $(".page_in_2 ").children().css("transition", "0s");
        $(".page_in_2 ").children().css("visibility", "hidden");
        $(".page_in_2").css("background-image", "url('https://raw.githubusercontent.com/kokonutTeam/kokonutTeam.github.io/master/img/backPage_2.jpg')");

        sub_page_3_animate();
    }, 900);
    setTimeout(nextPage5, timeOut + 10000);
}

function nextPage5() {
    $("#page_4").css("z-index", "10");
    $("#page_4").css("transition", "3s");
    $("#page_4").css("transform", "rotate3d(0, 1, 0, 162.5deg)");
    setTimeout(() => {
        $("#hard_page_back").css("z-index", "11");
    }, 500);
    setTimeout(() => {
        $(".page_in_3").children().css("visibility", "hidden");
        arr = $(".sub_page3_content").find("span").css("transition", "0s");
        $(".page_in_3 ").children().css("transition", "0s");
        $(".page_in_3 ").children().css("visibility", "hidden");
        $(".page_in_3").css("background-image", "url('https://raw.githubusercontent.com/kokonutTeam/kokonutTeam.github.io/master/img/backPage_2.jpg')");
    }, 900);
    setTimeout(nextPage6, timeOut);
}

function nextPage6() {
    $("#hard_page_back").css("z-index", "11");
    $("#hard_page_back").css("transition", "3s");
    $("#hard_page_back").css("transform", "rotate3d(0, 1, 0, 180deg)");
    setTimeout(() => {
        $(".page_in_5").children().css("visibility", "hidden");
    }, 900);
    setTimeout(theEnd, 3000);
}

function theEnd() {
    $("#main_card").css("transition", "2.5s")
    $("#main_card").css("opacity", "0")
    setTimeout(function() {
        $("#main_card").css("display", "none")
    }, 3500)
    setTimeout(function() {
        $(".happy_bg").css("width", "100vw");
        setTimeout(balloon_up, 3000);
    }, 2500)
}

function balloon_up() {
    document.getElementsByTagName("BODY")[0].innerHTML = '';
    heart_bg_maker();
    setTimeout(function() {
        $(".balloon_flow").css("opacity", "1");
        $(".balloon_flow").css("bottom", "50%");
        $(".balloon_flow").css("transform", "translate(-50%,50%)");
        $(".balloon_wish").css("opacity", "1");
    }, 3000)
}

function ml16() {
    anime.timeline({ loop: false })
        .add({
            targets: '.ml16 .letter',
            translateY: [100, 0],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 30 * i
        }).add({
            targets: '.ml16',
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });

}

function ml10() {
    anime.timeline({ loop: false })
        .add({
            targets: '.ml10 .letter',
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 100 * i
        }).add({
            targets: '.ml10',
            duration: 1000,
            easing: "easeOutExpo",
            delay: 0
        });
}

function ml10_1() {
    anime.timeline({ loop: false })
        .add({
            targets: '.ml10_1 .letter',
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 100 * i
        }).add({
            targets: '.ml10_1',
            duration: 1000,
            easing: "easeOutExpo",
            delay: 0
        });
}

function heart_bg_maker() {
    $("body").css("background-image", "none");
    document.body.style.backgroundColor = "#ffceed";

    var brd = document.createElement("DIV");
    document.body.insertBefore(brd, document.getElementById("board"));


    $("DIV").append("<span class='balloon_flow'><span class='balloon_wish'>Happy Teacher Day <span>20/11</span></span></span>");
    $("DIV").append("<span class='tutor'><span>Click</span><span>and</span><span>Hold</span></span>")
    $("DIV").append(' <footer style="bottom: 20px; right: 0; display: flex; justify-content: flex-end;width: 100%; align-items: center;position: fixed;"><div style="text-align: right;line-height: 1.25; font-weight: bold;font-size: 18px"><span id="icon-name" style="display: block;">19050201</span><span style="display: block;">KOKONUT</span></div><img style="width: 120px;height: auto;" src="https://iconclub.github.io/assets/iconLogo.png" alt="ICON"></footer>')
    const duration = 3000;
    const speed = 1.5;
    const cursorXOffset = 0;
    const cursorYOffset = -5;

    var hearts = [];

    var down = false;
    var event = null;

    document.onmousedown = function(e) {
        down = true;
        event = e;
    }

    document.onmouseup = function(e) {
        down = false;
    }

    document.onmousemove = function(e) {
        event = e;
    }

    document.ontouchstart = function(e) {
        down = true;
        event = e.touches[0];
    }

    document.ontouchend = function(e) {
        down = false;
    }

    document.ontouchmove = function(e) {
        event = e.touches[0];
    }

    var before = Date.now();
    var id = setInterval(frame, 5);
    var gr = setInterval(check, 100);

    function check() {
        if (down) {
            var start = 1 - Math.round(Math.random()) * 2;
            var scale = Math.random() * Math.random() * 0.8 + 0.2;
            var bound = 30 + Math.random() * 20;
            generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);
        }
    }

    function generateHeart(x, y, xBound, xStart, scale) {
        var heart = document.createElement("DIV");
        heart.setAttribute('class', 'heart');
        brd.appendChild(heart);
        heart.time = duration;
        heart.x = x;
        heart.y = y;
        heart.bound = xBound;
        heart.direction = xStart;
        heart.style.left = heart.x + "px";
        heart.style.top = heart.y + "px";
        heart.scale = scale;
        heart.style.transform = "scale(" + scale + "," + scale + ")";
        if (hearts == null)
            hearts = [];
        hearts.push(heart);
        return heart;
    }

    function random_Generate() {
        var start = 1 - Math.round(Math.random()) * 2;
        var scale = Math.random() * Math.random() * 0.8 + 0.2;
        var bound = 30 + Math.random() * 20;
        generateHeart(Math.random() * screen.width, screen.height - 100, bound, start, scale);
        setTimeout(random_Generate, 100)
    }
    random_Generate();

    function frame() {
        var current = Date.now();
        var deltaTime = current - before;
        before = current;
        for (i in hearts) {
            var heart = hearts[i];
            heart.time -= deltaTime;
            if (heart.time > 0) {
                heart.y -= speed;
                heart.style.top = heart.y + "px";
                heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 100 + "px";
            } else {
                heart.parentNode.removeChild(heart);
                hearts.splice(i, 1);
            }
        }
    }
}