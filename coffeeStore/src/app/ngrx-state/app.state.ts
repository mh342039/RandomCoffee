import { coffeeReducer } from "./coffee/coffee.reducer";
import { CoffeeState } from "./coffee/coffee.state";


export interface AppState {
    coffee: CoffeeState
}


export const appReducer = {
    coffee: coffeeReducer
}