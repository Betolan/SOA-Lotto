import React, { Component } from "react";

import { 
  View, 
  Button, 
  ImageBackground, 
  StyleSheet ,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import ActionSheet from "react-native-actionsheet";

import { variables } from "../../config/varGlobales";

export default class LottoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opciones: variables.opciones,
      opcionHorarios: "Presionar para elegir un horario",
      indexCancelar: variables.lenghtOpciones,
      n1: 0, n2: 0, n3: 0, n4: 0, n5: 0,
      apuesta: 0
    };
  }

  showActionSheet = () => {
    this.ActionSheet.show();
  };

  validarDatos () {
    if (this.state.apuesta > variables.apuestaLimite) 
    {
      Alert.alert(
        "¡Error! Verificar lo siguiente: \n " +
        "El límite de apuesta es de " + variables.apuestaLimite  + "."
      )
    }
    else {
      if (this.state.apuesta > variables.carteraVirtual) {
        Alert.alert(
          "¡Error! Verificar lo siguiente: \n " +
          "Su apuesta es mayor a su dinero (" + variables.carteraVirtual  + ")."
        )
      }
      else {
        if (
          this.state.n1 < 0 || this.state.n1 > 99 || 
          this.state.n2 < 0 || this.state.n2 > 99 ||
          this.state.n3 < 0 || this.state.n3 > 99 ||
          this.state.n4 < 0 || this.state.n4 > 99 ||
          this.state.n5 < 0 || this.state.n5 > 99 
          ) {
          Alert.alert(
            "¡Error! Verificar lo siguiente: \n " +
            "Los números deben ser entre 0 y 99." 
          )
        }
        else {
          if (this.state.opcionHorarios == "Presionar para elegir un horario") {
            Alert.alert(
              "¡Error! Verificar lo siguiente: \n " +
              "Haber elegido un horario." 
            )
          }
          else {
            variables.carteraVirtual -= this.state.apuesta;
            this.enviarDatos();
          }
        }
      }
    }
  }
  
  enviarDatos () {
    tempApuesta = "₡ " + this.state.apuesta.toString();
    tempNumeros = 
      "" + 
      this.state.n1.toString() + "-" +
      this.state.n2.toString() + "-" +
      this.state.n3.toString() + "-" +
      this.state.n4.toString() + "-" +
      this.state.n5.toString();
    datos = [
      variables.indexJuegos.toString(),
      variables.pais,
      variables.puntoVenta,
      variables.fechaActual,
      this.state.opcionHorarios,
      tempApuesta, 
      tempNumeros
    ];
    variables.horaJugada = this.state.opcionHorarios;
    variables.numerosJugados = [
      this.state.n1,
      this.state.n2,
      this.state.n3,
      this.state.n4,
      this.state.n5
    ];
    variables.puntoVentaJugado = variables.puntoVenta;
    variables.juegos.push(datos);
    variables.indexJuegos += 1;
    Alert.alert("¡En hora buena! Su juego ha sido registrado.");
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../../assets/BG3.png")}
        >
          <Text style={styles.bienvenida}>{'¡Arriesga'}</Text>
          <Text style={styles.bienvenida2}>{'y Gana!'}</Text>
          
          <View style={{flexDirection: "row"}}>
            <View style={{ top: 130, marginLeft: 27 }}>
              <Text style={styles.inputTitle}>N°1</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={n1 => this.setState({ n1 })}
                value={this.state.n1.toString()}
              ></TextInput>
            </View>

            <View style={{ top: 130, marginLeft: 30 }}>
              <Text style={styles.inputTitle}>N°2</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={n2 => this.setState({ n2 })}
                value={this.state.n2.toString()}
              ></TextInput>
            </View>

            <View style={{ top: 130, marginLeft: 30 }}>
              <Text style={styles.inputTitle}>N°3</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={n3 => this.setState({ n3 })}
                value={this.state.n3.toString()}
              ></TextInput>
            </View>

            <View style={{ top: 130, marginLeft: 30 }}>
              <Text style={styles.inputTitle}>N°4</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={n4 => this.setState({ n4 })}
                value={this.state.n4.toString()}
              ></TextInput>
            </View>

            <View style={{ top: 130, marginLeft: 30 }}>
              <Text style={styles.inputTitle}>N°5</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={n5 => this.setState({ n5 })}
                value={this.state.n5.toString()}
              ></TextInput>
            </View>
          </View>
    
          <View style={{ top: 60, marginLeft: 30, marginRight: 20 }}>
              <Text style={styles.inputTitle}>Apuesta</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={apuesta => this.setState({ apuesta })}
                value={this.state.apuesta.toString()}
              ></TextInput>
            </View>

          <Button
            color="black"
            onPress={this.showActionSheet}
            title={this.state.opcionHorarios}
          />

          <ActionSheet
            ref={o => (this.ActionSheet = o)}
            title={"Elegir un horario"}
            options={this.state.opciones}
            cancelButtonIndex={this.state.indexCancelar - 1}
            //   destructiveButtonIndex={1}
            onPress={index => {
              if (index != (this.state.indexCancelar - 1)) {
                this.setState({
                  opcionHorarios: this.state.opciones[index]
                });
              }
            }}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.validarDatos();
            }}
          >
            <Text style={styles.text}>Jugar</Text>
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
  btn: {
    width: 125,
    height: 25,
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 30
  },
  button: {
    position: "absolute",
    bottom: 30,
    left: 25,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  bienvenida: {
    position: "absolute",
    right: 20,
    top: 1,
    color: "black",
    marginTop: 32,
    fontSize: 70,
    fontWeight: "400"
  },
  bienvenida2: {
    position: "absolute",
    right: 20,
    top: 60,
    color: "black",
    marginTop: 32,
    fontSize: 70,
    fontWeight: "400"
  },
  form: {
    marginBottom: 35,
    marginHorizontal: 30
  },
  background: {
    width: "100%",
    justifyContent: "space-around",
    height: "100%"
  },
  inputTitle: {
    backgroundColor: "#E5D7D7",
    alignSelf: "flex-start",
    fontWeight: "bold",
    color: "red",
    fontSize: 32
  },
  input: {
    backgroundColor: "white",
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 25,
    color: "#161F3D"
  }
});
