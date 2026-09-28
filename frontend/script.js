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
        preservatives: "Yes",
        barcode: "8901234567890"
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
        preservatives: "Yes",
         barcode: "8901491101844"
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
        preservatives: "Yes",
        barcode : "7622201149437"
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
        preservatives: "Yes",
        barcode: "8901491361026"
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
        preservatives: "Yes",
        barcode: "8901233022321"
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
        preservatives: "Yes",
        barcode: "8901499008183"
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
    | Fibre: ${product.fibre} | Preservatives: ${product.preservatives} 
    | barcode: ${product.barcode}` ;
    
    }    
    else {
        searchResult.textContent = "Product not found";
    }
});


 const exploreBtn = document.querySelector(".start-btn");
const palmOilBtn = document.querySelector("#palmOilBtn");
const  sugarBtn = document.querySelector("#sugarBtn");
const palmOilLesson = document.querySelector("#palmOilLesson");
const sugarLesson = document.querySelector("#sugarLesson");
const  sodiumBtn = document.querySelector("#sodiumBtn");
const sodiumLesson = document.querySelector("#sodiumLesson");
const fibreBtn = document.querySelector("#fibreBtn");
const fibreLesson = document.querySelector("#fibreLesson");
const scanBtn = document.querySelector("#scanBtn");
const cameraBtn = document.querySelector(".camera-btn");
const cameraPreview = document.querySelector("#cameraPreview");
const barcodeResult = document.querySelector("#barcodeResult");

palmOilBtn.addEventListener("click", () => {
    console.log("Palm Oil button clicked");

    palmOilLesson.textContent = "Palm oil comes from palm trees and is used in many packaged foods. Your body needs some fat,but too much of certain fats isn't good for you."
 
});
fibreBtn.addEventListener("click", () => {
    console.log("Fibre button clicked");
    fibreLesson.textContent = "💪 Fibre is your tummy's helper! It helps keep digestion happy and can help you feel full. Look for fibre when you scan your food! 🦸‍♂️🌾"
});

sugarBtn.addEventListener("click", () => {
    console.log("Sugar button clicked");
    sugarLesson.textContent =  "🔎 Sugar Detective! When you scan a food, look for 'Total Sugars' and 'Added Sugars' on its nutrition label.";
});
sodiumBtn.addEventListener("click", () => {
    console.log("Sodium button clicked");
    sodiumLesson.textContent = "🔎 Sodium Sleuth! When you scan a food, look for 'Sodium' on its nutrition label.";
});
exploreBtn.addEventListener("click", () => {
    document.querySelector("#food-school").scrollIntoView({
    behavior: "smooth"
     });
});

scanBtn.addEventListener("click", () => {
    console.log("Scan button clicked");
    document.querySelector("#scanner").scrollIntoView({
        behavior: "smooth"
    });
});

 
 cameraBtn.addEventListener("click", async () => {
console.log("Starting barcode scanner...");
try {

    const result = await codeReader.decodeOnceFromVideoDevice(
        undefined,
         "cameraPreview"
        );
const barcode = result.text;
console.log("Barcode detected:",barcode);
const product = foodItems.find(item => item.barcode === barcode);
if(product){
    barcodeResult.textContent =
     `Product found: ${product.name} | Rating: ${product.Rating} | ` +
        `Quantity: ${product.quantity} | Sugar: ${product.sugar} | ` +
        `Sodium: ${product.sodium} | Palm Oil: ${product.palmOil} | ` +
        `Fibre: ${product.fibre} | Preservatives: ${product.preservatives}`;
}
else{
    barcodeResult.textContent ="Product not found"
}


} catch(eroor){
        console.error("barcode scanning error:", error);
    }
});
 

const codeReader = new ZXingBrowser.BrowserMultiFormatReader();

console.log("ZXing scanner ready ✅");

 fetch("http://127.0.0.1:8000/food/8901491101844")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });