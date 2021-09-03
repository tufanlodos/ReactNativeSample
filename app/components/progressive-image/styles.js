import { StyleSheet } from "react-native";
import Colors from "../../assets/data/color-list.json";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.grey
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: 300,
    zIndex: 1
  }
});
