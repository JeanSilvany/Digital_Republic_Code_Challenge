import React, {useState} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/button';
import TextInputComponent from '../../components/TextInputComponent';

import Feather from 'react-native-vector-icons/dist/Feather';

import {
  DoorsInfoProps,
  FinalAreaProps,
  FinalProps,
  WindowsInfoProps,
} from '../../@types/InternalScreenProps';

import styles from './styles';

const Internal: React.FC = ({route}: any) => {
  const {wallInfo} = route.params;

  const navigation = useNavigation();

  const [doorsWallOne, setDoorsWallOne] = useState<number>(0);
  const [doorsWallTwo, setDoorsWallTwo] = useState<number>(0);
  const [doorsWallThree, setDoorsWallThree] = useState<number>(0);
  const [doorsWallFour, setDoorsWallFour] = useState<number>(0);
  const [windowsWallOne, setWindowsWallOne] = useState<number>(0);
  const [windowsWallTwo, setWindowsWallTwo] = useState<number>(0);
  const [windowsWallThree, setWindowsWallThree] = useState<number>(0);
  const [windowsWallFour, setWindowsWallFour] = useState<number>(0);

  const [progress, setProgress] = useState<boolean>(true);

  const oneLitre = 5;

  const smallSize = 0.5;
  const mediumSize = 2.5;
  const bigSize = 3.6;
  const largeSize = 18;

  const handleDetailsCalc = () => {
    let countSmallSize: number = 0;
    let countMediumSize: number = 0;
    let countBigSize: number = 0;
    let countLargeSize: number = 0;

    const doorsInfo: DoorsInfoProps = {
      doorsAreaOne: {
        totalArea: (doorsWallOne * 0.8 * 1.9).toFixed(2),
      },
      doorsAreaTwo: {
        totalArea: (doorsWallTwo * 0.8 * 1.9).toFixed(2),
      },
      doorsAreaThree: {
        totalArea: (doorsWallThree * 0.8 * 1.9).toFixed(2),
      },
      doorsAreaFour: {
        totalArea: (doorsWallFour * 0.8 * 1.9).toFixed(2),
      },
    };

    const resultWindows: WindowsInfoProps = {
      windowsAreaOne: {
        totalArea: (windowsWallOne * 2 * 1.2).toFixed(2),
      },
      windowsAreaTwo: {
        totalArea: (windowsWallTwo * 2 * 1.2).toFixed(2),
      },
      windowsAreaThree: {
        totalArea: (windowsWallThree * 2 * 1.2).toFixed(2),
      },
      windowsAreaFour: {
        totalArea: (windowsWallFour * 2 * 1.2).toFixed(2),
      },
    };

    if (doorsWallOne > 0) {
      if (wallInfo.wallHeightOne < 2.2) {
        setProgress(false);
        return Alert.alert('Altura da parede 1 é menor que 2.20m');
      }
    }

    if (doorsWallTwo > 0) {
      if (wallInfo.wallHeightTwo < 2.2) {
        setProgress(false);
        return Alert.alert('Altura da parede 2 é menor que 2.20m');
      }
    }

    if (doorsWallThree > 0) {
      if (wallInfo.wallHeightThree < 2.2) {
        setProgress(false);
        return Alert.alert('Altura da parede 3 é menor que 2.20m');
      }
    }

    if (doorsWallFour > 0) {
      if (wallInfo.wallHeightFour < 2.2) {
        setProgress(false);
        return Alert.alert('Altura da parede 4 é menor que 2.20m');
      }
    }

    const wallAreaDetails = {
      areaOne:
        Number(doorsInfo.doorsAreaOne.totalArea) +
        Number(resultWindows.windowsAreaOne.totalArea),
      areaTwo:
        Number(doorsInfo.doorsAreaTwo.totalArea) +
        Number(resultWindows.windowsAreaTwo.totalArea),
      areaThree:
        Number(doorsInfo.doorsAreaThree.totalArea) +
        Number(resultWindows.windowsAreaThree.totalArea),
      areaFour:
        Number(doorsInfo.doorsAreaFour.totalArea) +
        Number(resultWindows.windowsAreaFour.totalArea),
    };

    if (wallAreaDetails.areaOne > wallInfo.wallAreaOne / 2) {
      setProgress(false);
      return Alert.alert(
        'A área total de janelas e portas da parede 1 é maior que 50% da área.',
      );
    }
    if (wallAreaDetails.areaTwo > wallInfo.wallAreaTwo / 2) {
      setProgress(false);
      return Alert.alert(
        'A área total de janelas e portas da parede 2 é maior que 50% da área.',
      );
    }
    if (wallAreaDetails.areaThree > wallInfo.wallAreaThree / 2) {
      setProgress(false);
      return Alert.alert(
        'A área total de janelas e portas da parede 3 é maior que 50% da área.',
      );
    }
    if (wallAreaDetails.areaFour > wallInfo.wallAreaFour / 2) {
      setProgress(false);
      return Alert.alert(
        `A área total de janelas e portas da parede 4 é maior que 50% da área.`,
      );
    }

    const finalArea: FinalAreaProps = {
      finalWallAreaOne:
        Number(wallInfo.wallAreaOne) - Number(wallAreaDetails.areaOne),
      finalWallAreaTwo:
        Number(wallInfo.wallAreaTwo) - Number(wallAreaDetails.areaTwo),
      finalWallAreaThree:
        Number(wallInfo.wallAreaThree) - Number(wallAreaDetails.areaThree),
      finalWallAreaFour:
        Number(wallInfo.wallAreaFour) - Number(wallAreaDetails.areaFour),
    };

    const wallCanQuantityRequired = {
      canQuantityWallOne: finalArea.finalWallAreaOne / oneLitre,
      canQuantityWallTwo: finalArea.finalWallAreaTwo / oneLitre,
      canQuantityWallThree: finalArea.finalWallAreaThree / oneLitre,
      canQuantityWallFour: finalArea.finalWallAreaFour / oneLitre,
    };

    let finalResult = Math.ceil(
      wallCanQuantityRequired.canQuantityWallOne +
        wallCanQuantityRequired.canQuantityWallTwo +
        wallCanQuantityRequired.canQuantityWallThree +
        wallCanQuantityRequired.canQuantityWallFour,
    );

    while (finalResult >= largeSize) {
      finalResult = finalResult - largeSize;
      countLargeSize++;
    }
    while (finalResult >= bigSize) {
      finalResult = finalResult - bigSize;
      countBigSize++;
    }
    while (finalResult >= mediumSize) {
      finalResult = finalResult - mediumSize;
      countMediumSize++;
    }
    while (finalResult >= smallSize || finalResult > 0) {
      finalResult = finalResult - smallSize;
      countSmallSize++;
    }

    let finalInfo: FinalProps = {
      small: countSmallSize,
      medium: countMediumSize,
      big: countBigSize,
      large: countLargeSize,
    };

    setProgress(true);

    if (progress) {
      navigation.navigate('FinalScreen', {finalInfo});
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Medidas</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{position: 'absolute', left: 15}}>
            <Feather name="chevron-left" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Informe as medidas</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textRef}>Parede 1</Text>
          <View style={styles.flexBetween}>
            <TextInputComponent
              title="Número de Portas"
              onChangeText={e => setDoorsWallOne(e)}
            />
            <TextInputComponent
              title="Número de Janelas"
              onChangeText={e => setWindowsWallOne(e)}
            />
          </View>
          <Text style={styles.textRef}>Parede 2</Text>
          <View style={styles.flexBetween}>
            <TextInputComponent
              title="Número de Portas"
              onChangeText={e => setDoorsWallTwo(e)}
            />
            <TextInputComponent
              title="Número de Janelas"
              onChangeText={e => setWindowsWallTwo(e)}
            />
          </View>
          <Text style={styles.textRef}>Parede 3</Text>
          <View style={styles.flexBetween}>
            <TextInputComponent
              title="Número de Portas"
              onChangeText={e => setDoorsWallThree(e)}
            />
            <TextInputComponent
              title="Número de Janelas"
              onChangeText={e => setWindowsWallThree(e)}
            />
          </View>
          <Text style={styles.textRef}>Parede 4</Text>
          <View style={styles.flexBetween}>
            <TextInputComponent
              title="Número de Portas"
              onChangeText={e => setDoorsWallFour(e)}
            />
            <TextInputComponent
              title="Número de Janelas"
              onChangeText={e => setWindowsWallFour(e)}
            />
          </View>
        </View>
        <Button title="Resultado" onPress={handleDetailsCalc} />
      </View>
    </ScrollView>
  );
};

export default Internal;
