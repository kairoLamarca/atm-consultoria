import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text
} from 'react-native';

//importar o componente barra de navegação
import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
    render() {
        return (
            <View>
                {/* Status bar com hidden true, faz não aprecer a barra de cima do android */}
                <StatusBar
                    //hidden
                    backgroundColor='#CCC'
                />
                <BarraNavegacao />

                <Image source={detalheCliente} />
                <Text>Nossos Clientes</Text>
                <Image source={cliente1} />
                <Text>Lorem ipsum dolorem</Text>
                <Image source={cliente2} />
                <Text>Lorem ipsum dolorem</Text>

            </View>
        );
    }
}
