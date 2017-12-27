import React from 'react'
import './search.css'

const Search = props => (
	<form
		className = "Search"
		onSubmit  = {props.handleSubmit}
	>
		<input
			ref					= {props.setRef}
			onChange 		= {props.handleChange}
			value 			= {props.value}
			type        = "text" 
			placeholder = "Busca tu video favorito"
			className   = "Search-input"
			name 				= "search"
		/>
	</form>
)

export default Search