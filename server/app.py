import os
from datetime import datetime

from flask import Flask, send_from_directory, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ["DATABASE_URI"]
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True

db = SQLAlchemy(app)

Migrate(app, db)

class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), default="My Account")
    number = db.Column(db.String(99), unique=True, nullable=False)


class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    datetime = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    debit = db.Column(db.Boolean, nullable=False, default=True)
    to_from = db.Column(db.String(50), nullable=False)
    for_message = db.Column(db.String(50), nullable=True)


@app.route("/add-account", methods=["POST"])
def add_account():
    print(request.form)
    return {"res": "nice"}


    