
//game variables
var wcLoop;
var wcXp = 0;
var fishLoop;
var fishXp = 0;


function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

function cutWood() {
    const wcBar = document.getElementById('wcBar');
    if (wcLoop) {
        clearInterval(wcLoop);
        wcLoop = null;
    } else {
        wcLoop = setInterval(() => {
            wcXp++;
            wcBar.style.width = wcXp + '%';
            wcBar.innerHTML = wcXp + '%';
            update("wcXp", `${wcXp} Woodcutting Experience`);
        }, 3000);
    }
}

function catchFish() {
    const fishBar = document.getElementById('fishBar');
    if (fishLoop) {
        clearInterval(fishLoop);
        fishLoop = null;
    } else {
        fishLoop = setInterval(() => {
            fishXp++;
            fishBar.style.width = fishXp + '%';
            fishBar.innerHTML = fishXp + '%';
            update("fishXp", `${fishXp} Fishing Experience`);
        }, 3000);
    }
}

//progress bar
/*   const myBar = document.getElementById('myBar');
   var width = 0;
   var timeInt = setInterval(frame, 3000);
   //progress bar function
   function frame() {
       if (width >= 100) {
           clearInterval(timeInt);
       } else {
           width++;
           myBar.style.width = width + '%';
           myBar.innerHTML = width + '%';
       }
   }
*/

//cutWood();

