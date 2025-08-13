interface Employee {
    getName(): string;

    getSalary(): number;

    getRole(): string
}

class Developer implements Employee {
    constructor(
        private name: string,
        private salary: number,
    ) {
    }

    getName(): string {
        return this.name;
    }

    getRole(): string {
        return "Developer";
    }

    getSalary(): number {
        return this.salary;
    }

}

class Designer implements Employee {
    constructor(
        private name: string,
        private salary: number,
    ) {
    }

    getName(): string {
        return this.name;
    }

    getRole(): string {
        return "Designer";
    }

    getSalary(): number {
        return this.salary;
    }

}

interface CompositeEmployee extends Employee {
    addEmployee(employee: Employee): void;

    removeEmployee(employee: Employee): void;

    getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
    constructor(
        private name: string,
        private salary: number,
        private employee: Employee[] = [],
    ) {
    }

    addEmployee(employee: Employee): void {
        this.employee.push(employee);
    }

    getEmployees(): Employee[] {
        return this.employee;
    }

    getName(): string {
        return this.name;
    }

    getRole(): string {
        return 'Manager';
    }

    getSalary(): number {
        return this.salary;
    }

    removeEmployee(employee: Employee): void {
        const index = this.employee.indexOf(employee);

        if (index === -1) return

        this.employee.splice(index, 1);
    }
}

const developer = new Developer('John', 1000);
const designer = new Designer('Jane', 2000);
const manager = new Manager('John', 3000);

manager.addEmployee(developer);
manager.addEmployee(designer);

manager.getEmployees();
manager.removeEmployee(designer);

export {}
