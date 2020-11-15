var count_page2 = -1;

var count_sub_page2 = -1;
var count_page4 = -1;

function sub_page_4_animate() {
    arr = $(".sub_page4_content").find("span");
    if (count_page4 <= 5) {
        count_page4 = count_page4 + 1
        var temp = arr[count_page4]
        $(".sub_page4_content").find(temp).css("max-width", "100%")
        setTimeout(function() {
            sub_page_4_animate()
        }, 2000)
    } else {
        //sub_sub_page_2_animate()
    }
}
sub_page_4_animate();