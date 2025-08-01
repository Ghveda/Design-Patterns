interface Shape {
    area(): number;
    perimeter(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

function calculateArea(shape: Shape): number {
    return shape.area();
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 20);

export function callAbstractionMethods(): void {
    console.log('Abstraction\n ------------------------------------');
    console.log(`Area of the circle: ${calculateArea(circle)}`);
    console.log(`Area of the circle: ${calculateArea(rectangle)}`);
    console.log('------------------------------------');
}