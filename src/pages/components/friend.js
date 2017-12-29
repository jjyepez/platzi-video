import React from 'react'
import './friend.css'

const Friend = props => (
  <div className = "Friend">
    <img
      className = "Friend-avatar"
      src       = {props.avatar}
    />
    <div className = "Friend-nombre">
      <span>{props.nombre} {props.apellido}</span>
    </div>
  </div>
)

export default Friend
