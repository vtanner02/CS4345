from flask import Flask
from flask_cors import CORS
api = Flask(__name__)
CORS(api)
@api.route('/profile')
def my_profile():

    #return ''
    response_body = {
        "name": "Group",
        "about" :"Hello! This is a test."

    }

    return response_body