import React from "react";

import { createDrawerNavigator, DrawerActions  } from "@react-navigation/drawer";

import { SettingStackNavigator,MainStackNavigator, HousePlanStackNavigator  } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import HousePlan from "../screens/HousePlan";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Setting" component={SettingStackNavigator} />
      <Drawer.Screen name="HousePlan" component={HousePlanStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;