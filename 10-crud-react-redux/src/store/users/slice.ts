import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export type UserId = string

export interface UserWithId extends User {
	id: UserId;
}

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Alvaro Rodriguez",
		email: "alvaro@gmail.com",
		github: "alvarordev",
	},
	{
		id: "2",
		name: "John Doe",
		email: "leo@gmail.com",
		github: "leo",
	},
	{
		id: "3",
		name: "Miguel Angel Duran",
		email: "midudev@gmail.com",
		github: "midudev",
	},
]

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID()
			state.push({id, ...action.payload})
		},

		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id)
		},

		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			//checo si el usuario ya se encuentra en el estado, si es asi no hago rollback porque ya esta ahi 😝
			const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
			if (!isUserAlreadyDefined) {
				state.push(action.payload)
			}
		}

	}
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions