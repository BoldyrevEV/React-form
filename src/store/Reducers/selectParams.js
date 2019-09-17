import { selectedDate, selectedMonth } from './dateController'

export let counter = 7;

/**
 * Выбор частоты страбатывания платежей.
 * @param {object} state - глобальный.
 * @param {object} object - передаваемый параметр и значение.
 * @return {object} copyState - новый обьект (копия state) с учетом object.
 */
export function selectFrequency(state, object) {
    let copyState = Object.assign({}, state);
    copyState.selectedFrequency = object.selectedFrequency;
    
    editDateArr(copyState);

    return copyState;
}

/**
 * Выбор частоты страбатывания платежей по дням недели.
 * @param {object} state - глобальный.
 * @param {object} object - передаваемый параметр и значение.
 * @return {object} copyState - новый обьект (копия state) с учетом object.
 */
export function selectDay(state, object) {
    let copyState = Object.assign({}, state);
    copyState.selectedDay = object.selectedDay;
    
    editDateArr(copyState);

    return copyState;
}

/**
 * Выбор частоты страбатывания платежей по дням месяца.
 * @param {object} state - глобальный.
 * @param {object} object - передаваемый параметр и значение.
 * @return {object} copyState - новый обьект (копия state) с учетом object.
 */
export function selectMonth(state, object) {
    let copyState = Object.assign({}, state);
    copyState.selectedMonth = object.selectedMonth;
    
    editDateArr(copyState);

    return copyState;
}

/**
 * Выбор времени срабатывания платежей.
 * @param {object} state - глобальный.
 * @param {object} object - передаваемый параметр и значение.
 * @return {object} copyState - новый обьект (копия state) с учетом object.
 */
export function selectTime(state, object) {
    let copyState = Object.assign({}, state);
    copyState.selectedTime = object.selectedTime;
    
    editDateArr(copyState);

    return copyState;
}

/**
 * Выбор количества - неограниченно (переключатель).
 * @param {object} state - глобальный.
 * @param {object} object - передаваемый параметр и значение.
 * @return {object} copyState - новый обьект (копия state) с учетом object.
 */
export function selectQuantUnlim(state, object) {
    let copyState = Object.assign({}, state);
    copyState.quantityUnlimited = object.quantityUnlimited;
    copyState.quantityCounter = false;
    copyState.quantityDate = false;

    editDateArr(copyState);

    return copyState;
}

/**
 * Выбор количества - счетчик (переключатель).
 * @param {object} state - глобальный.
 * @param {object} object - передаваемый параметр и значение.
 * @return {object} copyState - новый обьект (копия state) с учетом object.
 */
export function selectQuantCount(state, object) {
    let copyState = Object.assign({}, state);
    copyState.quantityUnlimited = false;
    copyState.quantityCounter = object.quantityCounter;
    copyState.quantityDate = false;

    editDateArr(copyState);

    return copyState;
}

/**
 * Выбор количества - до определенной даты (переключатель).
 * @param {object} state - глобальный.
 * @param {object} object - передаваемый параметр и значение.
 * @return {object} copyState - новый обьект (копия state) с учетом object.
 */
export function selectQuantDate(state, object) {
    let copyState = Object.assign({}, state);
    copyState.quantityUnlimited = false;
    copyState.quantityCounter = false;
    copyState.quantityDate = object.quantityDate;

    editDateArr(copyState);

    return copyState;
}

/**
 * Выбор значения переключателя счетчика.
 * @param {object} state - глобальный.
 * @param {object} object - передаваемый параметр и значение.
 * @return {object} copyState - новый обьект (копия state) с учетом object.
 */
export function selectCount(state, object) {
    let copyState = Object.assign({}, state);
    copyState.count = object.count;

    editDateArr(copyState);
   
    return copyState;
}

/**
 * Выбор значения ограничивающей даты.
 * @param {object} state - глобальный.
 * @param {object} object - передаваемый параметр и значение.
 * @return {object} copyState - новый обьект (копия state) с учетом object.
 */
export function selectDate(state, object) {
    let copyState = Object.assign({}, state);
    copyState.date = object.date;

    editDateArr(copyState);

    return copyState;
}

/**
 * Возвращает массив с датами.
 * @param {object} state - скопированный с глобального.
 * @return {Array} dateArr - массив с датами.
 */
function editDateArr(state) {
    counter = state.quantityCounter ? state.count : 7;
    state.dateArr = state.selectedFrequency ? 
        selectedDate(state, state.selectedDay) : 
        selectedMonth(state, state.selectedMonth);
  
    return state.dateArr;
}