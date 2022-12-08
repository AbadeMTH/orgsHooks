import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import estrelaPintada from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({onPress, desabilitada = true, preenchida, grande = false,}){
    const getImagem = () => {
        if(preenchida){
            return estrelaPintada;
        }
        return estrelaCinza;
    }

    const estilos = estiloFuncao(grande);

    return(
        <>
            <TouchableOpacity
                onPress={onPress}
                disabled={desabilitada}
            >
                <Image source={getImagem()} style={estilos.estrela}/>
            </TouchableOpacity>
        </>
    );
}

const estiloFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
    },
});