import { 
    SELECT_DAY, SELECT_MONTH, SELECT_FREQ, SELECT_TIME, 
    QUANT_UNLIM, QUANT_COUNT, QUANT_DATE, COUNT, DATE, 
} from '../Actions/actionTypes'
import {
    selectFrequency, selectDay, selectMonth, selectTime, selectQuantUnlim,          
    selectQuantCount, selectQuantDate, selectCount, selectDate,
} from './selectParams'
import { selectedDate } from './dateController'

const initialState = {
    selectedFrequency: true,
    selectedDay: 1,
    selectedMonth: 1,
    selectedTime: '00:00',
    quantityUnlimited: true,
    quantityCounter: false,
    quantityDate:false,
    count: 1,
    date: '2020-01-20',
    dateArr: [],
};

initialState.dateArr = selectedDate(initialState, initialState.selectedDay);

export default function rootReduсer(state=initialState, action) {
    switch (action.type) {
        case SELECT_FREQ:
            return selectFrequency(state, action.payload);            
        case SELECT_DAY:           
            return selectDay(state, action.payload);
        case SELECT_MONTH:           
            return selectMonth(state, action.payload);
        case SELECT_TIME:           
            return selectTime(state, action.payload);
        case QUANT_UNLIM:           
            return selectQuantUnlim(state, action.payload);
        case QUANT_COUNT:           
            return selectQuantCount(state, action.payload);
        case QUANT_DATE:           
            return selectQuantDate(state, action.payload);
        case COUNT:           
            return selectCount(state, action.payload);
        case DATE:           
            return selectDate(state, action.payload);
        default:
            return state;
    }  
}