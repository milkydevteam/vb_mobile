import {StyleSheet} from 'react-native';
import colors from 'themes/Colors';

const sideWidth = 12;

const style = StyleSheet.create({
  container: {
    width: '100%',
  },
  btnItem: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    height: 90,
    marginVertical: 5,
  },
  sideViewLeft: {
    height: '100%',
    width: sideWidth,
    backgroundColor: colors.primaryRed,
    borderTopLeftRadius: sideWidth,
    borderBottomLeftRadius: sideWidth,
  },
  sideViewRight: {
    height: '100%',
    width: sideWidth,
    backgroundColor: colors.primaryRed,
    borderTopRightRadius: sideWidth,
    borderBottomRightRadius: sideWidth,
  },
  middleView: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  },
  labelView: {
    flex: 2.7,
  },
  valueView: {
    flex: 2,
  },
  summaryText: {
    color: 'rgba(0,0,0,0.75)',
    marginVertical: 5,
  },
  detailAccount: {
    height: 60,
    backgroundColor: colors.white,
    marginHorizontal: sideWidth,
    marginVertical: 7,
    padding: 7,
    justifyContent: 'center',
  },
  detailText: {
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 7,
  },
  listStyle: {
    width: '100%',
  },
});

export default style;
