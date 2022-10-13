from getpass import getpass
from mysql.connector import connect, Error
db = process.flaskenv
try:
    with connect(
        host=db['HOST'],
        user=db['USER'],
        password=db['PASSWORD'],
        port=db['PORT'],
        insecureAuth=db['INSECUREAUTH'],
        database=db['DATABASE'],
    ) as connection:
        print(connection)
except Error as e:
    print(e)

