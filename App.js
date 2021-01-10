import React from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./src/app/store";
import { AppNavigator } from "./src/navigator/AppNavigator";

export default function App() {
  const [loaded] = Font.useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
