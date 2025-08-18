// Example 1
abstract class CakeRecipe {
    bakeCake() {
        this.preHeatOven();
        this.mixIngredients();
        this.bake();
        this.coolingDown();
        this.decorate();
    }

    protected preHeatOven() {
        console.log('Preheating oven to 175 Degree C');
    }

    protected bake() {
        console.log('Baking cake ...');
    }

    protected coolingDown() {
        console.log('Cooling down the cake ...');
    }

    protected decorate() {
        console.log('Decorating cake ...');
    }

    protected abstract mixIngredients(): void;
}

class ChocolateCake extends CakeRecipe {
    protected mixIngredients(): void {
        console.log('Mixing: chocolate, sugar, flour, eggs');
    }

    protected override decorate(): void {
        console.log('Decorating cake with chocolate');
    }
}

class VanillaCake extends CakeRecipe {
    protected mixIngredients(): void {
        console.log('Mixing: vanilla extract, sugar, flour, eggs');
    }
}

function bakeCake(cake: CakeRecipe) {
    cake.bakeCake();
}

bakeCake(new ChocolateCake());
bakeCake(new VanillaCake());

// Example 2
abstract class DataParser {
    parseData() {
        this.loadData();

        const data = 'Parsing data';

        this.parse(data);
        this.validate(data);
        this.useData(data);
    }

    protected loadData() {
        console.log('Loading data ...');
    }

    protected validate(parseData: any) {
        console.log(`Validating ${parseData} ...`);
    }

    protected useData(parseData: any) {
        console.log(`Using data ${parseData}`);
    }

    protected abstract parse(data: string): any;
}

class JSONParser extends DataParser {
    protected override parse(data: string): any {
        console.log(`Parsing with JSON: ${data} ...`);
    }
}

class XMLParser extends DataParser {
    protected override parse(data: string): any {
        console.log(`Parsing with XML: ${data}`);
    }
}

function parseData(parser: DataParser) {
    parser.parseData();
}

parseData(new JSONParser());
parseData(new XMLParser());
