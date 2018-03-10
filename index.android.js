import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class atmConsultoria extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          /* definir a cena com na rota */
          if (route.id === 'principal') {
            //exibir a cenaPrinciapl
            return (<CenaPrincipal navigator={navigator} />);
          }

          if (route.id === 'cliente') {
            //exibir a cenaClientes
            return (<CenaClientes navigator={navigator} />);
          }

          if (route.id === 'contato') {
            //exibir a CenaContatos
            return (<CenaContatos navigator={navigator} />);
          }

          if (route.id === 'empresa') {
            //exibir a CenaEmpresa
            return (<CenaEmpresa navigator={navigator} />);
          }

          if (route.id === 'servicos') {
            //exibir a CenaServicos
            return (<CenaServicos navigator={navigator} />);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('atmConsultoria', () => atmConsultoria);
