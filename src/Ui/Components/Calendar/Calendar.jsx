import React from 'react'
import ModalWindow from '../ModalWindow/ModalWindow'
import EnterDateButton from '../Buttons/EnterDate/EnterDateButton'
import './Calendar.css'

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
        }
    }
    
    modalWindow = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    render() {
        return (
            <div className="calendar">
                <EnterDateButton onClick={ () => this.modalWindow() }/>
                <p className="calendar__content">Здесь будет календарь</p>
                { this.state.showModal ? <ModalWindow showModal={this.modalWindow} /> : null }
            </div>
        );
    }
}
