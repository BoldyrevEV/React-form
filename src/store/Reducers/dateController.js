import { dateOptions } from '../../constants/constants'
import { counter } from './selectParams'

/**
 * Возвращает массив из дней недели (максимум 6 результатов). 
 * @param {object} state - глобальный. 
 * @param {number} day - номер дня недели из глобального state.
 * @return {Array} arr - массив с датами.
 */
export function selectedDate(state, day) {
    let arr = [];       
    const time = state.selectedTime.length === 5 ? ` в ${state.selectedTime}` : '';

    for (let i = 0 ; i < counter * 7; i = i + 7) {
        const today = new Date ();
        const minuteTime = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes(); 
        const comparisonTime = +time.replace(/[^0-9]/g,'') > (+`${today.getHours()}${minuteTime}`);
        
        const first = getFirstDay(day, comparisonTime);
        const compQuantDate = state.quantityDate && daysComparison(state, first + i, state.selectedTime);
        const compCurrLength = arr.length > 0 && arr.length < 6;
        
        if ((arr.length < 1 && !state.quantityDate) || (arr.length < 1 && compQuantDate)) {
            arr.push(new Date(today.setDate(first + i)).toLocaleString("ru", dateOptions) + time);
        } else if ((compCurrLength && !state.quantityDate) || (compCurrLength && compQuantDate)) {
            arr.push(new Date(today.setDate(first + i)).toLocaleString("ru", dateOptions));
        } else if ((arr.length >= 6 && !state.quantityDate) || (arr.length >= 6 && compQuantDate)) {
            arr.pop();
            arr.push('-//-//-//-');
    
            return arr;            
        } else {
            return arr;
        }                      
    } 

    return arr;
}

/**
 * Возвращает массив из дней месяца (максимум 6 результатов). 
 * @param {object} state - глобальный. 
 * @param {number} day - номер дня недели из глобального state.
 * @return {Array} arr - массив с датами.
 */
export function selectedMonth(state, day) {
    let arr = [];  
    const time = state.selectedTime.length === 5 ? ` в ${state.selectedTime}` : '';   
    const today = new Date();        
    const minuteTime = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes(); 
    const comparisonTime = +time.replace(/[^0-9]/g,'') > (+`${today.getHours()}${minuteTime}`);

    if ((day === today.getDate() && comparisonTime) || today.getDate() < day) {
        arr = numberGreaterToday(state, day, time);
    } else {
        arr = numberNoGreaterToday(state, day, time);
    }

    return arr;
}

/**
 * Сравнивает дату из глобального state с днем day. 
 * @param {object} state - глобальный.
 * @param {number} day - день от начала текущего месяца.
 * @param {string} time - установленное время.
 * @return {boolean} результат сравнения дат.
 */
function daysComparison(state, day, time) {
    const hours = +(time[0] + time[1]);
    const minutes = +(time[3] + time[4]);
    const date = new Date(new Date().setDate(day));
    const dateHours = new Date(date.setHours(hours + 3, minutes, -1))
   
    return new Date(state.date) >= dateHours;
}

/**
 * Определяет номер дня отсчета. 
 * @param {number} day - день от начала текущего месяца.
 * @param {boolean} comparisonTime - сравнение текущего времени и переданного времени.
 * @return {number} номер дня отсчета.
 */
function getFirstDay(day, comparisonTime) {
    if ((new Date().getDay() === day && comparisonTime) || new Date().getDay() < day) {
        return new Date().getDate() - new Date().getDay() + day;
    } else {
        return new Date().getDate() - new Date().getDay() + day + 7;
    }
}

/**
 * Сравнивает устновленную в форме с датой в глобальном state
 * и наличие пеключателя с устновкой даты.
 * @param {object} state - глобальный.
 * @param {number} i - счетчик цикла.
 * @param {number} day - установленный день месяца. 
 * @return {boolean} результат сравнения.
 */
function dateComparison(state, i, day) {
    const todayYear = new Date().getFullYear();
    const currMonth = new Date().getMonth() + i;

    return state.quantityDate && new Date(state.date) > new Date(todayYear, currMonth, day);
}

/**
 * Возвращает массив с датами по месяцам при условии,
 * что установленная дата больше текущей даты.
 * @param {object} state - глобальный.
 * @param {number} day - установленный день месяца. 
 * @param {string} time - добавляемое время к первому элементу массива с датами. 
 * @return {Array} arr - массив с датами.
 */
