import sqlite3
import uuid
import os.path

# Add new user on signup
def addUser(name, surname, userMail, userPassword):

    try:
        #Connect to db

        db = sqlite3.connect('D:\BachelorDegree\BachelorDegree-serverSide\db\DB.db')
        cursor = db.cursor()
    except:
        raise Exception('Cannot connect to db')


    try:
        #Generate new id
        generatedId = uuid.uuid4()
    except:
        raise Exception('Cannot generate id')

    try:
        cursor.execute('''INSERT INTO user(userId, userMail, userPassword)
                          VALUES(:userId, :userMail ,:userPassword)''', {'userId':       str(generatedId),
                                                                         'userMail':     userMail,
                                                                         'userPassword': userPassword})


        cursor.execute('''INSERT INTO userDetails(userId, name, surname)
                                  VALUES(:userId, :name ,:surname)''', {'userId' : str(generatedId),
                                                                        'name'   : name,
                                                                        'surname': surname})


        db.commit()
    except Exception as err:
        print(err)
        raise  Exception('Cannot add user to db')

    #Close db
    db.close()


def checkUser(mail, password):

    try:
        # Connect to db

        db = sqlite3.connect('D:\BachelorDegree\BachelorDegree-serverSide\db\DB.db')
        cursor = db.cursor()
    except:
        raise Exception('Cannot connect to db')


    #Search in db
    cursor.execute('''SELECT rowid FROM user 
                      WHERE userMail     = :userMail AND 
                            userPassword = :userPassword''', { 'userMail': mail,
                                                               'userPassword': password})

    data = cursor.fetchall()

    # Close db
    db.close()

    if len(data) == 0:
        return False

    return True


def getData(mail):

    try:
        # Connect to db

        db = sqlite3.connect('D:\BachelorDegree\BachelorDegree-serverSide\db\DB.db')
        cursor = db.cursor()
    except:
        raise Exception('Cannot connect to db')

    #Get data from db

    cursor.execute('''SELECT * 
                      FROM UserDetails
                      WHERE userId IN 
                            (SELECT userId 
                             FROM User 
                             WHERE userMail = :mail)''', { 'mail': mail})

    auxData = cursor.fetchall()

    data = {
        'name': auxData[0][1],
        'surname': auxData[0][2],
        'photoLink': auxData[0][3]
    }

    # Close db
    db.close()

    return data