import React,{Component} from 'react'
import {Text} from 'react-native'
import { connect } from 'react-redux'
import { onSeriesUpdate } from '../actions'
import { Card, CardSection, Button, Spinner, Input} from './common'


class CreateSeries extends Component {

    onSeriesUpdate(text){
        this.props.onSeriesUpdate({prop:'seriesTitle', value:text})
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        onChangeText={this.onSeriesUpdate.bind(this)}
                        label={"Title"}
                        value={this.props.seriesTitle}
                    >
                    </Input>
                </CardSection>

                <CardSection>
                    <Text>
                        {this.props.seriesTitle}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button
                        size={"small"}
                        buttonText={"Create"}
                    />
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps=({series})=>{
    const {seriesTitle} = series
    return{ seriesTitle }
}
export default connect(mapStateToProps,{onSeriesUpdate})(CreateSeries)