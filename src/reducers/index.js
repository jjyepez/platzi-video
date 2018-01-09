import dataReducer  from './data'
import modalReducer from './modal'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  data : dataReducer,
  modal: modalReducer
})

export default rootReducer
