import React 	from 'react'
import ReactDOM from 'react-dom'
import Home		from '../pages/containers/home'
import data 	from '../data/api.json'

const $app = document.getElementById( 'app' )

// -- ReactDOM.render(que voy a renderizar, donde lo hare )
// 	  el elemento que se va a renderizar podría der o un bloque de codigo JSX o un componente de React
ReactDOM.render(
	<Home 
    data = {data}
  />
, $app)