import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Title from '../components/title'
import Video from '../containers/video'

class VideoPlayerContainer extends Component {
  render(){
    return(
      <VideoPlayerLayout>
        <Title
          title = "Este es el título del video que se est[a reproduciendo]"
        />
        <Video
          autoplay = {true}
          src      = "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayerContainer
