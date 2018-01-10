import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends PureComponent {
	openModal = event => {
		this.props.openModal( this.props.id ) // --- viene de ...item.toJS()
	}
	render() {
		return (
			<div
				className = {'Media tarjeta ' + this.props.className }
				onClick   = {this.openModal}
			>
				<div className = "Media-cover">
					<img
						className = "Media-image"
						src       = {this.props.cover}
						alt       = ""
						width     = {260}
						height    = {160}
					/>
					<h3 className = "Media-title">
						{this.props.title}
					</h3>
					<p className = "Media-author">
						{this.props.author}
					</p>
				</div>
			</div>
		)
	}
}

// -- validar los tipos de datos recibidos en las props
Media.propTypes = {
	cover : PropTypes.string,
	title : PropTypes.string.isRequired,
	author: PropTypes.string,
	src   : PropTypes.string,
	type  : PropTypes.oneOf(['video','audio']) // sólo válidos los valores de la lista
}

export default Media
