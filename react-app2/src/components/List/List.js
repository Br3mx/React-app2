import styles from './List.module.scss'

const List = () => {
    return (
    <div className={styles.list}>
        <header className={styles.header}>
            <h2 className={styles.title}>THINGS TO DO<span>SOON!</span></h2>
        </header>
            <p className={styles.description}>Interesting things i want to check out!</p>
            <section className={styles.columns}>
                <article>
                    <h3>Books</h3>
                </article>

                <article>
                    <h3>Movies</h3>
                </article>

                <article>
                <   h3>Games</h3>
                </article>
            </section>
    </div>
        
    );
}

export default List;