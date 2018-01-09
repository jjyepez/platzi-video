
const initialState = {
	modal: {
		visibility: false,
		mediaId   : null,
	}
}

function modalReducer( state = initialState, action ){

  switch ( action.type ) {
    case 'OPEN_MODAL':
      return state
      break;
    case 'OPEN_MODAL':
      return state
      break;
    default:
      return state
  }

}

export default modalReducer
