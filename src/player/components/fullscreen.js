import React from 'react'
import './fullscreen.css'
import FullScreenIcon from '../../icons/components/full-screen'

const FullScreen = props => (
  <div className = "FullScreen">
    <button
      onClick = {props.handleClick}
    >
      <FullScreenIcon size = {20} color = "#fff" />
    </button>
  </div>
)

export default FullScreen
