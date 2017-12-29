import React from 'react'
import logoBase64 from '../../../images/logo.png'
import './related.css'
import Scroller from '../../libs/components/scroller'
import MyPlaylist from './my-playlist'
import MyFriends  from './my-friends'

function Related(props) {
  return (
    <div className = "Related">
      <div>
        <img
          className = "Related-logo"
          src={logoBase64}
        />
      </div>
      <Scroller>
        <MyPlaylist data = {props.myPlaylist} />
        <MyFriends  data = {props.friends} />
      </Scroller>
    </div>
  )
}

export default Related
