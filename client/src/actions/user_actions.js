/*========= USER ===========*/

import axios from 'axios';

export function getUser(id){
	const request = axios.get(`/api/get_user?id=${id}`)
		.then(response => response.data);
	return {
		type:'GET_USER',
		payload:request
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