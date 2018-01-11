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
                className = ''
                id        = {mediaId}
                key       = {mediaId}
                openModalBlur = {props.openModalBlur}
              />
            )
          })
        }
      </div>
  )
}

export default Playlist
