import React from 'react'
import './volume.css'
import Volume from '../../icons/components/volume'
import VolumeSlider from './volume-slider'

const VolumeControl = props => (
  <div className = "Volume">
    <button>
      <VolumeSlider
        handleVolume = {props.handleVolume}
      />
      <Volume size = {25} color = "#fff" />
    </button>
  </div>
)

export default VolumeControl
