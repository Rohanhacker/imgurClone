import React from 'react'
import {View, Image} from 'react-native'
import styles from './styles'


export const Spinner = () => (
    <View style={[styles.fullscreen, styles.centered]}>
        <Image source={require('./animal.gif')}
               style={{width: 100, height: 100}} />
    </View>
)