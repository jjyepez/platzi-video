import React, { Component } from 'react'
import Related        from '../components/related'
import HomeLayout     from '../components/home-layout'
import Categories     from '../../categories/categories'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal          from '../../widgets/components/modal'
import HandleError    from '../../error/containers/handle-error'
import VideoPlayer    from '../../player/containers/video-player'
// --- redux
import { connect } from 'react-redux'

class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModal = media => {
    this.setState({
      modalVisible: true,
      media // --- equivale a media: media
    })
    this.homeLayout.classList.add('blur')
    this.homeLayout.classList.add('gris')
  }
  setHomeRef = element => {
    this.homeLayout = element
  }
  handleCloseModal = event => {
    this.setState({
      modalVisible: false,
    })
    this.homeLayout.classList.remove('blur')
    this.homeLayout.classList.remove('gris')
  }
  render(){
    return (
      <HandleError>
        <HomeLayout
          handleRefHome = {this.setHomeRef}
        >
          <Related
            myPlaylist = {this.props.extras.myPlaylist}
            friends    = {this.props.extras.myFriends}
          />
          <Categories
            myUserInfo           = {this.props.extras.myUserInfo}
            categories           = {this.props.data.categories}
            search               = {this.props.search}
            handleOpenModalClick = {this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick = {this.handleCloseModal}>
                <VideoPlayer
                  autoplay = {true}
                  src   = {this.state.media.src}
                  title = {this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps ( state, props ){
  return {
    data  : state.data,
    extras: state.extras,
    search: state.search
  }
}

export default connect( mapStateToProps )( Home )
