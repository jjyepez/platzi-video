import React, { Component } from 'react'
import Related        from '../components/related'
import HomeLayout     from '../components/home-layout'
import Categories     from '../../categories/categories'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal          from '../../widgets/components/modal'
import HandleError    from '../../error/containers/handle-error'
import VideoPlayer    from '../../player/containers/video-player'
// --- redux
import { connect }      from 'react-redux'
import { List as list } from 'immutable'

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
            myPlaylist = {this.props.extras.get('myPlaylist')}
            friends    = {this.props.extras.get('myFriends')}
          />
          <Categories
            myUserInfo           = {this.props.extras.get('myUserInfo')}
            categories           = {this.props.categories}
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
  // --- ahora state es inmutable ... es un mapa, por lo que se deben usar metodos de mapas
  // --- state.get(['data','categories']) es equivalente a
  // --- state.get('data').get('categories')
  const categories = state.getIn(['data','categories']).map( categoryId => {
    return state.getIn(['data','entities','categories',categoryId])
  })
  let searchResult = list()
  const search     = state.getIn(['data','search'])
  if( search ){
    const mediaList = state.getIn(['data','entities','media'])
    searchResult    = mediaList.filter( item => (
      item.get('author').toLowerCase().includes( search.toLowerCase() )
    )).toList()
  }
  return {
    extras    : state.getIn(['data','extras']),
    categories: categories,
    search    : searchResult.toJS()
  }
}

export default connect( mapStateToProps )( Home )
