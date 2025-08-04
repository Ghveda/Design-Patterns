abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(private base: number, private height: number) {
        super();
    }

    area(): number {
        return 0.5 * this.base * this.height;
    }
}

export const Empty = {}