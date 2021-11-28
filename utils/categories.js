import { menu } from "./items.js";

export function categories(){
let categories = menu.map(item=>item.category);
    return new Set(categories);
}
