import { observable, action } from 'mobx'
import { PORTRAIT } from './constants'

class Store {
    @observable orientation = PORTRAIT

    @action changeOrientation(orientation) {
        this.orientation = orientation
    }

    @action prevImage() {
        console.log('prev')
    }

    @action nextImage() {
        console.log('nxt')
    }
}

export default new Store()