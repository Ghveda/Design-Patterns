// First Example
interface UserDetails {
    name: string;
    age: number;
    email: string;
}

interface Prototype {
    clone(): Prototype;

    getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
    constructor(private user: UserDetails) {
    }

    clone(): Prototype {
        const clone = Object.create(this);
        clone.user = {...this.user};

        return clone;
    }

    getUserDetails(): UserDetails {
        return this.user;
    }
}

const userOne = new ConcretePrototype({
    name: 'John',
    age: 32,
    email: "John@example.com"
});

const userTwo = userOne.clone();

// Second Example
interface ShapeProperties {
    color: string;
    x: number;
    y: number;
}

abstract class Shape {
    protected constructor(public properties: ShapeProperties) {
    }

    abstract clone(): Shape;
}

class Rectangle extends Shape {
    constructor(
        public properties: ShapeProperties,
        public width: number,
        public height: number,
    ) {
        super(properties);
    }

    clone(): Shape {
        const clonedProperties: ShapeProperties = {
            ...this.properties,
        };

        return new Rectangle(clonedProperties, this.width, this.height);
    }
}

class Circle extends Shape {
    constructor(
        public properties: ShapeProperties,
        public radius: number,
    ) {
        super(properties);
    }

    clone(): Shape {
        const clonedProperties: ShapeProperties = {
            ...this.properties,
        };

        return new Circle(clonedProperties, this.radius);
    }
}

export function callPrototypeMethods() {
    const redRectangle: Shape = new Rectangle({
            color: 'red',
            y: 10,
            x: 15,
        },
        10,
        20,
    );

    const anotherRectangle = redRectangle.clone();
    anotherRectangle.properties.color = 'blue';

    console.log('Prototype\n ------------------------------------');
    console.log(`Red Rectangle: ${redRectangle.properties.color}`);
    console.log(`Blue Rectangle: ${anotherRectangle.properties.color}`);
    console.log('------------------------------------');
}
