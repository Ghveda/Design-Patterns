// Example 1
abstract class Car {
    constructor(
        public model: string,
        public productionYear: number
    ) {
    }

    abstract displayCarInfo(): void;
}

class Sedan extends Car {
    displayCarInfo(): void {
        console.log(`This is a Sedan, Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class SUV extends Car {
    displayCarInfo(): void {
        console.log(`This is a SUV, Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class Hatchback extends Car {
    displayCarInfo(): void {
        console.log(`This is a Hatchback, Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}


class CarFactory {
    createCar(
        type: 'sedan' | 'suv' | 'hatchback',
        model: string,
        productionYear: number,
    ): Car {
        const carObj = {
            hatchback: new Hatchback(model, productionYear),
            sedan: new Sedan(model, productionYear),
            suv: new SUV(model, productionYear),
        };

        return carObj[type];
    }
}

const carFactory = new CarFactory();

const sedan = carFactory.createCar('sedan', 'Optima', 1990);
const suv = carFactory.createCar('suv', 'RAV4', 2019);
const hatchback = carFactory.createCar('hatchback', 'Civic', 2010);

sedan.displayCarInfo();
suv.displayCarInfo();
hatchback.displayCarInfo();

// Example 2
abstract class PaymentProcessor {
    constructor(public amount: number) {
    }

    abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
    processPayment(): void {
        console.log(`The Paypal amount: ${this.amount}`);
    }
}

class StripeProcessor extends PaymentProcessor {
    processPayment(): void {
        console.log(`The Stripe amount: ${this.amount}`);
    }
}

class BankTransferProcessor extends PaymentProcessor {
    processPayment(): void {
        console.log(`The Bank Transfer amount: ${this.amount}`);
    }
}

class PaymentProcessorFactory {
    createProcessor(type: 'paypal' | 'stripe' | 'bankTransfer', amount: number): PaymentProcessor {
        const paymentObj = {
            paypal: new PaypalProcessor(amount),
            stripe: new StripeProcessor(amount),
            bankTransfer: new BankTransferProcessor(amount),
        }

        return paymentObj[type];
    }
}

const paymentProcessorFactory = new PaymentProcessorFactory();

const paypal = paymentProcessorFactory.createProcessor('paypal', 100);
const stripe = paymentProcessorFactory.createProcessor('stripe', 200);
const bankTransfer = paymentProcessorFactory.createProcessor('bankTransfer', 300);

paypal.processPayment();
stripe.processPayment();
bankTransfer.processPayment();
