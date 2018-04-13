export default function(state={},action){
	switch(action.type){
		case 'GET_MESSAGES':
			return {
				...state,
				list:action.payload
			}
		case 'GET_MESSAGE':
			return {...state,message:action.payload}
		case 'GET_MESSAGE_W_SENDER':
			return {
				...state,
				message:action.payload.message,
				sender:action.payload.sender
			}
		case 'GET_MESSAGES_W_SENDERS':
			return {
				...state,
				message:action.payload.message,
				sender:action.payload.sender
			}
		case 'CLEAR_MESSAGE_W_SENDER':
			return {
				...state,
				message:action.payload.message,
				sender:action.payload.sender
			}
		case 'ADD_MESSAGE':
			return {...state,newmessage:action.payload}
		case 'CLEAR_NEWMESSAGE':
			return {...state,newmessage:action.payload}
		case 'UPDATE_MESSAGE':
			return {
				...state,
				updateMessage:action.payload.success,
				message:action.payload.data
			}
		case 'DELETE_MESSAGE':
			return {
				...state,
				postDeleted:action.payload
			}
		case 'CLEAR_MESSAGE':
			return {
				...state,
				updateMessage:action.payload.updateMessage,
				message:action.payload.message,
				postDeleted:action.payload.postDeleted
			}
		default:
			return state;
	}
}