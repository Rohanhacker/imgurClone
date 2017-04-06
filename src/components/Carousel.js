import React, { Component } from 'react'
import { inject, observer } from 'mobx-react/native'
import TouchableImage from './TouchableImage'
import Album from './Album'
import { Spinner } from './Spiner'

@inject('store') @observer
class Carousel extends Component {
    render() {
        const { image, store } = this.props
        if(!store.currentImage) {
            return <Spinner />
        }
        if(store.currentImage.is_album) {
            return (
                <Album albumID={store.currentImage.id} />
            )
        } else {
            return (
                <TouchableImage image={store.currentImage} /> 
            )
        }
    }
}

export default Carousel