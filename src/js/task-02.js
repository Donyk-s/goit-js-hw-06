const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const container = document.querySelector('#ingredients');

const newArray = ingredients.map((ingredientsItem) => {
  const liItem = document.createElement("li");
  liItem.classList.add('item');
  liItem.textContent = ingredientsItem;
  container.append(liItem)
 })  

