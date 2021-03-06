import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Register from "./src/Views/Register";
import Login from "./src/Views/Login";
import ForgotPassword from "./src/Views/ForgotPassword";

class App extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    ForgotPassword: ForgotPassword
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);


