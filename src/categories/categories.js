import React from 'react'
import Category from './category.js'
import './categories.css'
import Search from '../widgets/containers/search'
import UserInfo from '../widgets/components/user-info'
import Scroller from '../libs/components/scroller'

function Categories(props){
  return (
    <div className   = "Categories">
      <div className = "Categories-header">
        <Search />
        <UserInfo {...props.myUserInfo}/>
      </div>
      <Scroller>
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
