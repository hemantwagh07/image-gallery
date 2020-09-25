import React from 'react'
import Card from '../Card/card'

export default function cardList(props) {
    console.log(props);
    return (
        <div className="container">
            <div className="row">
                {
                    props.photographers.map((photographer) => (
                        <Card key={photographer.id} photographer={photographer} />
                    ))
                }
            </div>
        </div>
    )
}
