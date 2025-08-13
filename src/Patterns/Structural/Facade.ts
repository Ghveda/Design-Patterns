// Example 1
class Grinder {
    grindBeans(): void {
        console.log('Grinding beans ...');
    }
}

class Boiler {
    boilWater(): void {
        console.log('Boiling water ...');
    }
}

class Brewer {
    brewerWater(): void {
        console.log('Brewing watter ...');
    }
}

class CoffeeMakerFacade {
    constructor(
        private grinder: Grinder,
        private boiler: Boiler,
        private brewer: Brewer,
    ) {
    }

    makeCoffee() {
        this.grinder.grindBeans();
        this.boiler.boilWater();
        this.brewer.brewerWater();
    }
}

const grinder = new Grinder();
const boiler = new Boiler();
const brewer = new Brewer();

const coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);

coffeeMaker.makeCoffee();

// Example 2
class Amplifier {
    turnOn() {
        console.log('Amplifier is turned on');
    }

    setVolume(level: number) {
        console.log(`Volume is set to ${level}`);
    }
}

class DvdPlayer {
    turnOn() {
        console.log('The DVD player is turned on');
    }

    play(movie: string) {
        console.log(`Playing ${movie}`);
    }
}

class Projector {
    turnOn() {
        console.log('Projector is turned on');
    }

    setInput(dvdPlayer: DvdPlayer) {
        console.log('Input set ot DvdPlayer');
    }
}

class Lights {
    dim(level: number) {
        console.log(`Lights dimmed to ${level}`);
    }
}

class HomeTheaterFacade {
    constructor(
        private amplifier: Amplifier,
        private dvdPlayer: DvdPlayer,
        private projector: Projector,
        private lights: Lights,
    ) {
    }

    watchMovie(movie: string, volume: number, level: number) {
        console.log(`Get ready to watch ${movie}!`);

        this.lights.dim(level);

        this.amplifier.turnOn();
        this.amplifier.setVolume(level);

        this.dvdPlayer.turnOn();

        this.projector.turnOn();
        this.projector.setInput(this.dvdPlayer);

        this.dvdPlayer.play(movie);
    }
}

const amplifier = new Amplifier();
const dvdPlayer = new DvdPlayer();
const projector = new Projector();
const lights = new Lights();

const homeTheaterFacade = new HomeTheaterFacade(
    amplifier,
    dvdPlayer,
    projector,
    lights
);

homeTheaterFacade.watchMovie('Inception', 10, 5);

export {}
