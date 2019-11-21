import React from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';

import Navigator from './navigation/navigation';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appLoaded : false
    }
  }

  async componentDidMount() {

    await Font.loadAsync({
      'Roboto-Thin' : require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-ThinItalic' : require('./assets/fonts/Roboto-ThinItalic.ttf'),
      'Roboto-Regular' : require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium' : require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-MeduimItalic' : require('./assets/fonts/Roboto-MediumItalic.ttf'),
      'Roboto-Light' : require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-LightItalic' : require('./assets/fonts/Roboto-LightItalic.ttf')
    });
    await this.setState({
      appLoaded : true
    });
  }
  
  
  render() {

    if (this.state.appLoaded) {
      return (
        <Navigator />
      );
    } else {
      return null;
    }

  }
}
