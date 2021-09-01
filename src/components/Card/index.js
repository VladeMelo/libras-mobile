import React, { useCallback, useState, useRef } from 'react'
import { Image, TouchableWithoutFeedback , Animated, View } from 'react-native'
import { useRoute } from '@react-navigation/native';

import { Container } from './styles'

const Card = () => {
    const props = useRoute().params

    const opacityAnimation = useRef(new Animated.Value(1)).current
    const [isOpen, setIsOpen] = useState(false)

    const toggleisOpen = useCallback(() => {
        setIsOpen(!isOpen)
    }, [])

    const handlePress = useCallback(() => {
        if (!isOpen) {
            Animated.timing(
                opacityAnimation,
                {
                  toValue: 0,
                  duration: 1300,
                  useNativeDriver: false
                }
            ).start()
        }
    }, [isOpen, opacityAnimation])

    return(
        <View>
            <Animated.View
                style={{ 
                    width: props.level === 'easy' ? 80 : 68,
                    height: props.level === 'easy' ? 80 : 68,
                    marginBottom: props.level === 'easy' ? 20 : 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    backgroundColor: '#5C5CFF',
                    opacity: opacityAnimation,
                    zIndex: 1
                }} 
            >
                <Image
                    style={{ width: 70, height: 70 }}
                    source={require('../../../assets/png/question.png')}
                /> 
                <TouchableWithoutFeedback
                    onPress={handlePress}
                >
                    <View
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            
                        }}
                    ></View>
                </TouchableWithoutFeedback>
            </Animated.View>

            <Image
                style={{ width: 60, height: 60, position: 'absolute', top: 4 }}
                source={require('../../../assets/png/iconV.png')}
            /> 
        </View>
    )
}

export default Card