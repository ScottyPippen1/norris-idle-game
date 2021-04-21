const skillsData = {
    skills: [
        {
            id: 0,
            name: "Woodcutting",
            baseIntervalSpeed: 3000
        },
        {
            id: 1,
            name: "Fishing"
        },
        {
            id: 2,
            name: "Mining"
        },
        {
            id: 3,
            name: "Firemaking"
        },
        {
            id: 4,
            name: "Cooking"
        },
        {
            id: 5,
            name: "Smithing"
        },
    ]
}

const woodcuttingTreeData = {
    trees: [
        {
            type: "tree",
            xp: 25,
            intervalSpeed: 3000
        },
        {
            type: "oak",
            xp: 37.5,
            intervalSpeed: 3500
        },
        {
            type: "willow",
            xp: 67.5,
            intervalSpeed: 4000
        },
        {
            type: "maple",
            xp: 100,
            intervalSpeed: 4500
        },
        {
            type: "yew",
            xp: 175,
            intervalSpeed: 5500
        },
        {
            type: "magic",
            xp: 250,
            intervalSpeed: 7500
        },
    ]
}

const fishingSpotData = {
    fish: [
        {
            type: "shrimp",
            xp: 10,
            intervalSpeed: 3000
        },
        {
            type: "herring",
            xp: 20,
            intervalSpeed: 3500
        },
        {
            type: "trout",
            xp: 35,
            intervalSpeed: 4000
        },
        {
            type: "salmon",
            xp: 45,
            intervalSpeed: 4500
        },
        {
            type: "lobster",
            xp: 60,
            intervalSpeed: 5000
        },
        {
            type: "swordfish",
            xp: 70,
            intervalSpeed: 5500
        },
        {
            type: "monkfish",
            xp: 80,
            intervalSpeed: 6000
        },
        {
            type: "shark",
            xp: 100,
            intervalSpeed: 7000
        },
        {
            type: "angler",
            xp: 125,
            intervalSpeed: 8000
        }
    ]
}

const miningVeinData = {
    veins: [
        {
            type: "copper",
            xp: 25,
            intervalSpeed: 3000
        },
        {
            type: "tin",
            xp: 25,
            intervalSpeed: 3000
        },
        {
            type: "iron",
            xp: 50,
            intervalSpeed: 3500
        },
        {
            type: "coal",
            xp: 75,
            intervalSpeed: 4000
        },
        {
            type: "mithril",
            xp: 100,
            intervalSpeed: 4500
        },
        {
            type: "adamant",
            xp: 125,
            intervalSpeed: 5000
        },
        {
            type: "runite",
            xp: 150,
            intervalSpeed: 5500
        }
    ]
}

const skillLevelMilestones =
    [
        0, 83, 174, 276, 388, 512, 650, 801, 969,
        1154, 1358, 1584, 1833, 2107, 2411, 2746, 3115, 3523, 3973,
        4470, 5018, 5624, 6291, 7028, 7842, 8740, 9730, 10824, 12031,
        13363, 14833, 16456, 18247, 20224, 22406, 24815, 27473, 30408, 33648,
        37224, 41171, 45529, 50339, 55649, 61512, 67983, 75127, 83014, 91721,
        101333, 111945, 123660, 136594, 150872, 166636, 184040, 203254, 224466, 247886,
        273742, 302288, 333804, 368599, 407015, 449428, 496254, 547953, 605032, 668051,
        737627, 814445, 899257, 992895, 1096278, 1210421, 1336443, 1475581, 1629200, 1798808,
        1986068, 2192818, 2421087, 2673114, 2951373, 3258594, 3597792, 3972294, 4385776, 4842295,
        5346332, 5902831, 6517253, 7195629, 7944614, 8771558, 9684577, 10692629, 11805606, 13034431
    ]
