import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, Text, View, Alert} from 'react-native';

import Button from '../../components/button';
import TextInputComponent from '../../components/TextInputComponent';

import {WallInfoProps} from '../../@types/HomeProps';

import styles from './styles';

const Home: React.FC = () => {
  const [wallHeightOne, setWallHeightOne] = useState<number>(0);
  const [wallWidthOne, setWallWidthOne] = useState<number>(0);
  const [wallHeightTwo, setWallHeightTwo] = useState<number>(0);
  const [wallWidthTwo, setWallWidthTwo] = useState<number>(0);
  const [wallHeightThree, setWallHeightThree] = useState<number>(0);
  const [wallWidthThree, setWallWidthThree] = useState<number>(0);
  const [wallHeightFour, setWallHeightFour] = useState<number>(0);
  const [wallWidthFour, setWallWidthFour] = useState<number>(0);

  const navigation = useNavigation();

  const handleWallAreaCalc = () => {
    const wallInfo: WallInfoProps = {
      wallAreaOne: wallHeightOne * wallWidthOne,
      wallHeightOne,
      wallAreaTwo: wallHeightTwo * wallWidthTwo,
      wallHeightTwo,
      wallAreaThree: wallHeightThree * wallWidthThree,
      wallHeightThree,
      wallAreaFour: wallHeightFour * wallWidthFour,
      wallHeightFour,
    };

    if (wallInfo.wallAreaOne < 1 || wallInfo.wallAreaOne > 15) {
      return Alert.alert('Parede 1 deve ter entre 1 e 15 m²');
    }
    if (wallInfo.wallAreaTwo < 1 || wallInfo.wallAreaTwo > 15) {
      return Alert.alert('Parede 2 deve ter entre 1 e 15 m²');
    }
    if (wallInfo.wallAreaThree < 1 || wallInfo.wallAreaThree > 15) {
      return Alert.alert('Parede 3 deve ter entre 1 e 15 m²');
    }
    if (wallInfo.wallAreaFour < 1 || wallInfo.wallAreaFour > 15) {
      return Alert.alert('Parede 4 deve ter entre 1 e 15 m²');
    } else {
      return navigation.navigate('Internal', {wallInfo});
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Medidas</Text>
        </View>

        <Text style={styles.title}>Informe as medidas em metros</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.textRef}>Parede 1</Text>
          <View style={styles.flexBetween}>
            <TextInputComponent
              title="Informe a altura"
              onChangeText={e => setWallHeightOne(e)}
            />
            <TextInputComponent
              title="Informe a largura"
              onChangeText={e => setWallWidthOne(e)}
            />
          </View>
          <Text style={styles.textRef}>Parede 2</Text>
          <View style={styles.flexBetween}>
            <TextInputComponent
              title="Informe a altura"
              onChangeText={e => setWallHeightTwo(e)}
            />
            <TextInputComponent
              title="Informe a largura"
              onChangeText={e => setWallWidthTwo(e)}
            />
          </View>
          <Text style={styles.textRef}>Parede 3</Text>
          <View style={styles.flexBetween}>
            <TextInputComponent
              title="Informe a altura"
              onChangeText={e => setWallHeightThree(e)}
            />
            <TextInputComponent
              title="Informe a largura"
              onChangeText={e => setWallWidthThree(e)}
            />
          </View>
          <Text style={styles.textRef}>Parede 4</Text>
          <View style={styles.flexBetween}>
            <TextInputComponent
              title="Informe a altura"
              onChangeText={e => setWallHeightFour(e)}
            />
            <TextInputComponent
              title="Informe a largura"
              onChangeText={e => setWallWidthFour(e)}
            />
          </View>
        </View>
        <Button title="Próximo" onPress={handleWallAreaCalc} />
      </View>
    </ScrollView>
  );
};

export default Home;
