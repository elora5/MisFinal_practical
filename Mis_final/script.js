const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const mealResults = document.getElementById("meal-results");
const showAllContainer = document.getElementById("show-all-container");

async function fetchMeals(query) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.meals || []