const btnContainer = document.querySelector('.btnContainer');

export function displayBtns(c){
    c.unshift(`ALL`);
    let nBtns = c.map((ctg=> `
    <button class="btn category">${ctg}</button>
    `)).join('');
    btnContainer.innerHTML = nBtns;
}