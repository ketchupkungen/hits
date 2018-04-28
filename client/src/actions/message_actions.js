/*========= MESSAGE ===========*/

import axios from 'axios';

/*export function getMessages(){
	const request = axios.get(`/api/messages`)
		.then(response => response.data);

	return {
		type:'GET_MESSAGES',
		payload:request
	}
}*/
export function getMessages(){
	return dispatch => {
		axios.get('/api/messages')
		.then(response => {
			dispatch({
				type: 'GET_MESSAGES',
				payload: response.data
			})
		})
	}
}

// Prototype for rendering more messages on scroll, ex 20 at a time
/*export function getMessages(
	limit = 20,
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
}*/

export function getMessagesWithSenders(){
	const request = axios.get(`/api/getMessagesWithSenders`)

	return (dispatch)=>{
		request.then(({data})=>{
			let message = data;

			axios.get(`/api/get_sender?id=${message.ownerId}`)
			.then(({data})=>{
				let response = {
					message,
					sender:data
				}

				dispatch({
					type:'GET_MESSAGES_W_SENDERS',
					payload:response
				})
			})
		})
	}
}

export function getMessageWithSender(id){
	const request = axios.get(`/api/get_message?id=${id}`)

	return (dispatch)=>{
		request.then(({data})=>{
			let message = data;

			axios.get(`/api/get_sender?id=${message.ownerId}`)
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
	return dispatch => {
		axios.post('/api/message', message)
		.then(response => {
			dispatch({
				type: 'ADD_MESSAGE',
				payload: {message: response.data.text, sender: response.data.ownerId}
			})
		})
	}
}

export function clearNewMessage() {
	return {
		type:'CLEAR_NEWMESSAGE',
		payload:{}
	}
}

export function getUserPosts(userId){
	return dispatch => {
		axios.get(`/api/user_posts?user=${userId}`)
		.then(response => {
			dispatch({
				type: 'GET_USER_POSTS',
				payload: response.data
			})
		})
	}
}

export function getMessage(id){
	return dispatch => {
		axios.get(`/api/get_message?id=${id}`)
		.then(response => {
			dispatch({
				type:'GET_MESSAGE',
				payload: response.data
			})
		}) 
	}
}

export function updateMessage(message){
	return dispatch => {
		axios.post('/api/edit_message', message)
		.then(response => {
			dispatch({
				type: 'UPDATE_MESSAGE',
				payload: response.data
			})
		})
	}
}

export function deleteMessage(id){
	return dispatch => {
		axios.delete(`/api/delete_message?id=${id}`)
		.then(response => {
			dispatch({
				type: 'DELETE_MESSAGE',
				payload: response.data
			})
		})	
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