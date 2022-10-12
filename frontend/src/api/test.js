import axios from 'axios'
const url = "http://127.0.0.1:5000//profile"

export const getData = () => new Promise((resolve, reject) => {
        axios.get(url)
          .then(x => resolve(x.data))
          .catch(x => {
            alert("failure");
            reject(x);
          });
      });