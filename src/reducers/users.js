let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setUsers":
            return { ...state, [action.payload.name]: action.payload.value }
        case "setSelectedUsers":
            return { ...state, [action.payload.name]: action.payload.value }
        case "addUser":
            return {
                ...state,
                users: [...state.users, { id: state.users.length ? state.users[state.users.length - 1].id + 1 : 1, ...action.payload.value }]
            }
        case "updateUser":
            let user = state.users.find(user => user.id === action.payload.value.id);
            state.users[state.users.indexOf(user)] = action.payload.value
            return {
                ...state,
                users: [...state.users]
            }
        case "deleteUser":
            let userInfo = state.users.find(user => user.id === action.payload.value.id);
            state.users.splice(state.users.indexOf(userInfo), 1);
            return {
                ...state,
                users: [...state.users]
            }
        default:
            return {
                ...state
            };
    }
}

export default usersReducer;