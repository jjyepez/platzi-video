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
import { closeModal }   from '../../actions' // -- /index.js

class Home extends Component {
  handleOpenModalBlur = () => {
    this.homeLayout.classList.add('blur')
    this.homeLayout.classList.add('gris')
  }
  setHomeRef = element => {
    this.homeLayout = element
  }
  handleCloseModal = event => {
    this.props.closeModal() // --- uso simplificado equivalente a bindActionCreators de Redux. Clase 29 del curso de Platzi Redux
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
            myUserInfo    = {this.props.extras.get('myUserInfo')}
            categories    = {this.props.categories}
            search        = {this.props.search}
            openModalBlur = {this.handleOpenModalBlur}
          />
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal
                handleClick = {this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay = {true}
                  mediaId = {this.props.modal.get('mediaId')}
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
    search    : searchResult,
    modal     : state.get('modal')
  }
}

const mapDispatchToProps = { // --- es una forma simplificada que remplaza el uso de bindActionCreators de Redux!
    closeModal
}

export default connect( mapStateToProps, mapDispatchToProps )( Home )
