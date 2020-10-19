
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const App: () => React$Node = () => {

  const [showName, setShowName] = useState('');
  const [buttonName, setButtonName] = useState('Pokaż');

  const setMyName = () => {
    if(showName === '') {
      setShowName('Nazywam się Tomasz Konieczny');
      setButtonName('Ukryj')
    } else {
      setShowName('');
      setButtonName('Pokaż')
    }
  }

  return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, paddingBottom: 10}}>Zadanie 2</Text>
        <TouchableOpacity style={styles.button}
        onPress={() => setMyName()}>
          <Text style={{fontSize: 20}}>
            {buttonName}
          </Text>
        </TouchableOpacity>
        <Text>{showName}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  button: {
    width: '50%',
    height: '5%',
    backgroundColor: '#dadada',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10
  }
});

export default App;
