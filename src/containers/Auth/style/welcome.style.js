import {StyleSheet} from 'react-native';
import colors from 'themes/Colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primaryRed,
  },
  body: {
    flex: 1,
    height: '100%',
  },
  bodyText: {
    color: colors.white,
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 18,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default style;
