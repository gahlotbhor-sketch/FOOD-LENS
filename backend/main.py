import os
import psycopg
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()


conn = psycopg.connect(
    host=os.getenv("DB_HOST"),
    dbname=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    port=os.getenv("DB_PORT")
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


@app.get("/")
def home():
    return {"message": "FoodLens backend is running!"}


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

