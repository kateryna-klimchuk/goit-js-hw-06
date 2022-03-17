
const categoriesEl = document.querySelector('#categories');
console.log('Number of categories:', categoriesEl.children.length);


const all2 = [...categoriesEl.children].forEach(item => {
    return console.log('Category: ', item.firstElementChild.textContent),
    console.log('Elements: ', item.lastElementChild.children.length);
});
