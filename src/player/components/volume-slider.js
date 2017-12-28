import React from 'react'
import './volume-slider.css'

const VolumeSlider = props => (
  <div className="VolumeSlider">
    <input
      type   = "range"
      orient = "vertical"
      min    = {0}
      max    = {1}
      value  = {props.volume}
      step   = {.05}
      onChange = {props.handleVolume}
    />
  </div>
)

export default VolumeSlider
