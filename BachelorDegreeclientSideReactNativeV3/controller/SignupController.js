const tryLoginUrl = 'http://192.168.100.2:5000/handleClient/trySignup';

export async function trySignup(name, surname, mail, password){

    //return 1;

    const userObj = {
        name: name,
        surname: surname,
        mail: mail,
        password: password
    };

    try {

        let response = await fetch(
            tryLoginUrl,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(userObj)
            });
        let responseJson = await response.json();
        
        return responseJson;

      } catch (error) {
        console.error(error);
      }
}