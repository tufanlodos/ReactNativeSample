import { StyleSheet } from "react-native";
import Colors from "../../../../assets/data/color-list.json";

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    marginTop: 15
  },
  metaContainer: {
    marginTop: 7.5
  },
  middleText: {
    color: Colors.grey,
    marginVertical: 7.5
  }
});

export default styles;
