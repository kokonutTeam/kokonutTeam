function sub_page_1_animate() {
    arr = $(".sub_page1_content").find("span")
    var temp = arr[0]
    setTimeout(function() {
        $(".sub_page1_content").find(temp).css("max-width", "100%")
        setTimeout(function() {
            temp = arr[1]
            $(".sub_page1_content").find(temp).css("max-width", "100%")
            setTimeout(function() {
                temp = arr[2]
                $(".sub_page1_content").find(temp).css("max-width", "100%")
                setTimeout(function() {
                    temp = arr[3]
                    $(".sub_page1_content").find(temp).css("max-width", "100%")
                }, 2000)
            }, 2000)
        }, 2700)
    }, 1000)
}
arr = $(".sub_page2_content").find("span")
    /*
    setTimeout(function() {
        $(".sub_page2_content").find(temp).css("max-width", "100%")
        setTimeout(function() {
            temp = arr[1]
            $(".sub_page2_content").find(temp).css("max-width", "100%")
            setTimeout(function() {
                temp = arr[2]
                $(".sub_page2_content").find(temp).css("max-width", "100%")
                setTimeout(function() {
                    temp = arr[3]
                    $(".sub_page2_content").find(temp).css("max-width", "100%")
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
    */
var count_page2 = -1;

var count_sub_page2 = -1;

function sub_page_2_animate() {
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

arr_sub_2 = $(".sub_sub_page_2").find("span")

function sub_sub_page_2_animate() {
    if (count_sub_page2 <= 6) {
        count_sub_page2 = count_sub_page2 + 1
        var temp = arr_sub_2[count_sub_page2]
        $(".sub_sub_page_2").find(temp).css("max-width", "100%")
        setTimeout(function() {
            sub_sub_page_2_animate()
        }, 2000)
    }
}
sub_page_2_animate()