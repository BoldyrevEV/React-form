import React from 'react'
import './EnterDateButton.css'

const EnterDateButton = (props) => {
    return (
        <button type="button" className="link-button" onClick={ props.onClick }>Выбрать даты</button>
    )
}

export default EnterDateButton;