import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { styles, titleStyles } from './styles'; // importa os arquivos de estilo

const App = () => {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const min = 0;
    const max = 10;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setNumber(randomNumber);
  };

  return (
    <View style={styles.container}>
      <View style={titleStyles.container}>
        <Text style={titleStyles.title}>Jogo do Nº Aleatório</Text>
        <Image
        style={titleStyles.image}
        source={{
          uri: 'https://uploads.spiritfanfiction.com/historias/capas/201812/batman-a-noite-de-charadas-15214747-201220182048.jpg',
        }}
      />
      </View>
      <Text style={styles.subTitle}>Pense em um Número de 0 a 10</Text>
      {number !== null && (
        <Text style={styles.resultText}>O número é {number}</Text>
      )}
      <TouchableOpacity onPress={generateRandomNumber} style={styles.button}>
        <Text style={styles.buttonText}>Descobrir</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default App;