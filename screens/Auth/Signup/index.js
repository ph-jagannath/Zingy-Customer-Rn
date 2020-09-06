import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  Modal,
  View,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { t } from "i18n-js";
import styles from "./styles";
import { Icon, Header } from "react-native-elements";
import global from "../../../utils/global";
import CountryPicker from "react-native-country-picker-modal";
import { showMessage } from "react-native-flash-message";
import { api_register } from "../../../utils/Api";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      modalVisible: false,
      isLoading: false,
      country: "IT",
      country_code: "39",
    };
  }

  // Validate
  validate = () => {
    if (this.state.name.trim() == "") {
      showMessage({
        message: "Please enter your name.",
        type: "warning",
      });
    } else if (this.state.email.trim() == "") {
      showMessage({
        message: "Please enter e-mail address.",
        type: "warning",
      });
    } else if (
      !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      showMessage({
        message: "Invalid e-mail address.",
        type: "warning",
      });
    } else if (this.state.phoneNumber.trim() == "") {
      showMessage({
        message: "Please enter your phonr number.",
        type: "warning",
      });
    } else if (this.state.password.trim() == "") {
      showMessage({
        message: "Please enter password.",
        type: "warning",
      });
    } else if (this.state.password.length < 6) {
      showMessage({
        message: "Password field should not be less than 6 characters.",
        type: "warning",
      });
    } else {
      api_register(this.state);
    }
  };

  render() {
    const {
      name,
      email,
      password,
      phoneNumber,
      country,
      country_code,
    } = this.state;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        {/* <View style={styles.containerMybooking}> */}
        <Header
          containerStyle={styles.header}
          backgroundColor={"transparent"}
          leftComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.leftIcon}
            >
              <Icon name="chevron-left" size={36} color={global.COLOR.gray} />
            </TouchableOpacity>
          }
        />
        <ScrollView style={styles.containerMybooking}>
          <View style={styles.imgViewSignup}>
            <Image
              style={styles.img}
              source={global.ASSETS.LOGO}
              resizeMode={"center"}
            />
          </View>
          <View style={styles.welcomeView}>
            <Text style={styles.welcomeSignup}>Welcome</Text>
            <Text style={styles.pls}>Please Sign Up To Continue</Text>
          </View>
          <>
            {/* name */}
            <View style={styles.nameView}>
              <Image
                source={global.ASSETS.USER}
                style={styles.sideIcon}
                resizeMode={"contain"}
              />
              <TextInput
                ref={(ref) => {
                  this.name_input = ref;
                }}
                style={styles.nameInputSignup}
                label="Name"
                underlineColor="transparent"
                selectionColor={global.COLOR.PRIMARY_LIGHT}
                theme={{
                  colors: { primary: global.COLOR.PRIMARY_DARK },
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => this.email_input.focus()}
                value={name}
                onChangeText={(name) => this.setState({ name })}
              />
            </View>
            {/* email */}
            <View style={styles.nameView}>
              <Image
                source={global.ASSETS.EMAIL}
                style={styles.sideIcon}
                resizeMode={"contain"}
              />
              <TextInput
                style={styles.nameInputSignup}
                label="Email"
                ref={(ref) => {
                  this.email_input = ref;
                }}
                onSubmitEditing={() => {
                  this.phone_input.focus();
                }}
                returnKeyType={"next"}
                selectionColor={global.COLOR.PRIMARY_LIGHT}
                theme={{
                  colors: { primary: global.COLOR.PRIMARY_DARK },
                }}
                underlineColor="transparent"
                value={email}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            {/* phone */}
            <View style={styles.nameView}>
              <CountryPicker
                countryCode={country}
                withFilter
                withFlag
                withFlagButton
                withCallingCode
                withCallingCodeButton
                withAlphaFilter
                onSelect={(c) => {
                  this.setState({
                    country_code: c.callingCode[0],
                    country: c.cca2,
                  });
                }}
              />
              <TextInput
                style={styles.nameInputSignup}
                ref={(ref) => {
                  this.phone_input = ref;
                }}
                onSubmitEditing={() => this.pass_input.focus()}
                selectionColor={global.COLOR.PRIMARY_LIGHT}
                theme={{
                  colors: { primary: global.COLOR.PRIMARY_DARK },
                }}
                underlineColor="transparent"
                label="Phone Number"
                value={phoneNumber}
                onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                maxLength={9}
                returnKeyType={"next"}
                keyboardType={"number-pad"}
              />
            </View>
            {/* pass */}
            <View style={styles.nameView}>
              <Image
                source={global.ASSETS.LOCK}
                style={styles.sideIcon}
                resizeMode={"contain"}
              />
              <TextInput
                style={styles.nameInputSignup}
                ref={(ref) => {
                  this.pass_input = ref;
                }}
                selectionColor={global.COLOR.PRIMARY_LIGHT}
                theme={{
                  colors: { primary: global.COLOR.PRIMARY_DARK },
                }}
                label="Password"
                underlineColor="transparent"
                secureTextEntry={true}
                returnKeyType={"done"}
                value={password}
                onSubmitEditing={() => {
                  this.validate();
                }}
                onChangeText={(password) => this.setState({ password })}
                // underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.bySign}>
              <Text style={styles.bySignText}>
                By signing up you agree to our
              </Text>
              <TouchableOpacity
                onPress={() => this.setState({ modalVisible: true })}
              >
                <Text style={styles.termText}>Terms & Policy</Text>
              </TouchableOpacity>
            </View>
          </>
          <TouchableOpacity
            onPress={() => this.validate()}
            style={styles.touchlogin}
          >
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            // onRequestClose={() => {
            //     console.log("Modal has been closed.");
            //   }}
          >
            <View style={styles.modalSignUp}>
              <View style={styles.modalView}>
                <Text>This is terms and conditions you should Agree</Text>
              </View>
              <TouchableOpacity
                style={styles.agreeTouch}
                onPress={() => {
                  this.setState({
                    check: true,
                    modalVisible: !this.state.modalVisible,
                  });
                }}
              >
                <Text style={styles.iAgree}>{t("signup_agree")}</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ScrollView>
      </ImageBackground>
    );
  }
}