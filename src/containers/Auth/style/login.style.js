import {StyleSheet} from 'react-native';
import colors from 'themes/Colors';

const style = StyleSheet.create({
  btnLogin: {
    height: 44,
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.primaryRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  btnText: {
    color: colors.white,
    fontSize: 20,
  },
  forgotText: {
    color: colors.greenText,
  },
  forgotView: {
    marginTop: 25,
    alignItems: 'flex-end',
  },
});

export default style;
