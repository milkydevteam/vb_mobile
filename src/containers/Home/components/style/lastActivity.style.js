import {StyleSheet} from 'react-native';
import colors from 'themes/Colors';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffcdd2',
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
    height: 100,
    width: '100%',
    backgroundColor: colors.white,
  },
  contentStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default style;
