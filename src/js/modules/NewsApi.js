export class NewsApi {
    constructor(baseURL, token) {
      this.baseUrl = baseURL
      this.token = token;
    }
getNews() {
    return fetch(`${this.baseUrl}`, {
      method: 'POST',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ })
    })
      .then(res => res.json())
      .catch(err => { throw new Error(err.message) });
  }
    }