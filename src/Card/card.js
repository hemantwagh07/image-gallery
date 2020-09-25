import React from 'react'

export default function Card(props) {
    return (
        <div className="col-auto mb-3">
            <div className="card" style={{ width: 18 + 'rem' }}>
                <img className="card-img-top" alt={props.photographer.username} src={`https://robohash.org/${props.photographer.username}.png?size=180x180&set=set5`} />
                <div className="card-body">
                    <p className="card-text">{props.photographer.name}</p>
                </div>
            </div>
        </div>
    )
}
