import {Dots} from "/Classes/Dots.js";
import {KonvaUI} from "/Classes/KonvaUI.js";

function initialize(dots) {
    let dot = dots.addDot(30, 30, 5, 'Black');
    dot.addCommentary('Real');
    dot.addCommentary('talk', 'Grey');
    dot.addCommentary('now');

    dot = dots.addDot(190, 100, 10, 'Red');
    dot.addCommentary('It goes faster');

    dots.addDot(150, 300, 15, 'Green');

    dot = dots.addDot(400, 190, 20, 'Yellow');
    dot.addCommentary('Kidney stone', 'Yellow');

    dots.addDot(500, 500, 18);

    dot = dots.addDot(100, 550, 50, 'Magenta');
    dot.addCommentary('Big chungus', 'Cyan');
}

//Main function
function main() {

    let konva = new KonvaUI();

    let dots = new Dots();

    initialize(dots);

    dots.getAllDots().forEach(dot => {
        konva.addDotToLayer(dot);
    })

    konva.drawLayer();
}

main();