import React, { Component } from 'react'
import Related        from '../components/related'
import HomeLayout     from '../components/home-layout'
import Categories     from '../../categories/categories'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal          from '../../widgets/components/modal'
import HandleError    from '../../error/containers/handle-error'
import VideoPlayer    from '../../player/containers/video-player'

class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModal = media => {
console.log('home',media, this.props)
    this.setState({
      modalVisible: true,
      media // --- equivale a media: media
    })
  }
  handleCloseModal = event => {
    this.setState({
      modalVisible: false,
    })
  }
  render(){
    return (
      <HandleError>
        <HomeLayout>
          <Related
            myPlaylist = {this.props.extras.myPlaylist}
            friends    = {this.props.extras.myFriends}
          />
          <Categories
            myUserInfo           = {this.props.extras.myUserInfo}
            categories           = {this.props.data.categories}
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

export default Home
