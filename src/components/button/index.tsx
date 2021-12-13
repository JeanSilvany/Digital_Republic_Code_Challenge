import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
