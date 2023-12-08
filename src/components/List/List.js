import styles from './List.module.scss'
import Column from '../Column/Column.js';

const List = () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> d4da3cc5a80d87f98e5f70f121f677a44b11385a
            </section>
    </div>
        
    );
}

export default List;