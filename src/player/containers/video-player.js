import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Title from '../components/title'
import Video from '../containers/video'
import PlayPause from '../components/play-pause'
import Volume from '../components/volume'
import Timer from '../components/timer'
import PlayerControls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import { formatTime } from '../../libs/utilities.js'

class VideoPlayerContainer extends Component {
  state = {
    playing      : false,
    duration     : '00',
    time         : '00',
    durationFloat: 0,
    timeFloat    : 0,
    progress     : 0,
    loading      : true,
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
      duration: formatTime( this.video.duration ),
      durationFloat: this.video.duration,
      loading: false
    })
  }
  handleTimeUpdate = event => {
    this.setState({
      time: formatTime( this.video.currentTime ),
      timeFloat: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSought = event => {
    this.setState({
      loading: false,
    })
  }
  handleSeeking = event => {
    this.setState({
      loading: true,
    })
  }
  handleReady = event => {
    this.setState({
      loading: false,
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
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
          <ProgressBar
            value = {this.state.timeFloat}
            max   = {this.state.durationFloat}
            handleProgressChange = {this.handleProgressChange}
          />
          <Timer
            duration = {this.state.duration}
            time     = {this.state.time}
          />
          <Volume
            handleVolume = {this.handleVolumeChange}
          />
        </PlayerControls>
        <Video
          handleLoadedMetadata = {this.handleLoadedMetadata}
          handleTimeUpdate     = {this.handleTimeUpdate}
          handleSeeking        = {this.handleSeeking}
          handleSought         = {this.handleSought}
          handleReady          = {this.handleReady}
          autoplay = {this.props.autoplay}
          playing  = {this.state.playing}
          src      = "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
        { this.state.loading && <Spinner /> }
      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayerContainer
