import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useAuth0, Auth0Provider } from "react-native-auth0";

const Home = () => {
  const { authorize, clearSession, user, error, getCredentials } = useAuth0();

  const onLogin = async () => {
    try {
      await authorize(
        { scope: "openid profile email" },
        { customScheme: "interview" }
      );
      let credentials = await getCredentials();
      Alert.alert("AccessToken: " + credentials.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      await clearSession({ customScheme: "interview" });
    } catch (e) {
      console.log("Log out cancelled");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      {user && <Text>You are logged in as {user.name}</Text>}
      {!user && <Text>You are not logged in</Text>}
      {error && <Text>{error.message}</Text>}
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? "Log Out" : "Log In"}
      />
    </View>
  );
};

const App = () => {
  return (
    <Auth0Provider
      domain={"dev-r71rmuv7r1vo37d6.us.auth0.com"}
      clientId={"3M1YSfCUV11jWKvGmncL3Lf0MMh34UL5"}
    >
      <Home />
    </Auth0Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default App;
