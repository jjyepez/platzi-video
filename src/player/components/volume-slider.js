import React, { Component } from 'react'
import './volume-slider.css'

class VolumeSlider extends Component {
  render(){
    return(
      <div className="VolumeSlider">
        <input
          type     = "range"
          min      = {0}
          max      = {1}
          step     = {.05}
          onChange = {this.props.handleVolume}
          ref      = {this.props.setRefSlider}
        />
      </div>
    )
  }
}

export default VolumeSlider
