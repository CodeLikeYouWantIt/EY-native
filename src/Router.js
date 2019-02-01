import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import SeriesList from './components/SeriesList';
import CreateSeries from './components/CreateSeries'
import CreatePosts from './components/CreatePosts'
import {Actions} from 'react-native-router-flux'
import {logoutUser} from './actions'
import {connect} from 'react-redux'
import PostsList from './components/PostsList'

class RouterComponent extends Component {

    onLogout() {
        this.props.logoutUser()
        Actions.auth()
    }

    render(){
        return (
            <Router>
                <Scene key="root" hideNavBar style={{backgroundColor:'#ffffff'}} >
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
                            rightTitle="New Series"
                            onRight={() => { Actions.createSeries() }}
                            key="seriesList"
                            component={SeriesList}
                            title="Series"
                            initial={true}
                        />
                        <Scene
                            key="createSeries"
                            component={CreateSeries}
                            title="Series"
                        />
                        <Scene
                            rightTitle="Create New Post"
                            onRight={()=>{Actions.newPost() }}
                            key="showPosts"
                            component={PostsList}
                            title="Posts"
                        />
                        <Scene
                            key="newPost"
                            component={CreatePosts}
                            title="New Post"
                        />
                    </Scene>
                </Scene>
            </Router >
        )
    }
}

   


export default  connect(null,{logoutUser})(RouterComponent);