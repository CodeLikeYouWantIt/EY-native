import React,{Component} from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { onEmailChanged, onPasswordChanged, clearEmailState} from '../actions'
import {Card, CardSection,Button,Input,Spinner} from './common'
class LoginForm extends Component {

    constructor(props){
        super(props);
        
        this.state={
            status:'',
            error:'',
            loading:false,
            loginAttempts:0,
            authTOKEN:''
        }
        this.onLoginPress = this.onLoginPress.bind(this)
        this.onLoginSuccess = this.onLoginSuccess.bind(this)
    }


    onEmailChanged(text){
        this.props.onEmailChanged(text)
    }

    onPasswordChanged(text){
        this.props.onPasswordChanged(text)
    }

    clearEmailState(){
        this.props.clearEmailState()
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
                this.clearEmailState()
                this.onLoginSuccess(response)
            }
            if (!response.ok) { throw response }
        })
        .catch(err => {
            this.onLoginFail(err)
            this.increaseLoginAttempts()
            this.clearFields()
        })
    }
    
    onLoginSuccess(response){
        this.setState({
            loading:false,
            error:'',
            authTOKEN: JSON.parse(response._bodyInit).auth_token
        })
    }

    onLoginFail(err){
        this.setState({
            error:''
        })

        if(this.props.email === "" && this.props.password === ""){
            this.setState({
                error:"Please fill out required fields",
                loading:false
            })
        } else {
            this.setState({
                error: err.text()._55,
                loading:false
            })
        }
    }

    clearFields(){
        if(this.state.error === "Incorrect Password"){
            this.setState({
                password:''
            })
        } else {
            this.setState({
                email:'',
                password:''
            })
        }
    }

    tooManyLoginAttempts(){
        if(this.state.loginAttempts>3){
            return  (<Text>Too many failed attempts</Text>)
        }
    }

    increaseLoginAttempts(){
        if(this.state.status ==="failed"){
            this.state.loginAttempts += 1
        }
    }

    renderButton(){
        if(this.state.loading){
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
                    {this.state.error}
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
        password:state.auth.password
    }
}

export default connect(mapStateToProps,{
    onEmailChanged,
    onPasswordChanged,
    clearEmailState
})(LoginForm);