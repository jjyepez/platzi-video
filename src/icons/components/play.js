import React from 'react'
import Icon from './icon'

// --- componente presentacional o tonto o funcional
function Play(props){
	return (
		<Icon {...props}>
			<path d = "M6 4l20 12-20 12z"></path>
		</Icon>
	)
}

export default Play