import {menu} from './utils/items.js'
import {categories} from './utils/categories.js'
import { displayBtns } from './utils/displayBtns.js';
import { displayMenu } from './utils/displayMenu.js';
import { displayCtgs } from './utils/displayCtgs.js';
import { darkModeFunctionality } from './Darkmode Feature/darkMode.js';

const ctgs = Array.from(categories());

function display(){
    displayBtns(ctgs);
    displayMenu(menu);
    displayCtgs();
}
darkModeFunctionality();

window.addEventListener('DOMContentLoaded', display());
