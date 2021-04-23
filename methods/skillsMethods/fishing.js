// fishing data object
var fishData = {
    fishXp: 0,
    selectedFishSpot: []
}

function get_interval_speed(fish_spot_id) {
    // sets interval speed for based on type of fish
    playerData.actionIntervalSpeed = fishingSpotData.fish[fish_spot_id].intervalSpeed;
    console.log("interval speed: " + playerData.actionIntervalSpeed);
    return playerData.actionIntervalSpeed;
}

function get_selected_fish_spot(fish_spot_id) {
    // sets selected fish to fish
    selectedFishSpot = fish_spot_id;
    console.log(selectedFishSpot);
    return selectedFishSpot;
}

function execute_fishing(button_clicked) {
    // sets active skill
    playerData.activeSkill = skillsData.skills[1].name;

    // checks if a fish is selected to fish
    if (selectedFishSpot == null) {
        alert("Select a fish to catch");
        return;
    }

    // stops task if button clicked while active
    let stopFishing = button_clicked == 0 && task != null;
    if (stopFishing) {
        // clears active task
        clearTimeout(task);

        // clears active skill
        playerData.activeSkill = "";

        active_skill();
        task = null;
        console.log("Stopped Fishing");
        return;
    }
    active_skill();
    // task to catch fish if no task is running
    task = setTimeout(fishingHandler, get_interval_speed(selectedFishSpot));
}

function catchFish() {
    // determines how much xp is incremented per action based on type of fish selected
    let xp_gained = fishingSpotData.fish[selectedFishSpot].xp;

    fishData.fishXp = fishData.fishXp + xp_gained;
    // visual updates
    update_total_xp(xp_gained);
    update("fishingXp", `Fishing Experience: ${fishData.fishXp}`);
    execute_fishing(1);

}

