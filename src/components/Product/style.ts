import styled from "styled-components";

export const Container = styled.div`
    border-radius: 5px;
    display: flex;
    position: relative;
    width: 364px;
    background: #fff;
    align-items: center;
`

export const Title = styled.h2`
    margin: 0;
`

export const Description = styled.p`
    margin: 0;
    font-size: 10px;
    color: gray;
`

export const Price = styled.p`
    margin: 0;
`

export const Bag = styled.div`
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 32px;
    bottom: 24px;
`

export const Imagem = styled.img`
    width: fit-content;
    height: fit-content;
    margin: 16px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 24px;
`