import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { variables } from "../../config/varGlobales"

export default class PerfilScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: variables.nombre,
      apellidos: variables.apellidos,
      cedula: variables.cedula,
      contraseña: variables.contraseña,
      carteraVirtual: variables.carteraVirtual
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../../assets/BG2.jpg")}
        >
          <View style={styles.form}>
            <View style={{ marginTop: 30 }}>
              <Text style={styles.inputTitle}>Nombre</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.input}>{this.state.nombre}</Text>
            </View>
            
            <View style={{ marginTop: 40 }}>
              <Text style={styles.inputTitle}>Apellidos</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.input}>{this.state.apellidos}</Text>
            </View>

            <View style={{ marginTop: 40 }}>
              <Text style={styles.inputTitle}>Cédula</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.input}>{this.state.cedula}</Text>
            </View>

            <View style={{ marginTop: 40 }}>
              <Text style={styles.inputTitle}>Contraseña</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.input}>{this.state.contraseña}</Text>
            </View>
          
            <View style={{ marginTop: 40 }}>
              <Text style={styles.inputTitle}>Cartera virtual</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.input}>{this.state.carteraVirtual}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "red",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
      backgroundColor: "#E5D7D7",
      alignSelf: 'flex-start',
    fontWeight: "bold",
    color: "red",
    fontSize: 25,
    textTransform: "uppercase"
  },
  input: {
    backgroundColor: "white",
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 15,
    color: "#161F3D"
  },
  text: {
    color: "#fff",
    fontSize: 20
  },
  button: {
    position: 'absolute',
    bottom: 290,
    left: 30,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  textLogin: {
    color: "black",
    fontSize: 13
  },
  textAlertLogin: {
    fontWeight: "500",
    color: "red"
  },
  background: {
    width: "100%",
    justifyContent: "space-around",
    height: "100%"
  }
});

