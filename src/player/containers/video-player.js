import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Title from '../components/title'
import Video from '../containers/video'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import PlayerControls from '../components/video-player-controls'
import { formatTime } from '../../libs/utilities.js'

console.log( 1, formatTime )

class VideoPlayerContainer extends Component {
  state = {
    playing : false,
    duration: 0,
    time    : 0,
  }
  togglePlay = e => {
    //if( this.state.playing ) this.video.pause(); else this.video.play()
    this.setState( prevState => ({ // --- se puede pasar una funcion que recibira el state anterior por defecto
        playing: ! prevState.playing // --- toggling
      })
    )
  }
  componentDidMount(){
    // --- ya se renderizó el componente
    this.setState({
      playing: ! this.props.autoplay
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: formatTime( this.video.duration )
    })
  }
  handleTimeUpdate = event => {
    this.video = event.target
    this.setState({
      time: formatTime( this.video.currentTime )
    })
  }
  render(){
    return(
      <VideoPlayerLayout>
        <Title
          title = "Este es el título del video que se esta reproduciendo"
        />
        <PlayerControls>
          <PlayPause
            handleClick = {this.togglePlay}
            playing     = {this.state.playing}
          />
          <Timer
            duration = {this.state.duration}
            time     = {this.state.time}
          />
        </PlayerControls>
        <Video
          handleLoadedMetadata = {this.handleLoadedMetadata}
          handleTimeUpdate     = {this.handleTimeUpdate}
          autoplay = {this.props.autoplay}
          playing  = {this.state.playing}
          src      = "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayerContainer
