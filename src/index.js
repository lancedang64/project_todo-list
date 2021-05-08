// import "./style.css";
// uncomment for DIST !!!
// comment for SRC !!!

import domCreator from './modules/domCreator.js';
import itemFactory from './modules/item.js';

const myItem = itemFactory('Learn Shortcuts','James website', '1/6/21', 1)
const myDomItem = domCreator.getItem(myItem);
document.querySelector('.content').appendChild(myDomItem);