$(document).ready(() => {
    let interval;
    //cutwood button click function
    $('.cutWoodButton').click(() => {
        $('#moving-progress-bar').removeClass("notransition");
        let progressed = 0;
        if (!interval) {
            interval = setInterval(() => {
                progressed += 1;
                $('#moving-progress-bar')
                    .css("width", progressed + "%")
                    .attr("aria-valuenow", progressed)
                    .text(progressed + "%");

                if (progressed >= 100) {
                    progressed = 0;
                    $('#moving-progress-bar').addClass("notransition");
                    $('#moving-progress-bar').attr('style', "width: 0%");
                }
            }, get_interval_speed(0) / 100);
        } else {
            clearInterval(interval);
            interval = null;
            progressed = 0;
            $('#moving-progress-bar').addClass("notransition");
            $('#moving-progress-bar').attr('style', "width: 0%");
            $('#moving-progress-bar').text(0 + "%");
        }

    });
});