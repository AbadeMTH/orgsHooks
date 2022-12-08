import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import useProdutores from '../../../hooks/useProdutores';
import Produtor from './Produtor';

export default function Produtores({topo: Topo}){
    const [titulo, lista] = useProdutores();

    const TopoLista = () => {
        return(
            <>
                <Topo/>
                <Text style={estilos.titulo}>{titulo}</Text>
            </>
        );
    }

    return(
        <FlatList
            data={lista}
            renderItem={({item}) => <Produtor {...item}/>}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={TopoLista}
        />
    );
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#414141',
        marginHorizontal: 16,
        marginTop: 16,
    },
});