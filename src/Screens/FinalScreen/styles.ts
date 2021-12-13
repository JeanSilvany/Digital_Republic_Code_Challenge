import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    margin: 10,
  },
  titleText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    margin: 10,
    color: '#000',
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#5636d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
  },
  flexBoxRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    position: 'absolute',
    left: 15,
  },
  iconRight: {
    position: 'absolute',
    right: 15,
  },
});

export default styles;
