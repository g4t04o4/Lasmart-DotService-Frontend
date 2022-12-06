import Konva from "konva";

//Model-view to Konva
export class KonvaUI {
    stage;
    layer;

    constructor() {
        this.stage = new Konva.Stage({
            container: 'container', width: window.innerWidth, height: window.innerHeight
        });
        this.layer = new Konva.Layer();
        this.stage.add(this.layer);
    }

    //Adds a dot to the layer
    addDotToLayer(dot) {
        let circle = new Konva.Circle({
            x: dot.x,
            y: dot.y,
            radius: dot.radius,
            fill: dot.color
        });

        circle.addEventListener('dblclick', (event) => {
            this.#deleteTheDot(circle);
        });

        this.layer.add(circle);

        this.#addComments(dot);
    }

    #deleteTheDot(target) {
        target.destroy();
        let url = "https://localhost:44381/";

        //POST to ASP.NET to remove the dot

        // let responce = fetch(url,{
        //     method: 'POST',
        //
        // })
    }

    #addComments(dot) {
        let step = dot.radius + 3;

        dot.commentaries.forEach(commentary => {

            let text = new Konva.Text({
                x: dot.x,
                y: dot.y + step,
                text: commentary.text,
                fontSize: 15,
                fontFamily: 'Calibri',
                padding: 2,
            });

            let rectangle = new Konva.Rect({
                x: dot.x,
                y: dot.y + step,
                stroke: 'Black',
                strokeWidth: 1,
                fill: commentary.color,
                text: commentary.text,
                fontSize: 15,
                width: text.width(),
                height: text.height(),
            });

            text.offsetX(text.width() / 2);
            rectangle.offsetX(text.width() / 2);

            this.layer.add(rectangle);
            this.layer.add(text);
            step += 23;
        });
    }

    drawLayer() {
        this.layer.draw();
    }


}