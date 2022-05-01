import { createAction, props } from "@ngrx/store";
import { Coffee } from "src/app/models/coffee.model";

export const GET_COFFEE_ACTION = '[Coffee Page] Get Coffee';
export const GET_COFFEE_SUCCESS_ACTION = '[Coffee Page] Get Coffee Success';
export const GET_COFFEE_FAILURE_ACTION = '[Coffee Page] Get Coffee Failure';

export const getCoffeeAction = createAction(GET_COFFEE_ACTION);
export const getCoffeeActionSuccess = createAction(GET_COFFEE_SUCCESS_ACTION,
    props<{ coffees: Coffee[]}>());
export const getCoffeeActionFailure = createAction(GET_COFFEE_FAILURE_ACTION);