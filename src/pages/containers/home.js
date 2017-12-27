import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal-container'

class Home extends Component {
  render(){
    return (
      <HomeLayout>

        <Related />
        <Categories categories = {this.props.data.categories}/>

        <ModalContainer>
          <h1>Este es el contenido del Modal Container</h1>
        </ModalContainer>

      </HomeLayout>
    )
  }
}

export default Home