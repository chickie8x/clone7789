$(document).ready(function () {
    let timeDisplay = document.getElementById("time");

    function refreshTime() {
        let dateString = new Date().toLocaleString("en-US", {timeZone: "Asia/bangkok"});
        let formattedString = dateString.replace(", ", " - ").replace("PM", "").replace("AM", "");
        timeDisplay.innerHTML = '<i class="fas fa-clock pr-1"></i>' + formattedString;
    }

    setInterval(refreshTime, 1000);

    $("select").on('change', function (e) {
        let theme = this.value;
        console.log(theme);
        if (theme === 'dark') {
            $(".index-content-wrapper").css('background-color', '#1f1f1f');
            $(".index-wrapper").css('background-color', '#1f1f1f');
        } else {
            $(".index-content-wrapper").css('background-color', 'white');
            $(".index-wrapper").css('background-color', 'white');
        }

    })

    window.onscroll = function () {
        let y = window.pageYOffset;
        $(".dropdown-content").css('top', 140 - y)
    };
    $("#btn-readmore").click(function () {
        let dis = $("#readmore")[0].style.display;
        let btn = $("#btn-readmore")[0];
        let dots = $("#dots")[0].innerText;
        console.log(dots)
        if (dis != "block") {
            $("#readmore").css('display', 'block');
            $("#dots").css('display', 'none')
            btn.innerHTML = "Rút gọn";
        } else {
            $("#readmore").css('display', 'none');
            $("#dots").css('display', 'inline-block')
            btn.innerHTML = "Xem thêm";
        }

    });

    $(".close").click(function () {
        this.parentElement.style.display = 'none';
    })

    $("#skbtn").css('color', '#f7ba22');
    $("#skbtn").click(function () {
        $("#sk").css('display', 'flex');
        $("#nd").css('display', 'none');
        $("#ph").css('display', 'none');
        $("#skbtn").css('color', '#f7ba22');
        $("#ndbtn").css('color', 'unset');
        $("#phbtn").css('color', 'unset');
    })
    $("#ndbtn").click(function () {
        $("#sk").css('display', 'none');
        $("#nd").css('display', 'flex');
        $("#ph").css('display', 'none');
        $("#skbtn").css('color', 'unset');
        $("#ndbtn").css('color', '#f7ba22');
        $("#phbtn").css('color', 'unset');
    })
    $("#phbtn").click(function () {
        $("#sk").css('display', 'none');
        $("#nd").css('display', 'none');
        $("#ph").css('display', 'flex');
        $("#skbtn").css('color', 'unset');
        $("#ndbtn").css('color', 'unset');
        $("#phbtn").css('color', '#f7ba22');
    })

});

