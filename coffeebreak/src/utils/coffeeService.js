const BASE_URL = '/api/coffees/';
export function create(pup) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(pup)
    }).then(res => res.json());
  }