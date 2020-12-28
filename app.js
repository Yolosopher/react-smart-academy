const form = document.getElementById('fiboForm')
const input = document.getElementById('number')
const output = document.querySelector('span')



form.addEventListener('submit', (e) => {
    e.preventDefault()
    let num = input.value
    let result = fiboFunc(num)
    output.innerText = result
})

const fiboFunc = (num) => {
    let a = 1, b = 0, temp;

    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}