import tokenService from './tokenService';
const BASE_URL = '/api/coffees/';
function create(coffee, userId) {
    
    return fetch(BASE_URL + userId, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ tokenService.getToken()
        },
        body: JSON.stringify(coffee)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('New coffee could not be added.')
    }
)}

function getAll(userId) {
    return fetch(BASE_URL+ userId)
    .then(res => res.json())
}



export default {
    create,
    getAll
}
 