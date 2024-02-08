import styled from 'styled-components/native';
import {View, Text as TextBase, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.colors.grey01};
  border-radius: 20px;
  padding: 10px 20px;
`;

export const Bagde = styled(View)`
  width: 65px;
  border-radius: 20px;
  padding: 4px 8px;
  background-color: ${({theme}) => theme.colors.green01};
  align-items: center;
`;

export const BagdeText = styled(TextBase)`
  color: ${({theme}) => theme.colors.white};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Main = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Info = styled(View)``;

export const Text = styled(TextBase)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({size}) => size ?? 18}px;
  font-weight: ${({bold}) => (bold ? 'bold' : 'regular')};
  width: 70px;
  padding-bottom: 4px;
`;

export const ArrowIcon = styled(Icon).attrs(({theme}) => ({
  name: 'chevron-right',
  size: 80,
  color: theme.colors.white,
}))`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateX(180px);
`;

export const Separator = styled(View)`
  height: 1px;
  background-color: ${({theme}) => theme.colors.grey02};
  margin: 10px 0 8px;
`;

export const Bottom = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Number = styled(TextBase)`
  color: ${({theme}) => theme.colors.cream01};
  font-size: 14px;
`;

export const UsersIcon = styled(Icon).attrs(({theme}) => ({
  name: 'account-group-outline',
  size: 18,
  color: theme.colors.cream01,
}))`
  margin-left: 4px;
`;
