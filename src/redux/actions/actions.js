import { types } from '../types/types'

export function asyncFunctionAction() {
    return function () {
        setTimeout(() => {
            alert('hello')
        }, 2000)
    }
}

export function fetchUsersAction() {
    return async function () {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
    }
}

export function catsAction(cats) {
    return {
        type: types.GET_CATS,
        payload: cats
    }
}

export function fetchCats() {
    return async function (dispatch) {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=100')
        const data = await response.json()
        dispatch(catsAction(data))
    }
}