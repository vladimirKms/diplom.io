"use strict";
import '../src/styles/index.css';
import {NewsApi} from '../src/js/modules/NewsApi.js';
const inputForm = document.querySelector('.header__input_user-data');
const input_request = inputForm.querySelector('.header__input_main_text');
let request_data_Input = input_request.value; 
let request_Data = "";
let url = "";
const api_key = "apikey=2ea0a1b1b13349cea59fdb75b902595f" 
let newArr = [];

inputForm.addEventListener('input', function(event){
 
  if (event.target.classList.contains('header__input_main_text'))
    console.log('InputData ', request_data_Input)
    request_data_Input = input_request.value  
});

inputForm.addEventListener('click', function(event){
 
    if (event.target.classList.contains('header__input_main_serch'))
    request_Data = request_data_Input;
    console.log('request_data_Input', request_Data);

   inputRequest(request_data_Input);

   url = 'http://newsapi.org/v2/everything?q='+ `${request_Data}`+
    '&language=ru&'+ `${api_key}`;
    /*'from=2020-06-19&to=2020-06-22&sortBy=publishedAt&' +*/

    /*'apiKey=2ea0a1b1b13349cea59fdb75b902595f';*/
    console.log('URL ', `${url}`)
    
    const request = new NewsApi(url, api_key);  
    request.getNews()
    .then ((res)=>{
  
      Arr(res)

    })
    return request_Data;
 
  });

function inputRequest (request){
console.log('REQ',request )
  return request_Data = request
}

console.log('requestData',request_Data)


function Arr(arr){
 newArr = arr;
 console.log('newArr ',newArr);
 document.getElementById('image_1').src = newArr.articles[0].urlToImage
}


