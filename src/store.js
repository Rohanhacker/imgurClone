import { observable, action, computed } from 'mobx'
import { PORTRAIT, CLIENT_ID } from './constants'
import fetch from 'better-fetch'

fetch.setDefaultHeaders({
    Authorization: `Client-ID ${CLIENT_ID}`
})

const URL = 'https://api.imgur.com/3/'


class Store {
    @observable images = []
    @observable orientation = PORTRAIT
    @observable index = 0
    @observable galleryPage = 0
    @observable albums = new observable.map()
    @observable screenSize = {
        width: null,
        height: null
    }

    @action updateScreenSize(width, height) {
        this.screenSize.width = width
        this.screenSize.height = height
    }

    @action changeOrientation(orientation) {
        this.orientation = orientation
    }

    @action prevImage() {
        console.log('prev')
        this.index = this.index - 1
        if(this.index < 1) {
            this.index = 0
        }
    }

    @action nextImage() {
        console.log('nxt')
        this.index = this.index + 1
        if( this.index > this.images.length) {
            this.galleryPage = this.galleryPage + 1
            this.fetchImages()
        }
    }

    @computed get currentImage() {
        return this.images.length ? this.images[this.index] : null
    }

    @action fetchImages() {
        fetch(`${URL}gallery/hot/viral/${this.galleryPage}`)
            .then(fetch.throwErrors)
            .then(res => res.json())
            .then(json => {
                json.data.forEach(img => this.images.push(img))
            })
            .catch(err => console.log(err.message))
    }

    @action fetchAlbum(id) {
        if ( !this.albums.has(id)) {
            fetch(`${URL}album/${id}`)
                .then(fetch.throwErrors)
                .then(res => res.json())
                .then(json => {
                    this.albums.set(json.data.id,json.data)
                })
                .catch(err => console.log(err))
        }
    }
}

export default new Store()