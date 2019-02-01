import React, { Component } from 'react'
import {TextInput, View} from 'react-native'
import { connect } from 'react-redux'
import { PostsUpdate, createPosts } from '../actions'
import { Card, CardSection, Button, Input } from './common'


class CreatePosts extends Component {
    onButtonPress() {
        this.props.createPosts(
            this.props.authToken,
            this.props.seriesId,
            this.props.userID,
            this.props.body,
            this.props.name
        )
    }

    render() {
        return (
            <Card>
                <View>
                    <CardSection>
                        <Input
                            onChangeText={text => this.props.PostsUpdate({ prop: 'name', value: text })}
                            placeHolder={"Title"}
                            value={this.props.name}
                        />
                    </CardSection>

                    <CardSection>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={text => this.props.PostsUpdate({ prop: 'body', value: text })}
                            value={this.props.body}
                            placeHolder={"........."}
                            numberOfLines={1000}
                            multiline={true}
                        />
                    </CardSection>

                </View>

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

const styles = {
    inputStyle: {
        color: "#1b1b1b",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 25,
        lineHeight: 30,
        height:500,
        flex: 2
    }
}

const mapStateToProps = ({ selectedSeries, posts ,auth}) => {
    const { seriesId} = selectedSeries
    const { body,name} = posts
    const { authToken, userID } = auth

    return { seriesId, body, name,authToken, userID}
}
export default connect(mapStateToProps, { PostsUpdate, createPosts })(CreatePosts)