import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { PayCalculatorScreen } from "../screens/PayCalculatorScreen";
import { PensionCalculatorScreen } from "../screens/PensionCalculatorScreen";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";
export const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            header: ({ navigation }) => (
              <Header>
                {/* <Left>
                  <Button
                    transparent
                    onPress={() => navigation.navigate("PayCalculator")}
                  >
                    <Icon name="arrow-back" />
                  </Button>
                </Left> */}
                <Body>
                  <Title>Финансы военнослужащего</Title>
                </Body>
                {/* <Right>
                  <Button transparent>
                    <Icon name="menu" />
                  </Button>
                </Right> */}
              </Header>
            ),
          }}
        />
        <Stack.Screen
          name="PayCalculator"
          component={PayCalculatorScreen}
          options={{
            header: ({ navigation }) => (
              <Header>
                <Left>
                  <Button
                    transparent
                    onPress={() => navigation.navigate("Main")}
                  >
                    <Icon name="arrow-back" />
                  </Button>
                </Left>
                <Body>
                  <Title>Калькулятор денежного довольствия</Title>
                </Body>
                {/* <Right>
                  <Button transparent>
                    <Icon name="menu" />
                  </Button>
                </Right> */}
              </Header>
            ),
          }}
          // options={{ title: "Калькулятор денежного довольствия" }}
        />
        <Stack.Screen
          name="PensionCalculator"
          component={PensionCalculatorScreen}
          options={{ title: "Калькулятор денежного довольствия" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
