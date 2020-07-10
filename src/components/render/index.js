import React from 'react';
import { connect } from 'react-redux';

import Modal from '../modal';
import Card from '../card';
import RenderActions from '../../store/components/render/actions';

import './render.scss';

export const Render = ({ source, todo, inprogress, done, deleteCard }) => {
    let cards = [];
    let head = "To Do";
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
            });

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
            });

            head = "In Progress";

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
            });

            head = "Done";

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
            });
            
            break;
    }

    return (
        <React.Fragment>
            <span className="cards-content">
                <h3>{ head }</h3>
                <Modal source={source} />
            </span>
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
