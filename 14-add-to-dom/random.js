let btn = document.querySelector('#btnAdd');
console.log(btn);
btn.addEventListener('click', function(){
    let number = Math.floor(Math.random() * 100+ 1);
    let numberList = document.querySelector('#numbers');
    numberList.innerHTML += `<li>${number}</li>`;
})

