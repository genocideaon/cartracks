import React, {createContext, useReducer} from "react"

export const UserContext = createContext({})

const initialState = {
    userList: [],
    filterKeyword: ''
}

const userReducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                userList: action.payload
            }
        case "FILTER_USER":
            console.log(action.payload)
            return {
                ...state,
                filterKeyword: action.payload
            }
        default:
            return state;
    }
}

export const UserProvider = ({children}: any) => {
    const [userState, counterDispatch] = useReducer(
        userReducer,
        initialState
    )

    const {userList, filterKeyword} = userState
    const addUser = (payload: any) =>
        counterDispatch({type: "ADD_USER", payload})
    const filterUser = (payload: any) =>
        counterDispatch({type: "FILTER_USER", payload})

    return (
        <UserContext.Provider value={{userList, filterKeyword, addUser, filterUser}}>
            {children}
        </UserContext.Provider>
    )
}