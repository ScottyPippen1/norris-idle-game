var firemakingLoop;
var firemakingXp = 0;
var totalXp = 0;
var logs = ["logs, oak, teak, yew, magic"];

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}
//need to return an interval
function get_game_tick() {
    return 3000;
}

function update_total_xp(xp_gained) {
    totalXp = totalXp + xp_gained;
    update("totalXp", `Total Experience: ${totalXp} `);
}

function get_firemaking_xp(log_type) {
    // determine a weight for tree_weight
    var firemaking_xp = null;
    switch (log_type) {
        case 'logs':
            firemaking_xp = 40;
            break;
        case 'oak':
            firemaking_xp = 60;
            break;
        case 'teak':
            firemaking_xp = 105;
            break;
        case 'yew':
            firemaking_xp = 200;
            break;
        case 'magic':
            firemaking_xp = 300;
        default:
            console.log('invalid log type - get_firemaking_xp()');
            firemaking_xp = 0;
            break;
    }
    return firemaking_xp;
}

function lightLog() {
    //const firemakingBar = document.getElementById('firemakingBar');
    if (firemakingLoop) {
        clearInterval(firemakingLoop);
        firemakingLoop = null;
    } else {
        firemakingLoop = setInterval(() => {
            var xp_gained = get_firemaking_xp('oak');
            firemakingXp = firemakingXp + xp_gained;
            update_total_xp(xp_gained);
            firemakingBar.style.width = firemakingXp + '%';
            firemakingBar.innerHTML = firemakingXp + '%';
            update("firemakingXp", `${firemakingXp} Firemaking Experience`, + firemakingBar);
        }, get_game_tick());
    }
}

