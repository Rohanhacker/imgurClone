import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View
} from 'react-native'
import App from './src/App'

export default class imgurClone extends Component {
  render() {
    return (
      <App />
    )
  }
}



AppRegistry.registerComponent('imgurClone', () => imgurClone);
