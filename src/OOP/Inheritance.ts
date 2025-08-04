class Product {
    constructor(
        public id: string,
        public price: number,
        public description: string
    ) {
    }

    display(): void {
        console.log(`Product ID: ${this.id}, Price: ${this.price}, Description: ${this.description}`);
    }
}

class Book extends Product {

    constructor(
        public id: string,
        public price: number,
        public description: string,
        public title: string,
        public author: string,
    ) {
        super(id, price, description);
    }

    display() {
        super.display();
        console.log(`Author ${this.author}, Title: ${this.title}`);
    }
}

class Electronic extends Product {

    constructor(
        public id: string,
        public price: number,
        public description: string,
        public brand: string,
        public model: string,
    ) {
        super(id, price, description);
    }

    display() {
        super.display();
        console.log(`Brand ${this.brand}, Model: ${this.model}`);
    }
}

const book = new Book('1', 10, 'Description', 'Title', 'Author');
const electronic = new Electronic('2', 100, 'Description', 'Brand', 'Model');

export function callInheritanceMethods() {
    console.log('Inheritance\n ------------------------------------');
    book.display();
    electronic.display();
    console.log('------------------------------------');
}