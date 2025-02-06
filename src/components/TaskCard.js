import styles from './TaskCard.module.css'

const TaskCard = ({title, description, completed}) => {

    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <hr />
            <input className={styles.Aman} />
            <p>{description}</p>
            <div className={styles.buttons}>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default TaskCard;