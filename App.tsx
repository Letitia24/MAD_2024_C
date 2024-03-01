import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{ width: 200, height: 50, backgroundColor: '#0abde3' }} />
      <Text>Letitia</Text>
      <Text>Abigail</Text>
      <Home />
      <Foto />
      <TextInput style={{borderWidth: 1}}/>
    </View>
  );
};

const Home = () => {
  return <Text>Home</Text>;
};

const Foto = () => {
  return (
    <Image
      source={{
        uri: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F10%2Fcartoon-network-warner-bros-discovery-end-info-001.jpg?cbr=1&q=90'  }}
        style={{ width: 100, height: 100 }}
    />
  );
};

export default App;