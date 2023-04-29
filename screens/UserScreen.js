import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { useAuth0 } from "react-native-auth0";
import { useTheme } from "react-native-paper";

const UserScreen = () => {
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
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.primary }}> Auth0Sample - Login </Text>
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

export default UserScreen;

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
