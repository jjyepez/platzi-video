import React  from 'react'
import MediaContainer  from '../containers/media' // puede omitirse el .js --- solo cuando son archivos de javascript
import './playlist.css'

function Playlist(props) {
    return (
      <div  className = "Playlist-scroller">
        {
          props.playlist.map( mediaId => {
            return (
              <MediaContainer
                id     = {mediaId}
                key    = {mediaId}
                openModal = {props.handleOpenModalClick}
              />
            )
          })
        }
      </div>
  )
}

export default Playlist
