import * as actions from '../actions';

const initialState = {
    box: null,
    space: null,
    account: null,
    threeBoxProfile: null
}

const ThreeBoxReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.THREE_BOX_CONNECT:
            return {
                ...state,
                box: action.box,
                space: action.space,
                account: action.account,
                threeBoxProfile: action.threeBoxProfile
            }
        default:
            return state;
    }
}
export default ThreeBoxReducer;