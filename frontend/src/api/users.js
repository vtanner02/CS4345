
const user = {"id": 1, "email":"test@gmail.com"}
/*export const getUser = (email,password) => new Promise((resolve, reject) => {
    axios.post(`${apiEndpoint}/users/${email}/${password}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});*/

export const getUser = (email,password) =>{
    return user;
}