import React, { Component } from "react";
import {
  FlatList,
  TextInput,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header, Input } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { showMessage } from "react-native-flash-message";
export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remark: "",
      date: "",
      time: "",
      selected_plan: global.ADD_BOOKING_4_DATA[1],
      date_visible: false,
      time_visible: false,
    };
  }

  toggle_date_picker() {
    this.setState({ date_visible: !this.state.date_visible });
  }

  validate() {
    // console.log("next");
    const { selected_plan, remark, date, time } = this.state;
    global.ADD_BOOKING_4_DATA[1] = selected_plan;
    global.ADD_BOOKING_4_DATA[6] = remark;
    global.ADD_BOOKING_4_DATA[5] = moment(date).format("YYYY-MM-DD");
    global.ADD_BOOKING_4_DATA[14] = moment(time, ["h:mm A"]).format("HH:mm:ss");
    if (global.ADD_BOOKING_4_DATA[8] == 2 && date == "") {
      showMessage({
        message: "Please select date.",
        type: "warning",
      });
    } else if (
      global.ADD_BOOKING_4_DATA[8] == 2 &&
      date !== "" &&
      !moment(date).isSameOrAfter(moment(), "days")
    ) {
      showMessage({
        message: "Please select a date in future.",
        type: "warning",
      });
    } else if (global.ADD_BOOKING_4_DATA[8] == 2 && time == "") {
      showMessage({
        message: "Please select time.",
        type: "warning",
      });
    } else {
      this.props.navigation.navigate("Payment");
    }
  }

  handleDate = (n) => {
    this.setState({
      date: n,
    });
  };
  handleTime = (n) => {
    this.setState({
      time: n,
    });
  };

  render() {
    const {
      remark,
      selected_plan,
      date,
      time,
      date_visible,
      time_visible,
    } = this.state;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <>
          <Header
            containerStyle={styles.header}
            statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
            backgroundColor={global.COLOR.PRIMARY_LIGHT}
            leftComponent={
              <TouchableOpacity
                style={styles.leftIcon}
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="chevron-left" size={32} color="#fff" />
              </TouchableOpacity>
            }
            centerComponent={
              <Text style={styles.headerText}>{t("summary_header")}</Text>
            }
          />
        </>
        <ScrollView>
          <View style={styles.marHorizon}>
            <Text style={styles.vehicle}>{t("summary_vehicleSelect")}</Text>
            <View style={styles.rightViewSummary}>
              <Image
                source={
                  global.ADD_BOOKING_4_DATA[16] == ""
                    ? {
                        uri: global.ADD_BOOKING_4_DATA[0].make_picture,
                      }
                    : global.ASSETS.LOGO_ICON
                }
                style={styles.audiImg}
              />
              <View style={styles.auditextView}>
                <Text style={styles.text}>
                  {global.ADD_BOOKING_4_DATA[16] == ""
                    ? global.ADD_BOOKING_4_DATA[0].modal_name
                    : t("side_menu_two_wheeler")}
                </Text>
                {global.ADD_BOOKING_4_DATA[16] == "" && (
                  <Text style={styles.text}>
                    {global.ADD_BOOKING_4_DATA[0].plate_number}
                  </Text>
                )}
              </View>
            </View>
            {global.ADD_BOOKING_4_DATA[16] == "" && (
              <>
                <Text style={styles.service}>{t("summary_service")}</Text>
                {/* service bar */}
                {selected_plan !== "" && (
                  <>
                    <View style={styles.btmViewDacWashLocation}>
                      <View style={styles.apClrView}>
                        {selected_plan.services
                          .toLowerCase()
                          .includes("ext") && (
                          <Image
                            source={global.ASSETS.CAR}
                            resizeMode={"contain"}
                            style={styles.imgCarDacWash}
                          />
                        )}
                        {selected_plan.services
                          .toLowerCase()
                          .includes("int") && (
                          <Image
                            source={global.ASSETS.CLEANING}
                            resizeMode={"contain"}
                            style={styles.imgCarDacWash}
                          />
                        )}
                        <Text style={styles.inOutText}>
                          {selected_plan.services}
                        </Text>
                      </View>
                    </View>
                  </>
                )}
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={global.PLANS_LIST_ZONE}
                  renderItem={({ item: p }) => {
                    return (
                      <View>
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({
                              selected_plan: p,
                            })
                          }
                          style={[
                            styles.touchAppClrView,
                            {
                              backgroundColor:
                                selected_plan.id === p.id
                                  ? global.COLOR.PRIMARY_LIGHT
                                  : global.COLOR.white,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.standrd,
                              {
                                color:
                                  selected_plan.id === p.id
                                    ? global.COLOR.white
                                    : global.COLOR.black,
                              },
                            ]}
                          >
                            {p.name}
                          </Text>
                          <Text
                            style={[
                              styles.priceDacwash,
                              {
                                color:
                                  selected_plan.id === p.id
                                    ? global.COLOR.white
                                    : global.COLOR.black,
                              },
                            ]}
                          >
                            {global.CONSTANT.CURRENCY} {p.amount}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
              </>
            )}
            {/* location */}
            <Text style={styles.vehicle}>{t("summary_location")}</Text>
            <Text style={styles.text}>{global.ADD_BOOKING_4_DATA[2]}</Text>

            {/* date time */}
            {global.ADD_BOOKING_4_DATA[8] == 2 && (
              <View style={styles.date_container}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("select_date", {
                      onDateSelect: this.handleDate,
                    });
                  }}
                  activeOpacity={0.9}
                >
                  <Input
                    editable={false}
                    containerStyle={styles.dateInput}
                    leftIcon={{
                      name: "today",
                      color: "#666666",
                    }}
                    placeholder={t("summary_date")}
                    returnKeyType={"done"}
                    placeholderTextColor="#666666"
                    // onChangeText={(v) => this.setState({ remark: v })}
                    value={date}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("select_time", {
                      onTimeSelect: this.handleTime,
                    });
                  }}
                  activeOpacity={0.9}
                >
                  <Input
                    editable={false}
                    containerStyle={styles.dateInput}
                    placeholder={t("summary_time")}
                    returnKeyType={"done"}
                    leftIcon={{
                      name: "schedule",
                      color: "#666666",
                    }}
                    placeholderTextColor="#666666"
                    // onChangeText={(v) => this.setState({ remark: v })}
                    value={time}
                  />
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.EnterRemarkView}>
              <TextInput
                style={styles.EnterRemarkInput}
                placeholder={t("summary_textInput")}
                returnKeyType={"done"}
                placeholderTextColor="#666666"
                onChangeText={(v) => this.setState({ remark: v })}
                value={remark}
              />
            </View>
            <View
              style={[
                styles.topHorizon,
                {
                  justifyContent:
                    global.ADD_BOOKING_4_DATA[8] == 2
                      ? "center"
                      : "space-between",
                },
              ]}
            >
              {global.ADD_BOOKING_4_DATA[8] == 1 && (
                <View style={styles.roundView}>
                  <Text style={styles.roundViewText}>{t("summary_eta")}</Text>
                  <Text style={styles.roundViewText}>
                    {
                      global.NEARBY_SP.sort(
                        (a, b) => a.distance - b.distance
                      )[0].time
                    }
                  </Text>
                </View>
              )}
              <View style={styles.roundView}>
                <Text style={styles.roundViewText}>{t("summary_euro")}</Text>
                <Text style={styles.roundViewText}>
                  {global.CONSTANT.CURRENCY}{" "}
                  {global.ADD_BOOKING_4_DATA[16] !== ""
                    ? global.ADD_BOOKING_4_DATA[16]
                    : selected_plan.amount}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.validate()}
            style={styles.touchlogin}
          >
            <Text style={styles.loginText}>{t("summary_Confirm")}</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}
