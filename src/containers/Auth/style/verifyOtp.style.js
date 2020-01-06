import {StyleSheet} from 'react-native';
import colors from 'themes/Colors';

const style = StyleSheet.create({
  verifyOTP: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: colors.primaryRed,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  descript: {
    fontSize: 22,
    marginBottom: 36,
    lineHeight: 25,
    color: colors.white,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  messageContainer: {
    marginTop: 80,
    marginBottom: 20,
    fontSize: 16,
    color: colors.orange,
  },
  input: {
    backgroundColor: 'white',
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
    padding: 0,
    paddingLeft: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border1,
  },
  btnSubmit: {
    backgroundColor: '#777777',
    height: 44,
    width: 250,
    borderRadius: 22,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: 20,
    borderColor: colors.grey,
    color: 'black',
  },
  textSubmit: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  subTitle: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.white,
    color: colors.white,
    fontSize: 16,
    letterSpacing: 1.3,
  },
  btnText: {
    color: colors.greenText,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default style;
