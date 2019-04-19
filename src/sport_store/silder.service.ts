import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

export class SliderService {

    private countColor: boolean;

    constructor() {
        this.countColor = false;
    }

    getColor() {
        return this.countColor;
    }

    swipeColor(count: boolean) {
        this.countColor = count;
    }
}
