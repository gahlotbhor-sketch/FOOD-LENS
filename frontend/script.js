console.log("FoodLens JS connected!");

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const searchResult = document.querySelector("#searchResult");


let foodItems = [

    {
        name: "Maggi",
        category: "Instant Noodles",
        quantity: "70 grams",
        sugar: "Low",
        sodium: "High",
        palmOil: "Yes",
        fibre: "Low",
        Rating: "D",
        preservatives: "Yes"
    },

    {
        name: "Lays",
        category: "Chips",
        quantity: "50 grams",
        sugar: "Low",
        sodium: "High",
        palmOil: "Yes",
        fibre: "Low",
        Rating: "D",
        preservatives: "Yes"
    },

    {
        name: "Chocolate",
        category: "Confectionery",
        quantity: "100 grams",
        sugar: "High",
        sodium: "Low",
        palmOil: "Yes",
        fibre: "Low",
        Rating: "C",
        preservatives: "Yes"
    },

    {
        name: "Kurkure",
        category: "Snacks",
        quantity: "50 grams",
        sugar: "Low",
        sodium: "High",
        palmOil: "Yes",
        fibre: "Low",
        Rating: "D",
        preservatives: "Yes"
    },

    {
        name: "Oreo",
        category: "Biscuits",
        quantity: "50 grams",
        sugar: "High",
        sodium: "Low",
        palmOil: "Yes",
        fibre: "Low",
        Rating: "C",
        preservatives: "Yes"
    },

    {
        name: "Cornflakes",
        category: "Breakfast Cereal",
        quantity: "250 grams",
        sugar: "Medium",
        sodium: "Low",
        palmOil: "Yes",
        fibre: "High",
        Rating: "B",
        preservatives: "Yes"
    }

];


searchBtn.addEventListener("click", () => {

    const food = searchInput.value.trim().toLowerCase();

    const product = foodItems.find(item =>
        item.name.toLowerCase() === food
    );

    if (product) {

            searchResult.textContent = `
    Product found: ${product.name} | Rating: ${product.Rating}
    | Quantity: ${product.quantity} | Sugar: ${product.sugar}
    | Sodium: ${product.sodium} | Palm Oil: ${product.palmOil}
    | Fibre: ${product.fibre} | Preservatives: ${product.preservatives} `;
    
    }    
    else {
        searchResult.textContent = "Product not found";
    }
});


 const exploreBtn = document.querySelector(".start-btn");
const palmOilBtn = document.querySelector("#palmOilBtn");


palmOilBtn.addEventListener("click", () => {
    console.log("Palm Oil button clicked");

    palmOilLesson.textContent = "Palm oil comes from palm trees and is used in many packaged foods. Your body needs some fat,but too much of certain fats isn't good for you."
 
});
exploreBtn.addEventListener("click", () => {
    document.querySelector("#food-school").scrollIntoView({
    behavior: "smooth"
     });
});