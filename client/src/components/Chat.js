import React, {useState, useEffect} from 'react'
import io from "socket.io-client"
import queryString from 'query-string'

const Chat = ({location}) => {
	let socket;
	let endpoint = 'localhost:5000';
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')
		useEffect(() => {
			const {name, room} = queryString.parse(location.search)
			socket = io(endpoint)
			setName(name)
			setRoom(room)
		}, [])
	return (
		
		<div>
			<h1>Chat Room</h1>
		</div>)
}

export default Chat