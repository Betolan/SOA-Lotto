import React, { Component } from "react";
import { 
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { 
  Table, 
  TableWrapper, 
  Row, 
  Cell 
} from "react-native-table-component";

import { variables } from "../../config/varGlobales"

export default class JugarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: variables.titulosTablaJugar,
      tableData: variables.puntosDisponiblesJugar,
      horarios: variables.horarios
    };
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity 
        onPress={() => {
          variables.pais = variables.puntosDisponiblesJugar[index][0];
          variables.puntoVenta = variables.puntosDisponiblesJugar[index][1];
          variables.opciones = this.state.horarios[index]
          variables.lenghtOpciones = this.state.horarios[index].length
          this.props.navigation.navigate("Lotto")
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>Jugar</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../../assets/BG2.jpg")}
        >
          <View style={styles.form}>
            <View style={{ bottom: 50 }}>
              <Text style={styles.inputTitle}>Opciones para jugar</Text>
            </View>
          </View>

          <View style={{ bottom: 300, padding: 16, paddingTop: 30 }}>
            <Table borderStyle={styles.border}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              {state.tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={
                        cellIndex === 2 ? element(cellData, index) : cellData
                      }
                      textStyle={styles.text}
                    />
                  ))}
                </TableWrapper>
              ))}
            </Table>
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
  border : {
    borderWidth: 1, 
    borderColor: "#C1C0B9" 
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
  head: {
    height: 50, 
    backgroundColor: "#F28282" 
  },
  text: {
    margin: 6,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#DCD9D9" 
  },
  btn: {
    width: 125,
    height: 25,
    backgroundColor: "black",
    borderRadius: 2,
    alignItems: "center"
  },
  btnText: {
    marginTop: 3,
    textAlign: "center",
    color: "#fff"
  },
  inputTitle: {
    backgroundColor: "#E5D7D7",
    alignSelf: "flex-start",
    fontWeight: "bold",
    color: "red",
    fontSize: 32
  }
});
