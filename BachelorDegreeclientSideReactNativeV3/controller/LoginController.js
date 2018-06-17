const tryLoginUrl = 'http://192.168.100.2:5000/handleClient/tryLogin';

export async function tryLogin(mail, password){

    const userObj = {
        mail: mail,
        password: password
    };
    return 1;
    /*try {

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
      }*/


}
