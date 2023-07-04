// Add an item to the player's inventory
function addItemToInventory(itemName, quantity) {
  if (gameData.player.inventory[itemName]) {
    gameData.player.inventory[itemName] += quantity;
  } else {
    gameData.player.inventory[itemName] = quantity;
  }
  saveGameData();
  displayInventory();
}

// Remove an item from the player's inventory
function removeItemFromInventory(itemName, quantity) {
  if (gameData.player.inventory[itemName]) {
    gameData.player.inventory[itemName] -= quantity;
    if (gameData.player.inventory[itemName] <= 0) {
      delete gameData.player.inventory[itemName];
    }
    saveGameData();
    displayInventory();
  }
}

// Get the quantity of a specific item in the player's inventory
function getItemQuantity(itemName) {
  return gameData.player.inventory[itemName] || 0;
}

// Display the inventory in an HTML element
function displayInventory() {
  const inventoryElement = document.getElementById("inventory");
  let inventoryHTML = "<div>";
  for (const item in gameData.player.inventory) {
    const quantity = gameData.player.inventory[item];
    inventoryHTML += `<p>${item}: ${quantity}</p>`;
  }
  inventoryHTML += "</div>";
  inventoryElement.innerHTML = inventoryHTML;
}
