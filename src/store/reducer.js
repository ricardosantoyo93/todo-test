import types from './components/render/action-types';

const ToDoReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case types.TODO_DELETE_CARD:
            const { index } = payload;
            const newState = [...state];
            newState.splice(index, 1);

            return [
                ...newState
            ];
        case types.TODO_ADD_CARD:
            const { card } = payload;
            
            return [
                ...state,
                card
            ];
        default:
            return state;
    }
};

const inProgressReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case types.INPROGRESS_DELETE_CARD:
            const { index } = payload;
            const newState = [...state];
            newState.splice(index, 1);

            return [
                ...newState
            ];
        case types.INPROGRESS_ADD_CARD:
            const { card } = payload;
            
            return [
                ...state,
                card
            ];
        default:
            return state;
    }
};

const DoneReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case types.DONE_DELETE_CARD:
            const { index } = payload;
            const newState = [...state];
            newState.splice(index, 1);

            return [
                ...newState
            ];
        case types.DONE_ADD_CARD:
            const { card } = payload;
            
            return [
                ...state,
                card
            ];
        default:
            return state;
    }
};

const reducer = (state = {}, action) => {
    return {
        todo: ToDoReducer(state.todo, action),
        inprogress: inProgressReducer(state.inprogress, action),
        done: DoneReducer(state.done, action)
    };
};

export default reducer;
