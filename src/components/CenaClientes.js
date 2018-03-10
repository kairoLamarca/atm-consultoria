import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

//importar o componente barra de navegação
import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                {/* Status bar com hidden true, faz não aprecer a barra de cima do android */}
                <StatusBar
                    //hidden
                    backgroundColor='#CCC'
                />

                {/* Se não mpassar valor na props, segnifica que é true */}
                <BarraNavegacao voltar navigator={this.props.navigator} />

                <View style={styles.cabecalho}>
                    <Image source={detalheCliente} />
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image source={cliente1} />
                    <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image source={cliente2} />
                    <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25
    },
    detalheCliente: {
        padding: 20,
        marginTop: 10
    },
    txtDetalheCliente: {
        fontSize: 18,
        marginLeft: 20
    }
});
