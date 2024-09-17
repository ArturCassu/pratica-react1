import * as S from "./style.ts"
import bag from "../../assets/bag.svg"

interface ProductProps {
    img: string
    nome: string
    peso: number
    preco: number
    color: string
}

export default function Product({img, nome, peso, preco, color}: ProductProps) {
return (
    <>
        <S.Container>
            <S.Imagem src={img}/>
            <S.Info>
                <S.Title>{nome}</S.Title>
                <S.Description>{peso}Kg/Preço</S.Description>
                <S.Price style={{color: color}}>R$ {preco}</S.Price>
            </S.Info>
            <S.Bag style={{background: color}}><img src={bag}/></S.Bag>
        </S.Container>
    </>
)
}

export type {ProductProps}