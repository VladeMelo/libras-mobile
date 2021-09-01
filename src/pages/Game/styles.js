import styled, { css } from 'styled-components/native'

export const Container = styled.ImageBackground`
    flex: 1;
    padding: 40px 35px 40px;
    align-items: center;
`

export const TimeCircle = styled.View`
    width: 48px;
    height: 48px;
    border-radius: 40px;
    background-color: rgba(92, 92, 255, 0.7);
    justify-content: center;
    align-items: center;
`

export const InnerCircle = styled.View`
    width: 48px;
    height: 48px;
    border-radius: 40px;
    background-color: rgba(92, 92, 255, 0.7);
    justify-content: center;
    align-items: center;
`

export const OuterCircle = styled.View`
    width: 64px;
    height: 64px;
    border-radius: 40px;
    background-color: rgba(9, 9, 121, 0.5);
    justify-content: center;
    align-items: center;
`

export const InfoText = styled.Text`
    font-size: 30px;
    font-family: 'Poppins-Medium';
    color: #fff;
    top: 3px;
`

export const CardSection = styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;

    ${props =>
        props.level === 'hard' &&
        css`
            margin: 20px -12px 0;
        `
    }
`