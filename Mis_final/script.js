const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const mealResults = document.getElementById("meal-results");
const showAllContainer = document.getElementById("show-all-container");

async function fetchMeals(query) {
    const url = 