
// export some constants 
export const LOGIN = 'Login', LOGIN_PENDING = 'LOGIN_PENDING', LOGIN_SUCCESS = 'LOGIN_SUCCESS', LOGIN_FAILED = 'LOGIN_FAILED';
const initState = { // this is init state of form 1. return it by defaut
    loading: false,
    success: false,
    error: false
};
export const login = (state = initState, action) => {
    const { type } = action; // destructure object '
    switch (type) {
        case LOGIN_PENDING: // on request hit
            return {
                ...state,  // add these in it 
                loading: true,
                success: false,
                error: false
            }
        case LOGIN_SUCCESS: // on response hit
            return {
                ...state,
                loading: false,
                success: true,
                error: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                error: true
            } 
        default:
            return state;
    } 
};