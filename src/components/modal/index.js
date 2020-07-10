import React, { useState } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { 
    Modal as MModal, 
    Button, 
    Icon,
    TextInput,
    Textarea } from 'react-materialize';

import RenderActions from '../../store/components/render/actions';

export const Modal = ({ source, addCard }) => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();

    const handleSubmit = () => {
        const currentDate = new Date();
        const dd = currentDate.getDate();
        const mm = currentDate.getMonth() + 1;
        const yy = currentDate.getFullYear();
        const date = dd + "/" + mm + "/" + yy;

        if(title === undefined || title === "") {
            alert("Card should have a title");
            return;
        }

        if(desc === undefined || desc === "") {
            alert("Card should have a description");
            return;
        }

        const card = {
            title,
            date,
            content: desc
        };

        addCard(source, card);

        alert("Card added successfully");

        document.getElementById('modal-title-' + source).value = "";
        document.getElementById('modal-textarea-' + source).value = "";
        setTitle("");
        setDesc("");
    };

    return (
        <MModal
            actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
            ]}
            header="Add new card"
            id={"modal-card-" + source}
            open={false}
            trigger={<Button
                floating
                id={`modal-open-${source}`}
                icon={<Icon>add</Icon>}
                small
                node="button"
                waves="light"
            />}
        >
            <div>
                <TextInput id={"modal-title-" + source} onChange={e => setTitle(e.target.value)} label="Title" />
                <Textarea id={"modal-textarea-" + source} onChange={e => setDesc(e.target.value)} label="Description" />
                <Button id="modal-submit" type="button" onClick={handleSubmit}>Submit</Button>
            </div>
        </MModal>
    );
};

const mapStateToProps = () => {
    return {};
};

export default connect(mapStateToProps, RenderActions)(Modal);
