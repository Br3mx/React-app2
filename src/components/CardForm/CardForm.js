import styles from './CardForm.module.scss';
import Button from '../Button/Button.js';
import { useState } from 'react';
import TextInput from './../TextInput/TextInput.js'

const CardForm = props => {
    const [title, setTitle] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
        setTitle('');
    }
    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
                <TextInput value={title} onChange={e => setTitle(e.target.value)} ></TextInput>
                <Button>Add Card</Button>
            </form>
    );
};

export default CardForm;