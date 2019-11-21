import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert
} from "react-native";
import * as firebase from "firebase";

import { variables } from "../../config/varGlobales"

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellidos: "",
      cedula: "",
      contraseña: "",
      nombreDB: "",
      apellidosDB: "",
      contraseñaDB: ""
    };
  }

  verificarCredenciales() {
    if (this.state.nombreDB == this.state.nombre) {
      if (this.state.apellidosDB == this.state.apellidos) {
        if (this.state.contraseñaDB == this.state.contraseña) {
          variables.nombre = this.state.nombre,
          variables.apellidos = this.state.apellidos,
          variables.cedula = this.state.cedula,
          variables.contraseña = this.state.contraseña,
          this.props.navigation.navigate("Home");
        }
        else {
          Alert.alert("Contraseña incorrecta.");
        }
      } 
      else {
        Alert.alert("Apellidos incorrectos.");
      }
    } else {
      Alert.alert("Nombre incorrecto.");
    }
  }

  _getContraseña() {
    setTimeout(() => {
      firebase
        .database()
        .ref("/Lotto/Usuarios/")
        .orderByChild("Cédula")
        .equalTo(this.state.cedula)
        .on("child_added", snapshot => {
          this.setState({
            contraseñaDB: snapshot.val().Contraseña,
            nombreDB: snapshot.val().Nombre,
            apellidosDB: snapshot.val().Apellidos
          });
          this.verificarCredenciales();
        });
    }, 5000);
  }

  _comprobarUsuario() {
    setTimeout(() => {
      firebase
        .database()
        .ref("/Lotto/Usuarios/")
        .orderByChild("Cédula")
        .equalTo(this.state.cedula)
        .on("value", snapshot => {
          if (!snapshot.exists()) {
            Alert.alert("Esta cédula no existe.");
          }
        });
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../../assets/BG3.png")}
        >
          <Text style={styles.bienvenida}>{'Log in'}</Text>

          <View style={styles.form}>
            <View style={{ marginTop: 140 }}>
              <Text style={styles.inputTitle}>Nombre</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={nombre => this.setState({ nombre })}
                value={this.state.nombre}
              ></TextInput>
            </View>

            <View style={{ marginTop: 30 }}>
              <Text style={styles.inputTitle}>Apellidos</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={apellidos => this.setState({ apellidos })}
                value={this.state.apellidos}
              ></TextInput>
            </View>

            <View style={{ marginTop: 30 }}>
              <Text style={styles.inputTitle}>Cedula</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={cedula => this.setState({ cedula })}
                value={this.state.cedula}
              ></TextInput>
            </View>

            <View style={{ marginTop: 30 }}>
              <Text style={styles.inputTitle}>Contraseña</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                onChangeText={contraseña => this.setState({ contraseña })}
                value={this.state.contraseña}
              ></TextInput>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this._comprobarUsuario();
              this._getContraseña();
            }}
          >
            <Text style={styles.text}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 150 }}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.textSingup}>
              ¿No te has registrado?
              <Text style={styles.textAlertSingup}> Sing up</Text>
            </Text>
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
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    fontWeight: "bold",
    color: "red",
    fontSize: 20,
    textTransform: "uppercase"
  },
  input: {
    backgroundColor: "white",
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  text: {
    color: "#fff",
    fontSize: 20
  },
  button: {
    position: 'absolute',
    bottom: 200,
    left: 30,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  textSingup: {
    color: "black",
    fontSize: 13
  },
  textAlertSingup: {
    fontWeight: "500",
    color: "red"
  },
  background: {
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    height: "100%"
  }
});
