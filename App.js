import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useAuth0, Auth0Provider } from "react-native-auth0";
import { Provider as PaperProvider } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import AppNavigator from "./navigation/AppNavigator";



const App = () => {
  return (
    <Auth0Provider
      domain={"dev-r71rmuv7r1vo37d6.us.auth0.com"}
      clientId={"3M1YSfCUV11jWKvGmncL3Lf0MMh34UL5"}
    >
    <PaperProvider>
      <AppNavigator/>
    </PaperProvider>
    </Auth0Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
