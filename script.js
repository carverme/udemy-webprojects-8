const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal');

//Function, search meal and fetch from API
function searchMeal(e) {
    e.preventDefault();
//Clear single meal element
    single_mealEl.innerHTML = '';

//Get search term
const term = search.nodeValue;

console.log(term);
}




//Event Listeners
submit.addEventListener('submit', searchMeal);
