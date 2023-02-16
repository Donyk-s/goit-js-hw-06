const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const container = document.querySelector('#ingredients');
//  const liItems = document.createElement("li");

let newArray = []
ingredients.map((ingredientsItem) => {
  const liItems = document.createElement("li");
  liItems.classList.add('item');
  liItems.textContent = ingredientsItem;
  newArray.push(ingredientsItem) 
 })  
container.append(newArray)

//2 variant
//  const itemIngredients = ingredients.reduce(
//   (acum, el) => (acum += `<li>${el}</li>`),
//   ''
//  );


//  container.innerHTML = itemIngredients;

