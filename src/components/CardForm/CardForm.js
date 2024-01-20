import styles from './CardForm.module.scss';
import Button from '../Button/Button.js';
import { useState } from 'react';
import TextInput from './../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux.js'; 


const CardForm = ({ columnId }) => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard ({columnId, title }));
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