import React from 'react'
import PokemonListImg from '@/assets/pokemon-list-img.jpg';
import Image, { StaticImageData } from 'next/image';
import styles from './Card.module.css'
import classNames from 'classnames';

type ICardProps = {
    name: string,
    image?: StaticImageData,
    onClick: (name: string) => void
}

const Card: React.FC<ICardProps> = ({
    name,
    image,
    onClick
}) => {
    return (
        <div>
            <div className={classNames("card", styles["custom-card"])} style={{ width: "15rem" }}>
                <Image src={image ?? PokemonListImg} className="card-img-top h-50 p-1 rounded" alt="..." />
                <div className="card-body d-flex justify-content-between flex-column align-center">
                    <h5 className="card-title first-letter-capital">{name}</h5>
                    <button className="btn btn-warning" onClick={() => onClick(name)}>Details</button>
                </div>
            </div>
        </div>
    )
}

export default Card