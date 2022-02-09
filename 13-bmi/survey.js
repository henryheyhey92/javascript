let btn = document.querySelector('#btn');

//add event listener such that when it clicks, it will
//run the function defined as the second parameter
btn.addEventListener('click', function(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    //let rating = document.querySelector('.rating:checked').value;
    let rating = null;
    let rb = document.querySelectorAll('.rating');
    for(let eachRating of rb)
    {
        if(eachRating.checked == true)
        {
            rating = eachRating.value;
            break;
        }
    }
    

    // let selectedCheckboxes = document.querySelectorAll('.hear-about:checked');
    // let hearAbout = [];

    // for(let checkbox of selectedCheckboxes)
    // {
    //     hearAbout.push(checkbox.value);
    // }

    //use linear search

    let allCheckboxes = document.getElementsByClassName('hear-about');
    let hearAbout = [];
    for(let checkbox of allCheckboxes)
    {
        if(checkbox.checked == true)
        {
            hearAbout.push(checkbox.value);
        }
    }
    console.log(name, email, rating, hearAbout);
})