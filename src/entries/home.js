import React 	from 'react'
import ReactDOM from 'react-dom'
import Home		from '../pages/containers/home'
import data 	from '../data/api.json'
import extras	from '../data/api-extra.json'
import '../css/style.css'

const $homeContainer = document.getElementById( 'home-container' )

// -- ReactDOM.render(que voy a renderizar, donde lo hare )
// 	  el elemento que se va a renderizar podría der o un bloque de codigo JSX o un componente de React
ReactDOM.render(
	<Home
    data 	 = {data}
    extras = {extras}
  />
, $homeContainer)
