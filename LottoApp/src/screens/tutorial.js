import React, { Component } from "react";

import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";

const win = Dimensions.get('window');

export default class TutorialScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: 0,
      url: [
        require("../../assets/tutorial/1.jpg"),
        require("../../assets/tutorial/2.jpg"),
        require("../../assets/tutorial/3.jpg"),
        require("../../assets/tutorial/4.jpg"),
        require("../../assets/tutorial/5.jpg"),
        require("../../assets/tutorial/6.jpg"),
        require("../../assets/tutorial/7.jpg"),
        require("../../assets/tutorial/8.jpg"),
        require("../../assets/tutorial/9.jpg"),
        require("../../assets/tutorial/10.jpg"),
        require("../../assets/tutorial/11.jpg"),
        require("../../assets/tutorial/12.jpg"),
        require("../../assets/tutorial/13.jpg"),
        require("../../assets/tutorial/14.jpg"),
        require("../../assets/tutorial/15.jpg"),
        require("../../assets/tutorial/16.jpg"),
        require("../../assets/tutorial/17.jpg"),
        require("../../assets/tutorial/18.jpg"),
        require("../../assets/tutorial/19.jpg"),
        require("../../assets/tutorial/20.jpg"),
        require("../../assets/tutorial/21.jpg"),
        require("../../assets/tutorial/22.jpg"),
        require("../../assets/tutorial/23.jpg"),
        require("../../assets/tutorial/24.jpg"),
        require("../../assets/tutorial/25.jpg"),
        require("../../assets/tutorial/26.jpg"),
        require("../../assets/tutorial/27.jpg"),
        require("../../assets/tutorial/28.jpg"),
        require("../../assets/tutorial/29.jpg")
      ]  
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
        >
          <Image
            source={this.state.url[this.state.imagen]}
            resizeMode={"contain"}
            style={{ width: win.width, height: win.height, alignSelf: "stretch"}}
          />

          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              if (this.state.imagen < 28) {
                this.setState({ imagen: this.state.imagen + 1})
              }
            }}
          >
            <Text style={styles.text}>Siguiente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              if (this.state.imagen > 0) {
                this.setState({ imagen: this.state.imagen - 1})
              }
            }}
          >
            <Text style={styles.text}>Atrás</Text>
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
    fontWeight: "bold",
    color: "green",
    fontSize: 30
  },
  button1: {
    position: "absolute",
    bottom: 50,
    left: 230,
    width: 120,
    marginHorizontal: 30,
    backgroundColor: 'transparent',
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  button2: {
    position: "absolute",
    bottom: 50,
    left: 1,
    width: 70,
    marginHorizontal: 30,
    backgroundColor: 'transparent',
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
  form: {
    marginBottom: 35,
    marginHorizontal: 30
  },
  background: {
    width: "100%",
    justifyContent: "space-around",
    height: "100%",
    backgroundColor: "black"
  },
});
