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
                console.log(response.data);
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
            <div className="container mt-5">
                <h3>List of Photographer</h3>
                <p className="mb-4">Click on any to see related albums</p>
                <div className="row">
                    {
                        this.state.photographers.map((photographer) => (
                            <Link to={'/photographers/albums/' + photographer.id} key={photographer.id}>
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
