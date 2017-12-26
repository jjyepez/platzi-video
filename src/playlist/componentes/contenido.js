import React, { Component } from 'react'
import Playlist from './playlist.js'
import './contenido.css'

class Contenido extends Component {
	render(){
		return (
			<div className = "Contenido">
			{	
				this.props.data.categories.map( categoria => {
					return 	(
						<Playlist 
							titulo      = {categoria.title}
							descripcion = {categoria.description}
							lista       = {categoria.playlist} 
							key         = {categoria.id}
						/>
					)
				})
			}
			</div>
		)
	}
}

export default Contenido