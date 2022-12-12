
export enum Actions {
    "setIsItemFormOpen",
    "setRevalidateItemPills"
}

export type InitialListStateType = {
    isItemFormOpen: boolean;
    revalidateItemPills: boolean
};

export const initialListState = {
    isItemFormOpen: false,
    revalidateItemPills: false
};

export type ListActionType =
    | { type: Actions.setIsItemFormOpen; payload: InitialListStateType['isItemFormOpen'] }
    | { type: Actions.setRevalidateItemPills }

export const listReducer = (state: InitialListStateType, action: ListActionType) => {
    switch (action.type) {
        case Actions.setIsItemFormOpen:
            return {
                ...state,
                isItemFormOpen: action.payload,
            };
        case Actions.setRevalidateItemPills:
            return {
                ...state,
                revalidateItemPills: !state.revalidateItemPills,
            };
        default:
            return state;
    }
};

