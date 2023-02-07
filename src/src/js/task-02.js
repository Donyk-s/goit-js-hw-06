const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 const container = document.querySelector('#ingredients');
 const itemIngredients = ingredients.reduce(
  (acum, el) => (acum += `<li>${el}</li>`),
  ''
 );

 container.innerHTML = itemIngredients;

