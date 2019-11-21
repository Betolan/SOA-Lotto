import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as firebase from "firebase";

import Constants from "./src/config/constants";
import HomeScreen from "./src/screens/home";
import TutorialScreen from "./src/screens/tutorial"

import LoginScreen from "./src/screens/auth/login";
import RegisterScreen from "./src/screens/auth/register";

import BienvenidaScreen from "./src/screens/initial/bienvenida";
import InitScreen from "./src/screens/initial/init";
import SelectionScreen from "./src/screens/initial/selection";

import RecargasScreen from "./src/screens/sections/historial/recargas";
import JuegosScreen from "./src/screens/sections/historial/juegos";
import PremiosScreen from "./src/screens/sections/historial/premios";

import AdmiScreen from "./src/screens/sections/admi";
import HistorialScreen from "./src/screens/sections/historial";
import PerfilScreen from "./src/screens/sections/perfil";
import JugarScreen from "./src/screens/sections/jugar";
import LottoScreen from "./src/screens/sections/lotto";

firebase.initializeApp(Constants.FirebaseConfig);

const appStack = createStackNavigator({
  Home: HomeScreen,
  Jugar: JugarScreen,
  Perfil: PerfilScreen,
  Historial: HistorialScreen,
  Admi: AdmiScreen,
  Recargas: RecargasScreen,
  Juegos: JuegosScreen,
  Premios: PremiosScreen,
  Lotto: LottoScreen
});

const initStack = createStackNavigator({
  Bienvenida: BienvenidaScreen,
  Init: InitScreen,
  Tutorial: TutorialScreen,
  Selection: SelectionScreen,
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Init: initStack,
      App: appStack
    },
    {
      initialRouteName: "Init"
    }
  )
);
