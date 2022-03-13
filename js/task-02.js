const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const createListItem = options => {

  return options.map(option => {
    const element = document.createElement('li');
    element.classList.add('item');
    element.textContent = option;

    return element;
  })
};

const elements = createListItem(ingredients);

ingredientsEl.append(...elements);