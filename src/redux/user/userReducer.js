import * as userTypes from "./userType";

const INITIAL_STATE = {
    token: null,
    user: {},
    isLoggedIn: false,
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.LOGIN:
            const { user, token } = action.payload;

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);

            return {
                ...state,
                user,
                token,
                isLoggedIn: true,
            };

        case userTypes.LOGOUT:
            localStorage.clear();
            return INITIAL_STATE;

        default:
            return state;
    }
}

export default userReducer;