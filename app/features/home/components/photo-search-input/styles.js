import { StyleSheet } from "react-native";
import Colors from "../../../../assets/data/color-list.json";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingVertical: 15,
    borderRadius: 6,
    marginBottom: 15
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 15
  },
  searchInputStyle: {
    height: 24,
    padding: 0,
    paddingLeft: 10,
    color: Colors.secondaryDark,
    flex: 1
  },
  clearContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  clearButtonContainer: {
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default styles;
