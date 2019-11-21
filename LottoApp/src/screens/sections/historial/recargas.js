import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  ImageBackground 
} from 'react-native';
import { 
  Table, 
  Row 
} from 'react-native-table-component';

import { variables } from '../../../config/varGlobales';

export default class RecargasScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: variables.titulosTablaRecargas,
      widthArr: variables.widthTitulosRecargas,
      tableData: variables.recargas
    };
  }

  render() {
    const state=this.state;
    const { tableData }=this.state;
    
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../../../assets/BG2.jpg")}
        >
          <View style={styles.form}>
            <View style={{ marginTop: 30 }}>
              <Text style={styles.inputTitle}>Historial de recargas</Text>
            </View>
          </View>

          <ScrollView horizontal={true}>
            <View style={{ padding: 16, paddingTop: 30 }}>
              <Table borderStyle={styles.border}>
                <Row
                  data={state.tableHead}
                  widthArr={state.widthArr}
                  style={styles.header}
                  textStyle={styles.text}
                />
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={styles.border}>
                  {tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[
                        styles.row,
                        index % 2 && { backgroundColor: "white" }
                      ]}
                      textStyle={styles.text}
                    />
                  ))}
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
  border : {
    borderWidth: 1, 
    borderColor: "#C1C0B9" 
  },
  header: { 
    height: 50, 
    backgroundColor: "#F28282" 
  },
  text: { 
    textAlign: "center", 
    fontWeight: "100" 
  },
  dataWrapper: { 
    marginTop: -1 
  },
  row: { 
    height: 40, 
    backgroundColor: "#DCD9D9" 
  },
  inputTitle: {
    backgroundColor: "#E5D7D7",
    alignSelf: "flex-start",
    fontWeight: "bold",
    color: "red",
    fontSize: 32
  },
  form: {
    marginBottom: 35,
    marginHorizontal: 30
  },
  background: {
    width: "100%",
    justifyContent: "space-around",
    height: "100%"
  }
});
