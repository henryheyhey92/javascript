// the first parameter is the relative URL of the file

axios.get('data.json').then(function(response){
    console.log("data has been fetch")
    let movie = response.data;
    console.log(movie);
    document.querySelector('#title').innerHTML = movie.title;
    document.querySelector('#year_released').innerHTML = movie.year_released;
})