import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class InitScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../../assets/BG2.jpg")}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Selection")}
          >
            <Text style={styles.text}>Ingresar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            onPress={() => this.props.navigation.navigate("Tutorial")}
          >
            <Text style={styles.text}>Guía (uso)</Text>
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
  text: {
    color: "#000",
    fontSize: 60
  },
  background: {
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    height: "100%"
  },
  button: {
    position: "absolute",
    bottom: 430,
    left: 50,
    marginHorizontal: 30,
    backgroundColor: "#fff",
    borderRadius: 4,
    height: 70,
    width: 250,
    alignItems: "center",
    justifyContent: "center"
  },
  button2: {
    position: "absolute",
    bottom: 300,
    left: 50,
    marginHorizontal: 30,
    backgroundColor: "#fff",
    borderRadius: 4,
    height: 70,
    width: 250,
    alignItems: "center",
    justifyContent: "center"
  }
});
