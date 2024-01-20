import { useState } from "react"
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listsRedux.js";
import styles from "./ListForm.module.scss";
import Button from "../Button/Button.js";
import TextInput from "../TextInput/TextInput.js";


const ListForm = props => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description, listId: props.listId}));
        setTitle('');
        setDescription('');
    }
    return (
        <form className={styles.formList} onSubmit={handleSubmit}>
                <span className={styles.spanListForm}>Titile:</span>
                <TextInput value={title} onChange={e => setTitle(e.target.value)} ></TextInput>
                <span className={styles.spanListForm}>Description:</span>
                <TextInput value={description} onChange={e => setDescription(e.target.value)} ></TextInput>
                <Button>Add Column</Button>
            </form>
    );
}

export default ListForm;