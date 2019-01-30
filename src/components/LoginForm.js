import React,{Component} from 'react'
import { Text,View } from 'react-native'
import { connect } from 'react-redux'
import { onEmailChanged, onPasswordChanged, loginUser} from '../actions'
import {Card, CardSection,Button,Input,Spinner} from './common'

class LoginForm extends Component {

    onEmailChanged(text){
        this.props.onEmailChanged(text)
    }

    onPasswordChanged(text){
        this.props.onPasswordChanged(text)
    }

    onLoginPress() {
        const {email, password} = this.props
        this.props.loginUser({email,password})
    }

    renderError(){
        if (this.props.error){
            return(
                <Text style={styles.errorMessage}>
                    {this.props.error}
                </Text>
            )
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size={"small"}/>
        }

        return(
            <Button
                buttonText={"Login"}
                onPress={this.onLoginPress.bind(this)}
            />
        )
    }


    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        onChangeText={this.onEmailChanged.bind(this)}
                        label={"Email"}
                        value={this.props.email}
                    />

                </CardSection>
                
                <CardSection>
                    <Input 
                        onChangeText={ this.onPasswordChanged.bind(this)}
                        secureTextEntry={true}
                        label={"Password"}   
                        value={this.props.password}                
                    ></Input>                    
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorMessage:{
        color:'red',
        fontSize:20,
        alignSelf:'center',
    },
    whiteBG:{
        backgroundColor:'#fff',
        flex:1
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth
    return { email, password, error, loading }
}


export default connect(mapStateToProps,{
    onEmailChanged,
    onPasswordChanged,
    loginUser
})(LoginForm);