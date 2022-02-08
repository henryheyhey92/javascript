let box = document.querySelector('#box');
let count = 0;
box.addEventListener('mouseenter', function(){
    box.style.backgroundColor = 'blue';
    count++;
    console.log(count);
    //box.innerHTML = count;
    document.querySelector('#output').innerHTML = count;
});

box.addEventListener('mouseleave', function(){
    box.style.backgroundColor = 'white';
})