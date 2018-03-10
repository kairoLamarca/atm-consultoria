import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class atmConsultoria extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
          /* definir a cena com na rota */
          if (route.id === 'a') {
            //exibir a cenaPrinciapl
            return (<CenaPrincipal navigator={navigator} />);
          }

          if (route.id === 'b') {
            //exibir a cenaClientes
            return (<CenaClientes navigator={navigator} />);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('atmConsultoria', () => atmConsultoria);
