import { StyleSheet } from "react-native";
import Colors from "../../../../assets/data/color-list.json";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 6
  },
  searchInputStyle: {
    height: 24,
    padding: 0,
    paddingLeft: 10,
    color: Colors.secondaryDark,
    flex: 1
  }
});

export default styles;
