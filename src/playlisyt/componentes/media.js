import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {
	state = {
		author: 'Leonidas Esteban'
	}
	// constructor(props){
		// super(props)
		// this.state = {
			// author: props.author
		// }
	// }
	handleClick = (e) => {
		this.setState({
			author: "@mocape"
		})
		console.log(this.props.image)
	}
	render() {
		return (
			<div className = "Media tarjeta" onClick={this.handleClick}>
				<div className = "Media-cover">
					<img
						className = "Media-image"
						src       = {this.props.image}
						alt       = ""
						width     = {260}
						height    = {160}
					/>
					<h3 className = "Media-title">
						{this.props.title}
					</h3>
					<p  className = "Media-author">
						{this.state.author}
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