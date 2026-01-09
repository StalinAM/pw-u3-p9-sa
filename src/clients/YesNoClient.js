import axios from 'axios'

const consumirAPI = async () => {
  const respuesta = axios
    .get('https://yesno.wtf/api')
    .then((response) => response.data)

  console.log(respuesta)

  return respuesta
}

export async function consumirAPIFacade() {
  return await consumirAPI()
}
