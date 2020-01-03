import NetInfo from '@react-native-community/netinfo';

class Instance {
  networkType = '';
  isConnected = false;
  setInfo = ({isConnected, networkType}) => {
    this.networkType = networkType;
    this.isConnected = isConnected;
  };

  checkNetwork = (isCheck = true) => {
    if (isCheck) {
      this.unsubcrible = NetInfo.addEventListener(state => {
        console.log('Connection type', state.type);
        console.log('Connection connected', state.isConnected);
        this.setInfo({...state});
      });
    } else if (this.unsubcrible) {
      this.unsubcrible();
    }
  };
}

class NetworkModel {
  instance: Instance;
  static getInstance(): Instance {
    if (!this.instance) {
      this.instance = new Instance();
    }
    return this.instance;
  }
}

export default NetworkModel.getInstance();
