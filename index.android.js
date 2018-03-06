import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

//importar o componente barra de navegação
import BarraNavegacao from './src/components/BarraNavegacao';

export default class atmConsultoria extends Component {
  render() {
    return (
      <BarraNavegacao />
    );
  }
}

AppRegistry.registerComponent('atmConsultoria', () => atmConsultoria);
