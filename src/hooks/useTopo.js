import { useEffect, useState } from "react";
import { carregaTopo } from "../serviços/carregaDados";

export default function useTopo(){
    const [imagem, setImagem] = useState('');
    const [titulo, setTitulo] = useState('');
    const [legenda, setLegenda] = useState('');

    useEffect(() => {
        const retorno = carregaTopo();
        setImagem(retorno.imagem);
        setTitulo(retorno.titulo);
        setLegenda(retorno.legenda);
    }
    ,[]);
    return [imagem, titulo, legenda]
}