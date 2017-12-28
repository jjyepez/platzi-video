import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Title from '../components/title'
import Video from '../containers/video'
import PlayPause from '../components/play-pause'

class VideoPlayerContainer extends Component {
  state = {
    playing: true
  }
  togglePlay = e => {
    //if( this.state.playing ) this.video.pause(); else this.video.play()
    this.setState({
      playing: ! this.state.playing // --- toggling
    })
  }
  setVideoRef( element ){
    //this.video = element
  }
  render(){
    return(
      <VideoPlayerLayout>
        <Title
          title = "Este es el título del video que se est[a reproduciendo]"
        />
        <PlayPause
          handleClick = {this.togglePlay}
          playing     = {this.state.playing}
        />
        <Video
          //ref      = {this.setVideoRef}
          autoplay = {this.state.playing}
          src      = "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayerContainer
