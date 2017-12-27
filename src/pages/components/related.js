import React from 'react'
import logoBase64 from '../../../images/logo.png'
import './related.css'

function Related(props) {
  return (
    <div className = "Related">
      <img className = "logo" src={logoBase64} width={260} />
    </div>
  )
}

export default Related