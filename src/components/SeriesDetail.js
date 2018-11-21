import React from 'react';
import {Text} from 'react-native'
import Card from './Card'


const SeriesDetail = (props) => {
    return(
        <Card>
            <Text>{props.serie.title}</Text>
        </Card>
    )
}

export default SeriesDetail;