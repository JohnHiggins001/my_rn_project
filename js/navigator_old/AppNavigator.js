import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainNavigator from '../../js/navigator/MainNavigator'
import WelcomePage from '../../js/page/Welcome'
import DetailPage from '../../js/page/DetailPage'

const MainStack = createStackNavigator({
    MainNav: {
        screen: MainNavigator,
        navigationOptions: {
            title: ' ',
            // headerBackTitle: '222back',
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            title: '详情标题',
            headerBackTitle: ' ',
        }
    }
})

const SwitchStack = createSwitchNavigator({
    Welcome: WelcomePage,
    MainPage: MainStack,
},
    {
        initialRouteName: 'Welcome',
    }
)

export default createAppContainer(SwitchStack);