export const setUsers = (payload) => {
    return {
        type: "setUsers",
        payload: payload
    }
}

export const setSelectedUsers = (payload) => {
    return {
        type: "setSelectedUsers",
        payload: payload
    }
}

export const addUser = (payload) => {
    return {
        type: "addUser",
        payload: payload
    }
}

export const updateUser = (payload) => {
    return {
        type: "updateUser",
        payload: payload
    }
}

export const deleteUser = (payload) => {
    return {
        type: "deleteUser",
        payload: payload
    }
}