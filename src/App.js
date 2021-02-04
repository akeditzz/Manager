import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm';

class App extends Component {

  componentDidMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAaiHAdF3ClsAjhAqOBGI3j4V2llq0ELfY",
      authDomain: "manager-86372.firebaseapp.com",
      projectId: "manager-86372",
      storageBucket: "manager-86372.appspot.com",
      messagingSenderId: "33806106837",
      appId: "1:33806106837:web:d60403c4b598cc6f81225c"
    })
  }

  render() {
    return <Provider store={createStore(reducers)}>
      <View>
        <LoginForm />
      </View>
    </Provider>
  }
}

export default App