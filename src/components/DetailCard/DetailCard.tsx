/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './DetailCard.module.css'
import classNames from 'classnames'

interface IDetailCardProps {
    image?: string,
    name?: string,
    types?: string,
    moves?: string,
    height?: number,
    weight?: number
}

const DetailCard: React.FC<IDetailCardProps> = ({
    image,
    name,
    types,
    moves,
    height,
    weight
}) => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-12">
                    <div className={classNames("card", styles["responsive-flex"])}>
                        <img src={image} className="card-img-top" alt={name} />
                        <div className="card-body w-100">
                            <h5 className="card-title first-letter-capital">{name}</h5>
                            <p className="card-text"><strong>Type:</strong> {types}</p>
                            <p className="card-text"><strong>Abilities:</strong> {moves}</p>
                            <p className="card-text"><strong>Height:</strong> {height} m</p>
                            <p className="card-text"><strong>Weight:</strong> {weight} kg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard