import React, { Component } from 'react'
import Media       from '../componentes/media'
import { connect } from 'react-redux'

class MediaContainer extends Component {
  render(){
    return (
      <Media
        { ...this.props.data }
        openModal = {this.props.openModal}
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
