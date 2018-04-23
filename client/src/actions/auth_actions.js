/*========= USER ===========*/

import axios from 'axios';

export function loginUser({username,password}){
	const request = axios.post('/api/login',{username,password})
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
	const request = axios.get(`/api/get_user?id=${id}`)
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
