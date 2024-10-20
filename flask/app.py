from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone


app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///./user_info.db"
db = SQLAlchemy(app)


class Expense_app(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    Expense = db.Column(db.String(500), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.now(timezone.utc))

    def __repr__(self):
        return f"{self.name}-{self.Expense}-{self.date_created}"


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
    return "the email {} and password is{}".format(email, password)


if __name__ == "__main__":
    app.run(debug=True)