function numberGreaterToday(state, day, time) {
    let arr = []; 

    for (let i = 0; i < counter; i++) {
        const compCurrLength = arr.length > 0 && arr.length < 6;

        if ((arr.length < 1 && !state.quantityDate) || 
            (arr.length < 1 && dateComparison(state, i, day))) {
                arr.push(dateCheckWithTime(i, day, time)); 
        } else if ((compCurrLength && !state.quantityDate) || 
            (compCurrLength && dateComparison(state, i, day))) {
                arr.push(dateCheckWithOutTime(i, day));
        } else if ((arr.length >= 6 && !state.quantityDate) || 
            (arr.length >= 6 && dateComparison(state, i, day))) {
                arr.pop();
                arr.push('-//-//-//-');
    
                return arr;
        } else {
            return arr;
        }   
    }
    
    return arr;
}

/**
 * Возвращает массив с датами по месяцам при условии,
 * что установленная дата не больше текущей даты.
 * @param {object} state - глобальный.
 * @param {number} day - установленный день месяца. 
 * @param {string} time - добавляемое время к первому элементу массива с датами. 
 * @return {Array} arr - массив с датами.
 */
function numberNoGreaterToday(state, day, time) {
    let arr = []; 

    for (let i = 1; i <= counter; i++) {
        const compCurrLength = arr.length > 0 && arr.length < 6;
       
        if ((arr.length < 1 && !state.quantityDate) || 
            (arr.length < 1 && dateComparison(state, i, day))) {          
                arr.push(dateCheckWithTime(i, day, time));
        } else if ((compCurrLength && !state.quantityDate) || 
            (compCurrLength && dateComparison(state, i, day))) {
                arr.push(dateCheckWithOutTime(i, day));
        } else if ((arr.length >= 6 && !state.quantityDate) || 
            (arr.length >= 6 && dateComparison(state, i, day))) {
                arr.pop();
                arr.push('-//-//-//-');
        
                return arr;
        } else {
            return arr;
        }         
    } 

    return arr;
}

/**
 * Возвращает первый элемент с подстановкой времени для массива дат.
 * В функции используется проверка на количество дней в месяце, если дней меньше 
 * установленного в форме числа, то отоброжается последний день месяца.
 * @param {number} i - счетчик цикла.
 * @param {number} day - установленный день месяца. 
 * @param {string} time - добавляемое время к первому элементу массива с датами. 
 * @return {string} дата с подстановкой времени.
 */
function dateCheckWithTime(i, day, time) {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();

    if (getСompareDays(todayYear, todayMonth + 1 + i, day)) {
        const newDate = new Date(todayYear, todayMonth + i, day);

        return newDate.toLocaleString("ru", dateOptions) + time;
    } else {
        const quantityDays = getQuantityDaysInMonth(todayYear, todayMonth + 1 + i);
        const newDate = new Date(todayYear, todayMonth + i, quantityDays);

        return newDate.toLocaleString("ru", dateOptions) + time;
    }  
}

/**
 * Возвращает элемент (с 1 по 6) для массива дат.
 * В функции используется проверка на количество дней в месяце, если дней меньше 
 * установленного в форме числа, то отоброжается последний день месяца.
 * @param {number} i - счетчик цикла.
 * @param {number} day - установленный день месяца. 
 * @return {string} дата.
 */
function dateCheckWithOutTime(i, day) {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();

    if (getСompareDays(todayYear, todayMonth + 1 + i, day)) {
        const newDate = new Date(todayYear, todayMonth + i, day);

        return newDate.toLocaleString("ru", dateOptions);
    } else {
        const quantityDays = getQuantityDaysInMonth(todayYear, todayMonth + 1 + i);
        const newDate = new Date(todayYear, todayMonth + i, quantityDays);

        return newDate.toLocaleString("ru", dateOptions);
    }   
}

/**
 * Сравнивает номер передаваемого дня с последним днем месяца.
 * @param {number} year - год. 
 * @param {number} month - месяца. 
 * @param {number} day - установленный день. 
 * @return {boolean} .
 */
function getСompareDays(year, month, day) {
    return day <= getQuantityDaysInMonth(year, month) ? true : false;
}

/**
 * Определяет количество деней в месяцt.
 * @param {number} year - год. 
 * @param {number} month - месяца. 
 * @return {number} количество деней.
 */
function getQuantityDaysInMonth(year, month) {  
    return new Date(year, month, 0).getDate();     
}