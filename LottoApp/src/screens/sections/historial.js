import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class HistorialScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../../assets/BG3.png")}
        >
          <Text style={styles.bienvenida}>{'Historial'}</Text>

          <TouchableOpacity
            style={styles.buttonHistorial}
            onPress={() => this.props.navigation.navigate("Premios")}
          >
            <Text style={styles.text}>Premios</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonJugar}
            onPress={() => this.props.navigation.navigate("Juegos")}
          >
            <Text style={styles.text}>Juegos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonPerfil}
            onPress={() => this.props.navigation.navigate("Recargas")}
          >
            <Text style={styles.text}>Recargas</Text>
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
  buttonHistorial: {
    position: "absolute",
    bottom: 430,
    left: 25,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonJugar: {
    position: "absolute",
    bottom: 350,
    left: 25,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonPerfil: {
    position: "absolute",
    bottom: 270,
    left: 25,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  }
});
