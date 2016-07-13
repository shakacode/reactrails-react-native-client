import { Platform, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

const Button = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;

export default Button;
