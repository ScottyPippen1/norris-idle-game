$(document).ready(() => {
    //update loaded game jquery elements
    if (wcXp !== 0) {
        wcPercentToNextLvl();
        $('#xp-progress-bar-woodcutting')
            .css("width", Math.round(percentToNextWcLvl) + "%")
            .attr("aria-valuenow", Math.round(percentToNextWcLvl))
            .text(Math.round(percentToNextWcLvl) + "%");
    }
    if (miningXp !== 0) {
        miningPercentToNextLvl();
        $('#xp-progress-bar-mining')
            .css("width", Math.round(percentToNextMiningLvl) + "%")
            .attr("aria-valuenow", Math.round(percentToNextMiningLvl))
            .text(Math.round(percentToNextMiningLvl) + "%");
    }
    if (fishXp !== 0) {
        fishPercentToNextLvl();
        $('#xp-progress-bar-fishing')
            .css("width", Math.round(percentToNextFishLvl) + "%")
            .attr("aria-valuenow", Math.round(percentToNextFishLvl))
            .text(Math.round(percentToNextFishLvl) + "%");
    }

    //cutwood button click function
    $('.cutWoodButton').click(() => {
        $('#action-interval-bar-woodcutting').removeClass("notransition");
        if (!interval) {
            interval = setInterval(() => {
                progressed += 1;
                wcPercentToNextLvl();
                $('#xp-progress-bar-woodcutting')
                    .css("width", Math.round(percentToNextWcLvl) + "%")
                    .attr("aria-valuenow", Math.round(percentToNextWcLvl))
                    .text(Math.round(percentToNextWcLvl) + "%");

                $('#action-interval-bar-woodcutting')
                    .css("width", progressed + "%")
                    .attr("aria-valuenow", progressed)
                    .text(progressed + "%");

                if (progressed >= 100) {
                    progressed = 0;
                    $('#action-interval-bar-woodcutting').addClass("notransition");
                    $('#action-interval-bar-woodcutting').attr('style', "width: 0%");
                    $('#xp-progress-bar-woodcutting').attr("aria-valuenow", Math.round(percentToNextWcLvl));
                }
            }, get_interval_speed(selectedTreeId) / 100);
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
                miningPercentToNextLvl();
                $('#xp-progress-bar-mining')
                    .css("width", Math.round(percentToNextMiningLvl) + "%")
                    .attr("aria-valuenow", Math.round(percentToNextMiningLvl))
                    .text(Math.round(percentToNextMiningLvl) + "%");

                $('#action-interval-bar-mining')
                    .css("width", progressed + "%")
                    .attr("aria-valuenow", progressed)
                    .text(progressed + "%");

                if (progressed >= 100) {
                    progressed = 0;
                    $('#action-interval-bar-mining').addClass("notransition");
                    $('#action-interval-bar-mining').attr('style', "width: 0%");
                    $('#xp-progress-bar-mining').attr("aria-valuenow", Math.round(percentToNextMiningLvl));
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
                fishPercentToNextLvl();
                $('#xp-progress-bar-fishing')
                    .css("width", Math.round(percentToNextFishLvl) + "%")
                    .attr("aria-valuenow", Math.round(percentToNextFishLvl))
                    .text(Math.round(percentToNextFishLvl) + "%");

                $('#action-interval-bar-fishing')
                    .css("width", progressed + "%")
                    .attr("aria-valuenow", progressed)
                    .text(progressed + "%");

                if (progressed >= 100) {
                    progressed = 0;
                    $('#action-interval-bar-fishing').addClass("notransition");
                    $('#action-interval-bar-fishing').attr('style', "width: 0%");
                    $('#xp-progress-bar-fishing').attr("aria-valuenow", Math.round(percentToNextFishLvl));
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
    //     let percentToNextWcLvl = (nextWcLvl - gameData.wcXp) / 100;
    //     $('#xp-progress-bar-woodcutting')
    //         .css("width", percentToNextWcLvl + "%")
    //         .attr("aria-valuenow", percentToNextWcLvl)
    //         .text(percentToNextWcLvl + "%");
    // });

});
