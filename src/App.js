import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  Animated,
  Easing,

} from 'react-native';
import logo from './logo.png';

import LoginForm from './components/LoginForm';
import Button from './components/Button';

import deviceStorage from './services/deviceStorage.js';

import Home from './layouts/Home';

class App extends Component {

  constructor(){
    super();
    this.state = {
      spinValue: new Animated.Value(0),
      jwt: ''
    };

    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }

  render() {
    if(!this.state.jwt) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <LoginForm newJWT={this.newJWT} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Button onClick={this.deleteJWT}  label="Déconnexion" color="primary" variant="raised" />
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
