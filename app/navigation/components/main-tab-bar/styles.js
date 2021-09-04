import { StyleSheet } from "react-native";
import Colors from "../../../assets/data/color-list.json";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    paddingVertical: 15,
    paddingBottom: 20
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
