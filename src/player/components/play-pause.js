import React from 'react'
import './play-pause.css'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'

const PlayPause = props => (
  <div className = "PlayPause">
    {
      props.playing ?
        <button
          onClick = {props.handleClick}
        >
          <Pause size = {25} color = "#fff" />
        </button>
      :
        <button
          onClick = {props.handleClick}
        >
          <Play size = {25} color = "#fff" />
        </button>
    }
  </div>
)

export default PlayPause
