CREATE TABLE food_items (
    id SERIAL PRIMARY KEY,
    barcode VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(100),
    quantity VARCHAR(50),
    sugar VARCHAR(20),
    sodium VARCHAR(20),
    palm_oil VARCHAR(20),
    fibre VARCHAR(20),
    rating VARCHAR(5),
    preservatives VARCHAR(20)
);