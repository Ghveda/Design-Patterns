// Example 1
class Rectangle {
    constructor(private width: number, private height: number) {
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    area() {
        return this.width * this.height;
    }
}

class Square {
    constructor(private side: number) {
    }

    getSide() {
        return this.side;
    }

    area() {
        return this.side * this.side;
    }
}

class SquareToRectangleAdapter {
    constructor(private square: Square) {
    }

    getWidth() {
        this.square.getSide();
    }

    getHeight() {
        return this.square.getSide();
    }

    area() {
        return this.square.area();
    }
}

const square = new Square(5);
const adapter = new SquareToRectangleAdapter(square);

adapter.getWidth();
adapter.getHeight();
adapter.area();

// Example 2
class MySqlDatabase {
    connectToMySql(url: string) {
        console.log(`MySql Connected to: ${url}`);
    }

    executeMySqlQuery(query: string) {
        console.log(`MySql query executed: ${query}`);
    }
}

class PostgreSQLDatabase {
    connectToPostgres(url: string) {
        console.log(`PostgreSQL Connected to: ${url}`);
    }

    executePostgresQuery(query: string) {
        console.log(`PostgreSQL query executed: ${query}`);
    }
}

class DatabaseAdapter {
    constructor(private database: PostgreSQLDatabase) {
    }

    connectToMySql(url: string) {
        this.database.connectToPostgres(url);
    }

    executeMySqlQuery(query: string) {
        this.database.executePostgresQuery(query);
    }
}

const postgres = new PostgreSQLDatabase();

const databaseAdapter = new DatabaseAdapter(postgres);

databaseAdapter.connectToMySql('localhost:5432');
databaseAdapter.executeMySqlQuery('SELECT * FROM users');

export {}
