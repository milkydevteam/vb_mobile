import {StyleSheet} from 'react-native';
import colors from 'themes/Colors';

const style = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.primaryRed,
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 18,
  },
  textColor: {
    color: colors.white,
  },
  middleView: {
    flex: 1,
  },
  endView: {
    padding: 7,
  },
  btn: {
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: colors.white,
    borderWidth: 0.3,
  },
});

export default style;
