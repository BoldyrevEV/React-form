import {
    SELECT_DAY,
    SELECT_MONTH,
    SELECT_FREQ,
    SELECT_TIME, 
    QUANT_UNLIM, 
    QUANT_COUNT, 
    QUANT_DATE,
    COUNT,
    DATE,
  } from './actionTypes'

export function onSelectDay(object) {
    return {
        type: SELECT_DAY, 
        payload: object,
    }
}

export function onSelectMonth(object) {
    return {
        type: SELECT_MONTH, 
        payload: object,
    }
}

export function onSelectFrequency(object) {
    return {
        type: SELECT_FREQ, 
        payload: object,
    }
}

export function onSelectTime(object) {
    return {
        type: SELECT_TIME, 
        payload: object,
    }
}

export function onSelectQuantUnlim(object) {
    return {
        type: QUANT_UNLIM, 
        payload: object,
    }
}

export function onSelectQuantCount(object) {
    return {
        type: QUANT_COUNT, 
        payload: object,
    }
}

export function onSelectQuantDate(object) {
    return {
        type: QUANT_DATE, 
        payload: object,
    }
}

export function onSelectCount(object) {
    return {
        type: COUNT, 
        payload: object,
    }
}

export function onSelectDate(object) {
    return {
        type: DATE, 
        payload: object,
    }
}