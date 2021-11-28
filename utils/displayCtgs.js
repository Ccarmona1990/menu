import { displayMenu } from "./displayMenu.js";
import { menu } from "./items.js";

export function displayCtgs(){
    const btnContainer = document.querySelector('.btnContainer');
    btnContainer.addEventListener('click',(e)=>{
        if(e.target.classList.contains('btnContainer'))return;
        let currCtg = e.target.innerHTML;
        let nArr = menu.filter(item=>{
            
            if (item.category == currCtg){
                return item
            } 
            if (currCtg == "ALL"){
                return menu
            }
        })
        //console.log(nArr);
        displayMenu(nArr);
    })}