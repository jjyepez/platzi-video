import React, { Component } from 'react'
import HomeLayout     from '../components/home-layout'
import Categories     from '../../categories/categories'
import Related        from '../components/related'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal          from '../../widgets/components/modal'

class Home extends Component {
  state = {
    modalVisible: false,
    handleError : false,
  }
  handleOpenModal = e => {
    this.setState({
      modalVisible: true,
    })
  }
  handleCloseModal = e => {
    this.setState({
      modalVisible: false,
    })
  }
  componentDidCatch( error, info ){
    this.setState({
      handleError: true,
    })
  }
  render(){
    if( this.state.handleError ){
      return <p>Se ha presentado un error.</p>
    }
    return (
      <HomeLayout>

        <Related />
        <Categories
          categories = {this.props.data.categories}
          handleOpenModalClick = {this.handleOpenModal}
        />
        {
          this.state.modalVisible ?
          <ModalContainer>
            <Modal 
              handleClick = {this.handleCloseModal}
            >
              <h3>Este es el contenido del Modal Container</h3>

            </Modal>
          </ModalContainer>
          : ''
        }
      </HomeLayout>
    )
  }
}

export default Home