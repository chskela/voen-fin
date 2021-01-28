import React from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
} from "native-base";

export const MainScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PayCalculator");
          }}
        >
          <Card>
            <CardItem cardBody>
              <Image
                source={require("../../assets/emblem.png")}
                style={{ height: 300, width: "100%", flex: 1 }}
              />
            </CardItem>
            <CardItem footer>
              <Text>Калькулятор денежного довольствия</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PensionCalculator");
          }}
        >
          <Card>
            <CardItem cardBody>
              <Image
                source={require("../../assets/emblem.png")}
                style={{ height: 300, width: "100%", flex: 1 }}
              />
            </CardItem>
            <CardItem footer>
              <Text>Калькулятор военной пенсии</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
