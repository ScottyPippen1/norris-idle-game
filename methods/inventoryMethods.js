// Add an item to the inventory using the API
async function addItemToInventory(itemName, quantity) {
  try {
    const response = await fetch("http://localhost:3000/inventory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item_name: itemName, quantity: quantity }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message); // Item added to inventory
    } else {
      console.error("Failed to add item to inventory:", response.status);
    }
  } catch (error) {
    console.error("Error adding item to inventory:", error);
  }
}

// Remove all items from the inventory using the API
async function removeAllItemsFromInventory() {
  try {
    const response = await fetch("http://localhost:3000/inventory", {
      method: "DELETE",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.message); // All items removed from inventory
    } else {
      console.error(
        "Failed to remove all items from inventory:",
        response.status
      );
    }
  } catch (error) {
    console.error("Error removing all items from inventory:", error);
  }
}

// Get all items in the inventory using the API
async function getInventoryItems() {
  try {
    const response = await fetch("http://localhost:3000/inventory");

    if (response.ok) {
      const data = await response.json();
      console.log(data); // Array of inventroy items
    } else {
      console.error("Failed to retrieve inventory:", response.status);
    }
  } catch (error) {
    console.error("Error retrieving inventory:", error);
  }
}

// // Display the inventory in an HTML element
// function displayInventory() {
//   const inventoryElement = document.getElementById("inventory");
//   let inventoryHTML = "<div>";
//   for (const item in gameData.player.inventory) {
//     const quantity = gameData.player.inventory[item];
//     inventoryHTML += `<p>${item}: ${quantity}</p>`;
//   }
//   inventoryHTML += "</div>";
//   inventoryElement.innerHTML = inventoryHTML;
// }
