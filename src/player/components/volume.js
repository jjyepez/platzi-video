import React, { Component } from 'react'
import './volume.css'
import Volume from '../../icons/components/volume'
import Mute   from '../../icons/components/mute'
import VolumeSlider from './volume-slider'

class VolumeControl extends Component {
  render(){
    return (
      <div className = "Volume">
        <button onClick = {this.props.handleClick}>
          {
            this.props.mute ?
              <Mute size = {25} color = "#fff" />
            :
              <Volume size = {25} color = "#fff" />
          }
        </button>
        <VolumeSlider
          handleVolume = {this.props.handleVolume}
          mute         = {this.props.mute}
          setRefSlider = {this.props.setRefSlider}
        />
      </div>
    )
  }
}

export default VolumeControl
