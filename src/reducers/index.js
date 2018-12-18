import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import SeriesUpdateForm from './SeriesUpdateForm'

export default combineReducers({
    auth: AuthReducer,
    series:SeriesUpdateForm
})