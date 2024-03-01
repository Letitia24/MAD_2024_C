import React, { Component } from 'react';
import { Image, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Letitia</Text>
        <Text style={styles.title}>Abigail</Text>
      </View>
      <Home />
      <Foto />
      <TextInput style={styles.input} />
      <Foto />
      <Foto />
      <Foto />
      <BoxGreen />
      <Profile />
    </ScrollView>
  );
};

const Home = () => {
  return <Text style={styles.title}>Home</Text>;
};

const Foto = () => {
  return (
    <Image
      source={{ uri: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F10%2Fcartoon-network-warner-bros-discovery-end-info-001.jpg?cbr=1&q=90' }}
      style={styles.foto}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text style={styles.title}>komponen dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F10%2Fcartoon-network-warner-bros-discovery-end-info-001.jpg?cbr=1&q=90' }}
          style={styles.foto}
        />
        <Text style={styles.title}>cartun</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#0abde3',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
  },
  foto: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  profile: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default App;