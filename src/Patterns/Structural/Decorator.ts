// Example 1
interface Coffee {
    cost(): number;

    description(): string;
}

class SimpleCoffee implements Coffee {
    cost(): number {
        return 10;
    }

    description(): string {
        return "Simple Coffee";
    }
}

abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {
    }

    abstract cost(): number;

    abstract description(): string;
}


class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 2;
    }

    description(): string {
        return `${this.coffee.description()}, with milk`;
    }
}


let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);

console.log(`Cost: ${coffee.cost()}`);
console.log(`Description: ${coffee.description()}`);

// example 2
interface ServerRequest {
    handle(request: unknown): void;
}

class BaseServer implements ServerRequest {
    handle(request: any): void {
        console.log(`Handling request : ${request}`);
    }
}

abstract class ServerRequestDecorator implements ServerRequest {
    constructor(protected server: ServerRequest) {
    }

    abstract handle(request: unknown): void
}

class LoggingMiddleware implements ServerRequestDecorator {
    handle(request: unknown): void {
        console.log(`Logging Request: ${request}`);
    }
}

class AuthMiddleware extends ServerRequestDecorator {
    handle(request: unknown): void {
        console.log(`Auth Request: ${request}`)
    }
}

export {}