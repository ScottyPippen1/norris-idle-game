$(document).ready(() => {
    let interval;
    let progressed = 0;
    let nextWcLvl = 0;
    let percentToNextLvl = 0;

    //cutwood button click function
    $('.cutWoodButton').click(() => {
        $('#action-interval-bar-woodcutting').removeClass("notransition");
        if (!interval) {
            interval = setInterval(() => {
                progressed += 1;
                nextWcLvl = skillLevelMilestones[gameData.wcLvl];
                percentToNextLvl = (gameData.wcXp - skillLevelMilestones[gameData.wcLvl - 1]) / (nextWcLvl - skillLevelMilestones[gameData.wcLvl - 1]) * 100;
                $('#action-interval-bar-woodcutting')
                    .css("width", progressed + "%")
                    .attr("aria-valuenow", progressed)
                    .text(progressed + "%");

                $('#xp-progress-bar-woodcutting')
                    .css("width", Math.round(percentToNextLvl) + "%")
                    .attr("aria-valuenow", Math.round(percentToNextLvl))
                    .text(Math.round(percentToNextLvl) + "%");

                if (progressed >= 100) {
                    progressed = 0;
                    $('#action-interval-bar-woodcutting').addClass("notransition");
                    $('#action-interval-bar-woodcutting').attr('style', "width: 0%");
                    $('#xp-progress-bar-woodcutting').attr("aria-valuenow", Math.round(percentToNextLvl));
                }
            }, get_interval_speed(selectedTree) / 100);
        } else {
            clearInterval(interval);
            interval = null;
            progressed = 0;
            // $('#action-interval-bar-woodcutting').addClass("notransition");
            // $('#action-interval-bar-woodcutting').attr('style', "width: 0%");
            // $('#action-interval-bar-woodcutting').text(progressed + "%");
            $('.bg-info').addClass("notransition");
            $('.bg-info').attr('style', "width: 0%");
            $('.bg-info').text(progressed + "%");
        }
    });

    //minevein button click function
    $('.mineVeinButton').click(() => {
        $('#action-interval-bar-mining').removeClass("notransition");
        if (!interval) {
            interval = setInterval(() => {
                progressed += 1;
                $('#action-interval-bar-mining')
                    .css("width", progressed + "%")
                    .attr("aria-valuenow", progressed)
                    .text(progressed + "%");

                if (progressed >= 100) {
                    progressed = 0;
                    $('#action-interval-bar-mining').addClass("notransition");
                    $('#action-interval-bar-mining').attr('style', "width: 0%");
                }
            }, get_interval_speed(selectedVein) / 100);
        } else {
            clearInterval(interval);
            interval = null;
            progressed = 0;
            // $('#action-interval-bar-mining').addClass("notransition");
            // $('#action-interval-bar-mining').attr('style', "width: 0%");
            // $('#action-interval-bar-mining').text(progressed + "%");
            $('.bg-info').addClass("notransition");
            $('.bg-info').attr('style', "width: 0%");
            $('.bg-info').text(progressed + "%");
        }
    });

    //catchfish button click function
    $('.catchFishButton').click(() => {
        $('#action-interval-bar-fishing').removeClass("notransition");
        if (!interval) {
            interval = setInterval(() => {
                progressed += 1;
                $('#action-interval-bar-fishing')
                    .css("width", progressed + "%")
                    .attr("aria-valuenow", progressed)
                    .text(progressed + "%");

                if (progressed >= 100) {
                    progressed = 0;
                    $('#action-interval-bar-fishing').addClass("notransition");
                    $('#action-interval-bar-fishing').attr('style', "width: 0%");
                }
            }, get_interval_speed(selectedFishSpot) / 100);
        } else {
            clearInterval(interval);
            interval = null;
            progressed = 0;
            // $('#action-interval-bar-fishing').addClass("notransition");
            // $('#action-interval-bar-fishing').attr('style', "width: 0%");
            // $('#action-interval-bar-fishing').text(progressed + "%");
            $('.bg-info').addClass("notransition");
            $('.bg-info').attr('style', "width: 0%");
            $('.bg-info').text(progressed + "%");
        }
    });

    // //update skill progress bar
    // $('#xp-progress-bar-woodcutting').each(function () {
    //     let nextWcLvl = skillLevelMilestones[gameData.wcLvl + 1];
    //     let percentToNextLvl = (nextWcLvl - gameData.wcXp) / 100;
    //     $('#xp-progress-bar-woodcutting')
    //         .css("width", percentToNextLvl + "%")
    //         .attr("aria-valuenow", percentToNextLvl)
    //         .text(percentToNextLvl + "%");
    // });

});
