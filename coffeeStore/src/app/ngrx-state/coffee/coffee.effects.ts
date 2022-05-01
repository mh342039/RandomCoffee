import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { Action } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { Coffee } from "src/app/models/coffee.model";
import { HttpService } from "src/app/services/http.service";
import { getCoffeeAction, getCoffeeActionSuccess } from "./coffee.actions";


@Injectable()
export class CoffeeEffects {

    constructor(private actions$: Actions, private httpService: HttpService) { }

    loadCoffee$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(getCoffeeAction),
                mergeMap((action) => {
                    return this.httpService.getCoffee()
                    .pipe(
                        map((data: Coffee[]) => {
                            return getCoffeeActionSuccess({coffees: data})
                        })
                    );
                })
            );
        }
    )

}