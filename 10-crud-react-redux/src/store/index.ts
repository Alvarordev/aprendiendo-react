import { type Middleware, configureStore } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser } from './users/slice'
import { toast } from "sonner";

const persistenceWithLocalStorage: Middleware = (store) => (next) => (action) => {
    next(action)
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()))
}

const syncWithDatabaseMiddleWare: Middleware = store => next => action => {
    const { type, payload } = action
    const previousState = store.getState() as RootState
    
    next(action)

    if(type === 'users/deleteUserById') { // <- eliminado un usuario
        const userIdToRemove = payload
        const userToRemove = previousState.users.find(user => user.id === userIdToRemove)

        fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
			method: 'DELETE'
		}).then(res => {
            if (res.ok) {
                toast.success(`Usuario ${payload} eliminado correctamente`)
            }
            throw new Error('Error al eliminar el usuario') // forzar el error
        }). catch(err => {
            toast.error(`Error deleting user ${userIdToRemove}`)
            if (userToRemove) store.dispatch(rollbackUser(userToRemove)) // Si hubo un error con la BD, hacer un rollback en la UI
            console.log(err)
            console.log('error')
        })
    }
}

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: [persistenceWithLocalStorage, syncWithDatabaseMiddleWare]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch