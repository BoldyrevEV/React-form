import React from 'react'
import ModalWindowButton from '../Buttons/ModalWindowButton/ModalWindowButton'
import './ModalWindow.css'

export default class ModalWindow extends React.Component {
    globalClose = event => {
        if(event.target.classList.value === 'modalbackground') {
            return this.props.showModal();
        }
    }

    render() {
        return (
            <div className="modalbackground" onClick={ event=>this.globalClose(event) }>
                <section className="modalwindow">
                    <header className="modalwindow__header">Выберите дату</header>
                    <div className="modalwindow__btn-block">
                        <ModalWindowButton name="Выбрать" onClick={ this.props.showModal }/>
                        <ModalWindowButton name="Отмена" onClick={ this.props.showModal }/>
                    </div>
                </section>
            </div>
        )
    }
}
