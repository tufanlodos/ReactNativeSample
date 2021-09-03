import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Share } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { version } from "../../../app.json";
import OwnStyles from "./styles";

const HIT_SLOP_8 = {
  top: 8,
  right: 8,
  bottom: 8,
  left: 8
};

export default class ErrorBoundary extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    hasError: false,
    errorCode: null
  };

  static getDerivedStateFromError() {
    const errorCode = `RNE-${version.split(".").join("")}-${Date.now()}`;

    return {
      hasError: true,
      errorCode
    }; // state updated
  }

  onShare = () => {
    Share.share({
      message: this.state.errorCode
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <SafeAreaView style={OwnStyles.safeAreaView}>
          <View style={OwnStyles.container}>
            <Text style={OwnStyles.text}>An error has occured. Please relaunch app</Text>
            <View style={OwnStyles.errorCodeContainer}>
              <Text style={OwnStyles.text} selectable>
                Error code:{" "}
              </Text>
              <Text style={[OwnStyles.text, OwnStyles.textBold]}>{this.state.errorCode}</Text>
              <TouchableOpacity
                style={OwnStyles.shareButton}
                hitSlop={HIT_SLOP_8}
                onPress={this.onShare}
              >
                <Icon name="share-2" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}
