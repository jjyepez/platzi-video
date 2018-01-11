import React from 'react'
import Playlist from '../playlist/componentes/playlist.js'
import '../categories/category.css'

function Category(props){
  return (
    <div  className = "Category">
      <h3 className = "Category-description">{props.description}</h3>
      <h1 className = "Category-title">{props.title}</h1>
    	<Playlist
        playlist = {props.playlist}
        openModalBlur = {props.openModalBlur}
      />
    </div>
  )
}

export default Category
