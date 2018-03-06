import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar
} from 'react-native';

//importar o componente barra de navegação
import BarraNavegacao from './src/components/BarraNavegacao';

export default class atmConsultoria extends Component {
  render() {
    return (
      <View>
        {/* Status bar com hidden true, faz não aárecer a barra de cima do android */}
        <StatusBar
          //hidden
          backgroundColor='#CCC'
        />
        <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent('atmConsultoria', () => atmConsultoria);
