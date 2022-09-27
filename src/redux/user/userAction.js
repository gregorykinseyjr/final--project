import * as userTypes from "./userType";

export const actionLogin = (user, token) => {
    return {
        type: userTypes.LOGIN,
        payload: { user, token },
    };
};

export const actionLogout = () => {
    return {
        type: userTypes.LOGOUT,
    };
};
