import React from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
    
    <Modal
    isOpen={props.isopen}
    contentLabel="Remove Expense"
    onRequestClose={props.isclose}
    closeTimeoutMS={200}
    className="modal"
    >

    <p>Are you sure you want to remove this option?</p>
    <div className="button--modal">
        <button onClick={props.confirmRemove} className="button">Confirm</button>
        <button onClick={props.isclose} className="button button--secondary">Cancel</button>
    </div>
    </Modal>

)

export default RemoveModal;