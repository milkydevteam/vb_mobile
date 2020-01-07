import {StyleSheet} from 'react-native';
import styleActivity from './lastActivity.style';
import colors from 'themes/Colors';

const style = StyleSheet.create({
  ...styleActivity,
  scrollview: {
    marginTop: 7,
    flex: 1,
    marginBottom: 50,
    width: '100%',
  },
  contentStyle: {
    marginBottom: 30,
  },
  scrollFooter: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  textFooter: {
    color: colors.greenText,
    fontWeight: 'bold',
    textDecorationColor: colors.greenText,
    textDecorationLine: 'underline',
  },
});

export default style;
