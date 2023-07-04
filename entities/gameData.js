//global game variables to save
let lastTick = Date.now();
let totalXp = 0;
let activeSkill = [];
let actionIntervalSpeed = 0;
let wcXp = 0;
let wcLvl = 1;
let selectedTree;
let selectedTreeId;

//global declared variables
let task;
let interval;
let progressed = 0;
let nextWcLvl;
let percentToNextWcLvl;
