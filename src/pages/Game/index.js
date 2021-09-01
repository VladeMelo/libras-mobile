import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Image, ImageBackground, Text, View, Animated} from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useRoute } from '@react-navigation/native';

import { Container, OuterCircle, InnerCircle, InfoText, CardSection  } from './styles'

import Card from '../../components/Card'
import VictoryModal from '../../components/VictoryModal'
import DefeatModal from '../../components/DefeatModal'

import shuffle from '../../utils/shuffle'

const Game = () => {
    const props = useRoute().params

    const [randomArray, setRandomArray] = useState(
        Array(props.level === 'easy' ? 12 : 20)
        .fill(0)
        .map((_, index) => ({
            value: index % 2 == 0 ? index : index - 1,
            isOpen: false,
        }))
    )
    const [win] = useState(false)
    const [gameFinish, setGameFinish] = useState(false)

    useEffect(() => {
        console.log(shuffle(randomArray))
    }, [randomArray])

    const handleGameFinish = useCallback(() => {
        setGameFinish(true)
    }, [])
    
    return(
        <>
            <Container
                source={require('../../../assets/png/background.png')}
            >

                <CountdownCircleTimer
                    size={100}
                    isPlaying
                    duration={999}
                    colors={[
                        ['#090979', 0.44],
                        ['#5C5CFF', 0.4],
                        ['#A30000', 0.16],
                    ]}
                    onComplete={handleGameFinish}
                >
                    {({ remainingTime, animatedColor }) => (
                        <Animated.Text style={{ color: animatedColor, fontSize: 32 }}>
                            {remainingTime}
                        </Animated.Text>
                    )}
                </CountdownCircleTimer>

                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 12 }}
                >
                    <View
                        style={{ alignItems: 'center' }}
                    >
                        <OuterCircle>
                            <InnerCircle>
                                <InfoText>3</InfoText>
                            </InnerCircle>
                        </OuterCircle>

                        <InfoText>Level</InfoText>
                    </View>
                    <View
                        style={{ alignItems: 'center' }}
                    >
                        <OuterCircle>
                            <InnerCircle>
                                <InfoText>12</InfoText>
                            </InnerCircle>
                        </OuterCircle>

                        <InfoText>Score</InfoText>
                    </View>
                </View>

                <CardSection level={props.level} >
                    {randomArray.map((item, index) => (
                        <Card key={index} level={props.level} />
                    ))}
                </CardSection>
            </Container>
            
            {gameFinish && ((win && <VictoryModal/>) || (!win && <DefeatModal/>))}
        </>
    )
}

export default Game