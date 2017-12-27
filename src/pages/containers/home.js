import React, { Component } from 'react'
import Related        from '../components/related'
import HomeLayout     from '../components/home-layout'
import Categories     from '../../categories/categories'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal          from '../../widgets/components/modal'
import HandleError    from '../../error/containers/handle-error'

class Home extends Component {
  state = {
    modalVisible: false,
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
  render(){
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories           = {this.props.data.categories}
            handleOpenModalClick = {this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick = {this.handleCloseModal}>
                <h3>Este es el contenido del Modal Container</h3>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home