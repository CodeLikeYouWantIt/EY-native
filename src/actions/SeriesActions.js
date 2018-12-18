import {SERIES_TITLE} from '../actions/types'

export const onSeriesUpdate = ({prop,value}) => {
    return {
        type: SERIES_TITLE,
        payload: {prop,value}
    }
}

