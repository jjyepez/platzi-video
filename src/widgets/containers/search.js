import React, { Component } from 'react'
import Search from '../components/search'
// --- Redux
import { connect } 		 from 'react-redux'
import { searchAsyncMedia } from '../../actions' // -- equivale a ../../actions/index.js

class SearchContainer extends Component {
	state = {
		inputValue: '' // --- valor por defecto
	}
	// --- los metodos deben crearse como arrow functions .. no como funciones estandar para poder usar internamente -this-
	handleSubmit = e => {
		e.preventDefault()
		console.log( this.input.value )
		this.props.searchAsyncMedia( this.input.value ) // --- el Dispatch de Redux! .. simplificado
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

const mapDispatchToProps = {
	searchAsyncMedia
}

export default connect( null, mapDispatchToProps )( SearchContainer ) // --- Redux
