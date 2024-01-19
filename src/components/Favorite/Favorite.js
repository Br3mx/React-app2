import PageTitle from '../PageTitle/PageTitle.js';
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/store.js';
import { useSelector } from 'react-redux';
import Card from '../Card/Card.js';

const Favorite = () => {
    const cards = useSelector(state => getFavoriteCards(state));

    if(cards.length === 0) return <PageTitle>You didn't choose favorite cards...</PageTitle>
    return (
        <div className={styles.favoriteWrapper}>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.cardWrapper}>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} {...card} />)}
            </ul>
            </article>
        </div>
    )
}

export default Favorite;