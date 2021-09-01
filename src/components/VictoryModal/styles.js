import styled, { css } from 'styled-components/native'

export const Container = styled.View`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);

    align-items: center;

    padding-top: 160px;
`

export const ButtonsSection = styled.View`
    margin-top: 24px;
    width: 272px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
    width: 68px;
    height: 68px;
    border-radius: 40px;
    background-color: #5C5CFF;

    align-items: center;
    justify-content: center;
`