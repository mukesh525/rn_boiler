import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screen/home';
import Login from '@screen/login';


const RootStack = createStackNavigator();


export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Login" >
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="Login" component={Login} />
          {/* <RootStack.Screen name="HomeScreen" component={HomeScreen} />
          <RootStack.Screen name="SearchScreen" component={SearchScreen} />
          <RootStack.Screen options={{ headerLeft: () => { return null; }, headerShown: false }} name="ChatScreen" component={ChatScreen} />
        */}
          </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}