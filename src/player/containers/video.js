import React, { Component } from 'react'
import './video.css'

class Video extends Component {
  togglePlay(){
    if( this.props.playing ){
      this.video.pause()
    } else {
      this.video.play()
    }
  }
  componentWillReceiveProps( nextProps ){
    if( nextProps.playing !== this.props.playing ){
      this.togglePlay()
    }
  }
  setRef = element => {
    this.video = element
  }
  render(){
    return (
      <div className = "Video">
        <video
          autoPlay = {this.props.autoplay}
          src      = {this.props.src}
          ref      = {this.setRef}
        />
      </div>
    )
  }
}

export default Video
