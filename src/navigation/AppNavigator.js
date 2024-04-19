import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Question from "../screens/Question";
import Splash from "../screens/Splash";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Question" component={Question} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
