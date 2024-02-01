# Briefly discuss where you use Abstraction and give reasons for your decision.

Polymorphism is used in the design of the User class and its derived classes (Intern, Administrator, Tutor). The decision to apply polymorphism in this context is motivated by the need for a common interface for different user types, allowing them to be treated uniformly while enabling each type to exhibit its specific behavior.Here are the reasons for using polymorphism in this scenario:

## Common Interface:
Polymorphism allows the creation of a common interface through methods like performAction, login, and logout in the base User class. This commonality facilitates the usage of different user types interchangeably, promoting code flexibility and consistency.

## Flexibility and Extensibility:
By defining a common set of methods in the base class, the system becomes more adaptable to changes and extensible. New user types can be easily added by extending the User class and providing their own implementations, contributing to a scalable architecture.

## Customization for Each User Type:
Derived classes (Intern, Administrator, Tutor) leverage polymorphism to override common methods like login and logout with their specific implementations. This customization allows each user type to define its behavior without affecting the overall structure.

## Encapsulation:
Polymorphism aids in encapsulating the implementation details within each derived class. The internal workings of how a user logs in or logs out are hidden from external classes, promoting modular and encapsulated design principles.

## Dynamic Dispatch:
The use of polymorphism enables dynamic dispatch, where the appropriate method implementation is determined at runtime based on the actual type of the object. This dynamic behavior enhances the adaptability and effectiveness of the code.

## Consistent Interface for Clients:
Clients interacting with instances of the User class can rely on a consistent interface provided by common methods. This makes the code more predictable and easier to understand, enhancing maintainability and collaboration among developers.

## Code Reusability:
Polymorphism promotes code reusability by allowing the same code to be applied to objects of different types. This reduces redundancy and supports the principles of modular and maintainable software design.