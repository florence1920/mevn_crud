import axios from 'axios';

//옷 전체 가져오기
function getTest(){
    console.log('api');
    const url = 'http://localhost:3000/'
    return axios.get(url);
}


export { getTest };