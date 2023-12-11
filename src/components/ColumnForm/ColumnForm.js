import styles from './ColumnForm.module.scss';
import Button from '../Button/Button.js';
import { useState } from 'react';

const ColumnForm = props => {
    const [title, setValue] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setValue('');
        setIcon('');
    }
    return (
        <form onSubmit={handleSubmit}>
                <span className={styles.spanColumnForm}>Titile:</span>
                <input className={styles.columnForm} type="text" value={title} onChange={e => setValue(e.target.value)}/>
                <span className={styles.spanColumnForm}>Icon:</span>
                <input className={styles.columnForm} type="text" value={icon} onChange={e => setIcon(e.target.value)}></input>
                <Button>Add Column</Button>
            </form>
    );
};

export default ColumnForm;