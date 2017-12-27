import React from 'react'
import Playlist from '../playlist/componentes/playlist.js'
import '../categories/category.css'


function Category(props){
  return (
    <div  className = "Category">
      <h3 className = "Category-descripcion">{props.description}</h3>
      <h1 className = "Category-titulo">{props.title}</h1>
    	<Playlist
        playlist = {props.playlist}
        handleOpenModalClick = {props.handleOpenModalClick}
      />
    </div>
  )
}

export default Category