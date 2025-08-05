abstract class Shape {
    abstract calculateArea(): number;
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }

    public calculateArea(): number {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(public side: number) {
        super();
    }

    calculateArea(): number {
        return this.side * this.side;
    }
}

function area(shape: Shape) {
    return shape.calculateArea();
}

const rectangle = new Rectangle(10, 12);
const square = new Square(8);

export function callLSPMethods() {
    const rectangleArea = area(rectangle);
    const squareArea = area(square);

    console.log('LSP\n------------------------------------');
    console.log(`Rectangle: ${rectangleArea}`);
    console.log(`Square: ${squareArea}`)
    console.log('------------------------------------');
}

