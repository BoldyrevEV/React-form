import React from 'react'
import ModalWindow from '../ModalWindow/ModalWindow'
import EnterDateButton from '../Buttons/EnterDate/EnterDateButton'
import FormButton from '../Buttons/FormButton/FormButton'
import './Form.css'

const FormComponent = (props) => {
    return (
        <div className="form-block">
            <p className="form-block__main-text">Настройка повтора платежей</p>
            <form className="form" onSubmit={ props.submitHandler }>
                <div className="frequency">
                    <p className="headline">Частота</p>                      
                    <div className="frequency-container">
                        <div className="frequency-container__radio">
                            <input 
                                type="radio" 
                                className="frequency-container__switch"
                                name="radiobutton" 
                                defaultChecked={ props.store.state.selectedFrequency }
                                onClick={ () => props.store.onSelectFrequency({selectedFrequency: true}) }
                            /> 
                            <p className="frequency-container__text">еженедельно в</p>                              
                            <select 
                                className="frequency-container__select-day"
                                defaultValue={ props.store.state.selectedDay } 
                                onChange={ event => props.store.onSelectDay({selectedDay: +event.target.value}) }
                            >                               
                                { props.weeklyOptions }
                            </select>                             
                        </div>
                        <div className="frequency-container__radio">
                            <input 
                                type="radio" 
                                className="frequency-container__switch"
                                name="radiobutton" 
                                onClick={ () => props.store.onSelectFrequency({selectedFrequency: false}) }
                            /> 
                            <p className="frequency-container__text">ежемесячно</p>
                            <select
                                className="frequency-container__select-days"
                                defaultValue={ props.store.state.selectedMonth } 
                                onChange={ event => props.store.onSelectMonth({selectedMonth: +event.target.value}) }
                            >                               
                                { props.monthOptions }
                            </select>                                
                        </div>
                    </div>             
                </div>
                <EnterDateButton onClick={ () => props.modalWindow() }/>
                { props.showModal ? <ModalWindow showModal={props.modalWindow} /> : null } 
                <div className="time">
                    <p className="headline">Время</p>
                    <input 
                        className="time__input"
                        type="time" 
                        defaultValue={ props.store.state.selectedTime }
                        onChange={ event => props.store.onSelectTime({selectedTime: event.target.value}) }                           
                    />
                    <span className="time__text">(+3 utc, время московское)</span>
                </div>
                <div className="quantity">
                    <p className="headline">Количество</p>
                    <input 
                        className="quantity__switch"
                        type="radio" 
                        name="quantity"
                        defaultChecked={ props.store.state.quantityUnlimited }
                        onClick={ () => props.store.onSelectQuantUnlim({quantityUnlimited: true}) }
                    /> 
                    <p className="quantity__text">неограниченно</p>
                    <input 
                        className="quantity__switch"
                        type="radio" 
                        name="quantity" 
                        defaultChecked={ props.store.state.quantityCounter }                           
                        onClick={ () => props.store.onSelectQuantCount({quantityCounter: true}) }
                    /> 
                    <input 
                        className="quantity-count"
                        type="text"
                        maxLength="2"
                        defaultValue={ props.store.state.count }     
                        onChange={ event => props.addCount(event) }
                    /> 
                    <p className="quantity__text">раза</p>
                    <input 
                        className="quantity__switch"
                        type="radio" 
                        name="quantity" 
                        defaultChecked={ props.store.state.quantityDate }
                        onClick={ () => props.store.onSelectQuantDate({quantityDate: true}) }                           
                    /> 
                    <p className="quantity__text-date">до</p>
                    <input 
                        className="quantity-date"
                        type="date" 
                        defaultValue={ props.store.state.date } 
                        onChange={ event => props.store.onSelectDate({date: event.target.value}) }                            
                    /> 
                </div>
                <div className="periodicity">
                    <p className="headline">Сработает</p>
                    <div>
                        { props.day }
                    </div>                        
                </div>
                <FormButton />                    
            </form>
        </div>
    )
}

export default FormComponent;