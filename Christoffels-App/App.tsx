import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import MenuPage from './screens/MenuPage';
import MenuManagePage from './screens/MenuManagePage';
import {MenuProvider} from './MenuContent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export type RootStackParamList = {
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e53935',
        tabBarStyle: {height: 64, paddingBottom: 10, paddingTop: 6},
        tabBarLabelStyle: {fontSize: 12}
        }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon:({focused}) => <Text>{focused ? '':'' }</Text>,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuPage}
        options={{
          tabBarIcon:({focused}) => <Text>{focused ? '':'' }</Text>,
        }}
      />
      <Tab.Screen
        name="Manage"
        component={MenuManagePage}
        options={{
          tabBarIcon:({focused}) => <Text>{focused ? '':'' }</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18
  }
});
