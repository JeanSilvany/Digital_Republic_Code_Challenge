import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  inputContainer: {
    padding: 18,
  },
  textRef: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 5,
    marginLeft: 10,
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
