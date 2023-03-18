import React from 'react';
import './Modal.css';


const Modal = (
    // onClose is a function that will be called when the user clicks the cancel button
    { onClose, isOpen }
) => {
    return (
        // change className to blur if isOpen is true
        <div className='modal'>
            <div className='modal-header'>
                {/* create two buttons confirm/cancel */}
                <div className='modal-title'>Are you sure?</div>

                <button className='button'
                    onClick={onClose}
                >Confirm</button>
                <button
                    onClick={onClose}
                    className='button'>Cancel</button>
            </div>
        </div>
    );
}

export default Modal;