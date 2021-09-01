import React, { useEffect, useState } from 'react'
import { Button, Image, ImageBackground, Text, View } from 'react-native'
import Lottie from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native';

import { Container, ContainerSmallCircles, InnerBigCircle, InnerSmallCircle, OuterBigCircle, OuterSmallCircle, PlayText  } from './styles'

const Welcome = (props) => {
    const { navigate } = useNavigation()

    return(
        <Container
            source={require('../../../assets/png/background.png')}
        >
            <Lottie
                source={require('../../../assets/lottie/welcome.json')}
                autoPlay={true}
                loop={false}
            />

            <OuterBigCircle
                onPress={() => navigate('game', {
                    level: 'hard'
                })}
            >
                <InnerBigCircle>
                    <PlayText>JOGAR</PlayText>
                </InnerBigCircle>
            </OuterBigCircle>

            <ContainerSmallCircles>
                <OuterSmallCircle>
                    <InnerSmallCircle>
                        <Image
                            style={{ width: 32, height: 32 }}
                            source={require('../../../assets/png/settings.png')}
                        />
                    </InnerSmallCircle>
                </OuterSmallCircle>

                <OuterSmallCircle>
                    <InnerSmallCircle>
                        <Image
                            style={{ width: 28, height: 28, zIndex: 10 }}
                            source={require('../../../assets/png/question-welcome.png')}
                        />
                    </InnerSmallCircle>
                </OuterSmallCircle>
            </ContainerSmallCircles>
        </Container>
    )
}

export default Welcome