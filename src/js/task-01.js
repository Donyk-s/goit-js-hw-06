const allCategories = categories.querySelectorAll(".item")
// console.log(allCategories)
const numberCategories = allCategories.length
console.log(`Number of categories: ${numberCategories}`)

const linkItem = allCategories.forEach(element => {
    console.log(`Category:${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.children.length}`)
});