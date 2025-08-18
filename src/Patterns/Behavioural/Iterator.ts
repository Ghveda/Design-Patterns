// Example 1
class ArrayIterator<T> {
    private position: number = 0;

    constructor(private collection: T[]) {
    }

    next(): T {
        const result = this.collection[this.position];
        this.position += 1;

        return result;
    }

    hasNext() {
        return this.position < this.collection.length;
    }
}

const array = [1, 2, 3, 4, 5];
const iterator = new ArrayIterator<number>(array);

iterator.next();
iterator.next();
iterator.next();
iterator.hasNext();

const arrayString = ['hello', 'world'];

const stringIterator = new ArrayIterator<string>(arrayString);

stringIterator.next();
stringIterator.next();
stringIterator.hasNext();

// Example 2
class User {
    constructor(public name: string) {
    }
}

interface MyIteratorResult<T> {
    value: T | null;
    done: boolean;
}

interface MyIterator<T> {
    next(): MyIteratorResult<T>;

    hasNext(): boolean;
}

interface Collection<T> {
    creatIterator(): MyIterator<T>;
}

class UserCollection implements Collection<User> {
    constructor(private users: User[]) {
    }

    creatIterator(): MyIterator<User> {
        return new UserIterator(this);
    }

    getItems() {
        return this.users;
    }

}

class UserIterator implements MyIterator<User> {
    private position = 0;

    constructor(private collection: UserCollection) {
    }

    hasNext(): boolean {
        return this.position < this.collection.getItems().length;
    }

    next(): MyIteratorResult<User> {
        if (!this.hasNext()) {
            return {
                value: null,
                done: true,
            }
        }

        return {
            value: this.collection.getItems()[this.position++],
            done: false,
        }
    }
}

const users = [new User('Alice'), new User('Bob'), new User('Charlie')];
const userCollection = new UserCollection(users);
const secondIterator = userCollection.creatIterator();

secondIterator.hasNext();
secondIterator.next();
secondIterator.next();

export {}
