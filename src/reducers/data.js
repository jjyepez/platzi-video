import data   from '../schemas/index'
import extras from '../data/api-extra'

const initialState = {
	entities  : data.entities,
	categories: data.result.categories,
  search    : [],
  extras,
}

function dataReducer( state = initialState, action ){

  switch ( action.type ) {
    case 'SEARCH_VIDEO': {
      let results = []
      if( action.payload.query ){
        state.categories.forEach( category => {
          // --- const patron = new RegExp(action.payload.query,'ig') // --- revisar
          results = results.concat(
            category.playlist.filter(
              // --- item => { return patron.test( item.author ) } // --- revisar
              item => item.author.toLowerCase().includes( action.payload.query.toLowerCase() )
            )
          )
        })
      }
      return { // --- un objeto
        ...state,
        search: results
      }
    }
    break;

    default:
      return state
  }

}
export default dataReducer // --- función Reducer para Redux
