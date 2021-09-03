import { ENV } from "../config/configurations";

const widthPercentageToDP = (percentage) => {
  const screenWidth = ENV.deviceWidth;
  if (percentage && screenWidth) {
    return (screenWidth * Number(percentage.replace("%", ""))) / 100;
  }

  return 1;
};

const heightPercentageToDP = (percentage) => {
  const screenHeight = ENV.deviceHeight;
  if (percentage && screenHeight) {
    return (screenHeight * Number(percentage.replace("%", ""))) / 100;
  }

  return 1;
};

const diagonalPercentageToDP = (percentage) => {
  const screenDiagonal = ENV.diagonalScreenSize;
  if (percentage && screenDiagonal) {
    return (screenDiagonal * Number(percentage.replace("%", ""))) / 100;
  }

  return 1;
};

export { widthPercentageToDP, heightPercentageToDP, diagonalPercentageToDP };
