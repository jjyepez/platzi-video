import React, { Component } from 'react'
import Media         from '../componentes/media'
// --- Redux
import { connect }   from 'react-redux'
import { openModal } from '../../actions' // --- es equivalente a ../../actions/index.js ... porque index.js es el default

class MediaContainer extends Component {
  openModal = mediaId => {
    this.props.dispatch( openModal( mediaId ) ) // --- disponible gracias a connect
    this.props.openModalBlur()
  }
  render(){
    return (
      <Media
        { ...this.props.data.toJS() }
        className = {this.props.className}
        openModal = {this.openModal}
        openModalBlur = {this.props.openModalBlur}
      />
    )
  }
}

function mapStateToProps( state, props ){
  const mediaItem = state.getIn(['data','entities','media',props.id])
  return {
    data: mediaItem
  }
}

export default connect( mapStateToProps )(MediaContainer)
