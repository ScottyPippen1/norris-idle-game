//calculate progress bar % to next level
function wcPercentToNextLvl() {
  nextWcLvl = skillLevelMilestones[wcLvl];
  percentToNextWcLvl =
    ((wcXp - skillLevelMilestones[wcLvl - 1]) /
      (nextWcLvl - skillLevelMilestones[wcLvl - 1])) *
    100;
}

function level_up_woodcutting() {
  if (wcXp >= skillLevelMilestones[wcLvl]) {
    wcLvl += 1;
    console.log("New woodcutting level: " + wcLvl);
  }
}

function get_interval_speed(tree_id) {
  // sets interval speed for based on type of tree
  actionIntervalSpeed = woodcuttingTreeData.trees[tree_id].intervalSpeed;
  console.log("interval speed: " + actionIntervalSpeed);
  return actionIntervalSpeed;
}

function get_selected_tree(tree_id) {
  // sets selected tree to cut
  selectedTree = woodcuttingTreeData.trees[tree_id].type;
  selectedTreeId = tree_id;
  // let treeDropdownValue = document.getElementById("treeDropdown").value;
  update("dropdownMenu2", selectedTree);
  console.log(selectedTree);
  // return selectedTree;
}

function cutWood() {
  let coinFlip = Math.floor(Math.random() * 2);
  // determines how much xp is incremented per action based on type of tree selected
  let xp_gained = woodcuttingTreeData.trees[selectedTreeId].xp;
  let logProduced = woodcuttingTreeData.trees[selectedTreeId].reward;

  console.log("Coinflip: " + coinFlip);
  if (coinFlip == 1) {
    wcXp = wcXp + xp_gained;
    addItemToInventory(logProduced, 1);
    saveGameData();

    // visual updates
    update("wcXp", `Woodcutting Experience: ${wcXp}`);
    execute_woodcutting(1);
  } else {
    execute_woodcutting(1);
  }
  getInventoryItems();
}

function execute_woodcutting(button_clicked) {
  level_up_woodcutting();
  update("wcLvl", `Woodcutting Level: ${wcLvl}`);

  // checks if a tree is selected to cut
  if (selectedTreeId == null) {
    alert("Select a tree to cut");
    return;
  } else {
    // sets active skill
    activeSkill = skillsData.skills[0].name;
  }

  // stops task if button clicked while task is active
  let stopCutting = button_clicked == 0 && task != null;
  if (stopCutting) {
    // clears active task
    clearTimeout(task);

    // clears active skill
    activeSkill = "";

    active_skill();
    task = null;
    console.log("Stopped Woodcutting");
    return;
  }
  active_skill();
  // task to cut wood if no task is running
  task = setTimeout(cutWood, get_interval_speed(selectedTreeId));
}
