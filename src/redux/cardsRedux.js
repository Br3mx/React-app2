import shortid from "shortid";
import strContains from "../utils/strContains.js";

// selectors 
export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite === true);
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const REMOVE_CARD = createActionName('REMOVE_CARD');
const  CARD_TOGGLE_FAVORITE = createActionName('CARD_TOGGLE_FAVORITE');
// action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload});
export const CardToggleFavorite = payload => ({ type: CARD_TOGGLE_FAVORITE, payload});

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case REMOVE_CARD:
        return statePart.filter((card) => card.id !== action.payload);
      case CARD_TOGGLE_FAVORITE:
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      default:
        return statePart;
    }
  }

export default cardsReducer;