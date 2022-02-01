import axios from 'axios';

function getTest(){
    const url = 'http://localhost:3000/'
    return axios.get(url);
}

function getLap(){
    console.log('api');
    const url = 'http://localhost:3000/crudtest'
    return axios.post(url);
}



export { getTest, getLap };