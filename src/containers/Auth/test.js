import TouchID from 'react-native-touch-id';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

TouchID.isSupported(optionalConfigObject)
  .then(biometryType => {
    // Success code
    TouchID.authenticate(
      'to demo this react-native component',
      optionalConfigObject,
    )
      .then(success => {
        console.log(success);
        this.setState({
          message: 'success',
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          message: 'error',
        });
      });
  })
  .catch(error => {
    // Failure code
    console.log(error);
  });
