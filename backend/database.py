import sqlite3

def init_db():

    conn = sqlite3.connect("restaurant.db")
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT
    )
    """)

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS reservations(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        date TEXT,
        time TEXT,
        guests INTEGER
    )
    """)

    conn.commit()
    conn.close()

init_db()