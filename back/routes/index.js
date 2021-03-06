var express = require('express');
const Test = require('../models/Test');
var axios = require("axios");
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next)=> {
  const test = await Test.find({});
  console.log(test);
  res.json(test);
});

router.post('/crudtest', async(req, res, next)=> {
  try {
    const request_body = {
      startDate: "2022-01-01",
      endDate: "2022-02-01",
      timeUnit: "month",
      keywordGroups: [
        { groupName: "치킨", keywords: ["BBQ", "BHC", "교촌치킨"] },
        { groupName: "떡볶이", keywords: ["엽기떡볶이","신전떡볶이", "배떡"] },
      ],
    };
    const url = 'https://openapi.naver.com/v1/datalab/search';
    const headers =  {
      'Content-Type': 'application/json',
      'X-Naver-Client-Id': 'X2kPcT_cm1O2uk2dGk5i',
      'X-Naver-Client-Secret': 'G9VNpIhvcx',
    };
    const result = await axios.post(url,request_body,{
      headers:headers
    })
    console.log(result.data);
    return res.json(result.data);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

// fetch("https://lucia91.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=Jp52IFSMFJpmbjUIxUhkvC&state=omg&redirect_uri=https://lucia91.cafe24.com/category/test/24/&scope=mall.read_product",
//     {
//         method: 'GET',
//         headers: {
//             'Authorization': 'Bearer vA1S02vxL9EkLRbfNeGPlB',
//             'X-Cafe24-Api-Version': '2021-12-01',
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*'
//         },
//         mode: 'cors',
//         credentials: "same-origin"
//     })
//     .then(resposnse => response.json())
//     .then(myJson => {
//         console.log();
//     })

router.get('/crudtest', async(req, res, next)=> {
  try {
    const url = 'https://lucia91.cafe24api.com/api/v2/admin/products';
    const headers =  {
      'Authorization': 'Bearer F5DeJAYnM6GfiPBA7kt3EP',
      'X-Cafe24-Api-Version': '2021-12-01',
      'Content-Type': 'application/json',
    };
    const result = await axios.get(url,{
      headers:headers
    })
    console.log(result);
    //프론트로 다시 보냄
    res.send(result.data);
    
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});
module.exports = router;
