import React from 'react'
import './video-player-layout.css'

const VideoPlayerLayout = props => {
  return (
    <div className = "VideoPlayer">
      {props.children}
    </div>
  )
}

export default VideoPlayerLayout
