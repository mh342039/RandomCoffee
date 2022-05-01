import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoffeeState } from "./coffee.state";


//const getCoffeeState = createFeatureSelector<CoffeeState>('coffee');
const getCoffeeState = createFeatureSelector<CoffeeState>('coffee');

export const getCoffee = createSelector(getCoffeeState, state => {
    return state.coffeeList
})