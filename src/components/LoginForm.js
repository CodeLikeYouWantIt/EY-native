import React,{Component} from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { onEmailChanged, onPasswordChanged, errorMessage, clearError, isLoading, storeAuthToken} from '../actions'
import {Card, CardSection,Button,Input,Spinner} from './common'
class LoginForm extends Component {

    constructor(props){
        super(props);
        
        this.state={
            loading:false,
            loginAttempts:0,
            authTOKEN:''
        }
        this.onLoginPress = this.onLoginPress.bind(this)
    }


    onEmailChanged(text){
        this.props.onEmailChanged(text)
    }

    onPasswordChanged(text){
        this.props.onPasswordChanged(text)
    }

    onLoginPress(e) {
        this.setState({
            loading:true
        })
        fetch('http://localhost:3000/authenticate',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.props.email,
                password: this.props.password
            })
        })
        .then(response => {
            if (response.ok){
                this.props.storeAuthToken(JSON.parse(response._bodyInit).auth_token)
                this.props.clearError()
                this.props.isLoading(false)
            }
            if (!response.ok) { throw response }
        })
        .catch(err => {
            this.onLoginFail(err)
        })
    }
    
    onLoginFail(err){
        if(this.props.email === "" && this.props.password === ""){
            this.props.errorMessage("Please fill out required fields")
        } else {
            this.props.errorMessage(err.text()._55)
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size={"small"}/>
        }

        return(
            <Button
                buttonText={"Login"}
                onPress={this.onLoginPress}
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
                    {this.props.authToken}
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
        authToken:state.auth.authToken
    }
}

export default connect(mapStateToProps,{
    onEmailChanged,
    onPasswordChanged,
    errorMessage,
    clearError,
    isLoading,
    storeAuthToken
})(LoginForm);