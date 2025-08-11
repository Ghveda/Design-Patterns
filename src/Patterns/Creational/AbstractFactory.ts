interface IProductA {
    operationA(): string;
}

interface IProductB {
    operationB(): string;

    combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
    createProductA(): IProductA;

    createProductB(): IProductB;
}

class ProductA implements IProductA {
    operationA(): string {
        return "The product A";
    }
}

class ProductB implements IProductB {
    operationB(): string {
        return "The product B";
    }

    combinedOperation(collaborator: IProductA): string {
        const result = collaborator.operationA();

        return `The result of the Product B collaborating with (${result})`;
    }
}

class Factory implements IFactory {
    createProductA(): IProductA {
        return new ProductA();
    }

    createProductB(): IProductB {
        return new ProductB();
    }
}

const factory = new Factory();

const productA = factory.createProductA();
const productB = factory.createProductB();

productA.operationA();
productB.operationB();

productB.combinedOperation(productA);
