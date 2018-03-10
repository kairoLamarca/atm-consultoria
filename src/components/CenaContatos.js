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

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                {/* Status bar com hidden true, faz não aprecer a barra de cima do android */}
                <StatusBar
                    //hidden
                    backgroundColor='#61BD8C'
                />

                {/* Se não mpassar valor na props, segnifica que é true */}
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C' />

                <View style={styles.cabecalho}>
                    <Image source={detalheContatos} />
                    <Text style={styles.txtTitulo}>Contatos</Text>
                </View>

                <View style={styles.detalheContatos}>
                    <Text style={styles.txtContatos}>TEL: (11) 1234-1234</Text>
                    <Text style={styles.txtContatos}>CEL: (11) 91234-1234</Text>
                    <Text style={styles.txtContatos}>EMAIL: contato@atmconsultoria.com</Text>
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
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalheContatos: {
        padding: 20,
        marginTop: 20
    },
    txtContatos: {
        fontSize: 18
    }
});
