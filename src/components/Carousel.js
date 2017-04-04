import React, { Component } from 'react'
import { inject, observer } from 'mobx-react/native'
import TouchableImage from './TouchableImage'

@inject('store') @observer
class Carousel extends Component {
    render() {
        const { image, store } = this.props
        return (
            <TouchableImage image={{link: "https://i.imgur.com/6cFNnJp.jpg",
                                   title: "Its my cake day, why am i happier about this then my real birthday, i will never know. First fav. Post"}} /> 
        )
    }
}

export default Carousel