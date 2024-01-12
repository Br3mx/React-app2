import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: {searchText}});
        setSearchText('');
    };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchText} onChange={e => setSearchText(e.target.value)}/>
            <Button>
                <span className='fa fa-search'></span>
            </Button>
        </form>
    );
};

export default SearchForm;