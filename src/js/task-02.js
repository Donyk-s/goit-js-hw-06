const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const container = document.querySelector('#ingredients');
// const liItems = document.createElement("<li>");
ingredients.forEach((ingredientsItem) => {
  const liEl = document.createElement('li');
  liEl.classList.add('item')
  liEl.textContent = ingredientsItem;
  container.append(liEl)
})
// 2 variant
//  const itemIngredients = ingredients.reduce(
//   (acum, el) => (acum += `<li>${el}</li>`),
//   ''
//  );

//  container.innerHTML = itemIngredients;

