import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class atmConsultoria extends Component {
  render() {
    return (
      // <CenaPrincipal />
      <CenaClientes />
    );
  }
}

AppRegistry.registerComponent('atmConsultoria', () => atmConsultoria);
