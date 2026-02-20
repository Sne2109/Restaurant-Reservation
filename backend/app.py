from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import database

app = Flask(__name__)
CORS(app)


def get_db():
    return sqlite3.connect("restaurant.db")


# REGISTER
@app.route("/register", methods=["POST"])
def register():

    data = request.json

    conn = get_db()
    cursor = conn.cursor()

    try:

        cursor.execute(
            "INSERT INTO users(name,email,password) VALUES(?,?,?)",
            (data["name"], data["email"], data["password"])
        )

        conn.commit()

        return jsonify({"message": "User registered"}), 200

    except:

        return jsonify({"message": "Email exists"}), 400


# LOGIN
@app.route("/login", methods=["POST"])
def login():

    data = request.json

    email = data.get("email")
    password = data.get("password")

    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE email=? AND password=?",
        (email,password)
    )

    user = cursor.fetchone()

    conn.close()

    if user:
        return jsonify({"message":"Login successful"}), 200
    else:
        return jsonify({"message":"Invalid credentials"}), 401

# RESERVE
@app.route("/reserve", methods=["POST"])
def reserve():

    data = request.json

    conn = get_db()
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO reservations(name,email,date,time,guests) VALUES(?,?,?,?,?)",
        (
            data["name"],
            data["email"],
            data["date"],
            data["time"],
            data["guests"]
        )
    )

    conn.commit()

    return jsonify({"message": "Reservation saved"})


# HISTORY
@app.route("/history/<email>")
def history(email):

    conn = get_db()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT name,email,date,time,guests FROM reservations WHERE email=?",
        (email,)
    )

    rows = cursor.fetchall()

    result = []

    for r in rows:

        result.append({

            "name": r[0],
            "email": r[1],
            "date": r[2],
            "time": r[3],
            "guests": r[4]

        })

    return jsonify(result)


# CHATBOT
@app.route("/chat", methods=["POST"])
def chat():

    msg = request.json["message"].lower()

    if "reserve" in msg:
        reply = "Go to reservation page to reserve table."

    elif "hello" in msg:
        reply = "Hello! Welcome to Restaurant Bot."

    else:
        reply = "I can help with reservations."

    return jsonify({"reply": reply})


if __name__ == "__main__":

    app.run(debug=True)