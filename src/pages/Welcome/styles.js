import styled, { css } from 'styled-components/native'

export const Container = styled.ImageBackground`
    flex: 1;
    padding: 130px 16px 16px;
`

export const InnerBigCircle = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 40px;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
`

export const OuterBigCircle = styled.TouchableOpacity`
    width: 220px;
    height: 56px;
    padding: 4px;
    border-radius: 40px;
    background-color: #5C5CFF;
    justify-content: center;
    align-items: center;

    margin-top: 440px;
    align-self: center;
`

export const ContainerSmallCircles = styled.View`
    margin-top: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const InnerSmallCircle = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 40px;
    background-color: #5C5CFF;
    justify-content: center;
    align-items: center;
`

export const OuterSmallCircle = styled.View`
    width: 64px;
    height: 64px;
    padding: 4px;
    border-radius: 40px;
    background-color: #FFF;
    justify-content: center;
    align-items: center;

    margin-top: 440px;
    align-self: center;
`

export const PlayText = styled.Text`
    font-size: 30px;
    font-family: 'Poppins-Medium';
    color: #5C5CFF;
`

export const CardSection = styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 36px;

    ${props =>
        props.level === 'hard' &&
        css`
            margin: 36px -20px 0;
        `
    }
`