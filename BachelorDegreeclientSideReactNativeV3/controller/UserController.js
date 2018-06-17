const tryLoginUrl = 'http://192.168.100.2:5000/handleClient/getUserData';

export async function getUserData(params){

    const tokenObj = {
        mail: params
    }

    try {

        let response = await fetch(
            tryLoginUrl,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(tokenObj)
            });
        let responseJson = await response.json();
        console.log(responseJson);
        return responseJson;

      } catch (error) {
        console.error(error);
      }

}