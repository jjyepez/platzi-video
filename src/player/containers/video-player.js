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
    isMuted      : false,
    volumeLevel  : 1,
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
    this.setState({
      volumeLevel: event.target.value,
    })
    this.video.volume = this.state.volumeLevel
  }
  toggleMute = event => {
    this.setState({
      isMuted: ! this.state.isMuted
    })
    //this.sliderVolume.value = this.state.isMuted ? 0 : this.state.volumeLevel
  }
  // setRefSlider = element => {
  //   this.sliderVolume = element
  // }
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
            handleClick  = {this.toggleMute}
            mute         = {this.state.isMuted.toString()}
            volume       = {parseFloat( this.state.volumeLevel )}
            //setRefSlider = {this.setRefSlider}
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
          src      = "https://assets14.ign.com/videos/zencoder/2017/11/18/1280/73b6f1771c8d9841c3351c3df41bfe41-1910000-1511019956-w.mp4"
        />
        { this.state.loading && <Spinner /> }
      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayerContainer
