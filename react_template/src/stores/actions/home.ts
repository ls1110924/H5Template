import { createActions } from 'redux-actions'

export const HOME_ACTIONS = createActions({
    modifyName: (name) => {
        return { name }
    },
    updateName: (name) => {
        return { name }
    }
}, { prefix: 'home' })