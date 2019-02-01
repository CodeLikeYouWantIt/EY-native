import React,{Component} from 'react'
import { connect } from 'react-redux'
import { SeriesUpdate, createSeries } from '../actions'
import { Card, CardSection, Button, Input} from './common'


class CreateSeries extends Component {
    onButtonPress(){
        this.props.createSeries(
            this.props.seriesTitle,
            this.props.url,
            this.props.userID,
            this.props.authToken
            )
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        onChangeText={text=>this.props.SeriesUpdate({prop:'seriesTitle',value:text})}
                        label={"Title"}
                        value={this.props.seriesTitle}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        onChangeText={text => this.props.SeriesUpdate({ prop: 'url', value: text })}
                        label={"Image"}
                        value={this.props.url}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        size={"small"}
                        buttonText={"Create"}
                        onPress={this.onButtonPress.bind(this)}
                    />
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps=({series,auth})=>{
    const {seriesTitle, url} = series
    const {authToken,userID} = auth
    return{ seriesTitle , url, authToken,userID}
}
export default connect(mapStateToProps,{SeriesUpdate,createSeries})(CreateSeries)