class Singleton {
    private static instance: Singleton;
    private static _value: number;

    private constructor() {
    }

    public static getInstance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }

        return Singleton.instance;
    }

    set value(value: number) {
        Singleton._value = value;
    }

    get value(): number {
        return Singleton._value;
    }
}

export function callSingletonMethods() {
    const instanceOne = Singleton.getInstance();
    const instanceTwo = Singleton.getInstance();

    instanceOne.value = 10;

    console.log('Singleton\n------------------------------------');
    console.log(`Instance One:  ${instanceOne.value}`);
    console.log(`Instance Two:  ${instanceTwo.value}`);
    console.log('------------------------------------');
}
