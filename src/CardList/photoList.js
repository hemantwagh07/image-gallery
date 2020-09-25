import axios from 'axios';
import React, { Component } from 'react'
import Card from '../Card/card';

export default class photoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }
    componentDidMount = () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.id}`)
            .then(response => {
                // handle success
                this.setState({ photos: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.photos.map((photo) => (
                            <Card key={photo.id}
                                cardId={photo.id}
                                cardTitle={photo.title}
                                cardImage={photo.thumbnailUrl}
                                cardBody=''
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}
