import React, { useRef, useEffect } from "react";
import { Image, Animated } from "react-native";
import OwnStyles from "./styles";

const DEFAUL_IMAGE_SOURCE = require("../../assets/image/placeholder-image.png");

function ProgressiveImage({ url = null }) {
  const opacityAnimation = useRef(new Animated.Value(0.3)).current;

  function startAnimation() {
    Animated.loop(
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 1250,
        useNativeDriver: true
      })
    ).start();
  }

  useEffect(() => {
    startAnimation();
  }, []);

  const animatedOpacityStyle = {
    opacity: opacityAnimation
  };

  return (
    <Animated.View style={[OwnStyles.container, animatedOpacityStyle]}>
      {url ? (
        <Image
          source={{ uri: url }}
          progressiveRenderingEnabled
          style={OwnStyles.image}
          loadingIndicatorSource={DEFAUL_IMAGE_SOURCE}
          onLoadStart={() => startAnimation()}
          onLoad={() => opacityAnimation.setValue(1)}
        />
      ) : (
        <Image
          source={DEFAUL_IMAGE_SOURCE}
          style={OwnStyles.image}
          onLayout={() => opacityAnimation.setValue(1)}
        />
      )}
    </Animated.View>
  );
}

export default ProgressiveImage;
