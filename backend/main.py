import psycopg
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
conn = psycopg.connect(
    host="localhost",
    dbname="foodlens",
    user="postgres",
    password="YOUR_POSTGRES_PASSWORD",
    port=5432
)

print("Database connected!")
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/food/{barcode}")
def get_food(barcode: str):

    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT barcode, name, category, quantity,
               sugar, sodium, palm_oil, fibre,
               rating, preservatives
        FROM food_items
        WHERE barcode = %s
        """,
        (barcode,)
    )

    product = cursor.fetchone()

    cursor.close()

    if product:
        return {
            "barcode": product[0],
            "name": product[1],
            "category": product[2],
            "quantity": product[3],
            "sugar": product[4],
            "sodium": product[5],
            "palmOil": product[6],
            "fibre": product[7],
            "rating": product[8],
            "preservatives": product[9]
        }

    return {
        "message": "Product not found"
    }


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
    },

    "8901234567890": {
    "name": "Maggi",
    "category": "Instant Noodles",
    "sugar": "Low",
    "sodium": "High",
    "palmOil": "Yes",
    "fibre": "Low",
    "rating": "D"
},
"7622201149437": {
    "name": "Chocolate",
    "category": "Confectionery",
    "sugar": "High",
    "sodium": "Low",
    "palmOil": "Yes",
    "fibre": "Low",
    "rating": "C"
},

"8901233022321": {
    "name": "Oreo",
    "category": "Biscuits",
    "sugar": "High",
    "sodium": "Low",
    "palmOil": "Yes",
    "fibre": "Low",
    "rating": "C"
},

"8901499008183": {
    "name": "Cornflakes",
    "category": "Breakfast Cereal",
    "sugar": "Medium",
    "sodium": "Low",
    "palmOil": "Yes",
    "fibre": "High",
    "rating": "B"
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