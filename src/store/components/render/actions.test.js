import Actions from './actions';
import types from './action-types';

describe('Actions', () => {
    test('should add card', () => {
        const expectedAction = {
            type: types.TODO_ADD_CARD,
            payload: {
                card: []
            }
        }
        expect(Actions.addCard('todo', [])).toEqual(expectedAction);
    });

    test('should delete card', () => {
        const expectedAction = {
            type: types.TODO_DELETE_CARD,
            payload: {
                index: 10
            }
        }
        expect(Actions.deleteCard('todo', 10)).toEqual(expectedAction);
    });

    test('should return function when moving card', () => {
        expect(typeof Actions.moveCard([], 'todo', 'done', 10)).toBe('function');
    });
});
