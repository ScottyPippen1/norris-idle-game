$(document).ready(() => {
    //update loaded game jquery elements
    if (wcXp !== 0) {
        wcPercentToNextLvl();
        $('#xp-progress-bar-woodcutting')
            .css("width", Math.round(percentToNextWcLvl) + "%")
            .attr("aria-valuenow", Math.round(percentToNextWcLvl))
            .text(Math.round(percentToNextWcLvl) + "%");
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
