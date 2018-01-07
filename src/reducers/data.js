function dataReducer( state, action ){

  switch ( action.type ) {
    case 'SEARCH_VIDEO': {
      let results = []
      if( action.payload.query ){
        state.data.categories.forEach( category => {
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
