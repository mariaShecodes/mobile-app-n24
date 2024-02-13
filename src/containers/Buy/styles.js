import styled from 'styled-components/native';
import {
  ImageBackground as ImageBackgroundBase,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
`;

export const ImageBackground = styled(ImageBackgroundBase)`
  /* flex: 1; */
  height: ${({theme}) => theme.device.height}px;
  width: 100%;
  align-items: center;
`;

export const Logo = styled(Text)`
  font-size: 60px;
  font-weight: bold;
  font-style: italic;
  color: ${({theme}) => theme.colors.white};
  margin: 150px 0 30px;
`;

export const Title = styled(Text)`
  font-size: 32px;
  font-weight: ${({bold}) => (bold ? 'bold' : 'regular')};
  color: ${({theme}) => theme.colors.white};
`;

export const Input = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.colors.white,
}))`
  height: 50px;
  width: ${({theme}) => theme.device.width - 48}px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.grey01};
  padding-left: 20px;
  color: ${({theme}) => theme.colors.white};
  font-size: 18px;
  margin-top: 35px;
`;

export const InputContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.9,
})`
  width: ${({theme}) => theme.device.width - 48}px;
  background-color: ${({theme}) => theme.colors.grey01};
  height: 50px;
  border-radius: 10px;
  padding-left: 20px;
  margin-top: 35px;
  flex-direction: row;
  align-items: center;
`;

export const LoupeIcon = styled(Icon)``;

export const TitleInput = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.white};
  margin-left: 10px;
`;
