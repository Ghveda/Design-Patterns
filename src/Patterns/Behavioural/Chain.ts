interface Handler {
    setNext(handler: Handler): Handler;

    handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    handle(request: string): string | null {
        if (!this.nextHandler) return null;

        return this.nextHandler.handle(request);
    }

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;

        return handler;
    }
}

class MonkeyHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === 'Banana') {
            console.log(`Monkey : I'll eat the ${request}`);
        }

        return super.handle(request);
    }
}

class SquirrelHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === 'Nut') {
            console.log(`Squirrel : I'll eat the ${request}`);
        }

        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === 'Meatball') {
            console.log(`Dog : I'll eat the ${request}`);
        }

        return super.handle(request);
    }
}

function clientCode(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Meatball', 'Cup of Coffee'];

    for (const food of foods) {
        console.log(`Who want to eat: ${food}`);

        const result = handler.handle(food);

        if (result) {
            console.log(result);
        } else {
            console.log(`${food} was left untouched`);
        }
    }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

clientCode(monkey);
