import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Orders from "./Orders";
import OrderDetail from "./OrderDetails";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#fff",
          }
        }}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
        <Stack.Screen name="OrderDetails" component={OrderDetail}></Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
