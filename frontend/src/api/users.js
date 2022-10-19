import axios from "axios";
const user = {"id": 1, "email":"test@gmail.com"}
const apiEndpoint = 'http://127.0.0.1:5000'

export const getUser = (email,password) => new Promise((resolve, reject) => {
    axios.get(`${apiEndpoint}/user`, {params:{
        'email':email,
        'password':password
    }, crossDomain:true})
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

/*export const getUser = (email,password) =>{
    return user;
}*/