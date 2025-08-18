// Example 1
interface IPaymentStrategy {
    pay(amount: number): void;
}

class PaypalStrategy implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Paypal`);
    }
}

class CreditCardStrategy implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using credit card`);
    }
}

class BitcoinStrategy implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Bitcoin`);
    }
}

class ShoppingCart {
    private amount = 0;

    constructor(private strategy: IPaymentStrategy) {
    }

    setPaymentStrategy(strategy: IPaymentStrategy) {
        this.strategy = strategy;
    }

    addToCart(amount: number) {
        this.amount += amount;
    }

    checkout() {
        this.strategy.pay(this.amount);
        this.amount = 0;
    }
}

const cart = new ShoppingCart(new CreditCardStrategy());

cart.addToCart(100);
cart.addToCart(50);
cart.checkout();

cart.setPaymentStrategy(new PaypalStrategy());
cart.addToCart(100);
cart.addToCart(50);
cart.checkout();

// Example 2
interface FilterStrategy {
    apply(image: string): void;
}

class GrayscaleStrategy implements FilterStrategy {
    apply(image: string): void {
        console.log(`The Image: ${image}`)
    }
}

class SepiaStrategy implements FilterStrategy {
    apply(image: string): void {
        console.log(`The Image: ${image}`)
    }
}

class NegativeStrategy implements FilterStrategy {
    apply(image: string): void {
        console.log(`The Image: ${image}`)
    }
}

class ImageProcessor {
    constructor(private filterStrategy: FilterStrategy) {
    }

    setFilter(strategy: FilterStrategy) {
        this.filterStrategy = strategy;
    }

    applyFilter(image: string) {
        this.filterStrategy.apply(image);
    }
}

const imageProcessor = new ImageProcessor(new GrayscaleStrategy());

imageProcessor.applyFilter('Image 1');
imageProcessor.applyFilter('Image 2');

imageProcessor.setFilter(new NegativeStrategy());
imageProcessor.applyFilter('Image 3');
