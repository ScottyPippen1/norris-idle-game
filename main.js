var wcLoop;
var xp = 0;


function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

function cutWood() {
    const myBar = document.getElementById('myBar');
    if (wcLoop) {
        clearInterval(wcLoop);
        wcLoop = null;
    } else {
        wcLoop = setInterval(() => {
            xp++;
            myBar.style.width = xp + '%';
            myBar.innerHTML = xp + '%';
            update("xp", `${xp} Woodcutting Experience`);
        }, 3000);
    }
}

/*   const myBar = document.getElementById('myBar');
   var width = 0;
   var timeInt = setInterval(frame, 3000);
   //wc progress bar function
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

