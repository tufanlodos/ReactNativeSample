import { Platform, StyleSheet } from "react-native";
import Colors from "../../../assets/data/color-list.json";
import { CONSTANTS } from "../../../config/configurations";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    paddingVertical: Platform.OS === "ios" && CONSTANTS.hasNotch ? 20 : 12.5
  },
  tabButtonContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  tabButtonView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
