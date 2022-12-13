import { ProductType } from "../../types";

export enum Actions {
    "setOrderedProduct",
    "setIsProductFormOpen",
    "setIsOrderFormOpen",
    "setRevalidateProducts",
    "setRevalidateOrders",
}

export type InitialProductStateType = {
    orderedProduct: {
        product: ProductType
        quantity: number
    };
    isProductFormOpen: boolean;
    isOrderFormOpen: boolean;
    revalidateProducts: boolean
    revalidateOrders: boolean
};

export const initialProductState = {
    orderedProduct: {
        product: {
            id: '',
            title: '',
            price: 0,
            image: ''
        },
        quantity: 1
    },
    isProductFormOpen: false,
    isOrderFormOpen: false,
    revalidateProducts: false,
    revalidateOrders: false
};

export type ProductActionType =
    | { type: Actions.setOrderedProduct; payload: InitialProductStateType['orderedProduct'] }
    | { type: Actions.setIsProductFormOpen; payload: InitialProductStateType['isProductFormOpen'] }
    | { type: Actions.setIsOrderFormOpen; payload: InitialProductStateType['isOrderFormOpen'] }
    | { type: Actions.setRevalidateProducts }
    | { type: Actions.setRevalidateOrders }

export const productReducer = (state: InitialProductStateType, action: ProductActionType) => {
    switch (action.type) {
        case Actions.setOrderedProduct:
            return {
                ...state,
                orderedProduct: action.payload,
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
        case Actions.setRevalidateProducts:
            return {
                ...state,
                revalidateProducts: !state.revalidateProducts,
            };
        case Actions.setRevalidateOrders:
            return {
                ...state,
                revalidateOrders: !state.revalidateOrders,
            };
        default:
            return state;
    }
};