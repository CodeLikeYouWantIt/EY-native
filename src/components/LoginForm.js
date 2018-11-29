import React,{Component} from 'react'
import { TextInput } from 'react-native'
import {Card, CardSection,Button,Header,Input} from './common'

class LoginForm extends Component {

    constructor(){
        super();
        
        this.state={
            email:'',
            password:''
        }
        this.state.onPress= this.state.onPress.bind(this)
    }


    onPress() {
        console.log(hello)
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
                        onPress={this.state.onPress()}
                    />
                </CardSection>

            </Card>
        )
    }
}

export default LoginForm;