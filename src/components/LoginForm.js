import React,{Component} from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { onEmailChanged, onPasswordChanged, isLoading, storeAuthToken, loginUser} from '../actions'
import {Card, CardSection,Button,Input,Spinner} from './common'

class LoginForm extends Component {

    onEmailChanged(text){
        this.props.onEmailChanged(text)
    }

    onPasswordChanged(text){
        this.props.onPasswordChanged(text)
    }

    onLoginPress(e) {
        const {email, password} = this.props
        this.props.loginUser({email,password})
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

                <Text style={styles.errorMessage}>
                    {this.props.error}
                </Text>

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
    }
}

const mapStateToProps = state =>{
    return{
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading,
        authToken:state.auth.authToken,
        user:state.auth.user
    }
}

export default connect(mapStateToProps,{
    onEmailChanged,
    onPasswordChanged,
    isLoading,
    storeAuthToken,
    loginUser
})(LoginForm);