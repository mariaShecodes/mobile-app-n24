import {useContext} from 'react';
import {Platform, Dimensions} from 'react-native';
import {ThemeContext} from 'styled-components';

const {height, width} = Dimensions.get('window');

export const device = {
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  height,
  width,
};

export const colors = {
  black: 'black',
  black01: '#242424',
  grey01: '#3b3838',
  grey02: '#9c9a9a',
  grey03: '#262525',
  cream01: '#fce8fc',
  pink01: '#f39df5',
  pink02: '#6e1255',
  green01: '#47a867',
  white: 'white',
  transparent: 'rgba(0,0,0,0)',
};

const theme = {
  device,
  colors,
};

export default theme;

export const useTheme = () => useContext(ThemeContext);
