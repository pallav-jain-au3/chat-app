import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css'
const Join = () => {
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')
	return (
		<div className = 'joinOuterContainer'>
			<div className = "joinInnerContainer">
				<h1 className = "heading">Join</h1>
				<div>
					<input
					className = "joinInput"
					placeholder = "Name" 
					name = "name" 
					type = "text" 
					onChange = {(e) => setName(e.target.value)} 
					value = {name} />
				 </div>
				 <div>
					<input
					className = "joinInput mt-20"
					placeholder = "Room" 
					name = "room" 
					type = "text" 
					onChange = {(e) => setRoom(e.target.value)} 
					value = {room} />
				 </div>
				 <Link onClick = {e => !name || !room ? e.preventDefault() : null}
				 	to = {`/chat?name=${name}&room=${room}`}>
				 	<button type = 'sumbit'
				 	className = "button mt-20">
				 	Sign in
				 	</button>
				 </Link>
			</div>
		</div>)
}

export default Join