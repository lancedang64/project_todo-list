// import "./style.css";
// uncomment for DIST !!!
// comment for SRC !!!

// import domController from './modules/domCreator.js';
import itemFactory from './modules/item.js';
// import eventsHandler from './modules/eventsHandler.js';
import coordinator from './modules/coordinator.js';
import dataController from './modules/dataController.js'

const myItem = itemFactory('Learn Shortcuts','James website', '01/06/2021',"Other", "!!")
// const myDomItem = domController.getItem(myItem);
// document.querySelector('.content').appendChild(myDomItem);

dataController.addToAllItems(myItem);
coordinator.loadHomePage();
