import * as S from "./style.ts"
import Product, {ProductProps} from "../Product";

interface SectionProps {
    title: string;
    type: string;
    color: string;
    products: ProductProps[]
}

export default function Section({products, type, title, color}: SectionProps) {
    return (
        <div>
            <S.Title>{title}</S.Title>
            <S.Type style={{background: color}}>{type}</S.Type>

            <S.Container>
                {products.map((props, index) => <Product key={index} {...props} color={color} />)}
            </S.Container>
        </div>
    )
}