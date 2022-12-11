
export enum Actions {
    "setTotalPrice",
    "setTotalQuantity"
}

export type InitialCartStateType = {
    totalPrice: number;
    totalQuantity: number;
};

export const initialCartState = {
    totalPrice: 0,
    totalQuantity: 0
};

export type CartActionType =
    | { type: Actions.setTotalPrice; payload: number }
    | { type: Actions.setTotalQuantity; payload: number };

export const cartReducer = (state: InitialCartStateType, action: CartActionType) => {
    switch (action.type) {
        case Actions.setTotalPrice:
            return {
                ...state,
                totalPrice: action.payload,
            };
        case Actions.setTotalQuantity:
            return {
                ...state,
                totalQuantity: action.payload,
            };
        default:
            return state;
    }
};

