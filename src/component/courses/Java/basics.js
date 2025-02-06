const javaBasic = {
  id: 1,
  title: "Core Java - Basics and String Concepts",

  questions: [
    {
      content: {
        question: "What is Java?",
        answer:
          "Java is a high-level, object-oriented, and platform-independent programming language.",
        explanation:
          "Developed by Sun Microsystems (now owned by Oracle), Java is widely used for developing applications ranging from mobile to web to enterprise-level solutions. It follows the principle of 'Write Once, Run Anywhere' (WORA).",
        codeSnippet: `// Example: A simple Java program
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      },
    },
    {
      content: {
        question: "What are the key features of Java?",
        answer:
          "Java has several key features such as object-oriented, platform-independent, secure, robust, multithreaded, portable, and high performance.",
        explanation:
          "These features make Java versatile for different use cases. For example, platform independence ensures the same Java program can run on any OS with a JVM, and robustness ensures better exception handling and runtime checking.",
        codeSnippet: `// Example: Multithreading in Java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running.");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}`,
      },
    },
    {
      content: {
        question: "What is the difference between JDK, JRE, and JVM?",
        answer:
          "JDK (Java Development Kit) is a development environment, JRE (Java Runtime Environment) is the runtime environment, and JVM (Java Virtual Machine) is the engine that executes Java bytecode.",
        explanation:
          "JDK includes tools like compiler and debugger needed for development, while JRE provides the libraries and JVM required to run Java applications. JVM is responsible for converting bytecode to machine code.",
        codeSnippet: `// JDK: Used for development (compiling the code)
javac HelloWorld.java

// JRE: Used for running Java programs
java HelloWorld`,
      },
    },
    {
      content: {
        question: "Why is Java platform-independent?",
        answer:
          "Java is platform-independent because it uses bytecode that can run on any platform with a compatible JVM.",
        explanation:
          "When Java source code is compiled, it is converted into bytecode instead of platform-specific machine code. This bytecode is interpreted by the JVM, which makes Java platform-agnostic.",
        codeSnippet: `// Example: Compiling and running Java code
// 1. Compile the code to generate bytecode (.class file)
javac HelloWorld.java

// 2. Run the bytecode on any platform with JVM
java HelloWorld`,
      },
    },
    {
      content: {
        question: "Explain the concept of 'Write Once, Run Anywhere' (WORA).",
        answer:
          "'Write Once, Run Anywhere' means that Java programs can be written once and executed on any system with a compatible JVM.",
        explanation:
          "This is possible due to the platform-independent bytecode. Once compiled, the bytecode can be interpreted by the JVM of any operating system, avoiding the need for recompilation.",
        codeSnippet: `// Example: Writing once, running anywhere
// Write the program in Windows
javac HelloWorld.java

// Run the bytecode in Linux, macOS, or any other OS with JVM
java HelloWorld`,
      },
    },
    {
      content: {
        question: "What is bytecode in Java?",
        answer:
          "Bytecode is an intermediate representation of Java code that is executed by the JVM.",
        explanation:
          "When Java source code is compiled, it is converted into bytecode (a .class file) by the compiler. Bytecode is platform-independent and can be executed on any platform with a JVM.",
        codeSnippet: `// Example: Bytecode generation
// Compile Java code
javac HelloWorld.java

// Result: HelloWorld.class (bytecode file)
// Execute bytecode
java HelloWorld`,
      },
    },
    {
      content: {
        question: "What are the main differences between Java and C++?",
        answer:
          "Java and C++ differ in several ways, such as memory management, platform independence, and features.",
        explanation:
          "Java has automatic garbage collection, is platform-independent, and does not support pointers, while C++ uses manual memory management, is platform-dependent, and allows pointers. Additionally, Java does not support multiple inheritance directly but uses interfaces.",
        codeSnippet: `// Example: Multiple inheritance in Java using interfaces
interface A {
    void display();
}

interface B {
    void display();
}

class C implements A, B {
    public void display() {
        System.out.println("Multiple inheritance in Java using interfaces.");
    }
}

public class Main {
    public static void main(String[] args) {
        C obj = new C();
        obj.display();
    }
}`,
      },
    },
    {
      "comparision": {
        "question": "What is the difference between JDK, JRE, and JVM?",
        "compareHeading": ["Feature", "JDK", "JRE", "JVM"],
        "comparision": [
          {
            "JDK": {
              "Definition": "Java Development Kit (JDK) is a software development environment used to develop Java applications and applets.",
              "Components": "Includes JRE, development tools (e.g., compiler, debugger), and libraries.",
              "Purpose": "Used by developers to write, compile, and debug Java code.",
              "UseCase": "Needed for Java application development."
            }
          },
          {
            "JRE": {
              "Definition": "Java Runtime Environment (JRE) is a runtime environment that provides the libraries, JVM, and other components to run Java applications.",
              "Components": "Includes JVM and core libraries.",
              "Purpose": "Used to run Java applications but not to develop them.",
              "UseCase": "Needed for executing Java applications."
            }
          },
          {
            "JVM": {
              "Definition": "Java Virtual Machine (JVM) is an abstract machine that provides a runtime environment to execute Java bytecode.",
              "Components": "Interpreter, Just-In-Time (JIT) compiler, garbage collector, etc.",
              "Purpose": "Executes Java bytecode and provides platform independence.",
              "UseCase": "Responsible for running Java programs on any device or OS."
            }
          }
        ],
        "image": ""
      }
    },

    // new Questions
    {
      content: {
        question: "What is the entry point of a Java program?",
        answer: "The entry point of a Java program is the `main` method.",
        explanation:
          "The `main` method is the starting point for the execution of a Java program. It must be declared as `public static void main(String[] args)`.",
        codeSnippet: `
    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }
        `,
      },
    },
    {
      content: {
        question: "What is the purpose of the static keyword in Java?",
        answer:
          "The `static` keyword in Java is used to define class-level members (variables, methods, or blocks) that belong to the class rather than instances of the class.",
        explanation:
          "Static members are shared across all instances of the class and can be accessed directly using the class name, without creating an object.",
        codeSnippet: `
    public class Example {
        static int count = 0; // Static variable
    
        static void display() { // Static method
            System.out.println("Count: " + count);
        }
    
        public static void main(String[] args) {
            Example.display(); // Accessing static method
        }
    }
        `,
      },
    },
    {
      content: {
        question:
          "How do you declare a variable in Java? What are the different data types available?",
        answer:
          "A variable in Java is declared using the syntax: `dataType variableName;`. Java supports primitive and non-primitive data types.",
        explanation:
          "Primitive data types include `int`, `double`, `char`, `boolean`, etc., while non-primitive data types include `String`, arrays, and objects.",
        codeSnippet: `
    public class Main {
        public static void main(String[] args) {
            int age = 25; // Primitive data type
            double salary = 50000.75; // Primitive data type
            char grade = 'A'; // Primitive data type
            boolean isJavaFun = true; // Primitive data type
            String name = "John"; // Non-primitive data type
    
            System.out.println("Name: " + name + ", Age: " + age);
        }
    }
        `,
      },
    },
    {
      content: {
        question: "What is the difference between a class and an object?",
        answer:
          "A class is a blueprint or template for creating objects, while an object is an instance of a class.",
        explanation:
          "A class defines the properties (attributes) and behaviors (methods) that objects of that class will have. An object is a concrete entity created from the class, with its own state and behavior.",
        codeSnippet: `
    // Class definition
    class Car {
        String color; // Attribute
        void drive() { // Method
            System.out.println("The car is driving.");
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Car myCar = new Car(); // Object creation
            myCar.color = "Red"; // Setting attribute
            myCar.drive(); // Calling method
        }
    }
        `,
      },
    },
    {
      content: {
        question:
          "What is the difference between primitive data types and reference data types?",
        answer:
          "Primitive data types store actual values, while reference data types store references (memory addresses) to objects.",
        explanation:
          "Primitive types include `int`, `double`, `char`, `boolean`, etc., and are stored directly in memory. Reference types include `String`, arrays, and objects, and they point to the memory location where the data is stored.",
        codeSnippet: `
    public class Main {
        public static void main(String[] args) {
            int num = 10; // Primitive data type (stores value directly)
            String text = "Hello"; // Reference data type (stores reference to object)
    
            System.out.println("Primitive: " + num);
            System.out.println("Reference: " + text);
        }
    }
        `,
      },
    },
    {
      content: {
        question: "What is autoboxing and unboxing in Java?",
        answer:
          "Autoboxing is the automatic conversion of primitive types to their corresponding wrapper classes, while unboxing is the reverse process.",
        explanation:
          "Autoboxing and unboxing allow seamless conversion between primitive types (e.g., `int`) and their wrapper classes (e.g., `Integer`) without explicit casting.",
        codeSnippet: `
    public class Main {
        public static void main(String[] args) {
            // Autoboxing: int to Integer
            Integer num = 10; // Primitive to wrapper class
    
            // Unboxing: Integer to int
            int value = num; // Wrapper class to primitive
    
            System.out.println("Autoboxed: " + num);
            System.out.println("Unboxed: " + value);
        }
    }
        `,
      },
    },
    {
      content: {
        question:
          "What is a final variable, and how does it differ from a constant?",
        answer:
          "A `final` variable in Java is a variable whose value cannot be changed once assigned. A constant is typically a `static final` variable with a fixed value.",
        explanation:
          "A `final` variable can be assigned only once, either at declaration or in the constructor. A constant is a `static final` variable, meaning it belongs to the class and cannot be modified.",
        codeSnippet: `
    public class Main {
        final int instanceVar = 10; // Final variable (can be assigned once)
        static final double PI = 3.14; // Constant (static final)
    
        public static void main(String[] args) {
            Main obj = new Main();
            System.out.println("Final variable: " + obj.instanceVar);
            System.out.println("Constant: " + PI);
        }
    }
        `,
      },
    },
    {
      content: {
        question:
          "What is the difference between break and continue statements?",
        answer:
          "The `break` statement terminates the loop or switch statement, while the `continue` statement skips the current iteration and proceeds to the next iteration of the loop.",
        explanation:
          "`break` exits the loop entirely, whereas `continue` only skips the remaining code in the current iteration and moves to the next iteration.",
        codeSnippet: `
    public class Main {
        public static void main(String[] args) {
            for (int i = 1; i <= 5; i++) {
                if (i == 3) {
                    break; // Exits the loop when i is 3
                }
                System.out.println("Break: " + i);
            }
    
            for (int i = 1; i <= 5; i++) {
                if (i == 3) {
                    continue; // Skips iteration when i is 3
                }
                System.out.println("Continue: " + i);
            }
        }
    }
        `,
      },
    },
    {
      content: {
        question: "How does the switch statement work in Java?",
        answer:
          "The `switch` statement evaluates an expression and executes the matching `case` block. If no match is found, the `default` block is executed.",
        explanation:
          "The `switch` statement is used for multi-way branching based on the value of an expression. It supports `int`, `char`, `String`, and `enum` types.",
        codeSnippet: `
    public class Main {
        public static void main(String[] args) {
            int day = 3;
            switch (day) {
                case 1:
                    System.out.println("Monday");
                    break;
                case 2:
                    System.out.println("Tuesday");
                    break;
                case 3:
                    System.out.println("Wednesday");
                    break;
                default:
                    System.out.println("Invalid day");
            }
        }
    }
        `,
      },
    },

    {
      content: {
        question: "How do you declare and initialize an array in Java?",
        answer:
          "An array in Java is declared using the syntax `dataType[] arrayName` and initialized using `new dataType[size]` or with explicit values.",
        explanation:
          "Arrays are used to store multiple values of the same type. They can be initialized during declaration or later.",
        codeSnippet: `
    public class Main {
        public static void main(String[] args) {
            int[] numbers = new int[3]; // Declaration and initialization
            numbers[0] = 1; // Assigning values
            numbers[1] = 2;
            numbers[2] = 3;
    
            int[] values = {10, 20, 30}; // Declaration with initialization
            System.out.println("First element: " + values[0]);
        }
    }
          `,
      },
    },
    {
      content: {
        question: "How do you compare two strings in Java?",
        answer:
          "Strings in Java can be compared using the `equals()` method for content comparison or `==` for reference comparison.",
        explanation:
          "The `equals()` method checks if the content of two strings is the same, while `==` checks if they refer to the same memory location.",
        codeSnippet: `
    public class Main {
        public static void main(String[] args) {
            String str1 = "Hello";
            String str2 = new String("Hello");
    
            System.out.println("Using equals(): " + str1.equals(str2)); // true
            System.out.println("Using ==: " + (str1 == str2)); // false
        }
    }
          `,
      },
    },
    {
      content: {
        question: "What is the instanceof operator used for?",
        answer:
          "The `instanceof` operator is used to check if an object is an instance of a specific class or interface.",
        explanation:
          "It returns `true` if the object is an instance of the specified type, otherwise `false`.",
        codeSnippet: `
    class Animal {}
    class Dog extends Animal {}
    
    public class Main {
        public static void main(String[] args) {
            Dog dog = new Dog();
            System.out.println(dog instanceof Animal); // true
        }
    }
          `,
      },
    },
    {
      content: {
        question: "What is synchronization in Java, and why is it important?",
        answer:
          "Synchronization in Java is a mechanism to control access to shared resources by multiple threads to avoid data inconsistency.",
        explanation:
          "It ensures that only one thread can access a shared resource at a time, preventing race conditions.",
        codeSnippet: `
    class Counter {
        private int count = 0;
    
        public synchronized void increment() {
            count++;
        }
    
        public int getCount() {
            return count;
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Counter counter = new Counter();
            Thread t1 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    counter.increment();
                }
            });
            Thread t2 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    counter.increment();
                }
            });
    
            t1.start();
            t2.start();
            try {
                t1.join();
                t2.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
    
            System.out.println("Count: " + counter.getCount());
        }
    }
          `,
      },
    },
    {
      content: {
        question: "What is an exception in Java?",
        answer:
          "An exception in Java is an event that disrupts the normal flow of a program's execution.",
        explanation:
          "Exceptions are objects in Java that represent runtime errors or unexpected conditions. They are used to handle errors gracefully without abruptly terminating the program.",
        codeSnippet: `
    try {
        int result = 10 / 0; // ArithmeticException
    } catch (ArithmeticException e) {
        System.out.println("Exception caught: " + e.getMessage());
    }
          `,
      },
    },
    {
      "content": {
        "question": "What is the final keyword in Java?",
        "answer": "The `final` keyword is used to restrict modification of variables, methods, or classes.",
        "explanation": "A final variable cannot be reassigned, a final method cannot be overridden, and a final class cannot be inherited."
      }
    },
    {
      "content": {
        "question": "What are the different ways we can use final in Java?",
        "answer": "The `final` keyword can be used with variables, methods, and classes.",
        "explanation": "Final variables prevent reassignment, final methods prevent overriding, and final classes prevent inheritance.",
        "codeSnippet": "final class FinalClass {}\nclass Parent {\n    final void show() { System.out.println(\"Final method\"); }\n}\nclass Example {\n    final int value = 10;\n}"
      }
    },
    {
      "content": {
        "question": "Can we declare a class as final? What happens if we do so?",
        "answer": "Yes, a class can be declared as `final`, which prevents it from being subclassed.",
        "explanation": "This is useful for security and design purposes, ensuring a class remains unmodified.",
        "codeSnippet": "final class Vehicle {}\n// class Car extends Vehicle {} // Error: Cannot extend final class"
      }
    },
    {
      "content": {
        "question": "Can we declare a method as final? What does it prevent?",
        "answer": "Yes, a method can be declared as `final`, which prevents subclasses from overriding it.",
        "explanation": "This is useful when you want to enforce a specific behavior in derived classes.",
        "codeSnippet": "class Parent {\n    final void display() { System.out.println(\"Final method\"); }\n}\nclass Child extends Parent {\n    // void display() {} // Error: Cannot override final method\n}"
      }
    },
    {
      "content": {
        "question": "Can we declare a variable as final? What does it mean?",
        "answer": "Yes, a final variable means its value cannot be changed after initialization.",
        "explanation": "This is useful for constants and ensuring immutability.",
        "codeSnippet": "final int MAX_VALUE = 100;\n// MAX_VALUE = 200; // Error: Cannot assign a value to final variable"
      }
    },
    {
      "content": {
        "question": "What is a blank final variable? How can it be initialized?",
        "answer": "A blank final variable is a final variable that is not assigned a value at declaration.",
        "explanation": "It must be initialized in the constructor or an instance block.",
        "codeSnippet": "class Example {\n    final int value;\n    Example(int val) { this.value = val; }\n}"
      }
    },
    {
      "content": {
        "question": "Can we change the value of a final variable?",
        "answer": "No, once a final variable is initialized, its value cannot be changed.",
        "explanation": "The final keyword ensures that the variable remains constant throughout its lifetime.",
        "codeSnippet": "final int MAX_VALUE = 10;\n// MAX_VALUE = 20; // Error: Cannot assign a value to final variable"
      }
    },
    {
      "content": {
        "question": "Can we initialize a final variable inside a constructor?",
        "answer": "Yes, a final variable can be initialized inside a constructor.",
        "explanation": "A final variable must be assigned a value before it is accessed, and the constructor is one way to initialize it.",
        "codeSnippet": "class Example {\n    final int value;\n    Example(int val) { this.value = val; }\n}"
      }
    },
    {
      "content": {
        "question": "Can a final method be overridden in a subclass? Why or why not?",
        "answer": "No, a final method cannot be overridden in a subclass.",
        "explanation": "The final keyword prevents subclass methods from altering the behavior of the method, ensuring consistency.",
        "codeSnippet": "class Parent {\n    final void display() { System.out.println(\"Final method\"); }\n}\nclass Child extends Parent {\n    // void display() {} // Error: Cannot override final method\n}"
      }
    },
    {
      "content": {
        "question": "Can we declare a constructor as final in Java?",
        "answer": "No, constructors cannot be declared as final in Java.",
        "explanation": "Constructors are meant for object initialization and cannot be overridden, so declaring them as final is unnecessary."
      }
    },
    {
      "content": {
        "question": "How does final improve performance in Java?",
        "answer": "The final keyword allows the JVM to optimize method calls and variables by eliminating certain runtime checks.",
        "explanation": "Since the values are constant or methods cannot be overridden, the JVM can apply optimizations like inlining methods.",
        "codeSnippet": "final int MAX_SPEED = 120;\n// JVM can optimize the use of MAX_SPEED because it is constant."
      }
    },
    {
      "content": {
        "question": "Can a final class have child classes?",
        "answer": "No, a final class cannot have child classes.",
        "explanation": "A final class cannot be extended, preventing further inheritance and ensuring its behavior remains unchanged.",
        "codeSnippet": "final class Vehicle {}\n// class Car extends Vehicle {} // Error: Cannot extend final class"
      }
    },
    {
      "content": {
        "question": "Can a final variable be static?",
        "answer": "Yes, a final variable can be static.",
        "explanation": "A static final variable is shared among all instances of the class and cannot be reassigned once initialized.",
        "codeSnippet": "class Example {\n    static final int MAX_LIMIT = 100;\n}"
      }
    },
    {
      "content": {
        "question": "How does the final keyword affect immutability?",
        "answer": "The `final` keyword contributes to immutability by preventing reassignment of variables, ensuring they remain constant.",
        "explanation": "However, for objects to be fully immutable, all their fields must be final, and setters must be omitted.",
        "codeSnippet": "final class Person {\n    final String name;\n    Person(String name) { this.name = name; }\n}"
      }
    },
    {
      "content": {
        "question": "How does final work with objects? Does it make the object immutable?",
        "answer": "The `final` keyword does not make the object immutable, but it prevents the reference from being changed.",
        "explanation": "If a `final` reference is pointing to a mutable object, the object itself can still be modified.",
        "codeSnippet": "final StringBuilder sb = new StringBuilder(\"Hello\");\n// sb = new StringBuilder(\"New\"); // Error: Cannot reassign final reference\nsb.append(\" World\"); // Allowed"
      }
    },
    {
      "content": {
        "question": "How does the final keyword interact with Java memory management?",
        "answer": "The `final` keyword can help the JVM optimize memory usage and performance by making certain assumptions about variables and methods.",
        "explanation": "Final variables are typically stored in a constant pool and can be optimized by the JVM during runtime.",
        "codeSnippet": "final int MAX_SIZE = 100;\n// JVM can optimize accesses to MAX_SIZE by treating it as a constant."
      }
    },
    {
      "content": {
        "question": "What happens if a final variable references a mutable object?",
        "answer": "If a final variable references a mutable object, the reference cannot be changed, but the object's internal state can still be modified.",
        "explanation": "This is because `final` prevents reassignment, not the modification of the object itself.",
        "codeSnippet": "final List<String> list = new ArrayList<>();\nlist.add(\"item\"); // Allowed\n// list = new ArrayList<>(); // Error: Cannot reassign final reference"
      }
    },
    {
      "content": {
        "question": "What is the best use case for final in real-world applications?",
        "answer": "The best use case for `final` is when defining constants, method implementation constraints, and preventing class inheritance.",
        "explanation": "It ensures reliability, stability, and security by making certain elements unmodifiable.",
        "codeSnippet": "final double PI = 3.14159;\n// final class Utility { ... } // Prevent inheritance of utility class"
      }
    },
    {
      "content": {
        "question": "How does the use of final impact multithreading and concurrency in Java?",
        "answer": "`final` improves thread safety by ensuring variables are initialized once and are not reassigned during execution.",
        "explanation": "It helps ensure predictable behavior in multithreaded environments, as final variables are effectively constants after initialization.",
        "codeSnippet": "class Singleton {\n    private final static Singleton instance = new Singleton();\n    private Singleton() {}\n    public static Singleton getInstance() { return instance; }\n}"
      }
    },
    {
      "content": {
        "question": "What is the Object class in Java?",
        "answer": "The `Object` class is the root class of all Java classes, and every class inherits from it either directly or indirectly.",
        "explanation": "It provides essential methods that all Java objects inherit, such as `toString()`, `equals()`, and `hashCode()`.",
        "codeSnippet": "class MyClass {} // Inherits from Object class implicitly"
      }
    },
    {
      "content": {
        "question": "What are the methods defined in the Object class?",
        "answer": "The `Object` class defines several important methods, such as `toString()`, `equals()`, `hashCode()`, `clone()`, `getClass()`, `notify()`, and `wait()`.",
        "explanation": "These methods provide basic functionality for comparison, cloning, and synchronization of objects.",
        "codeSnippet": "Object obj = new Object();\nSystem.out.println(obj.getClass());"
      }
    },
    {
      "content": {
        "question": "What is the significance of the toString() method in the Object class?",
        "answer": "The `toString()` method returns a string representation of the object.",
        "explanation": "It is often overridden to provide a meaningful description of the object’s state or properties.",
        "codeSnippet": "class Person {\n    String name;\n    public String toString() {\n        return \"Person[name=\" + name + \"]\";\n    }\n}"
      }
    },
    {
      "content": {
        "question": "What is the purpose of the equals() method in the Object class? How does it differ from ==?",
        "answer": "The `equals()` method is used to compare the content of two objects, while `==` checks if two references point to the same object.",
        "explanation": "`equals()` should be overridden in user-defined classes to compare object states, while `==` checks reference equality.",
        "codeSnippet": "String str1 = new String(\"hello\");\nString str2 = new String(\"hello\");\nSystem.out.println(str1.equals(str2)); // true\nSystem.out.println(str1 == str2); // false"
      }
    },
    {
      "content": {
        "question": "What does the hashCode() method in the Object class do?",
        "answer": "The `hashCode()` method returns an integer that represents the memory address or content-based hash code of an object.",
        "explanation": "It is used by hash-based collections like `HashMap` to quickly locate objects.",
        "codeSnippet": "Object obj = new Object();\nSystem.out.println(obj.hashCode());"
      }
    },
    {
      "content": {
        "question": "What is the use of the clone() method in the Object class?",
        "answer": "The `clone()` method creates a shallow copy of the object.",
        "explanation": "To use `clone()`, the class must implement `Cloneable` interface to avoid `CloneNotSupportedException`.",
        "codeSnippet": "class Person implements Cloneable {\n    String name;\n    public Object clone() throws CloneNotSupportedException {\n        return super.clone();\n    }\n}"
      }
    },
    {
      "content": {
        "question": "How does the equals() method work when comparing two objects?",
        "answer": "The `equals()` method compares two objects for equality, typically by comparing their fields.",
        "explanation": "The method must be overridden to define what equality means for custom objects, ensuring consistency with `hashCode()`.",
        "codeSnippet": "class Person {\n    String name;\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Person person = (Person) obj;\n        return name.equals(person.name);\n    }\n}"
      }
    },
    {
      "content": {
        "question": "Can we override the equals() and hashCode() methods together? Why is it necessary to do so?",
        "answer": "Yes, we should override both `equals()` and `hashCode()` together to maintain consistency between them.",
        "explanation": "The contract between `equals()` and `hashCode()` ensures that objects that are equal have the same hash code, which is critical for hash-based collections.",
        "codeSnippet": "class Person {\n    String name;\n    public boolean equals(Object obj) {\n        // custom equals logic\n    }\n    public int hashCode() {\n        return name.hashCode();\n    }\n}"
      }
    },
    {
      "content": {
        "question": "What is the contract between equals() and hashCode() methods in Java?",
        "answer": "The contract specifies that if two objects are equal (via `equals()`), they must have the same hash code.",
        "explanation": "This contract is crucial for the correct functioning of hash-based collections, like `HashMap` and `HashSet`.",
        "codeSnippet": "Person p1 = new Person(\"John\");\nPerson p2 = new Person(\"John\");\nSystem.out.println(p1.equals(p2)); // true\nSystem.out.println(p1.hashCode() == p2.hashCode()); // true"
      }
    },
    {
      "content": {
        "question": "What happens if the hashCode() method is not overridden in a class?",
        "answer": "If `hashCode()` is not overridden, the default implementation from `Object` is used, which is based on the memory address of the object.",
        "explanation": "This can lead to incorrect behavior in hash-based collections, as objects that are logically equal may have different hash codes.",
        "codeSnippet": "class Person {\n    String name;\n    // No hashCode() method\n}"
      }
    },
    {
      "content": {
        "question": "Can you explain how hashCode() is used in hash-based collections like HashMap?",
        "answer": "In hash-based collections like `HashMap`, the `hashCode()` method is used to compute the hash bucket index for efficient object retrieval.",
        "explanation": "The hash code is used to quickly locate the object in the collection, improving lookup performance.",
        "codeSnippet": "Map<Person, Integer> map = new HashMap<>();\nPerson p = new Person(\"John\");\nmap.put(p, 1);\nSystem.out.println(map.get(p));"
      }
    }
  ],
};

export default javaBasic;
