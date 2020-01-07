import {StyleSheet} from 'react-native';
import colors from 'themes/Colors';
import {widthScreen} from 'utilities/Tranform';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondRed,
    borderRadius: 8,
    marginTop: 15,
    paddingVertical: 7,
    alignItems: 'center',
  },
  title: {
    color: colors.primaryRed,
  },

  scrollview: {
    marginTop: 7,
    marginBottom: 12,
    width: '100%',
    backgroundColor: colors.white,
  },
  contentStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  scrollFooter: {
    width: widthScreen,
    alignItems: 'center',
  },
});

export default style;
