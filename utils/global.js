import { Dimensions, Platform } from "react-native";
import Constants from "expo-constants";

import "./Translation";

var { height, width } = Dimensions.get("window");

export default {
  AUTHTOKEN: "AUTH", // for auth in app and key for async storage
  USER_DATA: "USER_DATA", //Key for storing data
  API_TOKEN: "API_TOKEN",
  ASSETS: {
    LOGO: require("../assets/LOGO.png"),
    BGIMAGE: require("../assets/background_image.jpg"),
    FLAGE: require("../assets/italy.png"),
    ENGLISH: require("../assets/englishFlag.png"),
    BELL: require("../assets/bell.png"),
    DELETE: require("../assets/delete.png"),
    MOBAIL: require("../assets/mobilenumber.png"),
    EMAIL: require("../assets/email.png"),
    LOCK: require("../assets/lock.png"),
    USER: require("../assets/user.png"),
    RADIO: require("../assets/radioOf.png"),
    EMP: require("../assets/emp.png"),
    PHONE: require("../assets/phone.png"),
    DOWN: require("../assets/down.png"),
    UP: require("../assets/uparrow.png"),
    CAR: require("../assets/exteriorewash.png"),
    CLEANING: require("../assets/interiorcleaning.png"),
    MESSAGE: require("../assets/message.png"),
    STAR: require("../assets/star.png"),
  },
  COLOR: {
    PRIMARY_LIGHT: "#6ABC45",
    PRIMARY_DARK: "#006937",
    AppColor: "#6ABC45",
    white: "#fff",
    gray: "gray",
    black: "#000",
    fbTouchClor: "#3B589C",
    iconDonwClr: "#c2c2c2",
    fontColor: "#008000",
    lightGray: "#ccc",
    midGreen: "#669900",
    darkGreen: "#026838",
    notiClr: "#E10404",
    friendName: "#4155A4",
    carClr: "#192E89",
    newContainer: "#F7F7F7",
    deleteIcon: "red",
  },
  CONSTANT: {
    APPNAME: Constants.manifest.name,
    FB_APP_ID: Constants.manifest.facebookAppId,
    APPVERSION: Constants.manifest.version,
    STATUSBAR: Constants.statusBarHeight,
    APPDESCRIPTION: "The best and trending Amnesty List.",
    PLAYSTOREURL: "",
    APPSTOREURL: "",
    HEIGHT: height,
    WIDTH: width,
    DEVICETYPE: Platform.OS,
    DEVICETOKEN: "",
    INPUT_COUNTRY_CODE: "+44",
    PLACESAPI: "AIzaSyCdIiqraik9uJkeLdoarnKms9voK1Q94pk",
  },
  USER: {},
};
