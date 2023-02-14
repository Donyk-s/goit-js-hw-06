const counterValue = {
    value: 0,
    increment () {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement () {
        console.log('decrement -> this', this);
          this.value -= 1;
    }
}

const decrementBtn = document.querySelector('button[data-action="decrement"]')
console.log(decrementBtn.dataset.action)
const incrementBtn = document.querySelector('button[data-action="increment"]')
console.log(incrementBtn.dataset.action)
const counterVal = document.querySelector('#value')
console.log(counterVal)
decrementBtn.addEventListener('click', function () {
    counterValue.decrement()
    console.log(counterValue);
    counterVal.textContent = counterValue.value
})
incrementBtn.addEventListener('click',function () {
     counterValue.increment()
    counterVal.textContent = counterValue.value
})