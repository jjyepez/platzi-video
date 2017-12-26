import React, { Component } from 'react'
import Media from './media' // puede omitirse el .js --- solo cuando son archivos de javascript
import './playlist.css'

class Playlist extends Component {
	render() {
		const {titulo, descripcion, lista} = this.props // --- playlist
		return (
			<div className = "Playlist">
				<h3  className = "Playlist-descripcion">{descripcion}</h3>
				<h1  className = "Playlist-titulo">{titulo}</h1>
				<div className = "Playlist-scroller">
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
}

export default Playlist