import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  onChangeText: (value: number) => void;
}

const TextInputComponent = ({title, onChangeText}: Props) => {
  return (
    <TextInput
      placeholder={title}
      style={styles.input}
      keyboardType="numeric"
      onChangeText={value => onChangeText(Number(value))}
    />
  );
};

export default TextInputComponent;
