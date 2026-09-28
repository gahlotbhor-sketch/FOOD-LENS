from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "FoodLens backend is running!"}


food_items = {
    "8901491101844": {
        "name": "Lays",
        "category": "Chips",
        "sugar": "Low",
        "sodium": "High",
        "palmOil": "Yes",
        "fibre": "Low",
        "rating": "D"
    },

    "8901491361026": {
        "name": "Kurkure",
        "category": "Snacks",
        "sugar": "Low",
        "sodium": "High",
        "palmOil": "Yes",
        "fibre": "Low",
        "rating": "D"
    }
}


@app.get("/food/{barcode}")
def get_food(barcode: str):
    product = food_items.get(barcode)

    if product:
        return {
            "barcode": barcode,
            **product
        }

    return {
        "message": "Product not found"
    }