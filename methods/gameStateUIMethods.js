//condensed html elements update function for easier usage
function update(id, content) {
  document.getElementById(id).innerHTML = content;
}

//update loaded game html elements
function updateLoadedGameUI() {
  update("totalXp", `Total Experience: ${totalXp}`);
  update("wcLvl", `Woodcutting Level: ${wcLvl}`);
  update("wcXp", `Woodcutting Experience: ${wcXp}`);
  update("dropdownMenu2", selectedTree);
}

// updates active skill
function active_skill() {
  if (!activeSkill) {
    update("activeSkill", ``);
    return;
  }
  update("activeSkill", `Active skill: ${activeSkill}`);
  console.log(activeSkill);
}

// updates total xp
function update_total_xp(xp_gained) {
  totalXp = totalXp + xp_gained;
  update("totalXp", `Total Experience: ${totalXp}`);
}
