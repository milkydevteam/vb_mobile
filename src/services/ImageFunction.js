import ImageCropPicker from 'react-native-image-crop-picker';
import colors from 'themes/Colors';

class Instance {
  openPicker = async (
    typeOpen: 'openCamera' | 'openCropper' | 'openPicker' = 'openPicker',
    isCrop = true,
    multiple: {max: Number} = null,
  ) => {
    try {
      const option = {
        mediaType: 'photo',
        cropping: isCrop,
        width: 500,
        height: 500,
        cropperTintColor: colors.greenText,
        cropperToolbarTitle: 'Edit',
        cropperToolbarColor: colors.primaryRed,
        cropperStatusBarColor: colors.primaryRed,
        useFrontCamera: true,
        multiple: multiple !== null,
        maxFiles: multiple !== null ? multiple.max : 1,
      };
      const image = await ImageCropPicker[typeOpen](option);
      return image;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
class ImageFunction {
  instance: Instance;
  static getInstance(): Instance {
    if (!this.instance) {
      this.instance = new Instance();
    }
    return this.instance;
  }
}

export default ImageFunction.getInstance();
