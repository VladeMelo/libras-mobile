import styled, { css } from 'styled-components/native'

export const Container = styled.View`
    width: ${props => props.small ? 70 : 80}px;
    height: ${props => props.small ? 70 : 80}px;
    background-color: ${props => props.isPressed ? 'green' : '#5C5CFF'};
    border-radius: 10px;

    align-items: center;
    justify-content: center;

    margin-bottom: ${props => props.level === 'easy' ? 20 : 40}px;
`