import React  from 'react'
import Media  from './media' // puede omitirse el .js --- solo cuando son archivos de javascript
import Play   from '../../icons/components/play'
import Pause  from '../../icons/components/pause'
import Volume from '../../icons/components/volume'
import FullScreen from '../../icons/components/full-screen'
import './playlist.css'

function Playlist(props) {
  const {titulo, descripcion, lista} = props // --- playlist
  return (
    <div className = "Playlist">
      
      <Play color = "darkred" size  = {50} />
      <Pause color = "darkgreen" size  = {50} />
      <Volume color = "darkblue" size  = {50} />
      <FullScreen color = "gold" size  = {50} />

      <h3   className = "Playlist-descripcion">{descripcion}</h3>
      <h1   className = "Playlist-titulo">{titulo}</h1>
      <div  className = "Playlist-scroller">
        {
          lista.map( item => {
            return <Media
                  title  = {item.title} 
                  author = {item.author} 
                  image  = {item.cover} 
                  type   = {item.type}
                  key    = {item.id}
                />
          })
        }
      </div>
    </div>
  )
}

export default Playlist