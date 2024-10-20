from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone
import mysql.connector


app = Flask(__name__)

# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///user_info.db"
# db = SQLAlchemy(app)
# conn = mysql.connector.connect(
#     host="sql.freedb.tech",
#     user="freedb_user_101",
#     password="7aGdxGx*qP&Ymd7",
#     database="freedb_127.0.0.1",
# )
# date_created = db.Column(db.DateTime, default=datetime.now(timezone.utc))
# cursor = conn.cursor()


@app.route("/home")
def home():
    return render_template("home.html")


@app.route("/")
def login():
    return render_template("login.html")


@app.route("/register")
def register():
    return render_template("register.html")


@app.route("/login_validation", methods=["POST"])
def login_validation():
    email = request.form.get("email")
    password = request.form.get("password")
    # cursor.execute(
    #     """SELECT * FROM `users` WHERE `email` = %s AND `password` = %s""",
    #     (email, password),
    # )
    # users = cursor.fetchall()
    # return users


if __name__ == "__main__":
    app.run(debug=True, port=8002)
    print("hello")
print("hello")
