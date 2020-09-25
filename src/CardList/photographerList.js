import React, { Component } from 'react'
import Card from '../Card/card'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class photographerList extends Component {
    constructor() {
        super();

        this.state = {
            photographers: []
        }
    }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // handle success
                //console.log(response.data);
                this.setState({ photographers: response.data });
                //this.getproducts('', response.data[0].id)
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
                        this.state.photographers.map((photographer) => (
                            <Link to={'/albums/photographer/' + photographer.id} key={photographer.id}>
                                <Card key={photographer.id}
                                    cardId={photographer.id}
                                    cardTitle={photographer.name}
                                    cardImage={`https://robohash.org/${photographer.username}.png?size=180x180&set=set5`}
                                    cardBody={`Email : ${photographer.email}`}
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}
