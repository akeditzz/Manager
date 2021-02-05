import React, { Component } from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import LoginForm from './components/LoginForm';

class App extends Component {

  componentDidMount() {
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return <Provider store={store}>
      <View>
        <LoginForm />
      </View>
    </Provider>
  }
}

export default App