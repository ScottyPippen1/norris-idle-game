var saveGame = localStorage.getItem('woodcutter')
var gameData = {
    wcExp: 0,
    wcExpPerClick: 1,
    wcExpPerClickCost: 10,
    lastTick: Date.now()
}

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

function cutWood() {
    gameData.wcExp += gameData.wcExpPerClick
    update("wcExp", gameData.wcExp.toFixed(0) + " Woodcutting Experience")
}

function buyWcExpPerClick() {
    if (gameData.wcExp >= gameData.wcExpPerClickCost) {
        gameData.wcExp -= gameData.wcExpPerClickCost
        gameData.wcExpPerClick += 1
        gameData.wcExpPerClickCost *= 2
        update("wcExp", gameData.wcExp.toFixed(0) + " Woodcutting Experience")
        update("perClickUpgrade", "Upgrade Axe (Currently Level " + gameData.wcExpPerClick + ") Cost: " + gameData.wcExpPerClickCost + " Woodcutting Experience")
    }
}

var mainGameLoop = window.setInterval(function () {
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now() // Don't forget to update lastTick.
    gameData.wcExp += gameData.wcExpPerClick * (diff / 600) // divide diff by how often (ms) mainGameLoop is ran
    update("wcExp", gameData.wcExp.toFixed(0) + " Woodcutting Experience")
    update("perClickUpgrade", "Upgrade Axe (Currently Level " + gameData.wcExpPerClick + ") Cost: " + gameData.wcExpPerClickCost + " Woodcutting Experience")
}, 600)

var saveGameLoop = window.setInterval(function () {
    localStorage.setItem('woodcutter', JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem('woodcutter'))
if (savegame !== null) {
    gameData = savegame
}

function tab(tab) {
    // hide all your tabs, then show the one the user selected.
    document.getElementById("cutWoodMenu").style.display = "none"
    document.getElementById("shopMenu").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}
// go to a default tab for the first time, so not all show
tab("cutWoodMenu")

if (typeof saveGame.wcExp !== "undefined") gameData.wcExp = saveGame.wcExp;
if (typeof saveGame.wcExpPerClick !== "undefined") gameData.wcExpPerClick = saveGame.wcExpPerClick;
if (typeof saveGame.wcExpPerClickCost !== "undefined") gameData.wcExpPerClickCost = saveGame.wcExpPerClickCost;
if (typeof saveGame.lastTick !== "undefined") gameData.lastTick = saveGame.lastTick;
