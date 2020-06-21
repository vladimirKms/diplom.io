"use strict";
import '../src/styles/index.css';
import {NewsApi} from '../src/js/modules/NewsApi.js';
const inputForm = document.querySelector('.main__input__user-data')
const input_request = inputForm.querySelector('.main__input_text');

document.addEventListener('click', function(event){
    if (event.target.classList.contains('main__input_serch'))
    console.log('InputData ', input_request.value)


});

let  url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=2ea0a1b1b13349cea59fdb75b902595f';



function Request (){          
const request = new NewsApi(url)

let req = request.getNews();
console.log('REQUEST', req)

}


