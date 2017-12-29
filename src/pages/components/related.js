import React from 'react'
import logoBase64 from '../../../images/logo.png'
import './related.css'
//import MyPlaylist from './my-play-list'
import MyFriends  from './my-friends'

//      <MyPlaylist data = {props.myPlaylirt} />
function Related(props) {
  return (
    <div className = "Related">
      <img className   = "logo" src={logoBase64} />

      <MyFriends  data = {props.friends} />
    </div>
  )
}

export default Related
