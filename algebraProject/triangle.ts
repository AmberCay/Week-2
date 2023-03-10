import { Point } from "./point";

export class Triangle {

    // set up propiedades

    private vertex1:Point;
    private vertex2:Point;
    private vertex3:Point;

    // constructor

    constructor(vertex1:Point, vertex2:Point, vertex3:Point) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    public calculateLenghtSides():number[] {
        let resultado:number[] = [];
        resultado.push(this.vertex1.calculateDistance(this.vertex2));
        resultado.push(this.vertex2.calculateDistance(this.vertex3));
        resultado.push(this.vertex3.calculateDistance(this.vertex1));
        return resultado;
    }
}