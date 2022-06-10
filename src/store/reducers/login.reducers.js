

const initialState = {
    data: null,
    token: null,
    autenticado: 'checking',
    errorMsg: null,
    loading: false
}

const LoginReducer = (state = initialState, action) => {

    // switch (action.type) {
    //     case SIGN_IN:
    //         return {
    //             ...state,
    //             data:action.payload,
    //             token:action.token,
    //             autenticado: 'autorizado'

    //         }
        
    
    //     default:
    //         break;
    // }


    return state
}


export default LoginReducer