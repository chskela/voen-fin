import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { PayCalculatorScreen } from "../screens/PayCalculatorScreen";

export const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PayCalculator">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Финансы военнослужащего" }}
        />
        <Stack.Screen
          name="PayCalculator"
          component={PayCalculatorScreen}
          options={{ title: "Калькулятор денежного довольствия" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
