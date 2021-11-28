import { menu } from "./items.js";

const container = document.querySelector('.section-center');

export function displayMenu(arr){
    let allItems = arr.map((item)=>{
        return `
    <!-- single item -->
        <article class="menu-item ${item.category}">
          <img src="${item.img}" class="photo" alt="${item.title}" />
          <div class="item-info">
            <section>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </section>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article> 
        <!-- end of single item -->`
    }).join('');

    container.innerHTML = allItems;
}