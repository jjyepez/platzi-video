import React from 'react'
import './video-player-layout.css'

const VideoPlayerLayout = props => (
    <div className = "VideoPlayer"
      ref = {props.setRefPlayer}
    >
      {props.children}
    </div>
)

export default VideoPlayerLayout
