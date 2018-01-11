import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_MEDIA,
  SEARCH_ASYNC_MEDIA
} from './types'

export function openModal( mediaId ){
  return {
    type   : OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}
export function closeModal(){
  return {
    type: CLOSE_MODAL
  }
}
export function searchMedia( query ){
  return {
    type: SEARCH_MEDIA,
    payload: {
      query
    }
  }
}
export function searchAsyncMedia( query ){
  // --- con el uso del enhancer thunk ... podemos invokar otra acción desde dentro de esta
  return dispatch => {
      // --- $ajax
      // --- fetch
      // --- XHR
      // --- etc .. alguna peticion asincronica
      setTimeout( () => {
        dispatch( searchMedia( query ) )
      }, 5000)
  }
}
