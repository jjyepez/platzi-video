import React from 'react'
import './volume.css'
import Volume from '../../icons/components/volume'
import Mute from '../../icons/components/mute'
import VolumeSlider from './volume-slider'

const VolumeControl = props => (
  <div className = "Volume">
    <button
      onClick = {props.handleClick}
    >
      {
        props.mute === 'true' ?
        <Mute size = {25} color = "#fff" />
        :
        <Volume size = {25} color = "#fff" />
      }
    </button>
    <VolumeSlider
      //setRefSlider = {props.setRefSlider}
      handleVolume = {props.handleVolume}
      volume       = {parseFloat( props.volume )}
      mute         = {props.mute}
    />
  </div>
)

export default VolumeControl
