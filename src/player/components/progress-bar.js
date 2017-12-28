import React from 'react'
import './progress-bar.css'

const ProgressBar = props => (
  <div className = "ProgressBar">
    <input
      type     = "range"
      max      = {props.max}
      value    = {props.value}
      onChange = {props.handleProgressChange}
    />
  </div>
)

export default ProgressBar
