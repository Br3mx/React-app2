import styles from './List.module.scss'
import Column from '../Column/Column.js';

const List = () => {
    return (
    <div className={styles.list}>
        <header className={styles.header}>
            <h2 className={styles.title}>THINGS TO DO<span>SOON!</span></h2>
        </header>
            <p className={styles.description}>Interesting things i want to check out!</p>
            <section className={styles.columns}>
                <Column icon="book" text="Books"/>
                <Column icon="gamepad" text="Movies"/>
                <Column icon="film" text="Games"/>
            </section>
    </div>
        
    );
}

export default List;