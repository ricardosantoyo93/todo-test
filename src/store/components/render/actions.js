import types from './action-types';

const addCard = (source, card) => {
    let type = types.TODO_ADD_CARD;
    if(source === 'inprogress') {
        type = types.INPROGRESS_ADD_CARD;
    }
    if(source === 'done') {
        type = types.DONE_ADD_CARD;
    }

    return {
        type,
        payload: {
            card
        }
    };
};

const deleteCard = (source, index) => {
    let type = types.TODO_DELETE_CARD;
    if(source === 'inprogress') {
        type = types.INPROGRESS_DELETE_CARD;
    }
    if(source === 'done') {
        type = types.DONE_DELETE_CARD;
    }

    return {
        type,
        payload: {
            index
        }
    };
};

const moveCard = (card, to, from, index) => {
    return (dispatch) => {
        dispatch(addCard(to, card));
        dispatch(deleteCard(from, index));
    }
};

export default { deleteCard, addCard, moveCard };
