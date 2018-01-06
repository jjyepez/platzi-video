import React, { Component } from 'react'
import Search from '../components/search'
// --- Redux
import { connect } from 'react-redux'

class SearchContainer extends Component {
	state = {
		inputValue: '' // --- valor por defecto
	}
	// --- los metodos deben crearse como arrow functions .. no como funciones estandar para poder usar internamente -this-
	handleSubmit = e => {
		e.preventDefault()
		console.log( this.input.value )
		this.props.dispatch({ // --- Redux - dispatch
			type: 'SEARCH_VIDEO',
			payload: {
				query: this.input.value
			}
		})
	}
	setInputRef = element => {
		this.input = element
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

export default connect()(SearchContainer) // --- redux
