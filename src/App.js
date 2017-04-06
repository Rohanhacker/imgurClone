import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider, observer } from 'mobx-react/native'
import  { LANDSCAPE, PORTRAIT } from './constants'
import Store from './store'
import Carousel from './components/Carousel'

@observer
class App extends Component {
    onLayout = (e) => {
        const { width, height } = e.nativeEvent.layout
        const orientation = ( width > height ) ? LANDSCAPE : PORTRAIT
        Store.changeOrientation(orientation)
    }
    componentWillMount() {
        Store.fetchImages()
    }
    render() {
        return (
            <Provider store={Store}>
                <View onLayout={this.onLayout} style={styles.container}>
                    <Carousel />
                </View>
            </Provider>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    }
});

export default App
