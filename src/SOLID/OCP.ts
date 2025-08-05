interface Customer {
    giveDiscount(): number;
}

class RegularCustomer implements Customer {
    giveDiscount(): number {
        return 10;
    }
}

class PremiumCustomer implements Customer {
    giveDiscount(): number {
        return 20;
    }
}

class Discount {
    giveDiscount(customer: Customer): number {
        return customer.giveDiscount();
    }
}

const premiumCustomer = new PremiumCustomer();
const regularCustomer = new RegularCustomer();
const discount = new Discount();

export function callOCPMethods() {
    const premium = discount.giveDiscount(premiumCustomer);
    const regular = discount.giveDiscount(regularCustomer);

    console.log('OCP\n------------------------------------')
    console.log(`Premium: ${premium}`);
    console.log(`Regular: ${regular}`);
    console.log('------------------------------------');
}