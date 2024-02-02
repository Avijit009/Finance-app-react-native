import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from 'react-redux';

import Login from '../pages/Login';
import AppNavigator from './app/AppNavigator';

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const ScreenStack = createNativeStackNavigator();

const Navigator = (props) => {
    return (

        <ScreenStack.Navigator screenOptions={{
            headerShown: false
        }}>
            {props.token === null && <ScreenStack.Screen name="Login" component={Login}
                options={{ headerShown: true, headerStyle: { backgroundColor: '#FC4F00' }, headerTintColor: '#fff' }} />}


            {props.token && <ScreenStack.Screen name="Home" component={AppNavigator} />}


        </ScreenStack.Navigator>


    )
}

export default connect(mapStateToProps)(Navigator);