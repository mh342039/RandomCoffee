import { Coffee } from "../../models/coffee.model"

export interface CoffeeState {
    coffeeList?: Coffee[];
}

export const initialState: CoffeeState = {
    coffeeList: [
        {"id":5810,"uid":"bfa49f48-d824-4fb4-802f-ffaa76e362d3","blend_name":"Spilt Bean","origin":"Kisii, Kenya","variety":"Gesha","notes":"dense, full, white pepper, banana, lavender","intensifier":"vibrant"},
        {"id":7881,"uid":"fbc8fe7e-03b4-4489-83b7-7d26e727dd3d","blend_name":"Green Forrester","origin":"Chiriqui, Panama","variety":"Gimma","notes":"structured, smooth, hay, honeysuckle, maple syrup","intensifier":"rounded"}
    ]
};