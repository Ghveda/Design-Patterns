interface ICommand {
    execute(): void;

    undo(): void;
}

class Light {
    turnOn() {
        console.log('The light is on');
    }

    turnOff() {
        console.log('The light is off');
    }
}

class TurnOnCommand implements ICommand {
    constructor(private light: Light) {
    }

    execute(): void {
        this.light.turnOn();
    }

    undo(): void {
        this.light.turnOff();
    }
}

class TurnOffCommand implements ICommand {
    constructor(private light: Light) {
    }

    execute(): void {
        this.light.turnOff();
    }

    undo(): void {
        this.light.turnOn();
    }
}

class SimpleRemoteControl {
    private currentCommand!: ICommand;
    private undoCommand!: ICommand;
    private commandQueue: ICommand[] = [];

    setCommand(command: ICommand) {
        this.undoCommand = this.currentCommand;
        this.currentCommand = command;
        this.commandQueue.push(command);
    }

    buttonWasPressed() {
        if (!this.commandQueue.length) return

        const command = this.commandQueue.shift();
        command?.execute();
    }

    undoButtonPressed() {
        this.undoCommand.execute();
    }

    hasCommands() {
        return !!this.commandQueue.length;
    }
}

const remote: SimpleRemoteControl = new SimpleRemoteControl();
const light = new Light();

remote.setCommand(new TurnOnCommand(light));
remote.buttonWasPressed();
remote.undoButtonPressed();

remote.setCommand(new TurnOffCommand(light));
remote.buttonWasPressed();
remote.undoButtonPressed();
