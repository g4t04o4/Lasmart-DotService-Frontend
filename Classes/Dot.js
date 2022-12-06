import {Commentary} from "/Classes/Commentary.js";

//An individual dot
export class Dot {
    constructor(x, y, radius, color = 'Black') {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.commentaries = [];
    }

    addCommentary(text, color) {
        let commentary = new Commentary(text, color);
        this.commentaries.push(commentary);
        return commentary;
    }
}