import * as S from "./style.ts"

interface Interface {
    prop: string
}

export default function Component({prop}: Interface) {
return (
    <>
        <S.Container>
            <p>{prop}</p>
        </S.Container>
    </>
)
}