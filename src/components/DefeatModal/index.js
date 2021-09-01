import React, { useCallback, useState, useRef, useEffect } from 'react'
import { Image, TouchableWithoutFeedback , Animated, View, Text } from 'react-native'
import Lottie from 'lottie-react-native'


import { Container, ButtonsSection, Button } from './styles'

const DefeatModal = (props) => {
    const lottieRef = useRef(null)

    const handlePress = () => {
        lottieRef.current.play(0, 140)
    }

    const handleClean = () => {
        lottieRef.current.play(0, 0)
    }

    return (
        <Container>
            <Lottie
                ref={lottieRef}
                style={{ width: 320, height: 320 }}
                source={require('../../../assets/lottie/levelFailed.json')}
                autoPlay={true}
                loop={false}
            />

            <Text
                style={{ color: '#5C5CFF', fontSize: 32, fontFamily: 'Poppins-Medium', marginTop: -20 }}
            >Score:</Text>
            
            <Text
                style={{ color: '#FFF', fontSize: 60, fontFamily: 'Poppins-Medium', marginTop: -12 }}
            >560</Text>

            <ButtonsSection>
                <Button>
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../../../assets/png/menu.png')}
                    />
                </Button>

                <Button>
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../../../assets/png/repeat.png')}
                    />
                </Button>
            </ButtonsSection>
        </Container>
    )
}

export default DefeatModal