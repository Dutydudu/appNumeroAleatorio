import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#00C434',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 22,
  },
  resultText: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 22,
  }
});

const titleStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 25,
  },
  image: {
    width: 200,
    height: 260,
    marginTop: 10,
  },
});

export { styles, titleStyles };
