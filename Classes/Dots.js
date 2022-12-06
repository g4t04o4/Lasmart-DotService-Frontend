import {Dot} from "/Classes/Dot.js";

//Class that holds a collection of dots
export class Dots {
    constructor() {
        this.dots = [];
    }

    //Add a dot to the collection
    addDot(x, y, radius, color) {
        let dot = new Dot(x, y, radius, color);
        this.dots.push(dot);
        return dot;
    }

    getAllDots() {
        return this.dots;
    }
}