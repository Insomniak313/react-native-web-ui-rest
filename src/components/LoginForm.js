import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { Colors } from '../constants';

import Button from './Button';
import TextFormGroup from './TextFormGroup';
import LoadingPlaceholder from './LoadingPlaceholder';

import axios from 'axios';
import qs from 'qs';

 import deviceStorage from '../services/deviceStorage';

class LoginForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			email: 'adrien.fournie@gmail.com',
			password: 'toto',
			error: '',
			loading: false
		};

		this.loginUser = this.loginUser.bind(this);
		this.onLoginFail = this.onLoginFail.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
	}

	loginUser() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		axios.post(
			"https://data.finindev.com/api/login_check",
			qs.stringify({
				_username: email,
				_password: password
			})
		)
		.then((response) => {
			this.onLoginSuccess(response);
		})
		.catch((error) => {
			this.onLoginFail(error);
		});
	}

	onLoginFail(error) {
		this.setState({
			error: 'Login failed !',
			loading: false
		});
	}

  onLoginSuccess(response) {
    deviceStorage.saveKey("token", response.data.token);
    this.props.newJWT(response.data.token);
	}

  render() {
    const { style, ...other } = this.props;
    const { email, password, error, loading } = this.state;

    return(
      <View>
      { error != '' && (<Text style={StyleSheet.compose(styles.errorText, style)}>{error}</Text>)}
      <LoadingPlaceholder loading={loading}>
        <View style={StyleSheet.compose(styles.container, style)}>
            <TextFormGroup label="Email" value={email} onChangeText={email => this.setState({ email })} />
            <TextFormGroup label="Mot de passe" secureTextEntry={true} value={password} onChangeText={password => this.setState({ password })} />
  				  <Button onClick={this.loginUser}  label="Connexion" color="primary" variant="contained" rounded />
        </View>
      </LoadingPlaceholder>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 2, height: 2 },
      },
      android: {
        elevation: 2,
      },
    }),
  },
  submit: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
  },
  labelText: {
    marginBottom: 10
  },
  inputText: {
    marginBottom: 10,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderWidth: 0
  },
  errorText: {
    alignSelf:'flex-start',
    backgroundColor: Colors.danger,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth:1,
    borderColor: '#fff',
    color: '#fff',
    marginBottom: 10
  },
  submitText: {
    color: '#fff'
  },
});


export default LoginForm;
