import { createReducer, on } from "@ngrx/store";
import { getCoffeeAction, getCoffeeActionSuccess } from "./coffee.actions";
import { initialState } from "./coffee.state";

const _coffeeReducer = createReducer(
    initialState,
    on(getCoffeeActionSuccess, (state, action) => {
        console.log("Reducer",action)
        return {
            ...state,
            coffeeList:  action.coffees
        }
    })
    )

export function coffeeReducer(state: any, action: any){
    return _coffeeReducer(state,action);
}