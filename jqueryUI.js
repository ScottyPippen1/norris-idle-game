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
            }, get_interval_speed(selectedTree) / 100);
        } else {
            clearInterval(interval);
            interval = null;
            progressed = 0;
            $('#moving-progress-bar').addClass("notransition");
            $('#moving-progress-bar').attr('style', "width: 0%");
            $('#moving-progress-bar').text(progressed + "%");
        }

    });

    //minevein button click function
    $('.mineVeinButton').click(() => {
        $('#moving-progress-bar-mining').removeClass("notransition");
        let progressed = 0;
        if (!interval) {
            interval = setInterval(() => {
                progressed += 1;
                $('#moving-progress-bar-mining')
                    .css("width", progressed + "%")
                    .attr("aria-valuenow", progressed)
                    .text(progressed + "%");

                if (progressed >= 100) {
                    progressed = 0;
                    $('#moving-progress-bar-mining').addClass("notransition");
                    $('#moving-progress-bar-mining').attr('style', "width: 0%");
                }
            }, get_interval_speed(selectedVein) / 100);
        } else {
            clearInterval(interval);
            interval = null;
            progressed = 0;
            $('#moving-progress-bar-mining').addClass("notransition");
            $('#moving-progress-bar-mining').attr('style', "width: 0%");
            $('#moving-progress-bar-mining').text(progressed + "%");
        }

    });
});
