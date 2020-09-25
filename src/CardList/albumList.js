import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../Card/card';

export default class albumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }
    componentDidMount = () => {
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${this.props.match.params.id}`)
            .then(response => {
                // handle success
                this.setState({ albums: response.data });
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
                        this.state.albums.map((album) => (
                            <Link to={'/photos/album/' + album.id} key={album.id}>
                                <Card key={album.id}
                                    cardId={album.id}
                                    cardTitle={album.title}
                                    cardImage={`https://robohash.org/${album.title}.png?size=180x180&set=set4`}
                                    cardBody=''
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}
