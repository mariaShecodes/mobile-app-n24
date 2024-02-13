import {SafeAreaView} from 'react-native';
import {
  Container,
  ImageBackground,
  Logo,
  Title,
  InputContainer,
  LoupeIcon,
  TitleInput,
} from './styles';
import theme from '../../theme';
import {ThemeProvider} from 'styled-components';

const Buy = ({onPress}) => (
  <SafeAreaView>
    <ThemeProvider theme={theme}>
      <Container>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1541343672885-9be56236302a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaXNhamV8ZW58MHwxfDB8fHww',
          }}
          resizeMode="cover">
          <Logo>renfe</Logo>
          <Title>Hola María,</Title>
          <Title bold>¿dónde quieres viajar?</Title>
          <InputContainer onPress={onPress}>
            <LoupeIcon name="yeast" size={32} color={theme.colors.pink01} />
            <TitleInput>Indícanos tu destino</TitleInput>
          </InputContainer>
        </ImageBackground>
      </Container>
    </ThemeProvider>
  </SafeAreaView>
);

export default Buy;
