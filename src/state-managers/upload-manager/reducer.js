
// export some constants 
export const UPLOAD = 'UPLOAD', UPLOAD_PENDING = 'UPLOAD_PENDING', UPLOAD_SUCCESS = 'UPLOAD_SUCCESS', UPLOAD_FAILED = 'UPLOAD_FAILED';
const initState = { // this is init state of form 1. return it by defaut
    loading: false,
    success: false,
    error: false
};
export const upload = (state = initState, action) => {
    const { type } = action; // destructure object 
    switch (type) {
        case UPLOAD_PENDING: // on request hit
            return {
                ...state,  // add these in it 
                loading: true,
                success: false,
                error: false
            }
        case UPLOAD_SUCCESS: // on response hit
            return {
                ...state,
                loading: false,
                success: true,
                error: false
            }
        case UPLOAD_FAILED:
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