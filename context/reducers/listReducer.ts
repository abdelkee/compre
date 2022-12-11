
export enum Actions {
    "setIsItemFormOpen"
}

export type InitialListStateType = {
    isItemFormOpen: boolean;
};

export const initialListState = {
    isItemFormOpen: false,
};

export type ListActionType =
    | { type: Actions.setIsItemFormOpen; payload: InitialListStateType['isItemFormOpen'] }

export const listReducer = (state: InitialListStateType, action: ListActionType) => {
    switch (action.type) {
        case Actions.setIsItemFormOpen:
            return {
                ...state,
                isItemFormOpen: action.payload,
            };
        default:
            return state;
    }
};

