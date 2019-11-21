import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert
} from "react-native";

import { variables } from "../config/varGlobales";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandera: true,
      permArr: [],
      usedChars: []
    };
  }

  enviarDatos () {
    tempPremio = "₡ " + variables.premio.toString();
    tempNumeros = 
      "" + 
      variables.numerosGanador[0].toString() + "-" +
      variables.numerosGanador[1].toString() + "-" +
      variables.numerosGanador[2].toString() + "-" +
      variables.numerosGanador[3].toString() + "-" +
      variables.numerosGanador[4].toString();
    datos = [
      variables.indexPremios.toString(),
      variables.pais,
      variables.puntoVentaGanador,
      variables.fechaActual,
      variables.horaGanador,
      tempPremio, 
      tempNumeros
    ];
    variables.premios.push(datos);
    variables.indexPremios += 1;
  }

  verificarPremio() {
    this.permute(variables.numerosJugados);
    this.verificarNumeros();

    if (
      variables.puntoVentaJugado === variables.puntoVentaGanador &&
      variables.horaJugada === variables.horaGanador &&
      this.state.bandera === true
    ) {
      variables.carteraVirtual += variables.premio;
      this.enviarDatos();
      Alert.alert("!Felicidades¡ !Has ganado una loteria¡");
    }
  }

  permute(input) {
    var i, ch;

    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      this.state.usedChars.push(ch);
      if (input.length == 0) {
        this.state.permArr.push(this.state.usedChars.slice());
      }
      this.permute(input);
      input.splice(i, 0, ch);
      this.state.usedChars.pop();
    }  
  };

  verificarNumeros() {
    array = variables.numerosGanador;

    for(var i = 0 ; i < this.state.permArr.length; i++) {
      if (this.state.permArr[i] === array) {
        this.state.bandera = true;
      }
    }  
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../assets/BG3.png")}
        >
          <Text style={styles.bienvenida}>{'Lotto'}</Text>

          <TouchableOpacity
            style={styles.buttonHistorial}
            onPress={() => this.props.navigation.navigate("Historial")}
          >
            <Text style={styles.text}>Historial</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonJugar}
            onPress={() => this.props.navigation.navigate("Jugar")}
          >
            <Text style={styles.text}>Jugar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonPerfil}
            onPress={() => this.props.navigation.navigate("Perfil")}
          >
            <Text style={styles.text}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonAdmi}
            onPress={() => this.props.navigation.navigate("Admi")}
          >
            <Text style={styles.text}>Admi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonVerificar}
            onPress={() => this.verificarPremio()}
          >
            <Text style={styles.text}>Verificar</Text>
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
    bottom: 460,
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
    bottom: 380,
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
    bottom: 300,
    left: 25,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonAdmi: {
    position: "absolute",
    bottom: 220,
    left: 25,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonVerificar: {
    position: "absolute",
    bottom: 140,
    left: 25,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  }
});
