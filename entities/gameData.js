
let gameData = {
    lastTick: Date.now(),
    totalXp: 0,
    username: null,
    gold: 0,
    inventory: [],
    skills: [],
    equipment: [],
    activeSkill: [],
    actionIntervalSpeed: 0,
    wcXp: 0,
    wcLvl: 0,
    selectedTree: [],
    miningXp: 0,
    miningLvl: 0,
    selectedVein: [],
    fishXp: 0,
    fishLvl: 0,
    selectedFishSpot: []
}

//global variables
let task;
let selectedTree;
let selectedVein;
let selectedFishSpot;
let interval;
let progressed = 0;
let nextWcLvl;
let percentToNextWcLvl;
let nextMiningLvl;
let percentToNextMiningLvl;
let nextFishLvl;
let percentToNextFishLvl;

