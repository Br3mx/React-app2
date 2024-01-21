import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { CardToggleFavorite } from '../../redux/cardsRedux.js';
import { removeCard } from '../../redux/cardsRedux.js';


const Card = props => {
    const dispatch = useDispatch();

    const handleToggleFav = e => {
        e.preventDefault();
        dispatch(CardToggleFavorite(props.id));
    };
    const handleRemove = e => {
        e.preventDefault();
        dispatch(removeCard (props.id));
    }
    return (
        <li className={styles.card}>
            {props.title}
            <div>
            <button type="button" className={clsx(props.isFavorite && styles.fav)} onClick={handleToggleFav}>
                <i className='fa fa-star-o'></i>
            </button>
            <button type="button" onClick={handleRemove}>
                <i className='fa fa-trash'></i>
            </button>
            </div>
        </li>
    );
};

export default Card;