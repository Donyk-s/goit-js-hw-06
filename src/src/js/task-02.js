const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// const container = document.querySelector('#main-container');
// const ulEl = document.createElement('ul');

//  const techElements = technologies
//   .map((el) => `<li>${el}</li>`)
//   .join('');

ingredients.forEach((ingredientsItem) => {
  //  const liEl = document.createElement('li');
  // liEl.textContent = ingredientsItem;
  //  ingredients.append(liEl)

  //  const liEl = `<li>${ingredientsItem}</li>`;
  //  ingredients.insertAdjacentHTML('afterbegin', liEl);
});

 const itemIngredients = ingredients.reduce(
  (acum, el) => (acum += `<li>${el}</li>`),
  ''
 );

 ingredients.innerHTML = itemIngredients;

document.body.append(ingredients);
