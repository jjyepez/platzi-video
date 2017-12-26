import React, { Component } from 'react'
import './media.css'
class Media extends Component {
	render() {
		return (
			<div className = "Media tarjeta">
				<div className = "Media-cover">
					<img
						className = "Media-image"
						src       = "./img/covers/bitcoin.jpg"
						alt       = ""
						width     = {260}
						height    = {160}
					/>
					<h3 className = "Media-title">
						¿Por qué aprender react?
					</h3>
					<p  className = "Media-author">
						Leonidas Esteban
					</p>
				</div>
			</div>
		)
	}
}
export default Media

