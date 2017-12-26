import React, { Component } from 'react';

class Media extends Component {
	render() {
		const estilos = {
			contenedor: {
				color: 'teal',
				fontSize: 20,
				cursor: 'pointer',
				width: 260,
				border: '1px solid red'
			}
		}
		return (
			<div style={estilos.contenedor}>
				<div>
					<img
						src="./img/covers/bitcoin.jpg"
						alt=""
						width={260}
						height={160}
					/>
					<h3>¿Por qué aprender react?</h3>
					<p>Leonidas Esteban</p>
				</div>
			</div>
		)
	}
}

export default Media