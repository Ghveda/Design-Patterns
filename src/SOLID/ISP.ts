interface Printer {
    print(document: Document): void;
}

interface Scanner {
    scan(document: Document): void;
}

interface FaxMachine {
    fax(document: Document): void;
}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
    fax(document: Document): void {
        console.log('The Machine is faxing');
    }

    print(document: Document): void {
        console.log('The Machine is printing');
    }

    scan(document: Document): void {
        console.log('The Machine is scanning');
    }
}

class SimplePrinter implements Printer {
    print(document: Document): void {
        console.log('The Machine is printing');
    }
}
