import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Platform,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safearea} />
        <ImageBackground
          style={styles.bg}
          source={require('../assets/blue.png')}>
          // <View style={styles.titlebar}>
          //   // <Text style={styles.title}>ISS Tracker App</Text>
          // </View>
          <TouchableOpacity style={styles.card} onPress={()=>{
            this.props.navigation.navigate("Games")
          }}>
            <Text style={styles.subtitle}>Games</Text>
            <Text style={styles.play}>{'Play-->'}</Text>
            <Text style={styles.digit}>1</Text>
            <Image
              style={styles.imageicon}
              source={require('../assets/gaming.png')}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safearea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width:332,
    height:677,
  },
  titlebar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    flex: 0.25,
    marginLeft: 50,
    marginTop: 50,
    marginRight: 50,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 70,
    paddingLeft: 30,
  },
  play: {
    paddingLeft: 110,
    color: 'red',
    fontSize: 15,
  },
  imageicon: {
    height: 70,
    width: 70,
    top: -0,
    position: 'absolute',
    resizeMode: 'contain',
    right: 10,
    left: 100,
  },
  digit: {
    position: 'absolute',
    fontSize: 100,
    color: 'grey',
    right: 5,
    bottom: -10,
    zIndex: -1,
  },
});