import React from "react";
import {  Auth0Provider } from "react-native-auth0";
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from "./navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <Auth0Provider
      domain={"dev-r71rmuv7r1vo37d6.us.auth0.com"}
      clientId={"3M1YSfCUV11jWKvGmncL3Lf0MMh34UL5"}
    >
    <PaperProvider>
      <AppNavigator/>
      <StatusBar style="light"/>
    </PaperProvider>
    </Auth0Provider>
  );
};


export default App;
