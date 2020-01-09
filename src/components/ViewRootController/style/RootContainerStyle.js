import {StyleSheet} from 'react-native';

const signup = StyleSheet.create({
  background: {
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  notificationContainer: {
    position: 'absolute',
    zIndex: 100,
    top: 10,
    width: '100%',
    paddingHorizontal: 15,
  },
  notificationitem: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    minHeight: 50,
    borderRadius: 5,
    width: '100%',
  },
  dialogContainer: {width: '88%', borderRadius: 8, backgroundColor: '#FFF'},
  dialogTitle: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 0.3,
  },
  dialogFooter: {
    width: '100%',
    borderTopColor: 'rgba(0,0,0,0.3)',
    borderTopWidth: 0.3,
    flexDirection: 'row',
    height: 40,
  },
  dialogBtn: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default signup;
