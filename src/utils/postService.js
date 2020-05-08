import tokenService from './tokenService';
const BASE_URL = '/api/groups/';


function createPost(data, groupId) {
    return fetch(BASE_URL + groupId + '/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ tokenService.getToken()
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('New post could not be added.')
    }
)}

function getAllPosts(groupId) {
    return fetch(BASE_URL+ groupId + '/posts')
    .then(res => res.json())
  }



export default {
    createPost,
    getAllPosts
}