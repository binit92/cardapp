import { useState, useEffect } from 'react';
import * as React from "react";



import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./app_module/login";
import { Home } from "./app_module/home";
import { CardDetails } from "./app_module/CardView";

const Stack = createNativeStackNavigator();

export default function App() {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlashCards"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CardView"
          component={CardDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


