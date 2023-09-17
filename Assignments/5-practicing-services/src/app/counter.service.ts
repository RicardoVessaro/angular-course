import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    countActiveToInactive() {
        this.activeToInactiveCounter++;
    }

    countInactiveToActive() {
        this.inactiveToActiveCounter++;
    }
}