import {StyleSheet} from 'react-native';
import colors from 'themes/Colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bodyContainer: {
    paddingTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  bodyForm: {
    width: '100%',
    borderRadius: 10,
    padding: 10,
    paddingTop: 60,
    backgroundColor: colors.white,
  },
  logoView: {
    backgroundColor: colors.primaryRed,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    elevation: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomBtn: {
    flex: 1,
    marginHorizontal: 4,
  },
  registerBtn: {marginHorizontal: 4, flex: 2},
});

export default style;
