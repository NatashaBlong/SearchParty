import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import RegisterPage from "./src/screens/RegisterPage";
import LoginPage from "./src/screens/LoginPage";
import PartyListPage from "./src/screens/PartyListPage";
import SavedPartiesPage from "./src/screens/SavedPartiesPage";
import CreatePartyPage from "./src/screens/CreatePartyPage";
import ViewPartyPage from "./src/screens/ViewPartyPage";
import SearchPage from "./src/screens/SearchPage";
import EvidencePage from "./src/screens/EvidencePage";
import InformationPage from "./src/screens/InformationPage";
import CameraPage from "./src/screens/CameraPage";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  LoginPage: {
    screen: LoginPage
  },
  RegisterPage: {
    screen: RegisterPage
  },
  PartyListPage: {
    screen: PartyListPage
  },
  SavedPartiesPage: {
    screen: SavedPartiesPage
  },
  CreatePartyPage: {
    screen: CreatePartyPage
  },
  ViewPartyPage: {
    screen: ViewPartyPage
  },
  SearchPage: {
    screen: SearchPage
  },
  EvidencePage: {
    screen: EvidencePage
  },
  InformationPage: {
    screen: InformationPage
  },
  CameraPage: {
    screen: CameraPage
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    LoginPage: {
      screen: LoginPage
    },
    RegisterPage: {
      screen: RegisterPage
    },
    PartyListPage: {
      screen: PartyListPage
    },
    SavedPartiesPage: {
      screen: SavedPartiesPage
    },
    CreatePartyPage: {
      screen: CreatePartyPage
    },
    ViewPartyPage: {
      screen: ViewPartyPage
    },
    SearchPage: {
      screen: SearchPage
    },
    EvidencePage: {
      screen: EvidencePage
    },
    InformationPage: {
      screen: InformationPage
    },
    CameraPage: {
      screen: CameraPage
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
