import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import Icons from "react-native-vector-icons/Ionicons"

import { logout } from '../../redux/actionCreators';
import AccoutAddPage from '../../pages/AccoutAddPage';
import AccountShowingPage from '../../pages/AccountShowingPage';
import Icon from "./Icon"

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

const BottomTab = createBottomTabNavigator();


const AppNavigator = (props) => {
    return (
        <BottomTab.Navigator screenOptions={{ headerStyle: { backgroundColor: '#FC4F00' }, headerTintColor: '#fff', tabBarStyle: { backgroundColor: '#FC4F00' }, tabBarActiveTintColor: '#1D5D9B', tabBarInactiveTintColor: '#fff', headerRight: () => (<Icon name='power' size={25} color={'#fff'} action={() => props.logout()} />) }}>



            <BottomTab.Screen name='Account' component={AccountShowingPage} options={{
                tabBarIcon: ({ color, size }) => (<Icons name='podium' color={color} size={size} />)
            }} />
            <BottomTab.Screen name='Add Account' component={AccoutAddPage} options={{
                tabBarIcon: ({ color, size }) => (<Icons name='add' color={color} size={size} />)
            }} />
        </BottomTab.Navigator>
    )
}

export default connect(null, mapDispatchToProps)(AppNavigator);