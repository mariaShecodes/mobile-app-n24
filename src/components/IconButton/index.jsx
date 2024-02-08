import {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme';

Icon.loadFont();

const IconButton = ({
  iconName,
  iconSize = 30,
  iconColor = colors.white,
  onPress,
  style,
}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Icon size={iconSize} color={iconColor} name={iconName} />
  </TouchableOpacity>
);

export default memo(IconButton);
