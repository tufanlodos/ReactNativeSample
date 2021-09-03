/**
 * @format
 */
import "react-native-gesture-handler"; // always at top
import { AppRegistry } from "react-native";
import App from "./app/navigation/RootStack";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
