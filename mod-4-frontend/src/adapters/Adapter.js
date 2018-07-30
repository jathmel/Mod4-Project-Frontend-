const userURL = `http://localhost:4000/api/v1/users/`
const planetsURL = `http://localhost:4000/api/v1/planets/`

const createUser = (name, username, password) => {
  const user = {name: name, username: username, password: password}
  const options = {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  }
  return fetch(userURL, options).then(response => response.json())
}
const getUser = (username, password) => {
  fetch(userURL).then(response => response.json())

}
export {
  createUser
}
