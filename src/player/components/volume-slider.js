import React, { Component } from 'react'
import './volume-slider.css'

class VolumeSlider extends Component {
  state = {
    mute: 'false',
    volume: 1
  }
  componentDidMount(){
    this.setState({
      volumePersist: this.props.volume,
      mute         : this.props.mute,
      volume       : 1,
    })
  }
  setRef = element => {
    this.sliderVolume = element
  }
  componentWillReceiveProps(nextProps){
    if( nextProps.mute ){
      this.sliderVolume.value = 0
    }
    if( nextProps.mute !== this.state.mute ){
      this.setState({
        mute         : nextProps.mute,
        volume       : nextProps.mute ? 0 : nextProps.volume,
        volumePersist: nextProps.volume,
      })

      //this.sliderVolume.value = this.state.mute == "true" ? 0 : this.state.volume
    }
  }
  render(){
    return (
      <div className="VolumeSlider">
        <input
          type   = "range"
          min    = {0}
          max    = {1}
          value  = {this.state.volume}
          step   = {.05}
          onChange = {this.props.handleVolume}
          ref    = {this.setRef}
          volume = {this.state.volume}
          mute   = {this.state.mute}
        />
      </div>
    )
  }
}

export default VolumeSlider
