// example 1
interface Observer {
    update(subject: Subject): void;
}

class ConcreteObserver implements Observer {
    constructor(private id: number) {
    }

    update(subject: Subject): void {
        console.log(`Observer ${this.id} updated new stata: ${subject.getState()}`);
    }
}

interface Subject {
    addObserver(observer: Observer): void;

    removeObserver(observer: Observer): void;

    notifyObservers(): void;

    getState(): number;

    setState(state: number): void;
}

class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state = 0;

    addObserver(observer: Observer): void {
        const isExists = this.observers.includes(observer);

        if (isExists) return;

        this.observers.push(observer);
    }

    getState(): number {
        return this.state;
    }

    notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this));
    }

    removeObserver(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex === -1) {
            return;
        }

        this.observers.splice(observerIndex, 1);
    }

    setState(state: number): void {
        this.state = state;
        this.notifyObservers();
    }
}

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver(1);
const observer2 = new ConcreteObserver(2);

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState(123);

// Example 2

interface SecondObserver {
    update(temperature: number, humidity: number, pressure: number): void;
}

interface SecondSubject {
    registerObserver(o: SecondObserver): void;

    removeObserver(o: SecondObserver): void;

    notifyObservers(): void;
}

class WeatherData implements SecondSubject {
    private temperature: number | undefined;
    private humidity: number | undefined;
    private pressure: number | undefined;
    private observers: SecondObserver[] = [];

    notifyObservers(): void {
        if (!this.temperature || !this.humidity || !this.pressure) return;

        this.observers.forEach(observer => observer.update(this.temperature!, this.humidity!, this.pressure!));
    }

    registerObserver(o: SecondObserver): void {
        const isExists = this.observers.includes(o);

        if (isExists) return;

        this.observers.push(o);
    }

    removeObserver(o: SecondObserver): void {
        const observerIndex = this.observers.indexOf(o);

        if (observerIndex === -1) return;

        this.observers.splice(observerIndex, 1);
    }

    setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.notifyObservers();
    }
}

class CurrentConditionsDisplay implements SecondObserver {
    temperature: number | undefined;
    humidity: number | undefined;
    pressure: number | undefined;

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.display();
    }

    display() {
        console.log(`Temperature: ${this.temperature}, Humidity: ${this.humidity}, Pressure: ${this.pressure}`);
    }
}

const secondSubject = new WeatherData();

const tbilisiCondition = new CurrentConditionsDisplay();
const londonCondition = new CurrentConditionsDisplay();

secondSubject.registerObserver(tbilisiCondition);
secondSubject.registerObserver(londonCondition);

secondSubject.setMeasurements(80, 65, 30.4);

export {}
