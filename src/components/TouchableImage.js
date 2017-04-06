import React, { Component } from 'react'
import { inject, observer } from 'mobx-react/native'
import { TouchableHighlight, Image, View, Text } from 'react-native'
import styles from './styles'

@inject('store') @observer
class TouchableImage extends Component {
    state = {
        width: null
    }

    onPress = (e) => {
        const { width } = this.state,
              { store } = this.props,
              X = e.nativeEvent.locationX
        if(X < width/2) {
            store.prevImage()
        } else {
            store.nextImage()
        }
    }
    onImageLayout = (e) => {
        this.setState({
            width: e.nativeEvent.layout.width
        })
    }
    get caption() {
        let { caption, image } = this.props
        return image.title || image.description || caption
    }
    render() {
        const { image, store, height } = this.props,
                                uri  = image.link.replace('http://','https://')
        return (
            <TouchableHighlight onPress={this.onPress} style={styles.fullscreen} >
                <Image source={{uri: uri}} 
                style={[styles.backgroundImage,
                               styles[store.orientation.toLowerCase()],
                               {height: height || null}
                               ]
                               } onLayout={this.onImageLayout} >
                    <Text style={styles.imageLabel}>
                        {this.caption}
                    </Text>
                </Image>
            </TouchableHighlight>
        )
    }
}

export default TouchableImage