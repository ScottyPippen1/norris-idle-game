var firemakingData = {
    firemakingLoop: null,
    firemakingXp: 0,
    logs: ["logs, oak, teak, yew, magic"]
}

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}
//need to return an interval
function get_game_tick() {
    return 3000;
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
    if (firemakingData.firemakingLoop) {
        clearInterval(firemakingData.firemakingLoop);
        firemakingData.firemakingLoop = null;
    } else {
        firemakingData.firemakingLoop = setInterval(() => {
            var xp_gained = get_firemaking_xp('oak');
            firemakingData.firemakingXp = firemakingData.firemakingXp + xp_gained;
            update_total_xp(xp_gained);
            firemakingBar.style.width = firemakingData.firemakingXp + '%';
            firemakingBar.innerHTML = firemakingData.firemakingXp + '%';
            update("firemakingXp", `${firemakingData.firemakingXp} Firemaking Experience`, + firemakingBar);
        }, get_game_tick());
    }
}

