import { ProductType } from "../../types";

export enum Actions {
    "setOrderedProduct",
    "setEditMode",
}

export type InitialProductStateType = {
    orderedProduct: ProductType | null;
    editMode: boolean;
};

export const initialProductState = {
    orderedProduct: null,
    editMode: false,
};

export type ProductActionType =
    | { type: Actions.setOrderedProduct; payload: ProductType }
    | { type: Actions.setEditMode; payload: boolean };

export const productReducer = (state: InitialProductStateType, action: ProductActionType) => {
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

