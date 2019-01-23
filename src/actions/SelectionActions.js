import {SELECTED_SERIES} from '../actions/types'
import {Actions} from 'react-native-router-flux'

export const updateSelectedSeriesId = (id) => {
    return(dispatch)=> {
        dispatch({
            type: SELECTED_SERIES,
            payload: id
        })
        Actions.showPosts()
    }
}

