
console.log("FoodLens JS connected!");

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const searchResult = document.querySelector("#searchResult");

let Maggi = {
    name: "Maggi",
    category: "Instant Noodles",
    quantity: "70 grams",
    sugar: "Low",
    sodium: "High",
    palmOil: "Yes",
    fibre: "Low",
    Rating: "D"
};

let lays = {
    name: "Lays",
    category: "Chips",
    quantity: "50 grams",
    sugar: "Low",
    sodium: "High",
    palmOil: "Yes",
    fibre: "Low",
    Rating: "D"
};

let chocolate = {
    name: "Chocolate",
    category: "Confectionery",
    quantity: "100 grams",
    sugar: "High",
    sodium: "Low",
    palmOil: "Yes",
    fibre: "Low",
    Rating: "C"
};
let kurkure = {
    name: "Kurkure",
    category: "Snacks",
    quantity: "50 grams",
    sugar: "Low",
    sodium: "High",
    palmOil: "Yes",
    fibre: "Low",
    Rating: "D"
};

searchBtn.addEventListener("click", () => {

    const food = searchInput.value.trim().toLowerCase();

    if (food === Maggi.name.toLowerCase()) {

        searchResult.textContent =
            `Product found: ${Maggi.name} | Rating: ${Maggi.Rating}`;

    } 
    
    else if (food === lays.name.toLowerCase()) {

        searchResult.textContent =
            `Product found: ${lays.name} | Rating: ${lays.Rating}`;

    } 
    
    else if (food === chocolate.name.toLowerCase()) {

        searchResult.textContent =
            `Product found: ${chocolate.name} | Rating: ${chocolate.Rating}`;

    } 
    
    else if (food === kurkure.name.toLowerCase()) {

        searchResult.textContent =
            `Product found: ${kurkure.name} | Rating: ${kurkure.Rating}`;

    } 
    
    else {

        searchResult.textContent = "Product not found";

    }

});

let foodItems = [Maggi, lays, chocolate, kurkure];

