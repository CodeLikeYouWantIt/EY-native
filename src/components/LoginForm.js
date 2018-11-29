import React,{Component} from 'react'
import { Text } from 'react-native'
import {Card, CardSection,Button,Header,Input} from './common'

class LoginForm extends Component {

    constructor(props){
        super(props);
        
        this.state={
            email:'',
            password:'',
            status:'',
            error:''
        }
        this.onLoginPress = this.onLoginPress.bind(this)
    }



    onLoginPress(e) {
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                session: {
                    email: this.state.email,
                    password: this.state.password
                }
            })
        })
        .then(response => {
            if (response.ok){
                this.setState({status:"Boo ya!", error:''})
            } else {
                this.setState({status:"Uh oh..."})
            }
            if (!response.ok) { throw response }
        })
        .catch(err => {
            this.setState({
                error: err.text()._55
            })
        })
    }
   

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        placeHolder={"example@gmail.com"}
                        label={"Email"}
                    />

                </CardSection>
                
                <CardSection>
                    <Input 
                        value={this.state.password}
                        onChangeText={ password => this.setState({ password })}
                        secureTextEntry={true}
                        placeHolder={"ab23sXs"}
                        label={"Password"}                   
                    ></Input>                    
                </CardSection>

                <CardSection>
                    <Button 
                        buttonText={"Login"}
                        onPress={this.onLoginPress}
                    />
                </CardSection>
                <Card>
                    <CardSection>
                        <Text style={styles.errorMessage}>{this.state.status}</Text>
                        <Text style={styles.errorMessage}>{this.state.error}</Text>
                    </CardSection>
                </Card>
            </Card>
        )
    }
}

const styles = {
    errorMessage:{
        color:'red',
        fontSize:23,
        alignSelf:'center',
        flex:1
    }
}

export default LoginForm;