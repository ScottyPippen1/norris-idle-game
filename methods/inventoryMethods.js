class ItemNode {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class InventoryList {
  constructor(inv) {
    this.head = null;
    this.targetElement = document.getElementById(inv);
  }

  addItem(itemName) {
    const item = new ItemNode(itemName);
    let current;
    if (!this.head) {
      this.head = item;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = item;
    }
    this.updateElement();
  }

  updateElement() {
    let current = this.head;
    let content = "";
    while (current !== null) {
      content += `${current.name}<br>`;
      current = current.next;
    }
    this.targetElement.innerHTML = content;
  }

  countOccurrences() {
    const countMap = new Map();
    let current = this.head;
    while (current !== null) {
      const invItem = current.name;
      if (countMap.has(invItem)) {
        countMap.set(invItem, countMap.get(invItem) + 1);
      } else {
        countMap.set(invItem, 1);
      }
      current = current.next;
    }

    this.targetElement.innerHTML = "";

    countMap.forEach((count, invItem) => {
      console.log(`Item: ${invItem}, Amount: ${count}`);
      const itemInfo = document.createElement("div");
      itemInfo.innerHTML = `${invItem}: ${count}`;
      this.targetElement.appendChild(itemInfo);
    });
  }

  saveToLocalStorage() {
    const invArray = [];
    let current = this.head;
    while (current !== null) {
      invArray.push(current.name);
      current = current.next;
    }
    localStorage.setItem("inventoryList", JSON.stringify(invArray));
  }

  loadFromLocalStorage() {
    const savedInvArray = localStorage.getItem("inventoryList");
    if (savedInvArray) {
      const invArray = JSON.parse(savedInvArray);
      this.head = null;
      invArray.forEach((invItem) => {
        this.addItem(invItem);
      });
    }
    this.countOccurrences();
  }
}

const inv = new InventoryList("inv");
