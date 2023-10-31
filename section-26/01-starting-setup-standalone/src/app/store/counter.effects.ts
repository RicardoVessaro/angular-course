import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.actions";
import { tap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffects {
    
    saveCount = createEffect(
        () => 
            this.actions$.pipe(
                ofType(increment, decrement),
                tap((action) => {
                    console.log(action);
                    localStorage.setItem('count', action.value.toString());
                })
            ),
        { dispatch: false }
    );

    // Old way no longer supported
    // import { Effect } from "@ngrx/effects";
    // @Effect({ dispatch: false }) 
    // saveCount = this.actions$.pipe(
    //         ofType(increment, decrement),
    //         tap((action) => {
    //             console.log(action);
    //             localStorage.setItem('count', action.value.toString());
    //         })
    //     );

    constructor(private actions$: Actions) {}
}