import styles from './List.module.scss'
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { useState } from 'react';
import shortid from 'shortid';

const List = () => {
    const [columns, setColumns] = useState([
      { 
        id: 1, 
        title: 'Books', 
        icon: 'book',
        cards: [
            { id: 1, title: 'This is Going to Hurt'},
            { id: 2, title: 'Interpreter of Maladies'}
        ]
    },
      { 
        id: 2, 
        title: 'Movies', 
        icon: 'film',
        cards: [
            { id: 1, title: 'Harry Potter' },
            { id: 2, title: 'Star Wars' }
        ] 
    },
      { id: 3, 
        title: 'Games', 
        icon: 'gamepad',
        cards: [
            { id: 1, title: 'The Witcher' },
            { id: 2, title: 'Skyrim' }
        ]
    }
    ]);
    const addColumn = newColumn => {
        setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
    };
    return (
    <div className={styles.list}>
        <header className={styles.header}>
            <h2 className={styles.title}>THINGS TO DO<span>SOON!</span></h2>
        </header>
            <p className={styles.description}>Interesting things i want to check out!</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} cards={column.cards} ></Column>)}

            </section>
            <ColumnForm action={addColumn}></ColumnForm>
    </div>
        
    );
    
}


export default List;