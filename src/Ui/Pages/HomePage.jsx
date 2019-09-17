import React from 'react'
import Form from '../Components/Form/FormContainer'
import Calendar from '../Components/Calendar/Calendar'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

import './HomePage.css'

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <Header />
                <p className="main-text">Форма для настройки повтора платежей</p>
                <div className="container">
                    <Form />
                    <Calendar />
                </div> 
                <Footer />
            </div>
        );
    }
}
