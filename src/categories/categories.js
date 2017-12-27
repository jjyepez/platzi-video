import React from 'react'
import Category from './category.js'
import './categories.css'

function Categories(props){
  return (
    <div className = "Categories">
      {
        props.categories.map( category => {
          return (
          	<Category {...category}
          		key = {category.id}
              handleOpenModalClick = {props.handleOpenModalClick}
          	/>
          )
        })
      }
    </div>
  )
}

export default Categories