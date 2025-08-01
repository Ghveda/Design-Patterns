export class Bank {
    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    public get balance(): number {
        return this._balance;
    }

    public deposit(amount: number) {
        if (amount < 0) {
            console.error("Invalid deposit amount");
            return;
        }

        this._balance += amount;
    }

    withdraw(amount: number) {
        if (amount < 0 || amount > this._balance) {
            console.error("Invalid withdrawal amount");
            return;
        }

        this._balance -= amount;
    }
}

const bank = new Bank(1000);

export function callEncapsulationMethods() {
    bank.deposit(10);
    bank.withdraw(500);

    console.log('Encapsulation\n ------------------------------------');
    console.log(bank.balance)
    console.log('------------------------------------');
}