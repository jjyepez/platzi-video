import React 	from 'react'
import ReactDOM from 'react-dom'
// import Media 	from './src/playlisyt/componentes/media.js'
import Contenido	from './src/playlist/componentes/contenido'
import data 	from './src/data/api.json'

const $app = document.getElementById( 'app' )

// -- ReactDOM.render(que voy a renderizar, donde lo hare )
// 	  el elemento que se va a renderizar podría der o un bloque de codigo JSX o un componente de React
//const html = <h1>Jai pipol!</h1>
ReactDOM.render(
	<Contenido 
		data = {data}
	/>
, $app)