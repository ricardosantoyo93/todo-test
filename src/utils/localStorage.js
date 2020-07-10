/**
 * LocalStorage class meant for all the calls to localStorage in the app
 */
class LocalStorage {
    instance = null;

    constructor () {
        if(this.instance !== null) {
            return this.instance
        }

        this.instance = this;
        return this.instance;
    }

    saveCardsFromSource = (source, cards) => {
        this.setItem('_' + source, JSON.stringify(cards));
    }

    deleteCardsFromSource = (source) => {
        this.removeItem('_' + source);
    }

    getCardsFromSource = (source) => {
        const cards = this.getItem('_' + source);

        return cards;
    }

    setTodo = (cards) => {
        this.saveCardsFromSource('todo', cards);
    }

    // Getter for todo
    get todo() {
        const todo = JSON.parse(this.getItem('_todo'));

        return todo ? todo : [];
    }

    setInProgress = (cards) => {
        this.saveCardsFromSource('inprogress', cards);
    }

    // Getter for inprogress
    get inprogress() {
        const inprogress =  JSON.parse(this.getItem('_inprogress'));

        return inprogress ? inprogress : [];
    }

    setDone = (cards) => {
        this.saveCardsFromSource('done', cards);
    }

    // Getter for done
    get done() {
        const done =  JSON.parse(this.getItem('_done'));

        return done ? done : [];
    }

    // These methods are made to keep using the LocalStorage class instead of localStorage alone
    // In a way of 'extending' localStorage and keep using the same instance of the class
    setItem = (key = "", item = "") => {
        return localStorage.setItem(key, item)
    }

    removeItem = (key = "") => {
        return localStorage.removeItem(key);
    }

    getItem = (key = "") => {
        return localStorage.getItem(key);
    }
};

export default new LocalStorage();
