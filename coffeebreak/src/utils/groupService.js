import tokenService from './tokenService';
const BASE_URL = '/api/groups/';
function create(group) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ tokenService.getToken()
        },
        body: JSON.stringify(group)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('New group could not be added.')
    }
)}

function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

function getGroup(groupId) {
    return fetch(BASE_URL + groupId)
    .then(res => res.json())
}

function join(groupId) {
    console.log("Join fn ", groupId);
    return fetch(`${BASE_URL}${groupId}/join`, {
      method: 'PUT',
      headers: {'content-type': 'application/json','Authorization': 'Bearer '+ tokenService.getToken()},
      body: JSON.stringify()
    }).then(res => res.json() );
}


export default {
    create,
    getAll,
    join, 
    getGroup
}
 