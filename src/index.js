// import "./style.css";
// uncomment for DIST !!!
// comment for SRC !!!

import itemFactory from './modules/item.js';
import coordinator from './modules/coordinator.js';
import dataController from './modules/dataController.js'

const myItem = itemFactory('Learn Shortcuts','James website', '01/06/2021',"Coding", "!!");
const myItem2 = itemFactory('Study React','Do TOP projects', '07/06/2021',"Coding", "!!!");
const myItem3 = itemFactory('Do interview questions','Leetcode', '10/06/2021',"Coding", "!");
const myItem4 = itemFactory('Do groceries shopping','at Woolies', '02/06/2021',"Life", "!");

dataController.addToAllItems(myItem);
dataController.addToAllItems(myItem2);
dataController.addToAllItems(myItem3);
dataController.addToAllItems(myItem4);

coordinator.loadHomePage();
