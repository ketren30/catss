import {combineReducers} from 'redux'
import { appReducer } from './appReducer'
import { cardReducer } from './cardReducer'
import { mainReducer } from './mainReducer'


export const rootReducer = combineReducers({
  main: mainReducer,
  app:  appReducer,
  //card: cardReducer
})