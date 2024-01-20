import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { CardToggleFavorite } from '../../redux/cardsRedux.js';

const Card = props => {
    const dispatch = useDispatch();

    const handleToggleFav = e => {
        e.preventDefault();
        dispatch(CardToggleFavorite(props.id));
    };
    return (
        <li className={styles.card}>
            {props.title}
        <button type="button" className={clsx(props.isFavorite && styles.fav)} onClick={handleToggleFav}>
            <i className='fa fa-star-o'></i>
        </button>
        </li>
    );
};

export default Card;