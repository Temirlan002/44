import styles from './DogCard.module.css'

const DogCard = ({image, title, rod}) => {

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{rod}</p>
        </div>
    )
}

export default DogCard