setTimeout(function() {
    document.getElementById("ready_contain").style.display = "none";

    setTimeout(function() {
        $(".start_icon").css("transition", "2s");
        $(".start_icon").css("left", "10%");
    }, 1000)
    setTimeout(function() {
            $(".ml4_contain").css("display", "none");
            $("#main_card").css("display", "block");
        }, 6000) // 6000
}, 4000)