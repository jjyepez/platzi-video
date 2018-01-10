import React, { Component } from 'react'
import Media       from '../componentes/media'
import { connect } from 'react-redux'

class MediaContainer extends Component {
  openModal = mediaId => {
    this.props.dispatch({ // --- disponible gracias a connect
      type: 'OPEN_MODAL',
      payload: {
        mediaId
      }
    })
  }
  render(){
    return (
      <Media
        { ...this.props.data.toJS() }
        className = {this.props.className}
        openModal = {this.openModal}
      />
    )
  }
}

function mapStateToProps( state, props ){
  const mediaItem = state.getIn(['data','entities','media',props.id])
// --- console.log( mediaItem )
  return {
    data: mediaItem
  }
}

export default connect( mapStateToProps )(MediaContainer)
