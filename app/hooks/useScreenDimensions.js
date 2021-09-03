import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { CONSTANTS } from "../config/configurations";

export default () => {
  const [screenData, setScreenData] = useState(Dimensions.get("window"));

  useEffect(() => {
    const onChange = (result) => {
      setScreenData(result.screen);
    };

    Dimensions.addEventListener("change", onChange);

    return () => Dimensions.removeEventListener("change", onChange);
  });

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
    scale: screenData.width / CONSTANTS.deviceWidth
  };
};
