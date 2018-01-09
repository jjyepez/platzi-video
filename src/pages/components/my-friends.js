import React from 'react'
import './my-friends.css'
import Friend from './friend'

const MyFriends = props => (
	<div className = "MyFriends">
		<h1 className = "MyFriends-title">Playlists de Amigos</h1>
		{
			props.data.map( item => (
					<Friend key = {item.get('id')} {...item.toJS()}/>
				)
			)
		}
	</div>
)

export default MyFriends
