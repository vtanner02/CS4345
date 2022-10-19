from flask import Flask, request, make_response, jsonify
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL
import os
import logging
api = Flask(__name__)
cors = CORS(api,  resources={r"*": {"origins": "*"}})

from getpass import getpass
from mysql.connector import connect, Error
import json
db = os.environ
conn=None
logging.getLogger('flask_cors').level = logging.DEBUG
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
@api.route('/user', methods = ["GET", "POST", "OPTIONS"])
@cross_origin()
def user_route():
    if request.method == 'GET':
        email = request.args.get('email')
        password = request.args.get('password')
        cursor = conn.cursor()
        sql = 'select * from users where email = (%s) and password = (%s)'
        cursor.execute(sql, (email,password,))
        response = make_response(jsonify(cursor.fetchall()))
        return response
    elif request.method == "POST":
        data = json.loads(request.data)
        data = data["body"]
        print(data)
        email = data['email']
        password = data['password']
        first = data['first']
        print(first)
        last = data['last']
        u_type = data['u_type']
        query = 'insert into users(`first_name`, `last_name`, `password`,`email`, `user_type`) values((%s), (%s), (%s), (%s), (%s))'
        cursor = conn.cursor()
        cursor.execute(query, (first, last, password, email, u_type,))
        response = make_response(jsonify(cursor.fetchall()))
        return response


    '''
@api.route('/user', methods=['GET', 'OPTIONS'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def test():
    #if request.method == "OPTIONS": # CORS preflight
     #   return _build_cors_preflight_response()
    if request.method == 'GET' and 'email' in request.form:# and 'password' in request.form:
        #response.headers.add("Access-Control-Allow-Origin", "*")
        #print(response)
        response={}
        #response.headers.add('Access-Control-Allow-Headers', "*")
        #response.headers.add('Access-Control-Allow-Methods', "*")
        email = request.form['email']
        #passwd = request.form['password']
        cursor = conn.cursor()
        cursor.execute('select * from users where email = %s', email)
        data=cursor.fetchall()
        print(data)
        #data = cursor.fetchall()
        #data = jsonify(data)

        return json.dumps(data)#response
def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response
#def getUser(email, password):
 #   cursor.execute('select * from users')# where email = ' + email + "and password = " + password)
  #  data = cursor.fetchall()
   ##    return "Not found"
    #return data

@api.route('/profile')
def my_profile():

    #return ''
    response_body = {
        "name": "Testing",
        "about" :"Hello! This is a test."

    }

    return response_body

'''