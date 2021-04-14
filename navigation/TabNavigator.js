import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { MainStackNavigator, SettingStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'md-settings' : 'md-settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#42628F',
          inactiveTintColor: 'gray',
        }}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Setting" component={SettingStackNavigator} />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;