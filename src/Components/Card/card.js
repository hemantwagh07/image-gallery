import React from 'react'

export default function Card({ cardId, cardTitle, cardImage, cardBody }) {
    return (
        <div className="col-auto mb-3">
            <div className="card">
                <img className="card-img-top" alt={cardId} src={cardImage} />
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardBody}</p>
                </div>
            </div>
        </div>
    )
}
