import { Platform, StyleSheet } from "react-native";
import Colors from "../assets/data/color-list.json";
import { CONSTANTS } from "./configurations";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../lib/responsive";

// TODO toparla
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
  jcEnd: {
    justifyContent: "flex-end"
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
    textAlign: "left",
    marginLeft: 10,
    color: Colors.secondaryDark
  },
  screenDefaultPadding: {
    paddingHorizontal: CONSTANTS.isMobileSize ? wp("%1.2") : 20,
    marginTop: Platform.OS === "android" ? 20 : 0,
    paddingTop: CONSTANTS.hasNotch ? -25 : 0,
    paddingBottom: CONSTANTS.hasNotch ? -35 : 0
  },
  screenDefaultMargin: {
    marginVertical: 10,
    marginHorizontal: 20
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
  mt5: {
    marginTop: 5
  },
  mt10: {
    marginTop: 10
  },
  mt20: {
    marginTop: 20
  },
  mb20: {
    marginBottom: 20
  },
  mb10: {
    marginBottom: 10
  },
  mb5: {
    marginBottom: 5
  },
  mr5: {
    marginRight: 5
  },
  mr10: {
    marginRight: 10
  },
  mr15: {
    marginRight: 15
  },
  ml10: {
    marginLeft: 10
  },
  ml15: {
    marginLeft: 15
  },
  mln5: {
    marginLeft: -5
  },
  mh10: {
    marginHorizontal: 10
  },
  mv10: {
    marginVertical: 10
  },
  mt30: {
    marginTop: 30
  },
  mb30: {
    marginBottom: 30
  },
  mb40: {
    marginBottom: 40
  },
  mr30: {
    marginRight: 30
  },
  ml30: {
    marginLeft: 30
  },
  ml20: {
    marginLeft: 20
  },
  mh30: {
    marginHorizontal: 30
  },
  mv30: {
    marginVertical: 30
  },
  pt10: {
    paddingTop: 10
  },
  pb10: {
    paddingBottom: 10
  },
  pr10: {
    paddingRight: 10
  },
  pl10: {
    paddingLeft: 10
  },
  ph0: {
    paddingHorizontal: 0
  },
  ph5: {
    paddingHorizontal: 5
  },
  ph10: {
    paddingHorizontal: 10
  },
  pv10: {
    paddingVertical: 10
  },
  ph20: {
    paddingHorizontal: 20
  },
  pv20: {
    paddingVertical: 20
  },
  pv15: {
    paddingVertical: 15
  },
  pv5: {
    paddingVertical: 5
  },
  pt30: {
    paddingTop: 30
  },
  pb20: {
    paddingBottom: 20
  },
  pb30: {
    paddingBottom: 30
  },
  pr30: {
    paddingRight: 30
  },
  pl30: {
    paddingLeft: 30
  },
  ph30: {
    paddingHorizontal: 30
  },
  pv30: {
    paddingVertical: 30
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
