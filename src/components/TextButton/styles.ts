import styled from 'styled-components/native';
import {TouchableHighlight, Text as TextBase} from 'react-native';

export const Container = styled(TouchableHighlight).attrs({
  underlayColor: 'transparent',
})``;

export const Text = styled(TextBase)`
  color: ${({theme}) => theme.colors.pink01};
  font-size: 16px;
  text-align: center;
`;
