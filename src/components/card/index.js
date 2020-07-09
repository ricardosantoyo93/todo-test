import React from 'react';
import { Card as MCard, Button, Icon } from 'react-materialize';
import { connect } from 'react-redux';

import './card.scss';
import RenderActions from '../../store/components/render/actions';

export const Card = ({ source, index, card, moveCard, ...rest }) => {
    let btn1;
    let btn2;

    const { title, date, content } = card;

    if(source === 'todo') {
        btn2 = <a key="2" href="#" onClick={() => moveCard(card, "inprogress", source, index)}>Start Progress</a>;
    }
    if(source === 'inprogress') {
        btn1 = <a key="1" href="#" onClick={() => moveCard(card, "todo", source, index)}>Stop Progress</a>;
        btn2 = <a key="2" href="#" onClick={() => moveCard(card, "done", source, index)}>Finish Progress</a>
    }
    if(source === 'done') {
        btn1 = <a key="1" href="#" onClick={() => moveCard(card, "inprogress", source, index)}>Start Progress</a>;
    }

    const del = <Button
        className="delBtn"
        tooltip="Delete Card"
        key="3"
        floating
        icon={<Icon>close</Icon>}
        small
        node="button"
        waves="light"
        onClick={rest.delete}
    />

    return (
        <MCard
            actions={[
                btn1,
                btn2,
                del
            ]}
            className="blue-grey darken-1"
            textClassName="white-text"
            title={title}
          >
            <span className="date">{date}</span> {content}
          </MCard>
    );
};

const mapStateToProps = () => {
    return {};
}

export default connect(mapStateToProps, RenderActions)(Card);
