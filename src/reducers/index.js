import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import SeriesReducer from './SeriesReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
    auth: AuthReducer,
    series:SeriesReducer,
    selectedSeries: SelectionReducer
})