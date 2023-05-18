
import {  SafeAreaView } from "react-native";
import React from "react";
import { GlobalStyle } from "./src/assets/styles/globalstyles";

import {useFonts} from 'expo-font';
import AppNavigation from "./src/navigation/navigation";
import {Provider} from 'react-redux'
import { Store } from './src/redux/store';



export default function App() {

  const [loaded] = useFonts({
    JSRegular: require("./src/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf"),
   JSBold: require('./src/assets/fonts/PlusJakartaSans-Bold.ttf'),
   JSSemi:require('./src/assets/fonts/PlusJakartaSans-SemiBold.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <Provider store={Store}>
        <AppNavigation />
      </Provider>
    </SafeAreaView>
  );
}
