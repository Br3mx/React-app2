import styles from './ColumnForm.module.scss';
import Button from '../Button/Button.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: {title, icon }});
        setTitle('');
        setIcon('');
    }
    return (
        <form className={styles.formColumns} onSubmit={handleSubmit}>
                <span className={styles.spanColumnForm}>Titile:</span>
                <input className={styles.columnForm} type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                <span className={styles.spanColumnForm}>Icon:</span>
                <input className={styles.columnForm} type="text" value={icon} onChange={e => setIcon(e.target.value)}></input>
                <Button>Add Column</Button>
            </form>
    );
};

export default ColumnForm;