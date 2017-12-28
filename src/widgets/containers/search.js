import React, { Component } from 'react'
import Search from '../components/search'

class SearchContainer extends Component {
	state = {
		inputValue: 'Luis Fonsi'
	}
	// --- los metodos deben crearse como arrow functions .. no como funciones estandar para poder usar internamente -this-
	handleSubmit = e => {
		e.preventDefault()
	}
	setInputRef = element => {
		this.inputBusqueda = element
	}
	handleInputChange = e => {
		this.setState({
			inputValue: e.target.value.replace(' ','-')
		})
	}
	render() {
		return (
				<Search
					setRef       = {this.setInputRef}
					handleSubmit = {this.handleSubmit}
					handleChange = {this.handleInputChange}
					value 			 = {this.state.inputValue}
				/>
		)
	}
}

export default SearchContainer
