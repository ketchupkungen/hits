import axios from 'axios';

export function getMessages(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){
    const request = axios.get(`/api/messages?limit=${limit}&skip=${start}&order=${order}`)
        .then(response => {
            if(list){
                return [...list,...response.data]
            } else {
                return response.data
            }
        }
    )

    return {
        type:'GET_MESSAGES',
        payload:request
    }

}

/*export const fetchMessages = () => async dispatch => {
  const res = await axios.get('/api/chat');

  dispatch({ type: FETCH_MESSAGES, payload: res.data })
};*/

export function getMessageWithSender(id){
    const request = axios.get(`/api/getMessage?id=${id}`)

    return (dispatch)=>{
        request.then(({data})=>{
            let message = data;

            axios.get(`/api/getSender?id=${message.ownerId}`)
            .then(({data})=>{
                let response = {
                    message,
                    sender:data
                }

                dispatch({
                    type:'GET_MESSAGE_W_SENDER',
                    payload:response
                })
            })
        })
    }
}

export function getMessagesWithSenders(){
    const request = axios.get(`/api/getMessagesWithSenders`)

    return (dispatch)=>{
        request.then(({data})=>{
            let message = data;

            axios.get(`/api/getSender?id=${message.ownerId}`)
            .then(({data})=>{
                let response = {
                    message,
                    sender:data
                }

                dispatch({
                    type:'GET_MESSAGE_W_SENDER',
                    payload:response
                })
            })
        })
    }
}

export function clearMessageWithSender(){
    return {
        type:'CLEAR_MESSAGE_W_SENDER',
        payload:{
            message:{},
            sender:{}
        }
    }
}

export function addMessage(message){
    const request = axios.post('/api/message',message)
        .then(response => response.data);

    return {
        type:'ADD_MESSAGE',
        payload:request
    }
}
export function clearNewMessage() {
    return {
        type:'CLEAR_NEWMESSAGE',
        payload:{}
    }
}

export function getUserPosts(userId){
    const request = axios.get(`/api/user_posts?user=${userId}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_POSTS',
        payload:request
    }
}

export function getMessage(id){
    const request = axios.get(`/api/getMessage?id=${id}`)
                    .then(response => response.data);

    return {
        type:'GET_MESSAGE',
        payload:request
    }
}


export function updateMessage(data){
    const request = axios.post(`/api/message_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_MESSAGE',
        payload:request
    }

}

export function deleteMessage(id){
    const request = axios.delete(`/api/delete_message?id=${id}`)
                    .then(response => response.data)

    return {
        type:'DELETE_MESSAGE',
        payload:request
    }
}

export function clearMessage(){
    return{
        type:'CLEAR_MESSAGE',
        payload:{
            message:null,
            updateMessage:false,
            postDeleted:false
        }
    }
}


/*========= USER ===========*/

export function loginUser({email,password}){
    const request = axios.post('/api/login',{email,password})
                .then(response => response.data)

    return {
        type:'USER_LOGIN',
        payload:request
    }
}

export function auth(){
    const request = axios.get('/api/auth')
                .then(response => response.data);

    return {
        type:'USER_AUTH',
        payload:request
    }

}


export function getUser(id){
    const request = axios.get(`/api/getUser?id=${id}`)
                    .then(response => response.data);

    return {
        type:'GET_USER',
        payload:request
    }
}


export function userRegister(user,userList){
    const request = axios.post(`/api/register`,user)

    return (dispatch) =>{
        request.then(({data})=>{
            let users = data.success ? [...userList,data.user]:userList;
            let response = {
                success:data.success,
                users
            }

            dispatch({
                type:'USER_REGISTER',
                payload:response
            })
        })
    }
}

export function getUsers(){
    const request = axios.get(`/api/users`)
                    .then(response => response.data);
        
    return {
        type:'GET_USER',
        payload:request
    }
}

export function deleteUser(id){
    const request = axios.delete(`/api/delete_user?id=${id}`)
                    .then(response => response.data)

    return {
        type:'DELETE_USER',
        payload:request
    }
}