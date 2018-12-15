import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import SeriesList from './components/SeriesList';
import CreateSeries from './components/CreateSeries'
import {Actions} from 'react-native-router-flux'
import {logoutUser} from './actions'
import {connect} from 'react-redux'

class RouterComponent extends Component {

    onLogout() {
        this.props.logoutUser()
        Actions.auth()
    }

    render(){
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene
                            key="login"
                            component={LoginForm}
                            title="Please Login"
                        />
                    </Scene>
                    <Scene key="main">
                        <Scene
                            leftTitle="Logout"
                            onLeft={this.onLogout.bind(this)}
                            rightTitle="Add"
                            onRight={() => { Actions.createSeries() }}
                            key="seriesList"
                            component={SeriesList}
                            title="Series"
                        />
                        <Scene
                            key="createSeries"
                            component={CreateSeries}
                            title="Series"
                        />
                    </Scene>
                </Scene>
            </Router >
        )
    }
}

   


export default  connect(null,{logoutUser})(RouterComponent);