setTimeout(function() {
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    $(".ml4_contain").css("display", "none");
    $("#main_card").css("display", "block");
    $("#test_btn").css("display", "block");
    anime.timeline({ loop: false })
        .add({
            targets: '.ml3 .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1800,
            delay: (el, i) => 150 * (i + 1)
        })
}, 4000)