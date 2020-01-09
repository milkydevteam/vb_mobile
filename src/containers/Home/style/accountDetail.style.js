import {StyleSheet} from 'react-native';
import colors from 'themes/Colors';
import {borderRadius} from 'utilities/Tranform';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  formContainer: {
    backgroundColor: colors.white,
    borderRadius,
    padding: 12,
    margin: 10,
    height: 200,
    elevation: 1,
  },
});

export default style;
