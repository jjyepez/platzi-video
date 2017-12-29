import React from 'react'
import './avatar.css'

const Avatar = props => {
  const avatarExtraStyle = { backgroundImage: 'url(' + props.imageURL +')' }
  return (
    <div
      className = "Avatar"
      style = { avatarExtraStyle }
    >
    </div>
  )
}

export default Avatar
