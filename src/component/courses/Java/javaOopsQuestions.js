const javaOopsQuestions = {
  id: 1,
  title: "Java - Oops Concept",

  questions: [
  

    {
      content: {
        question:
          "What are the core principles of Object-Oriented Programming?",
        answer:
          "The core principles of Object-Oriented Programming (OOP) are encapsulation, inheritance, polymorphism, and abstraction.",
        explanation:
          "1. **Encapsulation**: Bundling data (fields) and methods that operate on the data into a single unit (class) and restricting direct access to some components.\n2.  **Inheritance**: Enabling a new class (subclass) to inherit properties and behavior from an existing class (superclass).\n3. **Polymorphism**: Allowing objects to take many forms, enabling a single interface to represent different data types or classes (e.g., method overriding or overloading).\n4. **Abstraction**: Hiding implementation details and exposing only the essential features of an object through abstract classes or interfaces.",
        codeSnippet:
          'abstract class Animal {\n    abstract void sound();\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Woof");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Animal myDog = new Dog(); // Polymorphism\n        myDog.sound(); // Outputs: Woof\n    }\n}',
      },
    },
    {
      content: {
        question: "What is a class and how is it different from an object?",
        answer:
          "A class is a blueprint or template for creating objects, while an object is an instance of a class.",
        explanation:
          "A class defines the structure and behavior (fields and methods) that its objects will have. An object, on the other hand, is a concrete entity created based on the class, containing specific values for the fields and the ability to use the methods defined in the class.",
        codeSnippet:
          'class Car {\n    String brand;\n    int speed;\n\n    Car(String brand, int speed) {\n        this.brand = brand;\n        this.speed = speed;\n    }\n\n    void displayInfo() {\n        System.out.println("Brand: " + brand + ", Speed: " + speed);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car car1 = new Car("Toyota", 120); // Object created from the class\n        car1.displayInfo(); // Outputs: Brand: Toyota, Speed: 120\n    }\n}',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between encapsulation and abstraction?",
        compareHeading: [ "Encapsulation", "Abstraction"],
        comparision: [
          {
            Encapsulation: {
              Definition:
                "The process of bundling data (variables) and methods (functions) that operate on the data into a single unit, usually a class.",
              Purpose:
                "To protect the data from unauthorized access and to control how it is accessed or modified.",
              Visibility:
                "Achieved using access modifiers (e.g., private, protected, public).",
              Implementation:
                "Implemented by declaring fields as private and providing public getter and setter methods to access or modify them.",
              Focus:
                "Focuses on the internal details and data hiding to ensure controlled access.",
              UseCase:
                "Used to enforce security, maintain data integrity, and achieve loose coupling.",
            },
          },
          {
            Abstraction: {
              Definition:
                "The process of hiding the implementation details of a system and showing only the functionality to the user.",
              Purpose:
                "To reduce complexity and allow the user to focus on what the object does rather than how it does it.",
              Visibility: "Achieved through abstract classes and interfaces.",
              Implementation:
                "Implemented using abstract classes (with abstract methods) or interfaces (with method declarations).",
              Focus:
                "Focuses on exposing only the essential features and functionalities while hiding the implementation details.",
              UseCase:
                "Used to design systems at a higher level and ensure reusability and scalability.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "What is inheritance in Java?",
        answer:
          "Inheritance in Java is a mechanism that allows a class (child class) to inherit fields and methods from another class (parent class).",
        explanation:
          "Using inheritance, you can create a new class based on an existing class, allowing code reuse and the establishment of a hierarchy. The `extends` keyword is used to implement inheritance. The child class can add new fields and methods or override the behavior of the parent class.",
        codeSnippet:
          'class Animal {\n    void eat() {\n        System.out.println("This animal eats food.");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void eat() {\n        System.out.println("The dog eats bones.");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.eat(); // Outputs: The dog eats bones.\n    }\n}',
      },
    },
    {
      content: {
        question: "How is polymorphism implemented in Java?",
        answer:
          "Polymorphism in Java is implemented through method overloading (compile-time polymorphism) and method overriding (runtime polymorphism).",
        explanation:
          "1. **Method Overloading**: Multiple methods in the same class can have the same name but different parameter lists.\n2. **Method Overriding**: A subclass provides a specific implementation of a method that is already defined in its parent class. At runtime, the appropriate method is executed based on the actual object type.",
        codeSnippet:
          'class Calculator {\n    // Method Overloading\n    int add(int a, int b) {\n        return a + b;\n    }\n\n    int add(int a, int b, int c) {\n        return a + b + c;\n    }\n}\n\nclass Animal {\n    void sound() {\n        System.out.println("Animal makes a sound.");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Cat meows.");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println(calc.add(2, 3)); // Method Overloading\n        System.out.println(calc.add(2, 3, 4));\n\n        Animal myCat = new Cat(); // Method Overriding (Polymorphism)\n        myCat.sound(); // Outputs: Cat meows.\n    }\n}',
      },
    },
    {
      content: {
        question: "What are the types of polymorphism in Java?",
        answer:
          "Java supports two types of polymorphism: compile-time polymorphism and runtime polymorphism.",
        explanation:
          "1. **Compile-Time Polymorphism** (Static Binding): Achieved through method overloading, where the method to be invoked is determined at compile time.\n2. **Runtime Polymorphism** (Dynamic Binding): Achieved through method overriding, where the method to be invoked is determined at runtime based on the actual object instance.",
        codeSnippet:
          '// Compile-Time Polymorphism\nclass CompileTimeDemo {\n    void print(String msg) {\n        System.out.println(msg);\n    }\n\n    void print(int num) {\n        System.out.println(num);\n    }\n}\n\n// Runtime Polymorphism\nclass Parent {\n    void display() {\n        System.out.println("Parent display");\n    }\n}\n\nclass Child extends Parent {\n    @Override\n    void display() {\n        System.out.println("Child display");\n    }\n}\n\npublic class PolymorphismExample {\n    public static void main(String[] args) {\n        // Compile-Time Polymorphism\n        CompileTimeDemo demo = new CompileTimeDemo();\n        demo.print("Hello");\n        demo.print(10);\n\n        // Runtime Polymorphism\n        Parent obj = new Child();\n        obj.display(); // Outputs: Child display\n    }\n}',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between method overloading and method overriding?",
        compareHeading: [ "Method Overloading", "Method Overriding"],
        comparision: [
          {
            "Method Overloading": {
              Definition:
                "A feature in Java where two or more methods in the same class have the same name but different parameters (different type, number, or order of parameters).",
              Purpose:
                "Provides multiple ways to perform a similar operation based on different inputs.",
              Scope: "Occurs within the same class.",
              "Return Type":
                "Can have different return types but must differ in the method signature (parameters).",
              "Access Modifiers": "Access modifiers can be different.",
              Inheritance:
                "Not related to inheritance; methods exist in the same class.",
              UseCase:
                "Used when methods perform similar tasks but take different types of arguments (e.g., overloading constructors).",
            },
          },
          {
            "Method Overriding": {
              Definition:
                "A feature in Java where a subclass provides a specific implementation for a method that is already defined in its superclass.",
              Purpose:
                "Provides specific implementation of a method for a subclass.",
              Scope: "Occurs between a superclass and a subclass.",
              "Return Type":
                "Must have the same return type (or a covariant type).",
              "Access Modifiers":
                "Access modifiers cannot be more restrictive than the method in the superclass.",
              Inheritance:
                "Requires inheritance and is applicable between parent and child classes.",
              UseCase:
                "Used to implement runtime polymorphism or to define specific behavior for a subclass.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What is an abstract class? How is it different from an interface?",
        compareHeading: [ "Abstract Class", "Interface"],
        comparision: [
          {
            "Abstract Class": {
              Definition:
                "A class that cannot be instantiated and can contain both abstract methods (without implementation) and concrete methods (with implementation).",
              Purpose:
                "To provide a common base with shared functionality and structure for subclasses.",
              Methods:
                "Can have abstract methods, concrete methods, and constructors.",
              Fields:
                "Can contain instance variables and static variables with any access modifiers.",
              Inheritance:
                "A class can extend only one abstract class (single inheritance).",
              "Default Implementation":
                "Can provide default implementation for methods.",
              UseCase:
                "Used when there is a need to share code among related classes.",
            },
          },
          {
            Interface: {
              Definition:
                "A blueprint for a class that defines a set of methods (without implementation) that the implementing class must provide.",
              Purpose:
                "To define a contract for what a class should do, without dictating how it should do it.",
              Methods:
                "Can have abstract methods, static methods, and default methods (from Java 8).",
              Fields:
                "Can contain only public, static, and final variables (constants).",
              Inheritance:
                "A class can implement multiple interfaces (multiple inheritance).",
              "Default Implementation":
                "Provides default methods (Java 8+) for optional implementation.",
              UseCase:
                "Used to achieve full abstraction and support multiple inheritance.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "What is the purpose of the super keyword?",
        answer:
          "The `super` keyword in Java is used to refer to the immediate parent class of the current object.",
        explanation:
          "The `super` keyword serves three main purposes:\n1. **Access Parent Class Constructor**: It can call the parent class constructor explicitly.\n2. **Access Parent Class Methods**: It allows calling a method from the parent class that has been overridden in the child class.\n3. **Access Parent Class Fields**: It can refer to a field of the parent class when it is hidden by a field in the child class.",
        codeSnippet:
          'class Parent {\n    String name = "Parent";\n\n    Parent() {\n        System.out.println("Parent class constructor");\n    }\n\n    void display() {\n        System.out.println("This is the parent class method");\n    }\n}\n\nclass Child extends Parent {\n    String name = "Child";\n\n    Child() {\n        super(); // Calls the parent class constructor\n        System.out.println("Child class constructor");\n    }\n\n    void display() {\n        super.display(); // Calls the parent class method\n        System.out.println("This is the child class method");\n    }\n\n    void printName() {\n        System.out.println(super.name); // Accesses the parent class field\n        System.out.println(this.name); // Accesses the child class field\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Child child = new Child();\n        child.display();\n        child.printName();\n    }\n}',
      },
    },
    {
      comparision: {
        question: "What is the difference between this and super?",
        compareHeading: [ "this", "super"],
        comparision: [
          {
            this: {
              Definition:
                "A reference variable that refers to the current object of the class.",
              Purpose:
                "Used to access current class methods, variables, or constructors.",
              Scope: "Refers to the current instance of the class.",
              "Use in Constructor":
                "Can be used to call another constructor of the same class (constructor chaining).",
              "Overriding Context":
                "Cannot be used to refer to superclass members.",
              UseCase:
                "Commonly used to resolve naming conflicts between class fields and method parameters or to explicitly refer to the current object.",
            },
          },
          {
            super: {
              Definition:
                "A reference variable that refers to the immediate parent class of the current object.",
              Purpose:
                "Used to access parent class methods, variables, or constructors.",
              Scope: "Refers to the immediate superclass of the current class.",
              "Use in Constructor":
                "Can be used to call the constructor of the parent class.",
              "Overriding Context":
                "Can be used to refer to overridden methods or hidden members in the superclass.",
              UseCase:
                "Commonly used when a subclass needs to access or override behavior from the superclass.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question: "What is the difference between a constructor and a method?",
        compareHeading: [ "Constructor", "Method"],
        comparision: [
          {
            Constructor: {
              Definition:
                "A special method used to initialize objects when they are created.",
              Purpose:
                "To set up the initial state of an object, typically by assigning values to instance variables.",
              Name: "Has the same name as the class.",
              "Return Type": "Does not have a return type, not even void.",
              Invocation:
                "Automatically called when an object is created using the 'new' keyword.",
              Overloading:
                "Constructors can be overloaded (multiple constructors with different parameter lists).",
              Inheritance:
                "Constructors are not inherited by subclasses, but can be invoked using 'super'.",
              UseCase: "Used to initialize new objects of a class.",
            },
          },
          {
            Method: {
              Definition:
                "A block of code that performs a specific task or operation and can be called explicitly.",
              Purpose:
                "To define behavior that can be executed multiple times on objects or classes.",
              Name: "Has a user-defined name.",
              "Return Type":
                "Has a return type (including void for no return value).",
              Invocation: "Must be explicitly called on an object or class.",
              Overloading:
                "Methods can be overloaded (multiple methods with the same name but different parameters).",
              Inheritance:
                "Methods are inherited by subclasses (unless overridden).",
              UseCase:
                "Used to define behavior and actions that can be invoked after the object is created.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "Can a constructor be private in Java? Why or why not?",
        answer: "Yes, a constructor can be private in Java.",
        explanation:
          "A private constructor is used to restrict the instantiation of a class from outside its body. It is commonly used in design patterns such as the Singleton pattern, where only one instance of a class is allowed to be created, or in utility classes that contain only static methods. A private constructor prevents creating multiple instances of the class by using `new`.",
        codeSnippet:
          "class Singleton {\n    private static Singleton instance;\n\n    // Private constructor\n    private Singleton() {}\n\n    // Public method to get the instance\n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Singleton instance\n        Singleton singleton = Singleton.getInstance();\n        System.out.println(singleton);\n    }\n}",
      },
    },
    {
      content: {
        question: "What is the default constructor in Java?",
        answer:
          "A default constructor in Java is a constructor provided by the compiler if no other constructors are explicitly defined. It is a no-argument constructor that initializes the object with default values.",
        explanation:
          "If no constructor is defined in a class, Java provides a default constructor that initializes all fields to their default values (e.g., null for objects, 0 for integers). If any constructor is explicitly defined, the default constructor is not provided unless you define it manually.",
        codeSnippet:
          "class MyClass {\n    // Default constructor is provided by the compiler if no constructor is defined\n    int num;\n    String name;\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MyClass obj = new MyClass();\n        System.out.println(obj.num); // Outputs: 0\n        System.out.println(obj.name); // Outputs: null\n    }\n}",
      },
    },
    {
      content: {
        question: "What is the significance of a static method?",
        answer:
          "A static method belongs to the class rather than to instances of the class, meaning it can be called without creating an object of the class.",
        explanation:
          "Static methods are used for operations that do not require any instance-specific data. They can be accessed using the class name and do not have access to instance variables or instance methods. Static methods are often used for utility or helper methods.",
        codeSnippet:
          "class MathUtils {\n    // Static method\n    static int square(int number) {\n        return number * number;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Calling static method without creating an object\n        int result = MathUtils.square(5);\n        System.out.println(result); // Outputs: 25\n    }\n}",
      },
    },
    {
      content: {
        question: "How do you create immutable objects in Java?",
        answer:
          "Immutable objects in Java are objects whose state cannot be modified after they are created.",
        explanation:
          "To create immutable objects, follow these principles: \n1. Declare the class as `final` to prevent subclassing. \n2. Make all fields `private` and `final`. \n3. Provide a constructor to initialize the fields. \n4. Do not provide setter methods that modify the fields. \n5. Ensure that mutable objects passed to the constructor are copied, not referenced directly.",
        codeSnippet:
          'final class Person {\n    private final String name;\n    private final int age;\n\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person person = new Person("John", 30);\n        System.out.println(person.getName()); // Outputs: John\n        System.out.println(person.getAge());  // Outputs: 30\n    }\n}',
      },
    },
    {
      content: {
        question:
          "Can we create an object for an abstract class? Why or why not?",
        answer: "No, we cannot create an object of an abstract class in Java.",
        explanation:
          "An abstract class is incomplete and cannot be instantiated directly. It may contain abstract methods (methods without a body), which must be implemented by subclasses. Abstract classes are meant to be extended by concrete classes that provide implementations for the abstract methods.",
        codeSnippet:
          'abstract class Animal {\n    abstract void sound();\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Woof");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Animal animal = new Animal(); // Compilation error: Cannot instantiate the abstract class Animal\n        Animal dog = new Dog(); // This is valid\n        dog.sound(); // Outputs: Woof\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is the difference between a shallow copy and a deep copy?",
        answer:
          "A shallow copy creates a new object, but does not create copies of objects referenced by the original object; it copies only the references. A deep copy creates a new object along with copies of all objects referenced by the original object, recursively.",
        explanation:
          "1. **Shallow Copy**: Only the top-level elements are copied. If the original object contains references to other objects, both the original and the copied object will refer to the same objects.\n2. **Deep Copy**: All levels of objects are copied, including objects referenced by the original object, ensuring that the copied object and the original object are completely independent of each other.",
        codeSnippet:
          'import java.util.*;\n\nclass Person {\n    String name;\n    int age;\n\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\npublic class CopyExample {\n    public static void main(String[] args) {\n        Person p1 = new Person("Alice", 30);\n        Person p2 = p1; // Shallow copy (references same object)\n\n        p2.name = "Bob";\n        System.out.println(p1.name); // Outputs: Bob (both p1 and p2 refer to the same object)\n\n        // Deep copy\n        Person p3 = new Person(p1.name, p1.age);\n        p3.name = "Charlie";\n        System.out.println(p1.name); // Outputs: Bob (p1 and p3 are independent)\n        System.out.println(p3.name); // Outputs: Charlie\n    }\n}',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between a shallow copy and a deep copy?",
        compareHeading: [ "Shallow Copy", "Deep Copy"],
        comparision: [
          {
            "Shallow Copy": {
              Definition:
                "A copy of an object where only the references to the original objects are copied, not the actual objects themselves.",
              Purpose:
                "Creates a new object, but the fields of the object still refer to the same memory locations (addresses) as the original object.",
              Memory:
                "The copied object and the original object share references to the same objects in memory.",
              Behavior:
                "Changes made to the mutable objects in the shallow copy also affect the original object, since both point to the same objects.",
              Performance:
                "Faster than deep copy as it only copies references, not the actual data.",
              UseCase:
                "Used when you want to copy an object but are okay with shared references to some components.",
            },
          },
          {
            "Deep Copy": {
              Definition:
                "A copy of an object where both the object and the objects it references are copied recursively, creating new instances of all objects.",
              Purpose:
                "Creates an independent copy of the original object and all of its referenced objects.",
              Memory:
                "The copied object and the original object are entirely separate in memory.",
              Behavior:
                "Changes made to any object in the deep copy do not affect the original object, as they are independent of each other.",
              Performance:
                "Slower than shallow copy, as it requires copying all objects in the object graph.",
              UseCase:
                "Used when you want to create a fully independent copy of an object and its referenced objects.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "What is object cloning in Java?",
        answer:
          "Object cloning in Java is the process of creating an exact copy of an object using the `clone()` method, which is defined in the `Object` class.",
        explanation:
          "To clone an object, the class must implement the `Cloneable` interface. If an object does not implement `Cloneable` and `clone()` is called, it will throw a `CloneNotSupportedException`. The `clone()` method creates a shallow copy of the object. For deep cloning, additional logic is needed to clone the referenced objects as well.",
        codeSnippet:
          'class Person implements Cloneable {\n    String name;\n    int age;\n\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    @Override\n    public Object clone() throws CloneNotSupportedException {\n        return super.clone(); // Shallow copy\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) throws CloneNotSupportedException {\n        Person person1 = new Person("Alice", 25);\n        Person person2 = (Person) person1.clone(); // Cloning\n\n        System.out.println(person1.name); // Outputs: Alice\n        System.out.println(person2.name); // Outputs: Alice\n\n        person2.name = "Bob";\n        System.out.println(person1.name); // Outputs: Alice (original object is not affected)\n        System.out.println(person2.name); // Outputs: Bob\n    }\n}',
      },
    },
    {
      content: {
        question: "What happens if we don’t provide a constructor in a class?",
        answer:
          "If no constructor is provided in a class, Java automatically provides a default constructor with no arguments.",
        explanation:
          "The default constructor initializes the object with default values (e.g., `null` for objects, `0` for primitive data types). If any constructor is explicitly defined by the programmer, the default constructor is not provided unless explicitly written.",
        codeSnippet:
          "class MyClass {\n    int num;\n    String name;\n    // No constructor provided, so default constructor is used\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MyClass obj = new MyClass(); // Default constructor is called\n        System.out.println(obj.num); // Outputs: 0\n        System.out.println(obj.name); // Outputs: null\n    }\n}",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between instance variables and class variables?",
        compareHeading: [ "Instance Variables", "Class Variables"],
        comparision: [
          {
            "Instance Variables": {
              Definition:
                "Variables that are defined inside a class but outside any method, constructor, or block.",
              Scope:
                "Belong to a specific instance of a class, meaning each object has its own copy of these variables.",
              Access: "Accessed via an object of the class.",
              "Default Values":
                "Initialized with default values if not explicitly assigned.",
              Lifetime: "Exist as long as the object exists.",
              UseCase:
                "Used to store data that is specific to an instance of a class.",
            },
          },
          {
            "Class Variables": {
              Definition:
                "Variables that are defined inside a class with the 'static' keyword, meaning they belong to the class itself rather than any particular object.",
              Scope:
                "Shared across all instances of the class. There is only one copy of the variable, regardless of the number of objects.",
              Access: "Accessed via the class name or an object of the class.",
              "Default Values":
                "Initialized with default values if not explicitly assigned.",
              Lifetime: "Exist as long as the class is loaded in the JVM.",
              UseCase:
                "Used to store data that should be shared across all instances of the class, like constants or global settings.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "Can Java support multiple inheritance? If not, why?",
        answer:
          "Java does not support multiple inheritance for classes directly to avoid ambiguity and complexity in the inheritance hierarchy.",
        explanation:
          "In multiple inheritance, a subclass can inherit from more than one class, which can lead to confusion when both parent classes have the same method or field. Java does not allow multiple inheritance with classes to prevent the 'diamond problem' (where two parent classes provide different implementations of the same method). However, Java does support multiple inheritance through interfaces.",
        codeSnippet:
          'class Animal {\n    void eat() {\n        System.out.println("Animal eats");\n    }\n}\n\nclass Bird {\n    void fly() {\n        System.out.println("Bird flies");\n    }\n}\n\n// This will cause a compilation error\n// class Duck extends Animal, Bird { }\n',
      },
    },
    {
      content: {
        question: "How can we achieve multiple inheritance in Java?",
        answer:
          "In Java, multiple inheritance is achieved through interfaces. A class can implement multiple interfaces, thereby inheriting behavior from more than one source.",
        explanation:
          "Java allows a class to implement multiple interfaces, providing a way to achieve multiple inheritance without the complications associated with it. Interfaces can define abstract methods, and the implementing class must provide the concrete implementations. Additionally, interfaces can have default methods.",
        codeSnippet:
          'interface Animal {\n    void eat();\n}\n\ninterface Bird {\n    void fly();\n}\n\nclass Duck implements Animal, Bird {\n    @Override\n    public void eat() {\n        System.out.println("Duck eats");\n    }\n\n    @Override\n    public void fly() {\n        System.out.println("Duck flies");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Duck duck = new Duck();\n        duck.eat(); // Outputs: Duck eats\n        duck.fly(); // Outputs: Duck flies\n    }\n}',
      },
    },
    {
      content: {
        question: "What is abstraction in Java?",
        answer:
          "Abstraction is a process of hiding implementation details and exposing only the essential features of an object.",
        explanation:
          "In Java, abstraction is achieved using abstract classes and interfaces. It helps reduce complexity by focusing on what an object does rather than how it does it.",
        codeSnippet:
          'abstract class Vehicle {\n    abstract void start(); // Abstract method\n}\n\nclass Car extends Vehicle {\n    @Override\n    void start() {\n        System.out.println("Car is starting...");\n    }\n}\n\npublic class AbstractionExample {\n    public static void main(String[] args) {\n        Vehicle myCar = new Car();\n        myCar.start();\n    }\n}',
      },
    },
    {
      content: {
        question: "How does abstraction differ from encapsulation?",
        answer:
          "Abstraction focuses on hiding implementation details, while encapsulation focuses on data hiding and bundling related data and methods together.",
        explanation:
          "Abstraction is achieved using abstract classes and interfaces, while encapsulation is achieved using access modifiers like private, protected, and public.",
        codeSnippet:
          "class BankAccount {\n    private double balance; // Encapsulation (hiding data)\n    \n    public void deposit(double amount) {\n        balance += amount;\n    }\n    \n    public double getBalance() {\n        return balance;\n    }\n}\n",
      },
    },
    {
      content: {
        question: "What are the key benefits of using abstraction?",
        answer:
          "Abstraction provides code reusability, security, scalability, and maintainability.",
        explanation:
          "By exposing only the required details, abstraction helps reduce code complexity, makes changes easier, and ensures better software design.",
      },
    },
    {
      content: {
        question: "How can abstraction be achieved in Java?",
        answer:
          "Abstraction can be achieved using abstract classes and interfaces.",
        explanation:
          "An abstract class provides partial abstraction (some methods may have implementations), while an interface provides 100% abstraction (before Java 8).",
        codeSnippet:
          'interface Animal {\n    void makeSound(); // Abstract method\n}\n\nclass Dog implements Animal {\n    public void makeSound() {\n        System.out.println("Bark");\n    }\n}\n\npublic class InterfaceExample {\n    public static void main(String[] args) {\n        Animal myDog = new Dog();\n        myDog.makeSound();\n    }\n}',
      },
    },
    {
      content: {
        question:
          "Can we create an object of an abstract class? Why or why not?",
        answer: "No, we cannot create an object of an abstract class.",
        explanation:
          "An abstract class is incomplete because it may contain abstract methods without implementations. However, we can create objects of its concrete subclasses.",
      },
    },
    {
      content: {
        question: "What is an abstract method?",
        answer:
          "An abstract method is a method that is declared without an implementation.",
        explanation:
          "An abstract method must be implemented by subclasses of an abstract class.",
        codeSnippet:
          'abstract class Shape {\n    abstract void draw(); // Abstract method\n}\n\nclass Circle extends Shape {\n    @Override\n    void draw() {\n        System.out.println("Drawing a Circle");\n    }\n}',
      },
    },
    {
      content: {
        question: "Can an abstract class have a constructor in Java?",
        answer: "Yes, an abstract class can have a constructor.",
        explanation:
          "Although we cannot instantiate an abstract class, its constructor can be used to initialize common fields when subclasses are instantiated.",
      },
    },
    {
      content: {
        question: "Can an abstract class have static methods?",
        answer: "Yes, an abstract class can have static methods.",
        explanation:
          "Static methods belong to the class itself and are not tied to an instance, so they can be defined in an abstract class.",
      },
    },
    {
      content: {
        question: "Can an abstract class have final methods?",
        answer: "Yes, an abstract class can have final methods.",
        explanation:
          "A `final` method cannot be overridden by subclasses, which means it must have a concrete implementation.",
      },
    },
    {
      content: {
        question:
          "Is it possible to declare an abstract method as private? Why or why not?",
        answer: "No, an abstract method cannot be private.",
        explanation:
          "An abstract method must be accessible to subclasses for implementation, but a `private` method is not accessible outside the class.",
      },
    },
    {
      content: {
        question: "Can an interface contain constructors? Why or why not?",
        answer: "No, an interface cannot contain constructors.",
        explanation:
          "Interfaces do not have instance variables, and objects cannot be created from interfaces, so constructors are not needed.",
      },
    },
    {
      content: {
        question:
          "What happens if an abstract class does not have any abstract methods?",
        answer:
          "An abstract class without abstract methods is still abstract and cannot be instantiated.",
        explanation:
          "This allows developers to prevent instantiation while providing some implemented methods to subclasses.",
      },
    },
    {
      content: {
        question: "Can an abstract class implement an interface?",
        answer: "Yes, an abstract class can implement an interface.",
        explanation:
          "Since an abstract class is not fully defined, it can implement an interface without providing implementations for all methods.",
      },
    },
    {
      content: {
        question: "Can an interface extend multiple interfaces?",
        answer: "Yes, an interface can extend multiple interfaces in Java.",
        explanation:
          "Unlike classes, interfaces support multiple inheritance, allowing them to inherit methods from multiple sources.",
        codeSnippet:
          "interface A {\n    void methodA();\n}\ninterface B {\n    void methodB();\n}\ninterface C extends A, B {\n    void methodC();\n}",
      },
    },
    {
      content: {
        question:
          "What happens if a class implements two interfaces with the same default method?",
        answer:
          "If a class implements two interfaces that have the same default method, the compiler will throw a compilation error due to ambiguity, and the class must explicitly override the method.",
        explanation:
          "When a class implements two interfaces that both provide a default implementation of the same method, it leads to a conflict. The class must resolve this conflict by overriding the method, providing its own implementation, to clarify which version of the method it intends to use.",
        codeSnippet:
          'interface A {\n    default void show() {\n        System.out.println("A\'s show method");\n    }\n}\n\ninterface B {\n    default void show() {\n        System.out.println("B\'s show method");\n    }\n}\n\nclass C implements A, B {\n    @Override\n    public void show() {\n        // Resolving ambiguity by overriding the method\n        System.out.println("C\'s show method");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        C obj = new C();\n        obj.show(); // Outputs: C\'s show method\n    }\n}',
      },
    },
    {
      comparision: {
        question: "What is the difference between extends and implements?",
        compareHeading: [ "extends", "implements"],
        comparision: [
          {
            extends: {
              Definition:
                "Used to create a subclass (child class) from a superclass (parent class) in inheritance.",
              Purpose:
                "Allows a class to inherit the properties and behaviors (methods) of a parent class.",
              UseCase:
                "Used when you want to extend the functionality of an existing class and inherit its fields and methods.",
              Relationship:
                "Establishes an 'is-a' relationship. A subclass is a type of the superclass.",
              "Class Types":
                "Used with classes to create a subclass or with interfaces to create a subclass (interface inheritance).",
              "Multiple Inheritance":
                "Java does not support multiple inheritance with classes but allows it with interfaces.",
            },
          },
          {
            implements: {
              Definition:
                "Used when a class implements an interface, meaning it provides concrete implementations for all the methods declared in the interface.",
              Purpose:
                "To provide the functionality for methods defined in the interface.",
              UseCase:
                "Used when a class wants to adopt a contract (interface) and provide specific behavior for the methods declared in it.",
              Relationship:
                "Establishes a 'can-do' relationship. A class implements the actions described in an interface.",
              "Class Types": "Used only with interfaces, not with classes.",
              "Multiple Inheritance":
                "Java supports multiple inheritance with interfaces (a class can implement multiple interfaces).",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between interface and abstract class?",
        compareHeading: [ "Interface", "Abstract Class"],
        comparision: [
          {
            Interface: {
              Definition:
                "A reference type in Java, similar to a class, but it can only contain method signatures and constants. Methods in an interface are implicitly abstract (except static or default methods).",
              Purpose: "Defines a contract that classes can implement.",
              Methods:
                "Can contain abstract methods (without implementation) and static/default methods (with implementation, since Java 8).",
              Fields: "Can only contain static final variables (constants).",
              Inheritance:
                "A class can implement multiple interfaces (multiple inheritance).",
              Instantiation: "Cannot be instantiated directly.",
              UseCase:
                "Used to define a common behavior for multiple, possibly unrelated classes.",
            },
          },
          {
            "Abstract Class": {
              Definition:
                "A class that cannot be instantiated directly and may contain both abstract methods (without implementation) and concrete methods (with implementation).",
              Purpose:
                "Provides a common base for subclasses, some of which may provide implementation for abstract methods.",
              Methods:
                "Can contain both abstract methods (without implementation) and concrete methods (with implementation).",
              Fields:
                "Can contain instance variables (non-final) and constructors.",
              Inheritance:
                "A class can extend only one abstract class (single inheritance).",
              Instantiation:
                "Cannot be instantiated directly, but can be used as a base class for other classes.",
              UseCase:
                "Used when classes share common functionality and can also have some shared implementation.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "Can we override a static method? Why or why not?",
        answer: "No, we cannot override a static method in Java.",
        explanation:
          "Static methods are associated with the class, not with the instance of the class. They are resolved at compile time, and hence, cannot be overridden. Instead, static methods can be hidden by defining a static method with the same signature in the subclass, but this is called method hiding, not overriding.",
        codeSnippet:
          "class Parent {\n    static void display() {\n        System.out.println(\"Parent's display method\");\n    }\n}\n\nclass Child extends Parent {\n    static void display() {\n        System.out.println(\"Child's display method\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Parent.display(); // Outputs: Parent's display method\n        Child.display(); // Outputs: Child's display method\n    }\n}",
      },
    },
    {
      content: {
        question: "Can a class extend more than one class in Java?",
        answer: "No, Java does not support multiple inheritance for classes.",
        explanation:
          "Java does not allow a class to extend more than one class to avoid ambiguity and complexity, particularly related to method inheritance. This restriction is in place to avoid issues such as the diamond problem. However, Java supports multiple inheritance through interfaces.",
        codeSnippet:
          "// This will cause a compilation error\n// class Child extends ClassA, ClassB { }\n",
      },
    },
    {
      content: {
        question: "What is the use of the final keyword in inheritance?",
        answer:
          "The `final` keyword in inheritance serves to prevent modification, either by preventing method overriding or preventing class subclassing.",
        explanation:
          "1. **Final Class**: If a class is declared as `final`, it cannot be extended (i.e., no subclass can be created from it). \n2. **Final Method**: If a method is declared as `final`, it cannot be overridden by subclasses. \n3. **Final Variable**: A `final` variable cannot be reassigned after initialization.",
        codeSnippet:
          'final class Parent {\n    // This class cannot be subclassed\n    void display() {\n        System.out.println("Parent class");\n    }\n}\n\nclass Child extends Parent { // Compilation error: Cannot subclass the final class Parent\n    void display() { }\n}',
      },
    },
    {
      content: {
        question: "What is the role of the Object class in Java?",
        answer:
          "The `Object` class is the root class of the Java class hierarchy, and all classes in Java inherit from it, either directly or indirectly.",
        explanation:
          "The `Object` class provides several important methods that are inherited by all Java classes, including `equals()`, `hashCode()`, `toString()`, `clone()`, `finalize()`, and `getClass()`. These methods can be overridden in subclasses to provide custom behavior.",
        codeSnippet:
          'class MyClass {\n    @Override\n    public String toString() {\n        return "MyClass instance";\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MyClass obj = new MyClass();\n        System.out.println(obj.toString()); // Outputs: MyClass instance\n    }\n}',
      },
    },
    {
      content: {
        question: "How does Java handle the diamond problem in inheritance?",
        answer:
          "Java avoids the diamond problem by using interfaces instead of multiple class inheritance.",
        explanation:
          "In multiple inheritance, a class may inherit from two classes that have the same method, leading to ambiguity. Java does not allow multiple inheritance of classes to avoid the diamond problem. However, Java allows a class to implement multiple interfaces, and if two interfaces have the same default method, the class must explicitly override the method to resolve the conflict.",
        codeSnippet:
          'interface A {\n    default void show() {\n        System.out.println("A\'s show method");\n    }\n}\n\ninterface B {\n    default void show() {\n        System.out.println("B\'s show method");\n    }\n}\n\nclass C implements A, B {\n    @Override\n    public void show() {\n        // Resolving the conflict by overriding the method\n        System.out.println("C\'s show method");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        C obj = new C();\n        obj.show(); // Outputs: C\'s show method\n    }\n}',
      },
    },
    {
      content: {
        question: "What is runtime polymorphism in Java?",
        answer:
          "Runtime polymorphism, also known as dynamic method dispatch, occurs when a method is called on an object, and the actual method that gets executed is determined at runtime based on the object's runtime type.",
        explanation:
          "Runtime polymorphism allows Java to call overridden methods of a subclass at runtime, even when the object is referred to by a reference variable of the superclass type. This is achieved through method overriding and the use of dynamic method dispatch, where the actual method to be executed is determined at runtime based on the object type.",
        codeSnippet:
          'class Animal {\n    void sound() {\n        System.out.println("Animal makes a sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Dog barks");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal = new Dog(); // Reference of Animal, object of Dog\n        animal.sound(); // Outputs: Dog barks (runtime polymorphism)\n    }\n}',
      },
    },
    {
      content: {
        question: "What is compile-time polymorphism?",
        answer:
          "Compile-time polymorphism, also known as method overloading, occurs when multiple methods with the same name but different parameter lists are defined within the same class.",
        explanation:
          "In compile-time polymorphism, the method to be executed is resolved at compile time based on the method signature (method name and parameter list). It is achieved through method overloading, where multiple methods have the same name but differ in the number, type, or order of parameters.",
        codeSnippet:
          "class Calculator {\n    int add(int a, int b) {\n        return a + b;\n    }\n\n    double add(double a, double b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println(calc.add(2, 3));     // Outputs: 5\n        System.out.println(calc.add(2.5, 3.5)); // Outputs: 6.0\n    }\n}",
      },
    },

    {
      comparision: {
        question:
          "What is the difference between method overloading and constructor overloading?",
        compareHeading: [
          "Feature",
          "Method Overloading",
          "Constructor Overloading",
        ],
        comparision: [
          {
            "Method Overloading": {
              Definition:
                "The process of defining multiple methods with the same name in the same class, but with different parameter types, number of parameters, or both.",
              Purpose:
                "To perform the same action with different types or numbers of arguments, providing flexibility in method usage.",
              "Return Type":
                "May have different return types, but the method signature must differ in the number or type of parameters.",
              Invocation:
                "Called explicitly with arguments that match one of the method signatures.",
              UseCase:
                "Used to define multiple versions of a method to perform similar tasks with different input data.",
            },
          },
          {
            "Constructor Overloading": {
              Definition:
                "The process of defining multiple constructors in the same class, each with different parameters, allowing objects to be initialized in different ways.",
              Purpose:
                "To provide different ways of initializing an object based on various input values.",
              "Return Type": "Constructors do not have a return type.",
              Invocation:
                "Automatically invoked when an object is created using the 'new' keyword, matching the constructor signature based on arguments.",
              UseCase:
                "Used to create objects with different initial states, based on various combinations of arguments.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "Can we overload a method by changing its return type?",
        answer:
          "No, we cannot overload a method by changing only its return type.",
        explanation:
          "In Java, method overloading occurs when two or more methods in the same class have the same name but differ in their parameter list. Changing only the return type does not make a method overloaded, as the method signature in Java is determined by the method name and parameter list, not the return type.",
        codeSnippet:
          "// This will cause a compilation error\n// class Calculator {\n//     int add(int a, int b) {\n//         return a + b;\n//     }\n//     double add(int a, int b) { // Error: Method with the same name and parameters\n//         return (double) (a + b);\n//     }\n// }",
      },
    },
    {
      content: {
        question: "How is method overriding implemented in Java?",
        answer:
          "Method overriding in Java is implemented when a subclass provides its own implementation for a method that is already defined in the superclass.",
        explanation:
          "In method overriding, the method signature in the subclass must match the method signature in the superclass. The subclass method should have the same name, return type, and parameters. The overriding method in the subclass should use the `@Override` annotation for clarity and correctness.",
        codeSnippet:
          'class Animal {\n    void sound() {\n        System.out.println("Animal makes a sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Dog barks");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        animal.sound(); // Outputs: Dog barks (method overriding)\n    }\n}',
      },
    },
    {
      content: {
        question: "What are the rules for method overriding?",
        answer:
          "The rules for method overriding in Java are as follows:\n1. The method in the subclass must have the same name, return type, and parameters as the method in the superclass.\n2. The method in the subclass should not have a more restrictive access modifier than the method in the superclass.\n3. The method in the subclass can have a covariant return type (a subclass of the return type in the superclass).\n4. The method in the subclass can throw fewer or the same exceptions as the superclass method (it cannot throw new or broader exceptions).",
        explanation:
          "Method overriding enables a subclass to provide a specific implementation for a method that is already defined in its superclass. The overriding method is dynamically dispatched based on the object type at runtime.",
        codeSnippet:
          'class Animal {\n    void sound() {\n        System.out.println("Animal makes a sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    public void sound() {\n        System.out.println("Dog barks");\n    }\n}\n',
      },
    },
    {
      content: {
        question:
          "Can we override a private or static method in Java? Why or why not?",
        answer: "No, we cannot override private or static methods in Java.",
        explanation:
          "1. **Private methods**: Private methods are not inherited by subclasses, so they cannot be overridden. They are accessible only within the same class.\n2. **Static methods**: Static methods belong to the class rather than instances. They are not dynamically dispatched, so they cannot be overridden. Instead, they are hidden if defined with the same signature in the subclass.",
        codeSnippet:
          'class Parent {\n    private void show() {\n        System.out.println("Parent\'s private show");\n    }\n\n    static void display() {\n        System.out.println("Parent\'s static display");\n    }\n}\n\nclass Child extends Parent {\n    // Cannot override private method\n    // private void show() {} // Compilation error\n\n    // Static method hiding (not overriding)\n    static void display() {\n        System.out.println("Child\'s static display");\n    }\n}\n',
      },
    },
    {
      content: {
        question: "What is the role of the @Override annotation?",
        answer:
          "The `@Override` annotation in Java indicates that a method is intended to override a method in a superclass.",
        explanation:
          "Using the `@Override` annotation helps to prevent errors such as incorrect method signatures or unintentional overloading. The compiler checks whether the method actually overrides a method in the superclass, and if it does not, it generates an error. This ensures that the method correctly overrides the superclass method.",
        codeSnippet:
          'class Animal {\n    void sound() {\n        System.out.println("Animal makes a sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Dog barks");\n    }\n}\n',
      },
    },
    {
      content: {
        question: "What is covariant return type in Java?",
        answer:
          "Covariant return type in Java refers to the ability of an overridden method to return a type that is a subclass of the return type declared in the superclass method.",
        explanation:
          "Covariant return type allows for more specific return types when overriding methods. For instance, if the superclass method returns a type `A`, the subclass method can return a type `B` if `B` is a subclass of `A`.",
        codeSnippet:
          "class Animal {\n    Animal getObject() {\n        return new Animal();\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    Dog getObject() {\n        return new Dog(); // Covariant return type\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        System.out.println(animal.getObject().getClass().getName()); // Outputs: Dog\n    }\n}",
      },
    },
    {
      content: {
        question: "Can we call the parent class method after overriding it?",
        answer:
          "Yes, we can call the parent class method after overriding it using the `super` keyword.",
        explanation:
          "In a subclass, after overriding a method, we can still call the parent class method using `super.methodName()`. This allows us to invoke the original method from the superclass in addition to the overridden behavior in the subclass.",
        codeSnippet:
          'class Animal {\n    void sound() {\n        System.out.println("Animal makes a sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        super.sound(); // Call parent class method\n        System.out.println("Dog barks");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.sound(); // Outputs: Animal makes a sound\n                        // Dog barks\n    }\n}',
      },
    },
    {
      content: {
        question: "What is encapsulation? How is it implemented in Java?",
        answer:
          "Encapsulation is an object-oriented programming concept where the data (fields) and methods (behavior) are bundled together in a single unit, and access to the data is restricted to the outside world through controlled access mechanisms.",
        explanation:
          "In Java, encapsulation is implemented using access modifiers (private, protected, public) to restrict direct access to fields. Typically, fields are made private, and access to them is provided through public getter and setter methods.",
        codeSnippet:
          "class Person {\n    private String name;\n    private int age;\n\n    // Getter for name\n    public String getName() {\n        return name;\n    }\n\n    // Setter for name\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    // Getter for age\n    public int getAge() {\n        return age;\n    }\n\n    // Setter for age\n    public void setAge(int age) {\n        if(age > 0) {\n            this.age = age;\n        }\n    }\n}",
      },
    },
    {
      content: {
        question: "Why do we use getters and setters in encapsulation?",
        answer:
          "Getters and setters provide controlled access to private fields, allowing you to read (get) or modify (set) the values while maintaining data integrity.",
        explanation:
          "Getters and setters allow us to control how fields are accessed or modified. By using setters, we can implement validation logic to ensure that fields are modified in a controlled manner, and by using getters, we ensure that fields are not modified directly from outside the class, thereby protecting the internal state of an object.",
        codeSnippet:
          "class Person {\n    private String name;\n    private int age;\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void setAge(int age) {\n        if (age > 0) {\n            this.age = age;\n        }\n    }\n}",
      },
    },
    {
      content: {
        question: "What is abstraction? How is it achieved in Java?",
        answer:
          "Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object, reducing complexity and allowing the programmer to focus on high-level functionalities.",
        explanation:
          "In Java, abstraction is achieved using abstract classes and interfaces. An abstract class may have abstract methods (without implementation), and subclasses must provide implementations for those methods. An interface defines a contract that must be implemented by classes that use it, focusing on the behavior rather than the implementation.",
        codeSnippet:
          'abstract class Animal {\n    abstract void sound();\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Dog barks");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        animal.sound(); // Outputs: Dog barks\n    }\n}',
      },
    },
    {
      content: {
        question: "Explain the difference between data hiding and abstraction.",
        answer:
          "Data hiding focuses on restricting access to the internal state of an object, ensuring that data cannot be accessed or modified directly, whereas abstraction focuses on simplifying complex systems by exposing only essential features.",
        explanation:
          "Data hiding is implemented through encapsulation by using access modifiers like private and public. It ensures that sensitive data is not directly accessed by external classes. Abstraction, on the other hand, hides complex implementation details using abstract classes or interfaces, focusing on what an object can do rather than how it does it.",
        codeSnippet:
          '// Data hiding via encapsulation\nclass Person {\n    private String name;\n    public String getName() {\n        return name;\n    }\n    public void setName(String name) {\n        this.name = name;\n    }\n}\n\n// Abstraction via abstract class\nabstract class Shape {\n    abstract void draw();\n}\n\nclass Circle extends Shape {\n    @Override\n    void draw() {\n        System.out.println("Drawing a circle");\n    }\n}',
      },
    },
    {
      comparision: {
        question: "What is the difference between data hiding and abstraction?",
        compareHeading: [ "Data Hiding", "Abstraction"],
        comparision: [
          {
            "Data Hiding": {
              Definition:
                "The concept of restricting access to the internal details of an object and only exposing the necessary parts of the object to the outside world.",
              Purpose:
                "To protect the object's data and ensure that it is accessed or modified in a controlled manner.",
              Mechanism:
                "Achieved using access modifiers (e.g., private, protected, public) to restrict access to data and methods.",
              Focus:
                "Focuses on hiding the internal state of an object from external access and controlling how it is accessed.",
              Implementation:
                "Implemented through getters and setters or other controlled access methods.",
              UseCase:
                "Used to ensure security, maintain data integrity, and encapsulate the complexity of an object.",
            },
          },
          {
            Abstraction: {
              Definition:
                "The concept of hiding the implementation details of an object and exposing only the essential functionality or behavior to the outside world.",
              Purpose:
                "To reduce complexity by focusing on what an object does rather than how it does it.",
              Mechanism:
                "Achieved using abstract classes and interfaces to define the structure and behavior of an object without specifying the implementation.",
              Focus:
                "Focuses on hiding the details of how an object performs its functions while exposing its purpose and functionality.",
              Implementation:
                "Implemented through abstract methods, interfaces, and abstract classes.",
              UseCase:
                "Used to design high-level structures and allow for flexible implementation of specific behaviors.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question:
          "What are access modifiers? How do they support encapsulation?",
        answer:
          "Access modifiers in Java are keywords that define the visibility or accessibility of a class, method, or field. They control the level of access other classes and packages have to the members of a class.",
        explanation:
          "Access modifiers support encapsulation by restricting access to the internal state and behavior of a class. This ensures that only authorized methods and classes can interact with private data, thus protecting the integrity of the object. The most common access modifiers in Java are:\n\n1. **private**: Restricts access to the current class only.\n2. **default** (no modifier): Makes the member accessible only within the same package.\n3. **protected**: Allows access within the same package and by subclasses.\n4. **public**: Makes the member accessible from anywhere.\n\nBy using these modifiers, we can hide the internal details (fields and methods) and expose only the necessary parts of a class to the outside world, ensuring better data control and security.",
        codeSnippet:
          "class Person {\n    private String name; // Only accessible within this class\n    private int age;     // Only accessible within this class\n\n    // Public getter and setter methods allow controlled access\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void setAge(int age) {\n        if (age > 0) {\n            this.age = age;\n        }\n    }\n}",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between public, private, protected, and default access modifiers?",
        compareHeading: ["Public", "Private", "Protected", "Default"],
        comparision: [
          {
            Public: {
              Definition:
                "The most permissive access modifier, allowing access to the variable, method, or class from any other class.",
              Scope:
                "Accessible from any class, regardless of package or subclass.",
              Visibility: "Visible to all classes and packages in the project.",
              UseCase:
                "Used when you want to expose a class, method, or variable to all parts of your program or other programs.",
            },
          },
          {
            Private: {
              Definition:
                "The most restrictive access modifier, allowing access only within the same class where it is declared.",
              Scope: "Accessible only within the same class.",
              Visibility:
                "Not visible to any other classes, even subclasses or classes in the same package.",
              UseCase:
                "Used for data encapsulation to protect internal details of a class and restrict access to its members.",
            },
          },
          {
            Protected: {
              Definition:
                "An access modifier that allows access within the same package and by subclasses (even if they are in different packages).",
              Scope:
                "Accessible within the same package and by subclasses, even if they are in different packages.",
              Visibility:
                "Visible to classes in the same package and subclasses (inherited classes).",
              UseCase:
                "Used when you want to allow subclasses to access members, while restricting access from other classes.",
            },
          },
          {
            Default: {
              Definition:
                "If no access modifier is specified, the default access level is package-private, meaning the member is accessible only within its own package.",
              Scope: "Accessible only within the same package.",
              Visibility:
                "Visible to all classes in the same package, but not to classes outside the package or subclasses.",
              UseCase:
                "Used when you want to restrict access to members within the same package but not across packages.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "How do you define and use abstract methods in Java?",
        answer:
          "An abstract method in Java is a method that is declared without an implementation. Abstract methods must be implemented by subclasses of the class containing the abstract method, unless the subclass is also abstract.",
        explanation:
          "In Java, an abstract method is defined within an abstract class or interface. Abstract methods do not have a body and must be implemented by the concrete subclass. The abstract method declaration uses the `abstract` keyword.",
        codeSnippet:
          'abstract class Animal {\n    abstract void sound(); // Abstract method\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Dog barks"); // Concrete implementation\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        animal.sound(); // Outputs: Dog barks\n    }\n}',
      },
    },
    {
      content: {
        question: "Can a non-abstract class have abstract methods?",
        answer:
          "No, a non-abstract class cannot have abstract methods. Abstract methods must be declared in an abstract class or interface.",
        explanation:
          "In Java, a non-abstract class must provide full implementations for all its methods. An abstract method is a placeholder method that lacks an implementation, so only abstract classes or interfaces can have abstract methods.",
        codeSnippet:
          "// This will cause a compilation error\n// class Person {\n//     abstract void talk(); // Compilation error: method talk() is abstract in a non-abstract class\n// }\n",
      },
    },
    {
      content: {
        question: "What is the purpose of interfaces in Java?",
        answer:
          "The purpose of interfaces in Java is to define a contract that classes can implement. An interface specifies methods that must be implemented by any class that claims to implement the interface, without providing any implementation itself.",
        explanation:
          "Interfaces allow classes to implement multiple behaviors, facilitating loose coupling and providing a way to achieve abstraction. Unlike abstract classes, interfaces cannot have any concrete methods (except default or static methods). An interface allows you to define the 'what' of the behavior, while the implementing class provides the 'how'.",
        codeSnippet:
          'interface Animal {\n    void sound(); // Abstract method\n}\n\nclass Dog implements Animal {\n    @Override\n    public void sound() {\n        System.out.println("Dog barks");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        animal.sound(); // Outputs: Dog barks\n    }\n}',
      },
    },
    {
      content: {
        question: "How is abstraction related to design patterns?",
        answer:
          "Abstraction is a fundamental concept in many design patterns, as it allows the separation of high-level functionality from low-level details. It enables flexibility, reusability, and maintainability in software design.",
        explanation:
          "Abstraction in design patterns hides the complex implementation details while exposing essential functionality. Design patterns such as the Strategy pattern, Template Method pattern, and Observer pattern use abstraction to provide a flexible interface for interaction while keeping internal complexities hidden. Abstraction makes it easier to change the implementation without affecting the higher-level code that relies on it.",
        codeSnippet:
          '// Example of Strategy Pattern using abstraction\ninterface PaymentStrategy {\n    void pay(int amount);\n}\n\nclass CreditCardPayment implements PaymentStrategy {\n    public void pay(int amount) {\n        System.out.println("Paid using Credit Card: " + amount);\n    }\n}\n\nclass PayPalPayment implements PaymentStrategy {\n    public void pay(int amount) {\n        System.out.println("Paid using PayPal: " + amount);\n    }\n}\n\nclass ShoppingCart {\n    private PaymentStrategy paymentStrategy;\n\n    public ShoppingCart(PaymentStrategy paymentStrategy) {\n        this.paymentStrategy = paymentStrategy;\n    }\n\n    public void checkout(int amount) {\n        paymentStrategy.pay(amount);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        ShoppingCart cart = new ShoppingCart(new CreditCardPayment());\n        cart.checkout(100); // Outputs: Paid using Credit Card: 100\n    }\n}',
      },
    },
    {
      "content": {
        "question": "How does Java 8 enhance abstraction with default and static methods in interfaces?",
        "answer": "Java 8 introduced default and static methods in interfaces to provide method implementations.",
        "explanation": "Default methods allow adding new functionality without breaking existing implementations, and static methods enable utility functions in interfaces.",
        "codeSnippet": "interface Vehicle {\n    default void start() { System.out.println(\"Starting vehicle...\"); }\n    static void stop() { System.out.println(\"Stopping vehicle...\"); }\n}"
      }
    },
    {
      "content": {
        "question": "What is the role of functional interfaces in abstraction?",
        "answer": "Functional interfaces provide a single abstract method (SAM) for lambda expressions, improving code conciseness.",
        "explanation": "They enable functional programming by reducing boilerplate code, commonly used in Java 8 features like Streams and Lambdas.",
        "codeSnippet": "@FunctionalInterface\ninterface Greeting {\n    void sayHello();\n}\npublic class Main {\n    public static void main(String[] args) {\n        Greeting g = () -> System.out.println(\"Hello\");\n        g.sayHello();\n    }\n}"
      }
    },
    {
      "content": {
        "question": "When should we prefer an abstract class over an interface?",
        "answer": "Use an abstract class when you need shared state or method implementations; use an interface for pure abstraction.",
        "explanation": "Abstract classes allow fields, constructors, and partially implemented methods, while interfaces ensure complete abstraction."
      }
    },
    {
      "content": {
        "question": "How does abstraction improve software design principles like SOLID?",
        "answer": "Abstraction supports SOLID principles by enabling loose coupling, modularity, and scalability.",
        "explanation": "It aligns with Dependency Inversion (D) by depending on abstractions rather than concrete implementations."
      }
    },
    {
      "content": {
        "question": "How is abstraction implemented in frameworks like Spring and Hibernate?",
        "answer": "Spring and Hibernate use abstraction to simplify complex implementations.",
        "explanation": "Spring abstracts database operations using JDBC templates, and Hibernate abstracts SQL using ORM.",
        "codeSnippet": "@Service\nclass UserService {\n    @Autowired UserRepository repo;\n    public void saveUser(User user) { repo.save(user); }\n}"
      }
    },
  ],
};



const format = {
  content: {
    question: "",
    answer: "",
    explanation: "",
    codeSnippet: "",
    codeSnippetExplanation: "",
  },
  compareHeading: [ "JDK", "JRE", "JVM"],
  comparision: [
    {
      JDK: {
        Definition:
          "Java Development Kit, a software development environment for building Java applications.",
        Components:
          "Includes JRE, compilers, and tools like JavaDoc and Java Debugger.",
        Purpose: "Used for developing, debugging, and compiling Java programs.",
        Includes: "JRE + development tools.",
        UseCase: "For developers writing and testing Java applications.",
      },
    },
    {
      JRE: {
        Definition: "Java Runtime Environment, used to run Java applications.",
        Components: "Includes JVM and libraries necessary for runtime.",
        Purpose: "Provides an environment to execute Java bytecode.",
        Includes: "JVM + runtime libraries.",
        UseCase: "For end-users running Java applications.",
      },
    },
    {
      JVM: {
        Definition:
          "Java Virtual Machine, an abstract machine that executes Java bytecode.",
        Components: "Class loader, execution engine, and runtime interface.",
        Purpose: "Converts bytecode to machine code for execution.",
        Includes: "Part of JRE.",
        UseCase: "Core component for running Java applications.",
      },
    },
  ],
  image: "",
};

export { format };

export default javaOopsQuestions;
