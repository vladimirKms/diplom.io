export class NewsApi {
    constructor(baseURL) {
      this.baseUrl = baseURL
      /*this.token = token;*/
    }
getNews() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        /*authorization: this.token,*/
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       
          })
    })
      .then(res => res.json())
      .catch(err => { throw new Error(err.message) });
  }
    }