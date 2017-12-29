import React from 'react'
import './my-playlist.css'

const MyPlaylist = props => {
  let c = 1
  return (
    <div className  = "MyPlaylist">
      <h1 className = "MyPlaylist-title">My Playlist</h1>
      {
        props.data.map( item => (
            <div
              className = "MyPlaylist-item"
              key       = {item.id}
            >
              <div className = "MyPlaylist-itemPosition">{c++}</div>
              <div className = "MyPlaylist-itemTitle">{item.title}</div>
            </div>
          )
        )
      }
    </div>
  )
}

export default MyPlaylist
