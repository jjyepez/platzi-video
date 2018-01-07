import React from 'react'
import Category from './category.js'
import './categories.css'
import Search from '../widgets/containers/search'
import UserInfo from '../widgets/components/user-info'
import Scroller from '../libs/components/scroller'
import Media    from '../playlist/componentes/media'
import '../playlist/componentes/media.css'

function Categories(props){
  return (
    <div className   = "Categories">
      <div className = "Categories-header">
        <Search />
        <UserInfo {...props.myUserInfo}/>
      </div>
      <Scroller>
        {
          props.search.length > 0 && (
            <div className  = "Category-results">
              <h3 className = "Category-description">Resultados de la búsqueda</h3>
              <h1 className = "Category-title">{props.search.length} coincidencia(s)</h1>
            </div>
          )
        }
        {
          props.search.map( item => (
              <Media
                {...item}
                className = "Media-resultados"
                key       = {item.id}
                openModal = {props.handleOpenModalClick}
              />
            )
          )
        }
        {
          props.categories.map( category => {
            return (
            	<Category {...category}
            		key                  = {category.id}
                handleOpenModalClick = {props.handleOpenModalClick}
            	/>
            )
          })
        }
      </Scroller>
    </div>
  )
}

export default Categories
