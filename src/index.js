// import "./style.css";
// uncomment for DIST !!!
// comment for SRC !!!

// import domController from './modules/domCreator.js';
// import itemFactory from './modules/item.js';
import eventsHandler from './modules/eventsHandler.js';

// const myItem = itemFactory('Learn Shortcuts','James website', '1/6/21', 1)
// const myDomItem = domController.getItem(myItem);
// document.querySelector('.content').appendChild(myDomItem);
eventsHandler.addListenersOnPageLoad();
