from flask import Flask, request
from flask_cors import CORS
from flask_mysqldb import MySQL

api = Flask(__name__)
CORS(api)

@api.route('/profile')
def my_profile():

    #return ''
    response_body = {
        "name": "Testing",
        "about" :"Hello! This is a test."

    }

    return response_body