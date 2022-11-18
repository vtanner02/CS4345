import axios from "axios";
const user = {"id": 1, "email":"test@gmail.com"}
const apiEndpoint = 'http://127.0.0.1:5000'

export const getApps = (email,password) => new Promise((resolve, reject) => {
    axios.get(`${apiEndpoint}/postings`, {crossDomain:true})
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const addPosting = (body) => new Promise((resolve, reject) => {
    axios.post(`${apiEndpoint}/postings`, {body, crossDomain:true}).then(x=>resolve(x.data)).catch(x=>{
            alert(x);
            reject(x);
        });
});