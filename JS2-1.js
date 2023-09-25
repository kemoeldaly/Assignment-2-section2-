//! Content: Basic Data Structures

// Reading: EJS 5-6
// HW:
//* 1. Number Filter
// Given a list as a parameter,write a function that returns a list of numbers
//that are less than ten

// For example: Say your input parameter to the function is [1,11,14,5,8,9]...
// Your output should [1,5,8,9]
// Write a function that takes in two lists and returns the two lists
// merged together and sorted

function filteredList(list) {
  const filledList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] < 10) {
      filledList.push(list[i]);
    }
  }
  return filledList;
}

const inputList = [1, 11, 14, 5, 8, 9];
const outputList = filteredList(inputList);
console.log(outputList);

function mergeSort(list1, list2) {
  const mergedList = list1.concat(list2);
  return mergedList.sort((a, b) => a - b);
}

const list1 = [1, 5, 8];
const list2 = [2, 4, 6];
const mergedAndSorted = mergeSort(list1, list2);
console.log(mergedAndSorted);

//* 2. Build a Shopping Cart
// You can use either lists or dictionaries. The program should have the
// following capabilities:

// 1) Takes in input
// 2) Stores user input into a dictionary or list
// 3) The User can add or delete items
// 4) The User can see current shopping list
// 5) The program Loops until user 'quits'
// 6) Upon quitting the program, print out all items in the user's list
// function shoppingCart()

const cart = [];
while (true) {
  const userInput = prompt(
    "Enter 'add' to add an item, 'delete' to remove an item, 'show' to see the shopping list, or 'quit' to exit"
  );

  if (userInput === "add") {
    const item = prompt("Enter the item you want to add:");
    cart.push(item);
    console.log(`${item} added to the shoping list.`);
  } else if (userInput === "delete") {
    const itemToDelete = prompt("Enter the item you want to remove:");
    const index = cart.indexOf(itemToDelete);
    if (index !== -1) {
      cart.splice(index, 1);
      console.log(`${itemToDelete} removed from the shopping list`);
    } else {
      console.log(`${itemToDelete} not found in the shopping list`);
    }
  } else if (userInput === "show") {
    if (cart.length === 0) {
      console.log("Your shopping list is empty");
    } else {
      console.log("Your shopping list:");
      for (let i = 0; i < cart.length; i++) {
        console.log(`${i + 1}. ${cart[i]}`);
      }
    }
  } else if (userInput === "quit") {
    console.log(
      "Thank you for shopping with us. Here is your final shopping list:"
    );
    for (let i = 0; i < cart.length; i++) {
      console.log(`${i + 1}. ${cart[i]}`);
    }
    break;
  } else {
    console.log("Invalid input. Try again.");
  }
}
