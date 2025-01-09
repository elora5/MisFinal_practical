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