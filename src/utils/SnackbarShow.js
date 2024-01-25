import Snackbar from 'react-native-snackbar';
import COLORS from '../../assets/colors/colors';

const SnackbarShow = async message => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: COLORS.text,
  });
};

export default SnackbarShow;
