import { ProductType } from "../../types";

export enum Actions {
    "setOrderedProduct",
    "setEditMode",
}

export type InitialStateType = {
    orderedProduct: ProductType | null;
    editMode: boolean;
};

export const initialState = {
    orderedProduct: null,
    editMode: false,
};

export type ActionType =
    | { type: Actions.setOrderedProduct; payload: ProductType }
    | { type: Actions.setEditMode; payload: boolean };

export const productReducer = (state: InitialStateType, action: ActionType) => {
    switch (action.type) {
        case Actions.setOrderedProduct:
            return {
                ...state,
                orderedProduct: action.payload,
            };
        case Actions.setEditMode:
            return {
                ...state,
                editMode: action.payload,
            };
        default:
            return state;
    }
};

