import React, {useEffect} from 'react';
import {View, Dimensions, Text} from 'react-native';

import LottieView from 'lottie-react-native';
import SplashArt from '../../assets/json/splashy-loader.json';

import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const width = Dimensions.get('window').width * 0.2;

const Splash: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        source={SplashArt}
        autoPlay
        loop
        style={{width: width, height: width}}
      />
      <Text style={styles.title}>Loading</Text>
    </View>
  );
};

export default Splash;
