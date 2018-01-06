import React 	from 'react'
import ReactDOM from 'react-dom'
import Home		from '../pages/containers/home'
import data 	from '../data/api.json'
import extras	from '../data/api-extra.json'
import '../css/style.css'

// --- Redux
import { Provider }    from 'react-redux'
import { createStore } from 'redux'

const initialState = {
	data,
	extras
}

const store = createStore(
	( state ) => state,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const $homeContainer = document.getElementById( 'home-container' )

// -- ReactDOM.render(que voy a renderizar, donde lo hare )
// 	  el elemento que se va a renderizar podría der o un bloque de codigo JSX o un componente de React
// <Home />
ReactDOM.render(
	<Provider store={store} >
		<p>Hola mundo</p>
	</Provider>
, $homeContainer)
