import React  from 'react'
import Media  from './media' // puede omitirse el .js --- solo cuando son archivos de javascript
import './playlist.css'

function Playlist(props) {
    return (
      <div  className = "Playlist-scroller">
        {
          props.playlist.map( item => {
            return (
              <Media
                title  = {item.title}
                author = {item.author}
                cover  = {item.cover}
                type   = {item.type}
                key    = {item.id}
                src    = {item.src}
                openModal = {props.handleOpenModalClick}
              />
            )
          })
        }
      </div>
  )
}

export default Playlist
