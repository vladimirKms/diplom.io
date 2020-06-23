"use strict";
import '../src/styles/index.css';
import {NewsApi} from '../src/js/modules/NewsApi.js';
const inputForm = document.querySelector('.main__input__user-data');
const input_request = inputForm.querySelector('.main__input_text');
let request_data_Input = input_request.value; 
let request_Data = "";
let url = "";




let newArr = [];

inputForm.addEventListener('input', function(event){
 
  if (event.target.classList.contains('main__input_text'))
    console.log('InputData ', request_data_Input)
    request_data_Input = input_request.value  
});

inputForm.addEventListener('click', function(event){
 
    if (event.target.classList.contains('main__input_serch'))
    request_Data = request_data_Input;
    console.log('request_data_Input', request_Data);

   inputRequest(request_data_Input);

   url = 'http://newsapi.org/v2/everything?q='+ `${request_Data}`+
    '&county=ru&language=ru&'+
    'from=2020-06-19&to=2020-06-22&sortBy=publishedAt&' +
    'apiKey=2ea0a1b1b13349cea59fdb75b902595f';
    console.log('URL ', `${url}`)
    
    const request = new NewsApi(url);  
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


