import React from 'react'
import './ModalWindowButton.css'

const ModalWindowButton = (props) => {
    return (
        <button className="modalwindow__btn" onClick={ props.onClick }>{ props.name }</button>
    )
}

export default ModalWindowButton;