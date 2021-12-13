import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import LottieView from 'lottie-react-native';
import Paint from '../../assets/json/painter.json';

import Feather from 'react-native-vector-icons/dist/Feather';

import styles from './styles';

const width = Dimensions.get('window').width;

const FinalScreen: React.FC = ({route}: any) => {
  const {finalInfo}: any = route.params;

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Medidas</Text>
        </View>

        <View style={styles.flexBoxRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconLeft}>
            <Feather name="chevron-left" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Resultado Final</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.iconRight}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <LottieView
          source={Paint}
          autoPlay
          loop
          style={{width: width, height: width, marginTop: 5}}
        />

        <View style={{marginVertical: 30}}>
          <Text style={styles.titleText}>Você precisará de:</Text>
          {finalInfo.large > 0 && (
            <Text style={styles.resultText}>
              {finalInfo.large} {finalInfo.large > 1 ? 'Latas' : 'Lata'} de
              tinta de 18 Litros
            </Text>
          )}
          {finalInfo.big > 0 && (
            <Text style={styles.resultText}>
              {finalInfo.big} {finalInfo.big > 1 ? 'Latas' : 'Lata'} de tinta de
              3.6 Litros
            </Text>
          )}
          {finalInfo.medium > 0 && (
            <Text style={styles.resultText}>
              {finalInfo.medium} {finalInfo.medium > 1 ? 'Latas' : 'Lata'} de
              tinta de 2.5 Litros
            </Text>
          )}
          {finalInfo.small > 0 && (
            <Text style={styles.resultText}>
              {finalInfo.small} {finalInfo.small > 1 ? 'Latas' : 'Lata'} de
              tinta de 0.5 Litros
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default FinalScreen;
