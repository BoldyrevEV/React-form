import React from 'react'
import { connect } from 'react-redux'
import { 
    onSelectDay, 
    onSelectMonth, 
    onSelectFrequency, 
    onSelectTime, 
    onSelectQuantUnlim,
    onSelectQuantCount,
    onSelectQuantDate,
    onSelectCount,
    onSelectDate
} from '../../../store/Actions/form'
import FormComponent from './FormComponent'
import { weeklySelect, monthSelect } from '../../../constants/constants'

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,      
        };
    }

    modalWindow = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    addCount = event => {
        event.target.value = event.target.value.replace(/[^0-9]/g,'');
 
        if (+event.target.value === 0 && event.target.value !== '') {
            event.target.value = '1'
        }

        return this.props.onSelectCount({count: +event.target.value})
    }

    submitHandler = event => {
        event.preventDefault();
    }
     
    render() {
        const weeklyOptions = weeklySelect.map((elem, index) => {
            return  <option key={ index } value={ index === 6 ? index - 6 : index + 1 }>{ elem }</option> 
        });

        const monthOptions = monthSelect.map((elem, index) => {
            return  <option key={ index } value={ index + 1 }>{ elem }</option> 
        });
        
        const day = this.props.state.dateArr.map((elem, index) => {
            return <p key={ index } className="periodicity-text">{ elem }</p>
        })
       
        return (
            <FormComponent
                weeklyOptions={ weeklyOptions }
                monthOptions={ monthOptions }
                day={ day }
                submitHandler={ this.submitHandler }
                store={ this.props }
                addCount={ this.addCount }
                showModal={ this.state.showModal }
                modalWindow={ this.modalWindow }
            />            
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {       
        onSelectDay: object => dispatch(onSelectDay(object)),
        onSelectMonth: object => dispatch(onSelectMonth(object)),
        onSelectFrequency: object => dispatch(onSelectFrequency(object)),
        onSelectTime: object => dispatch(onSelectTime(object)),
        onSelectQuantUnlim: object => dispatch(onSelectQuantUnlim(object)),
        onSelectQuantCount: object => dispatch(onSelectQuantCount(object)),
        onSelectQuantDate: object => dispatch(onSelectQuantDate(object)),
        onSelectCount: object => dispatch(onSelectCount(object)),
        onSelectDate: object => dispatch(onSelectDate(object)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);