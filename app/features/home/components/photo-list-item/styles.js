import { StyleSheet } from "react-native";
import Colors from "../../../../assets/data/color-list.json";

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    margin: 7.5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15
  },
  footerText: {
    flex: 1,
    marginTop: 5
  },
  footerButton: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.greyDark,
    paddingVertical: 6,
    paddingHorizontal: 9
  }
});

export default styles;
