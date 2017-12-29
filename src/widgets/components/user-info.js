import React from 'react'
import './user-info.css'
import Avatar from '../../libs/components/avatar'
import Icon from '../../icons/components/icon'

const UserInfo = props => (
  <div className = "UserInfo"
    onClick = {props.handelClick}
  >
    <div className = "UserInfo-name">
      <span>{props.nombre} {props.apellido}</span>
    </div>
    <div className = "UserInfo-avatar">
      <Avatar
        size      = {40}
        imageURL  = {props.avatar}
      />
    </div>
    <div className = "UserInfo-chevron">
      <Icon
        size  = {12}
        color = "#44546b"
      >
        <path d="M 3.0650221,5.6443397 A 2.9772189,2.9772189 0 0 0 0.84105256,10.694059 L 15.99893,26.776411 31.156809,10.694059 A 2.9772189,2.9772189 0 1 0 26.825155,6.6095127 L 15.99893,18.095661 5.1727056,6.6095127 A 2.9772189,2.9772189 0 0 0 3.0650221,5.6443397 Z"></path>
      </Icon>
    </div>
  </div>
)

export default UserInfo
