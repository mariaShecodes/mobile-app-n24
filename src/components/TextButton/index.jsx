import {memo} from 'react';
import {Container, Text} from './styles';

const TextButton = ({text, onPress, style}) => (
  <Container onPress={onPress} style={style}>
    <Text>{text}</Text>
  </Container>
);

export default memo(TextButton);
