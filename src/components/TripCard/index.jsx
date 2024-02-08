import {memo, useCallback} from 'react';
import {
  Container,
  Bagde,
  BagdeText,
  Main,
  Info,
  Text,
  ArrowIcon,
  Separator,
  Bottom,
  Number,
  UsersIcon,
} from './styles';

const TripCard = ({id, date, from, to, pass, onPress}) => {
  const handlePress = useCallback(() => {
    if (onPress && id !== undefined) {
      return onPress(id);
    }
    return undefined;
  }, [onPress, id]);

  return (
    <Container onPress={handlePress}>
      {pass && (
        <Bagde>
          <BagdeText>Abono</BagdeText>
        </Bagde>
      )}
      <Main>
        <Info>
          <Text bold>{date.day}</Text>
          <Text bold>{date.date}</Text>
        </Info>
        <Info>
          <Text size={14}>{from.city}</Text>
          <Text bold>{from.hour}</Text>
        </Info>
        <ArrowIcon />
        <Info>
          <Text size={14}>{to.city}</Text>
          <Text bold>{to.hour}</Text>
        </Info>
      </Main>
      <Separator />
      <Bottom>
        <Number>1</Number>
        <UsersIcon />
      </Bottom>
    </Container>
  );
};

export default memo(TripCard);
