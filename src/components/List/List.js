import styles from './List.module.scss'
import Column from '../Column/Column.js';

const List = () => {
    const columns = [
        { id: 1, title: 'Books', icon: 'book'},
        { id: 2, title: 'Movies', icon: 'film'},
        { id: 3, title: 'Games', icon: 'gamepad'},
    ];
    return (
    <div className={styles.list}>
        <header className={styles.header}>
            <h2 className={styles.title}>THINGS DO<span>SOON!</span></h2>
        </header>
            <p className={styles.description}>Interesting things i want to check out!</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon}></Column>)}
            </section>
    </div>
        
    );
}

export default List;