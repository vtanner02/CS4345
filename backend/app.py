from flask import Flask, request
from flask_cors import CORS
from flask_mysqldb import MySQL
import os
api = Flask(__name__)
CORS(api)
from getpass import getpass
from mysql.connector import connect, Error
db = os.environ
conn=None
try:
    with connect(
        host=db['HOST'],
        user=db['USER'],
        password=db['PASSWORD'],
        port=db['PORT'],
        #insecureAuth=db['INSECUREAUTH'],
        database=db['DATABASE'],
    ) as connection:
        conn = connection
except Error as e:
    print(e)
print(conn)
conn.reconnect()
cursor = conn.cursor()
cursor.execute('show tables')
for table in cursor:
    print(table)

@api.route('/profile')
def my_profile():

    #return ''
    response_body = {
        "name": "Testing",
        "about" :"Hello! This is a test."

    }

    return response_body