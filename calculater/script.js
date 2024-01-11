
const numsBtns = document.querySelectorAll('[data-name=num]');
let numbers = document.querySelector('[name=numbers]');
const equal = document.querySelector('[data-name=equal]');
const del = document.querySelector('[data-name=del]');
const ac = document.querySelector('[data-name=ac]');
const op = document.querySelectorAll('[data-name=op]');

numsBtns.forEach( num => {
    num.addEventListener('click', e => {
        numbers.value += e.currentTarget.dataset.text;
    });
});
equal.addEventListener('click', () => {
    let total = eval(numbers.value);
    numbers.value = total;
});
del.addEventListener('click', () => {
    let value = numbers.value;
    let sub = value.substring(0, value.length-1);
    numbers.value = sub;
});
ac.addEventListener('click', () => {
    numbers.value = '';
});
op.forEach( o => {
    o.addEventListener('click', e => {
        numbers.value += e.currentTarget.dataset.text;
    });
});


