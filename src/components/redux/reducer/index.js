import {combineReducers} from 'redux'
import {productReducer} from './reducer'

 const allReducers = combineReducers({
allProducts: productReducer
})

export default allReducers