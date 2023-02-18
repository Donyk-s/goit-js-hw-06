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
   liItem.textContent = ingredientsItem;
  liItem.classList.add('item');
 
  return liItem
})  
 container.append(...newArray)

