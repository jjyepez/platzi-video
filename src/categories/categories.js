import React from 'react'
import Category from './category.js'
import './categories.css'
import Search from '../widgets/containers/search'
import UserInfo from '../widgets/components/user-info'
import Scroller from '../libs/components/scroller'
import MediaContainer from '../playlist/containers/media'
import '../playlist/componentes/media.css'

function Categories(props){
  return (
    <div className   = "Categories">
      <div className = "Categories-header">
        <Search />
        <UserInfo {...props.myUserInfo.toJS()}/>
      </div>
      <Scroller>
        {
          props.search.toJS().length > 0 && (
            <div className  = "Category-results">
              <h3 className = "Category-description">Resultados de la búsqueda</h3>
              <h1 className = "Category-title">{props.search.toJS().length} coincidencia(s)</h1>
            </div>
          )
        }
        {
          props.search.map( item => {
            return (
                <MediaContainer
                  className = "Media-resultados"
                  key       = {item.get('id')}
                  id        = {item.get('id')}
                  title     = {item.get('title')}
                  cover     = {item.get('cover')}
                  author    = {item.get('author')}
                  src       = {item.get('src')}
                  openModal = {props.handleOpenModalClick}
                />
              )
            }
          )
        }
        {
          props.categories.map( category => {
            return (
            	<Category
                {...category.toJS()}
            		key                  = {category.get('id')}
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
