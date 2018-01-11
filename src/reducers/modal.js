import { fromJS } from 'immutable'
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types'


const initialState = fromJS({ // --- convierte el objeto a un Mapa
	modal: {
		visibility: false,
		mediaId   : null,
	}
})

function modalReducer( state = initialState, action ){

  switch ( action.type ) {
    case OPEN_MODAL:
      return state.merge({
				visibility: true,
				mediaId: action.payload.mediaId
			})
      break;
    case CLOSE_MODAL:
      return state.set('visibility', false)
      break;
    default:
      return state
  }

}

export default modalReducer
