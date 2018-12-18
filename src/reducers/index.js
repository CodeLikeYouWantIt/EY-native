import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import SeriesReducer from './SeriesReducer'

export default combineReducers({
    auth: AuthReducer,
    series:SeriesReducer
})