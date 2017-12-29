import React, { Component } from 'react'
import UserInfo from '../components/user-info'

class UserInfoContainer extends Component {
	state = {
		inputValue: '' // --- valor por defecto
	}
	toggleInfo = event => {
		e.preventDefault()
		alert(1)
	}
	render() {
  	return (
  			<UserInfo
					{...props.myUserInfo}
  				handleClick = {this.toggleInfo}
  			/>
  	)
	}
}

export default UserInfoContainer
