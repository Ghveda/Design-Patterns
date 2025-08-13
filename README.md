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
Creational design patterns in object-oriented programming deal with object creation mechanisms, trying to create 
objects in a manner suitable to the situation. The basic form of object creation could result in design problems 
or add complexity to the design. Creational design patterns solve the problem by somehow controlling this 
object creation process.

### Singleton
The Singleton pattern is a creational design pattern that lets you ensure that a class has only one instance, 
while providing a global access point to this instance.

### Prototype
The prototype pattern is a creational design pattern that allows cloning objects, even complex ones, without coupling to
their specific classes. All prototype classes have a common interface that makes it possible to copy objects even if 
their concrete classes are unknown. Prototype objects can produce full copies since objects of the same class can access
each others's private fields.

## Builder
The Builder pattern is a creational design pattern that lets you construct complex object step by step

### Factory
The Factory Design Pattern is a type of creational design pattern that provides an interface for creating objects
in a super class, but allows subclasses to alter the type of objects that will be created

### Abstract Factory
Abstract Factory is a creational design pattern that provides an interface for creating families of related or
dependent objects without specifying their concrete classes

# Structural Patterns
Structural design patterns are a type of design pattern that deal with object composition and the structure of classes
 and objects. They help ensure that when a change is made in one part of a system, it doesn't require in other parts.
This makes the system more flexible and easier to maintain.

### Facade
The Facade design pattern is a structural design pattern that provides a simplified interface to a complex system.
It involves creating a wrapper interface over complex system to hide its complexities. The pattern involves a single
class that provides simplified methods required by the client and delegates calls to methods of existing system classes.

###  Bridge
The Bridge pattern is a structural design pattern that lets you split a large class or a set of closely related classes
into two separate hierarchies - abstraction and implementation - which can be developed independently of each other

### Composite
The composite pattern is a structural design pattern that lets you compose objects into tree-like structures and then
work with these structures as if they were individual objects.

### Decorator
The Decorator design pattern is a structural design pattern that allows you to dynamically add or override behaviour
in an existing object without changing its implementation. The pattern is a particularly useful when you want to modify
the behaviour of an object without affecting other objects of the same class.

### Adapter
The Adapter Design pattern is a software design pattern that allows the interface of an existing class to be used from
another interface. it's often used to make existing classes work with  others without modifying their source code.
The Adapter Pattern is especially useful when the classes that need to communicate with each other do not have 
compatible interfaces.

# Behavioral
Behavioral design patterns are responsible for efficient communication and the assignment of responsibilities among
objects. They focus on how objects interact and communicate with each other, as well as how the flow of control is 
organized with a system. These patterns define the protocols for communication between objects and help in distributing
responsibilities to ensure that the system is efficient, maintainable, and scalable.

### Observer

