import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Title from '../components/title'
import Video from '../containers/video'
import PlayPause from '../components/play-pause'

class VideoPlayerContainer extends Component {
  state = {
    playing: false
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
          autoplay = {this.props.autoplay}
          playing  = {this.state.playing}
          src      = "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayerContainer
