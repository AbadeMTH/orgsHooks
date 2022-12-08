import React, { useMemo, useReducer } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Estrelas from '../../../componentes/Estrelas';

const distanciaEmMetros = (distancia) => {
    return `${distancia}m`;
}

export default function Produtor({ imagem, nome, distancia, estrelas }) {
    const [cartaoSelecionado, inverterCartaoSelecionado] = useReducer(
        (cartaoSelecionado) => !cartaoSelecionado,
        false
    );

    const distanciaTexto = useMemo(
        () => distanciaEmMetros(distancia),
        [distancia]
    );

    const estilos = estilosFuncao(cartaoSelecionado);

    return (
        <TouchableOpacity style={estilos.cartao} onPress={inverterCartaoSelecionado}>
            <Image source={imagem} style={estilos.imagem}/>
            <View style={estilos.detalhes}>
                <View>
                    <Text style={estilos.nome}>{nome}</Text>
                    <Estrelas editavel={cartaoSelecionado} quantidade={estrelas} grande={cartaoSelecionado}/>
                </View>
                <Text style={estilos.distancia}>{distanciaTexto}</Text>
            </View>
        </TouchableOpacity>
    );
}

const estilosFuncao = (cartaoSelecionado) => StyleSheet.create({
    cartao: {
        padding: 16,
        elevation: 4,
        flexDirection: 'row',
        backgroundColor: '#eaeaea',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 6,
    },
    imagem: {
        width: cartaoSelecionado ? 82 : 48,
        height: cartaoSelecionado ? 82 : 48,
        borderRadius: 6,
        marginRight: 16,
    },
    detalhes: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    nome: {
        fontSize: cartaoSelecionado ? 22 : 14,
        lineHeight: cartaoSelecionado ? 42 : 22,
        fontWeight: 'bold',
        color: 'black',
    },
    distancia: {
        fontSize: cartaoSelecionado ? 16 : 14,
        lineHeight: cartaoSelecionado ? 32 : 22,
        fontWeight: 'bold',
        color: 'black',
    },
});