import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {
	render() {
		
		const { image, title, author } = this.props;

		return (
			<div className = "Media tarjeta">
				<div className = "Media-cover">
					<img
						className = "Media-image"
						src       = {image}
						alt       = ""
						width     = {260}
						height    = {160}
					/>
					<h3 className = "Media-title">
						{title}
					</h3>
					<p  className = "Media-author">
						{author}
					</p>
				</div>
			</div>
		)
	}
}

// -- validar los tipos de datos recibidos en las props
Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video','audio']) // sólo válidos los valores de la lista
}

export default Media