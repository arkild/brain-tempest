import axios from 'axios'

//This header is supplied to any request to back-end authorization routes. Once logged in, the token is saved in Local Storage.
const authHeader = {headers: {'Authorization': localStorage.getItem('userToken')}}

// IDEA ROUTES
//This pulls up specific details about an idea when you select it. This is also going to render the feedback that's available for the idea as it's attached to it via an Array field in the schema.
export async function getIdea(ideaId) {
    const {data} = await axios.get(`/db/ideas/${ideaId}`)
    return data
}

//Adding an idea to the database (requires auth)
export async function postIdea(idea) {
    const {data} = await axios.post('/db/ideas', idea, authHeader)
    return data
}

//Updating an idea in the database already (requires auth)
export async function updateIdea(idea, id) {
    const {data} = await axios.put(`/db/ideas/${id}`, idea, authHeader)
    return data
}

//Deleting an idea in the database (requires auth)
export async function deleteIdea(id) {
    const {data} = await axios.delete(`/db/ideas/${id}`, authHeader)
    return data
}

// FEEDBACK ROUTES
//Unsure about this one but I'm pretty sure I got it
export async function postFeedback(ideaId, feedback) {
    console.log(feedback)
    const {data} = await axios.post(`/db/feedback/create/${ideaId}`, feedback, authHeader)
    return data
}
//Updating a feedback comment (requires auth)
export async function updateFeedback(id, feedback) {
    const {data} = await axios.put(`/db/feedback/${id}`, feedback, authHeader)
    return data
}
//Delete a feedback comment (requires auth)
export async function deleteFeedback(id) {
    const {data} = await axios.delete(`/db/feedback/${id}`, authHeader)
    return data
}

//USER ROUTES
//Sign up
export async function signUp(user) {
    console.log(user)
    const {data} = await axios.post('/db/users/signup', user)
    return data
}
//Log in
export async function logIn(user) {
    const {data} = await axios.post('/db/users/login', user)
    return data
}