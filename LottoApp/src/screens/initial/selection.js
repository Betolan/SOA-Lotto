import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class SelectionScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../../assets/BG3.png")}
        >
          <Text style={styles.bienvenida}>{'Lotto'}</Text>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.text}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSingup}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.text}>Sing up</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bienvenida: {
    position: "absolute",
    right: 20,
    top: 10,
    color: "black",
    marginTop: 32,
    fontSize: 75,
    fontWeight: "400"
  },
  text: {
    color: "#fff",
    fontSize: 30
  },
  background: {
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    height: "100%"
  },
  buttonLogin: {
    position: "absolute",
    bottom: 430,
    left: 50,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonSingup: {
    position: "absolute",
    bottom: 350,
    left: 50,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  }
});
