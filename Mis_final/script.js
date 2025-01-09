const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const mealResults = document.getElementById("meal-results");
const showAllContainer = document.getElementById("show-all-container");

async function fetchMeals(query) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.meals || [];
}

function renderMeals(meals, showAll = false) {
    mealResults.innerHTML = "";
    showAllContainer.innerHTML = "";

    const mealsToShow = showAll ? meals : meals.slice(0, 5);

    mealsToShow.forEach(meal => {
        const mealCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">ID: ${meal.idMeal}</p>
                        <p class="card-text">${meal.strInstructions.substring(0, 100)}...</p>
                    </div>
                </div>
            </div>
        `;
        mealResults.insertAdjacentHTML("beforeend", mealCard);
    });