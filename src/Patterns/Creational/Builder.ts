// Example 1
interface Builder {
    setPartA(): void;

    setPartB(): void;

    setPartC(): void;
}

class Product {
    private parts: string[] = [];

    add(part: string): void {
        this.parts.push(part);
    }

    listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}`);
    }
}

class ConcreteBuilder implements Builder {
    private product!: Product;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.product = new Product();
    }

    setPartA(): void {
        this.product.add('PartA');
    }

    setPartB(): void {
        this.product.add('PartB');
    }

    setPartC(): void {
        this.product.add('PartC');
    }

    getProduct(): Product {
        const result = this.product;
        this.reset();

        return result;
    }
}

class Directive {
    private builder!: Builder;

    setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    buildMinimumProduct(): void {
        this.builder.setPartA();
    }

    buildFullProduct() {
        this.builder.setPartA();
        this.builder.setPartB();
        this.builder.setPartC();
    }
}

export function callBuilderMethods() {
    const builder = new ConcreteBuilder();
    const director = new Directive();

    director.setBuilder(builder);

    console.log('Builder\n ------------------------------------');

    director.buildMinimumProduct();
    const minProduct = builder.getProduct();

    minProduct.listParts();

    director.buildFullProduct();
    const fullProduct = builder.getProduct();

    fullProduct.listParts();

    console.log('------------------------------------');
}

// Example 2
interface ICustomer {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

interface ICustomerBuilder {
    setFirstName(firstName: string): ICustomerBuilder;

    setLastName(lastName: string): ICustomerBuilder;

    setEmail(email: string): ICustomerBuilder;

    setPhoneNumber(phoneNumber: string): ICustomerBuilder;

    build(): ICustomer;
}

class Customer {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string
    ) {
    }
}

class CustomerBuilder implements ICustomerBuilder {
    private firstName: string = '';
    private lastName: string = '';
    private email: string = '';
    private phoneNumber: string = '';

    setEmail(email: string): ICustomerBuilder {
        this.email = email;
        return this;
    }

    setFirstName(firstName: string): ICustomerBuilder {
        this.firstName = firstName;
        return this;
    }

    setLastName(lastName: string): ICustomerBuilder {
        this.lastName = lastName;
        return this;
    }

    setPhoneNumber(phoneNumber: string): ICustomerBuilder {
        this.phoneNumber = phoneNumber;
        return this;
    }

    build(): ICustomer {

        return new Customer(
            this.firstName,
            this.lastName,
            this.email,
            this.phoneNumber,
        );
    }

}

class CustomerDirector {
    constructor(private builder: ICustomerBuilder) {
    }

    buildMinimalCustomer(
        fistName: string,
        lastName: string,
        email: string,
    ) {
        return this.builder
            .setFirstName(fistName)
            .setLastName(lastName)
            .setEmail(email)
            .build();
    };
}

const builder: ICustomerBuilder = new CustomerBuilder();
const customerDirector: CustomerDirector = new CustomerDirector(builder);
const customer: ICustomer = customerDirector.buildMinimalCustomer(
    'John',
    'Doe',
    'John@example.com',
);
