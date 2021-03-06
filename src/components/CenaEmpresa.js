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

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                {/* Status bar com hidden true, faz não aprecer a barra de cima do android */}
                <StatusBar
                    //hidden
                    backgroundColor='#EC7148'
                />

                {/* Se não mpassar valor na props, segnifica que é true */}
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#EC7148' />

                <View style={styles.cabecalho}>
                    <Image source={detalheEmpresa} />
                    <Text style={styles.txtTitulo}>A Empresa</Text>
                </View>

                <View style={styles.detalheEmpresa}>
                    <Text style={styles.txtEmpresa}>Lorem ipsum dolorem sit amet, dolorem sit amet ipsum dolorem sit</Text>
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
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25
    },
    detalheEmpresa: {
        padding: 20,
        marginTop: 20
    },
    txtEmpresa: {
        fontSize: 18
    }
});
