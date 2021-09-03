import { StyleSheet } from "react-native";
import Colors from "../../assets/data/color-list.json";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  textBold: {
    fontWeight: "bold"
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    marginVertical: 5,
    color: Colors.black,
    textAlign: "center"
  },
  errorCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10
  },
  shareButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 5
  }
});

export default styles;
