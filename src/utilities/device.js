import {Dimensions} from 'react-native';

const windowSize = Dimensions.get('window');
const screenSize = Dimensions.get('screen');

// const isIphoneX = () => {
//   return (
//     (windowSize.height === 812 || windowSize.width === 812)
//   );
// };
// const isIphoneXR = () => {
//   const dimen = Dimensions.get('window');
//   return dimen.height === 896 || dimen.width === 896;
// };
const isTaiTho = () =>
  windowSize.height !== screenSize.height ||
  windowSize.width !== screenSize.width;

export {isTaiTho};
