import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import useTopo from '../../../hooks/useTopo';

export default function Topo(){
    const [imagem, titulo, legenda] = useTopo();
    return(
        <View style={estilos.topo}>
            <Image source={imagem} style={estilos.imagem}/>
            <Text style={estilos.titulo}>{titulo}</Text>
            <Text style={estilos.legenda}>{legenda}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    topo: {
        padding: 16,
        backgroundColor: '#eaeaea',
    },
    imagem: {
        width: 72,
        height: 28,
        marginBottom: 16,
    },
    titulo: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#414141',
    },
    legenda: {
        fontSize: 14,
        lineHeight: 22,
    },
});