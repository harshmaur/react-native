import React, { PropTypes } from 'react'
import {Button, Card, CardSection, Input, Spinner} from './common';
import {Text} from 'react-native';
import firebase from 'firebase'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({error: '', loading: true})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this))
    })
  }

  onLoginFail() {
    this.setState({error: "Authentication Failed.", loading: false})
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return <Button text="Login" onPress={() => this.onButtonPress()}></Button>
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            />

        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="**********"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            secureTextEntry
            />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm
