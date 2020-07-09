import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-materialize';

import Card from '../card';
import RenderActions from '../../store/components/render/actions';

export const Render = ({ source, todo, inprogress, done, deleteCard }) => {
    let cards = [];
    switch(source) {
        case 'todo':
            todo.map((card, index) => {
                const c = <Card 
                    key={index} 
                    index={index} 
                    card={card} 
                    source={source} 
                    delete={() => deleteCard(source, index)} />

                cards.push(c);
            })

            break;
        case 'inprogress':
            inprogress.map((card, index) => {
                const c = <Card 
                    key={index} 
                    index={index} 
                    card={card} 
                    source={source} 
                    delete={() => deleteCard(source, index)} />

                cards.push(c);
            })

            break;
        case 'done':
            done.map((card, index) => {
                const c = <Card 
                    key={index} 
                    index={index} 
                    card={card} 
                    source={source} 
                    delete={() => deleteCard(source, index)} />

                cards.push(c);
            })

            break;
        default:
            todo.map((card, index) => {
                const c = <Card 
                    key={index} 
                    index={index} 
                    card={card} 
                    source={source} 
                    delete={() => deleteCard(source, index)} />

                cards.push(c);
            })
            break;
    }

    return (
        <React.Fragment>
            <Button
                floating
                icon={<Icon>add</Icon>}
                small
                node="button"
                waves="light"
            />
            { cards }
        </React.Fragment>
    );
};

const mapStateToProps = ({ todo, inprogress, done }) => {
    return {
        todo,
        inprogress,
        done
    };
};

export default connect(mapStateToProps, RenderActions)(Render);
