# TypeScript Design Patterns And SOLID Principles

#### OOP

| Title           | Description                                                                                |
|:----------------|:-------------------------------------------------------------------------------------------|
| `Abstraction`   | Represent real-world entities as objects, Hide complexity and focus on essential features  |
| `Encapsulation` | Bundle data and operations in class,  Restrict access to internal data                     |
| `Inheritance`   | Create new classes from existing ones, Promote code reusability and modularity             |
| `Polymorphism`  | Single interface for different object types, Enable code to work with different data types |

### SOLID Principles

| Title | Description                     |
|:------|:--------------------------------|
| `SRP` | Single Responsibility Principle |
| `OCP` | Open-Closed Principle           |
| `LSP` | Liskov Substitution Principle   |
| `ISP` | Interface Segregation Principle |
| `DIP` | Dependency Inversion Principle  |

### Design patterns classification:

Creational, Structural, Behavioral

| `Creational` - Creation object | `Structural` - Solving the object structural problems | `Behavioral` - Solving the object communication problems |
|:-------------------------------|:------------------------------------------------------|:---------------------------------------------------------|
| Singleton                      | Adapter                                               | Chain of responsibility                                  |
| Abstract Factory               | Bridge                                                | Command                                                  |
| Builder                        | Composite                                             | Interpreter                                              |
| Factory Method                 | Decorator                                             | Iterator                                                 |
| Prototype                      | Facade                                                | Mediator                                                 |
| -                              | Flyweight                                             | Memento                                                  |
| -                              | Proxy                                                 | Observer                                                 |
| -                              | -                                                     | State                                                    |
| -                              | -                                                     | Strategy                                                 |
| -                              | -                                                     | Template Method                                          |
| -                              | -                                                     | Visitor                                                  |


# Creational Patterns

### Singleton
The Singleton pattern is a creational design pattern that lets you ensure that a class has only one instance, 
while providing a global access point to this instance.

### Prototype
The prototype pattern is a creational design pattern that allows cloning objects, even complex ones, without coupling to
their specific classes. All prototype classes have a common interface that makes it possible to copy objects even if 
their concrete classes are unknown. Prototype objects can produce full copies since objects of the same class can access
each others's private fields.
