import React from 'react'
import Category from './category.js'
import './categories.css'
import Search from '../widgets/containers/search'

function Categories(props){
  return (
    <div className = "Categories">
      <Search />
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