var wcLoop;
var xp = 0;

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

function cutWood() {
    if (wcLoop) {
        clearInterval(wcLoop);
        wcLoop = null;
    } else {
        wcLoop = setInterval(() => {
            xp++;
            update("xp", `${xp} Woodcutting Experience`);
        }, 3000);
    }
}

//cutWood();

