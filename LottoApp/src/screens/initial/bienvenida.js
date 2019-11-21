import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class BienvenidaScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../../assets/BG2.jpg")}
        >
          <View style={styles.form}>
            <Text style={styles.textB}>
              La aplicación consiste en ingresar 5 números para 
              participar en una lotería. Puede elegir en cual 
              punto de venta, horario y la cantidad de apuesta 
              (dinero) que desea participar. {'\n'} {'\n'}
              Además, el dinero es virtual y puede recargar a 
              su cartera, de igual manera virtual. {'\n'} {'\n'}
              También puede observar su registro de
              premios, juegos realizados y recargas. {'\n'} {'\n'}
              Para continuar presione "LOTTO" y así, puede mirar
              una guía de usuario.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Init")}
          >
            <Text style={styles.text}>LOTTO</Text>
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
  form: {
    borderWidth: 5,
    borderColor: "black",
    marginBottom: 48,
    marginHorizontal: 30
  },
  textB: {
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: "#E5D7D7",
    alignSelf: 'flex-start',
    color: "red",
    fontSize: 25,
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
    bottom: 80,
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
