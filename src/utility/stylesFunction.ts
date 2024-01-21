import {Dimensions} from 'react-native';
// if designed dimensions on iphone12
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const iphone12ScreenWidth = 375;
const iphone12ScreenHeight = 812;
const iphone12DesignWidth = 375;
const iphone12DesignHeight = 812;

const calcWidth = (designWidth: number) => {
  const scaleFactor = screenWidth / iphone12ScreenWidth;
  const responsiveWidth =
    (Number(designWidth) / iphone12DesignWidth) *
    iphone12ScreenWidth *
    scaleFactor;
  return responsiveWidth;
};

const calcHeight = (designHeight: number) => {
  const scaleFactor = screenHeight / iphone12ScreenHeight;
  const responsiveHeight =
    (Number(designHeight) / iphone12DesignHeight) *
    iphone12ScreenHeight *
    scaleFactor;
  return responsiveHeight;
};

const calcFontSize = (designFontSize: number) => {
  const scaleFactor = screenWidth / iphone12ScreenWidth;
  const responsiveFontSize = Number(designFontSize) * scaleFactor;
  return responsiveFontSize;
};

export {calcWidth, calcHeight, calcFontSize};
