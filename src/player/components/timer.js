import React from 'react'
import './timer.css'

const Timer = props => (
  <div className = "Timer">
    <span>{props.time} / {props.duration}</span>
  </div>
)

export default Timer
