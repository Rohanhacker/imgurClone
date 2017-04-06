import React, { Component } from 'react'
import { inject, observer } from 'mobx-react/native'
import TouchableImage from './TouchableImage'

@inject('store') @observer
class Carousel extends Component {
    render() {
        const { image, store } = this.props
        if(!store.currentImage) {
            return null
        }
        return (
            <TouchableImage image={store.currentImage} /> 
        )
    }
}

export default Carousel