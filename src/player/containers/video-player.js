import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import PlayerControls    from '../components/video-player-controls'
import Title       from '../components/title'
import Video       from '../containers/video'
import PlayPause   from '../components/play-pause'
import Volume      from '../components/volume'
import Timer       from '../components/timer'
import ProgressBar from '../components/progress-bar'
import Spinner     from '../components/spinner'
import { formatTime, isFullScreen, requestFullScreen, exitFullScreen } from '../../libs/utilities.js'
import FullScreen  from '../components/fullscreen'
// --- redux
import { connect } from 'react-redux'

class VideoPlayerContainer extends Component {
  state = {
    playing      : false,
    duration     : '00:00',
    time         : '00:00',
    durationFloat: 0,
    timeFloat    : 0,
    progress     : 0,
    loading      : true,
    mute         : false,
    volumeLevel  : 1,
  }
  togglePlay = e => {
    this.setState( prevState => ({ // --- se puede pasar una funcion que recibira el state anterior por defecto
        playing: ! prevState.playing // --- toggling
      })
    )
  }
  componentDidMount(){
    this.setState({
      playing: this.props.autoplay
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration     : formatTime( this.video.duration ),
      durationFloat: this.video.duration,
      loading      : false
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
    this.setState({
      volumeLevel: event.target.value,
    })
  }
  toggleMute = event => {
    this.setState({
      mute: ! this.state.mute
    })
    this.video.muted  = ! this.state.mute
    this.slider.value = ! this.state.mute ? 0 : this.state.volumeLevel
  }
  setRefSlider = element => {
    // --- el input:range ha sido capturado a traves de todos los nivels de componentes! -- yeii!
    this.slider = element
  }
  toggleFullScreen = event => {
    if( ! isFullScreen() ) {
      requestFullScreen( this.player )
    } else {
      exitFullScreen( this.player )
    }
  }
  setRefPlayer = element => {
    this.player = element
  }
  render(){
    return(
      <VideoPlayerLayout
        setRefPlayer = {this.setRefPlayer}
      >
        <Title
          title = {this.props.media.get('title')}
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
            mute         = {this.state.mute}
            volume       = {this.state.volumeLevel}
            setRefSlider = {this.setRefSlider}
          />
          <FullScreen
            handleClick   = {this.toggleFullScreen}
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
          src      = {this.props.media.get('src')}
          handleClick = {this.togglePlay}
        />
        { this.state.loading && <Spinner /> }
      </VideoPlayerLayout>
    )
  }
}

function mapStateToProps( state, props ){
  const media = state.getIn(['data','entities','media',props.mediaId])
  return {
    media
  }
}

export default connect( mapStateToProps )( VideoPlayerContainer )
