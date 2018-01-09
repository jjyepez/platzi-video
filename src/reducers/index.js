import dataReducer  from './data'
import modalReducer from './modal'

// --- import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable' // --- equivalente al anterior pero para immutables map / list

const rootReducer = combineReducers({
  data : dataReducer,
  modal: modalReducer
})

export default rootReducer
