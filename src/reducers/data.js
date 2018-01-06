function data( state, action ){
  switch ( action.type ) {
    case 'SEARCH_VIDEO': {
      let results = []
      state.data.categories.forEach( category => {
        results = results.concat(
          category.playlist.filter( item => item.author.includes( action.payload.query ) )
        )
      })
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
export default data
