import React from 'react';
import { View } from 'react-native';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends React.Component {

  state = { loggedIn:null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCK-i26MyREc3npRJ6Xe-jdjEmBBxiGPPg",
      authDomain: "authentication-1bf6d.firebaseapp.com",
      databaseURL: "https://authentication-1bf6d.firebaseio.com",
      storageBucket: "authentication-1bf6d.appspot.com",
      messagingSenderId: "524022210234"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return <Button
          onPress={() => firebase.auth().signOut()} 
          text="Logout"/>
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }
  render() {
    return (
      <View>
        <Header text="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}


export default App
