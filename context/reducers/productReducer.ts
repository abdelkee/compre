import { ProductType } from "../../types";

export enum Actions {
    "setOrderedProduct",
    "setEditMode",
    "setIsProductFormOpen",
    "setIsOrderFormOpen"
}

export type InitialProductStateType = {
    orderedProduct: {
        product: ProductType
        quantity: number
    } | null;
    editMode: boolean;
    isProductFormOpen: boolean;
    isOrderFormOpen: boolean;
};

export const initialProductState = {
    orderedProduct: null,
    editMode: false,
    isProductFormOpen: false,
    isOrderFormOpen: false
};

export type ProductActionType =
    | { type: Actions.setOrderedProduct; payload: InitialProductStateType['orderedProduct'] }
    | { type: Actions.setEditMode; payload: InitialProductStateType['editMode'] }
    | { type: Actions.setIsProductFormOpen; payload: InitialProductStateType['isProductFormOpen'] }
    | { type: Actions.setIsOrderFormOpen; payload: InitialProductStateType['isOrderFormOpen'] }

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
        case Actions.setIsProductFormOpen:
            return {
                ...state,
                isProductFormOpen: action.payload,
            };
        case Actions.setIsOrderFormOpen:
            return {
                ...state,
                isOrderFormOpen: action.payload,
            };
        default:
            return state;
    }
};

