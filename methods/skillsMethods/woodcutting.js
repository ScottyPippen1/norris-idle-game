
var wcData = {
    wcXp: 0,
    selectedTree: []
    // trees: ["tree, oak, teak, yew, magic"],
}

// axes value will be index + 1. (bronze = 0 + 1, iron = 1 + 1, etc.)
// var axes = ["bronze", "iron", "steel", "mithril", "adamant", "rune"];

function cutWood() {
    playerData.activeSkill = skillsData.skills[0].name;
    active_skill();
    let xp_gained = woodcuttingTreeData.trees[selectedTree].xp;
    // let xp_gained = get_woodcutting_xp('tree');
    wcData.wcXp = wcData.wcXp + xp_gained;
    // visual updates
    update_total_xp(xp_gained);
    update("wcXp", `Woodcutting Experience: ${wcData.wcXp}`);
    execute_woodcutting(1);
}



