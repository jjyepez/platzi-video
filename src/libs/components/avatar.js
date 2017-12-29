import React from 'react'
import './avatar.css'

const Avatar = props => {
  const avatarExtraStyle = {
    backgroundImage: 'url(' + props.imageURL + ')',
    width : props.size + 'px',
    height: props.size + 'px',
  }
  return (
    <div
      className = "Avatar"
      style = { avatarExtraStyle }
    >
    </div>
  )
}

export default Avatar
