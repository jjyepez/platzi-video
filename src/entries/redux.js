// console.log('Jai der!')
import { createStore } from 'redux'

const $form = document.getElementById('form')
      $form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
  event.preventDefault()
  const data  = new FormData($form)
  const title = data.get('title')
  // ---- se dispara la Accion de Redux
  store.dispatch({
    type    : 'ADD_SONG',
    payload : { title }
  })
}

const initialState = [ // --- creando el estado inicial
  { "title": "Despacito" },
  { "title": "One more time" },
  { "title": "Imitation of Life" }
]

const reducer = ( state, action ) => {
  switch( action.type ){
    case 'ADD_SONG':
      return [ ...state, action.payload ]
    break;
    default:
      return state
  }
}

const store = createStore( // --- creando el store
  reducer,
  initialState,  // --- estado inicial
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // --- opcional (DevTools de Chrome)
)

const render = () => { // --- Actualiza la UI
  const $container = document.getElementById('playlist')
  const playlist   = store.getState()
  $container.innerHTML = ''
  playlist.forEach( item => {
    const $template = document.createElement('p')
          $template.textContent = item.title
          $container.appendChild( $template )
  })
}
render()

const handleChange = () => {
  render()
}

store.subscribe( handleChange )
