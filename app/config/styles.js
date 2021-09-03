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
  hAuto: {
    height: "auto"
  },
  jcStart: {
    justifyContent: "flex-start"
  },
  jcCenter: {
    justifyContent: "center"
  },
  jcBtw: {
    justifyContent: "space-between"
  },
  jcEnd: {
    justifyContent: "flex-end"
  },
  algiCenter: {
    alignItems: "center"
  },
  algiStrech: {
    alignItems: "stretch"
  },
  algiStart: {
    alignItems: "flex-start"
  },
  algiEnd: {
    alignItems: "flex-end"
  },
  algsCenter: {
    alignSelf: "center"
  },
  algsEnd: {
    alignSelf: "flex-end"
  },
  algsStretch: {
    alignSelf: "stretch"
  },
  textCenter: {
    textAlign: "center"
  },
  textVerticalCenter: {
    textAlignVertical: "center"
  },
  textRight: {
    textAlign: "right"
  },
  textLeft: {
    textAlign: "left"
  },
  m0: {
    margin: 0
  },
  p0: {
    padding: 0
  },
  mb0: {
    marginBottom: 0
  },
  mt0: {
    marginTop: 0
  },
  mr0: {
    marginRight: 0
  },
  ml0: {
    marginLeft: 0
  },
  pb0: {
    paddingBottom: 0
  },
  pb5: { paddingBottom: 5 },
  pt0: {
    paddingTop: 0
  },

  pr0: {
    paddingRight: 0
  },
  pl0: {
    paddingLeft: 0
  },
  positionAbsolute: {
    position: "absolute"
  },
  positionRelative: {
    position: "relative"
  },
  headerContainerStyle: {
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    elevation: 0
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "left",
    marginLeft: 10,
    color: Colors.secondaryDark
  },
  headerLeftSubTitleStyle: {
    marginTop: 10,
    paddingLeft: 30,
    fontWeight: "bold",
    color: Colors.secondaryDark
  },
  headerRightContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 20
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
  button: {
    color: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: wp("%7.5"),
    borderRadius: 6,
    marginVertical: 10
  },
  buttonRound: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  buttonPrimary: {
    backgroundColor: Colors.primary
  },
  primaryButtonText: {
    color: Colors.white,
    fontWeight: "700", // medium
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.41,
    textAlign: "center"
  },
  outlineButtonWhite: {
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  roundButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center"
  },
  buttonSecondary: {
    backgroundColor: Colors.secondary
  },
  buttonDanger: {
    backgroundColor: Colors.red
  },
  buttonLight: {
    backgroundColor: Colors.brightGrey
  },
  buttonWhite: {
    backgroundColor: Colors.white
  },
  lightButtonText: {
    color: Colors.primary,
    fontWeight: "bold", // bold
    fontSize: 12,
    textAlign: "center"
  },
  inputPrimary: {
    backgroundColor: Colors.transparent,
    color: Colors.secondaryDark,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    marginBottom: 10
  },
  inputSecondary: {
    backgroundColor: Colors.lightGrey,
    color: Colors.black,
    padding: 12,
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 10
  },
  inputDefaultBorder: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 5
  },
  borderBottomBrightGrey1: {
    borderBottomColor: Colors.brightGrey,
    borderBottomWidth: 1
  },
  inputTitleText: {
    color: Colors.secondaryDark,
    fontWeight: "bold"
  },
  baseDropdownStyle: {
    backgroundColor: Colors.white,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 1
  },
  pickerContainerPrimary: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    paddingBottom: 10,
    marginBottom: 10,
    marginTop: 5
  },
  minHeightForPicker: {
    minHeight: 37.5
  },
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    textAlign: "center",
    borderRadius: 10,
    overflow: "hidden",
    fontWeight: "bold",
    fontSize: 10.5,
    letterSpacing: -0.27,
    flexWrap: "nowrap"
  },

  badgeRec: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    borderRadius: 3,
    overflow: "hidden",
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: -0.29,
    flexWrap: "nowrap"
  },
  taskTypeBadge: {
    width: 40,
    height: 40,
    borderRadius: 10,
    overflow: "hidden",
    paddingVertical: 12,
    paddingHorizontal: 7,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.38
  },
  badgePrimary: {
    backgroundColor: Colors.primary,
    color: Colors.white
  },
  badgeDark: {
    backgroundColor: Colors.secondaryDark,
    color: Colors.white
  },
  badgeSuccess: {
    backgroundColor: Colors.green,
    color: Colors.white
  },
  badgeDanger: {
    backgroundColor: Colors.red,
    color: Colors.white
  },
  badgeWarning: {
    backgroundColor: Colors.yellow,
    color: Colors.white
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
  fajCenterItem: {
    alignItems: "center",
    justifyContent: "center"
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
