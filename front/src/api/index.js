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

function getCafe(){
    const url = 'http://localhost:3000/crudtest'
    return axios.get(url);
}


export { getTest, getLap, getCafe};