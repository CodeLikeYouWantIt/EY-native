import React from 'react';
import {Scene, Router} from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import SeriesList from './components/SeriesList';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root">
                <Scene
                    key="login"
                    component={LoginForm}
                    title="Please Login"
                />
                <Scene
                    key="seriesList"
                    component={SeriesList}
                    title="Series"
                />
            </Scene>
        </Router>
    )
}

export default RouterComponent;