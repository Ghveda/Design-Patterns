interface LightState {
    switchState(lightSwitch: LightSwitch): void;
}

class OnState implements LightState {
    switchState(lightSwitch: LightSwitch): void {
        console.log('Light state is on. Turning off');
        lightSwitch.setState(new OffState());
    }
}

class OffState implements LightState {
    switchState(lightSwitch: LightSwitch): void {
        console.log('Light state is off. Turning on');
        lightSwitch.setState(new OnState());
    }
}

class LightSwitch {
    constructor(private state: LightState) {
    }

    setState(state: LightState) {
        this.state = state;
    }

    press() {
        this.state.switchState(this);
    }
}

const lightSwitch = new LightSwitch(new OnState());
lightSwitch.press();
lightSwitch.press();
