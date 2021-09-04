import { Platform, StyleSheet } from "react-native";
import Colors from "../assets/data/color-list.json";
import { CONSTANTS } from "./configurations";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../lib/responsive";

export default StyleSheet.create({
  f0: {
    flex: 0
  },
  f1: {
    flex: 1
  },
  fdRow: {
    flexDirection: "row"
  },
  fdCol: {
    flexDirection: "column"
  },
  bgWhite: {
    backgroundColor: Colors.white
  },
  textPrimary: {
    color: Colors.primary
  },
  textGrey: {
    color: Colors.grey
  },
  notFoundText: {
    textAlign: "center",
    color: Colors.grey
  },
  errorText: {
    textAlign: "center",
    color: Colors.red
  },
  fwNormal: {
    fontWeight: "normal"
  },
  fwBold: {
    fontWeight: "bold"
  },
  w100pe: {
    width: "100%"
  },
  h100pe: {
    height: "100%"
  },
  w100vw: {
    width: wp("100")
  },
  h100vh: {
    height: hp("100")
  },
  ajCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  jcCenter: {
    justifyContent: "center"
  },
  algiCenter: {
    alignItems: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textVerticalCenter: {
    textAlignVertical: "center"
  },
  headerContainerStyle: {
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 10,
    color: Colors.secondary
  },
  shadowForWhite: {
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2
  },
  screenHorizontalPadding: {
    paddingHorizontal: 10
  },
  iosNotchBalancer: {
    paddingVertical: Platform.OS === "ios" && CONSTANTS.hasNotch ? -30 : null
  },
  ph5: {
    paddingHorizontal: 7.5
  },
  ml10: {
    marginLeft: 10
  },
  ml15: {
    marginLeft: 15
  },
  mt30: {
    marginTop: 30
  },
  opacityHalf: {
    opacity: 0.5
  },
  opacityFull: {
    opacity: 1
  },
  hitSlop10: {
    top: 10,
    bottom: 10,
    right: 10,
    left: 10
  }
});
