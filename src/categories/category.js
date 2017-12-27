import React from 'react'
import Playlist from '../playlist/componentes/playlist.js'
import '../playlist/componentes/playlist.css'

// import Play   from '../icons/components/play'
// import Pause  from '../icons/components/pause'
// import Volume from '../icons/components/volume'
// import FullScreen from '../icons/components/full-screen'

// <Play color = "darkred" size  = {50} />
// <Pause color = "darkgreen" size  = {50} />
// <Volume color = "darkblue" size  = {50} />
// <FullScreen color = "gold" size  = {50} />

function Category(props){
  return (
    <div  className = "Playlist">
      <h3 className = "Playlist-descripcion">{props.description}</h3>
      <h1 className = "Playlist-titulo">{props.title}</h1>
    	<Playlist
        playlist = {props.playlist}
      />
    </div>
  )
}

export default Category