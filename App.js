import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from './component/view/home/HomeScreen'
import SearchScreen from './component/view/search/SearchScreen'
import UploadScreen from './component/view/UploadScreen'
import NoticeScreen from './component/view/NoticeScreen'
import MypageScreen from './component/view/MypageScreen'

const Tab = createBottomTabNavigator();
const DarkTheme = {
  //...DefaultTheme,
  dark: true,
  colors: {
    primary: 'rgb(0, 205, 60)',
    text: 'rgb(150, 150, 150)',
    background: 'rgb(28, 28, 30)',
    card: 'rgb(28, 28, 30)',
    border: 'rgb(28, 28, 30)',
    notification: 'rgb(255, 69, 58)',
  },
};

function BottomTab() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} theme={DarkTheme}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({color})=>(  
              <Icon name="home" color={color} size={25}/>)
          }} />
        <Tab.Screen name="Search" component={SearchScreen} theme={DarkTheme}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({color})=>(  
              <Icon name="search" color={color} size={25}/>)
          }} />
        <Tab.Screen name="Upload" component={UploadScreen} theme={DarkTheme}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({color})=>(  
              <Icon name="plus-square" color={color} size={25}/>)
          }} />
        <Tab.Screen name="Notice" component={NoticeScreen} theme={DarkTheme}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({color})=>(  
              <Icon name="heart" color={color} size={25}/>)
          }} />
        <Tab.Screen name="Mypade" component={MypageScreen} theme={DarkTheme}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({color})=>(  
              <Icon name="user" color={color} size={25}/>)
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomTab;