import socket
from flask import Flask
from flask import app
from flask import request, jsonify
from DatabaseHandler.UserDatabaseHandler import addUser, checkUser, getData


app = Flask(__name__)

@app.route('/handleClient/tryLogin', methods=['POST'])
def tryLogin():
    print(' Requesting login.. ')

    data = request.get_json()

    mail = data['mail']
    password = data['password']

    print(mail)
    print(password)

    if checkUser(mail, password) == False:
        return '0', 403

    return '1', 202


@app.route('/handleClient/trySignup', methods=['POST'])
def trySignUp():
    print(' Requesting signup.. ')

    data = request.get_json()

    name = data['name']
    surname = data['surname']
    mail = data['mail']
    password = data['password']

    print(name)
    print(surname)

    try:
        addUser(name, surname, mail,password)

        return '1', 201
    except Exception as err:
        print(err)
        return '0', 403



@app.route('/handleClient/getUserData', methods=['POST'])
def getUserData():

    print('Requesting user data.. ')

    data = request.get_json()

    mail = data['mail']

    print(mail)

    try:
        data = getData(mail)

        return jsonify(data)
    except Exception as err:
        print(err)




if __name__ == '__main__':
    app.run(host=socket.gethostbyname(socket.gethostname()), port=5000)