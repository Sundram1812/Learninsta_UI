const java8Questions = {
  questions: [
    {
      content: {
        question: "What are the key features introduced in Java 8?",
        answer:
          "Java 8 introduced several key features including Lambda Expressions, the Stream API, Optional, new Date and Time API, default methods in interfaces, and method references.",
        explanation:
          "These features greatly improved functional programming capabilities, added modern date/time handling, and enhanced ease of working with collections and streams.",
        codeSnippet:
          'import java.util.List;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.forEach(name -> System.out.println(name));\n    }\n}',
      },
    },
    {
      content: {
        question: "What is a Lambda Expression in Java, and how is it used?",
        answer:
          "A Lambda Expression is a concise way to represent an anonymous function or method. It enables passing behavior as parameters to methods, making the code more readable and compact.",
        explanation:
          "Lambda expressions are commonly used in conjunction with functional interfaces, such as those in the `java.util.function` package, and are essential for working with the Stream API.",
        codeSnippet:
          'import java.util.List;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.forEach(name -> System.out.println(name));\n    }\n}',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between anonymous classes and lambda expressions?",
        compareHeading: ["Feature", "Anonymous Classes", "Lambda Expressions"],
        comparision: [
          {
            "Anonymous Classes": {
              Definition:
                "An anonymous class is a class without a name that is defined and instantiated at the same time.",
              Syntax:
                "Uses the 'new' keyword followed by an interface or class implementation.",
              Usage:
                "Used to implement interfaces or extend classes without creating a separate named class.",
              "Access to Variables":
                "Can access final and effectively final local variables.",
              Readability:
                "Can be more verbose compared to lambda expressions, especially with long method implementations.",
              Performance:
                "May have slightly higher overhead due to the creation of a new class and class loader.",
              UseCase:
                "Used when a short, one-off implementation is needed, such as event handling or callback methods.",
            },
          },
          {
            "Lambda Expressions": {
              Definition:
                "A lambda expression is a function that can be passed around and executed, primarily used to implement functional interfaces.",
              Syntax:
                "Consists of parameters, the arrow operator (->), and a body (single or multiple statements).",
              Usage:
                "Used to provide a clear and concise way to express instances of single-method interfaces (functional interfaces).",
              "Access to Variables":
                "Can access final and effectively final local variables, similar to anonymous classes.",
              Readability:
                "More concise and easier to read, especially when only a simple implementation is required.",
              Performance:
                "Typically offers better performance than anonymous classes as it avoids the overhead of class creation.",
              UseCase:
                "Used for simplifying code, especially in cases where passing behavior as arguments is needed (e.g., in stream operations).",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "What is a Functional Interface? Can you give an example?",
        answer:
          "A Functional Interface in Java is an interface that has exactly one abstract method, and it can have multiple default or static methods. It is designed to be used with Lambda expressions.",
        explanation:
          "Functional interfaces are the foundation of functional programming in Java, enabling the use of Lambda expressions and method references.",
        codeSnippet:
          "import java.util.function.Function;\n\npublic class Main {\n    public static void main(String[] args) {\n        Function<Integer, Integer> square = x -> x * x;\n        System.out.println(square.apply(5)); // Output: 25\n    }\n}",
      },
    },
    {
      content: {
        question: "How do you declare and use a Stream in Java 8?",
        answer:
          "In Java 8, a Stream is a sequence of elements supporting sequential and parallel aggregate operations. Streams are typically used for processing collections in a functional style.",
        explanation:
          "Streams allow you to perform operations like filtering, mapping, and collecting in a fluent and declarative manner. You can create a Stream from a collection and apply various operations.",
        codeSnippet:
          'import java.util.List;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.stream()\n             .filter(name -> name.startsWith("A"))\n             .forEach(System.out::println); // Output: Alice\n    }\n}',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between map() and flatMap() in streams?",
        compareHeading: ["Feature", "map()", "flatMap()"],
        comparision: [
          {
            "map()": {
              Definition:
                "Transforms each element of the stream using a provided function and returns a new stream with the transformed elements.",
              Output:
                "Produces a new stream with elements that are the result of applying the given function to each element of the original stream.",
              Usage:
                "Used when each element of the stream is to be transformed into exactly one new element.",
              Behavior:
                "One-to-one transformation (each element maps to exactly one result).",
              Example:
                "Stream.of(1, 2, 3).map(x -> x * 2) results in [2, 4, 6].",
              UseCase:
                "Used when you want to transform elements individually, such as changing object properties or applying a mathematical function.",
            },
          },
          {
            "flatMap()": {
              Definition:
                "Transforms each element into a stream and then flattens the resulting streams into a single stream.",
              Output:
                "Produces a new stream by merging multiple streams (or collections) produced by the mapping function into one stream.",
              Usage:
                "Used when each element of the stream is to be transformed into multiple elements, and you want to flatten them into a single stream.",
              Behavior:
                "One-to-many transformation (each element maps to zero, one, or many elements).",
              Example:
                "Stream.of(1, 2, 3).flatMap(x -> Stream.of(x, x * 2)) results in [1, 2, 2, 4, 3, 6].",
              UseCase:
                "Used when you want to work with collections within streams, such as extracting elements from nested collections (e.g., lists of lists).",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question:
          "What is the purpose of the forEach() method in the Stream API?",
        answer:
          "The `forEach()` method in the Stream API is used to iterate over each element of the stream and perform an action on it.",
        explanation:
          "It is a terminal operation that triggers the processing of the stream and allows you to apply a given action (like printing or modifying the elements).",
        codeSnippet:
          'import java.util.List;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.stream().forEach(name -> System.out.println(name));\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What are default methods in interfaces, and why were they introduced in Java 8?",
        answer:
          "Default methods are methods defined in interfaces with a body (implementation). They were introduced in Java 8 to allow interfaces to evolve without breaking existing implementations.",
        explanation:
          "Before Java 8, interfaces could only have abstract methods. Default methods enable adding new functionality to interfaces while maintaining backward compatibility.",
        codeSnippet:
          'interface MyInterface {\n    default void greet() {\n        System.out.println("Hello");\n    }\n}\n\nclass MyClass implements MyInterface {}\nMyClass obj = new MyClass();\nobj.greet(); // Output: Hello',
      },
    },
    {
      content: {
        question: "What are static methods in interfaces in Java 8?",
        answer:
          "Static methods in interfaces are methods that belong to the interface itself, not to instances of implementing classes. They can be called using the interface name.",
        explanation:
          "Static methods allow utility or helper functions to be part of the interface. They are not inherited by implementing classes.",
        codeSnippet:
          'interface MyInterface {\n    static void show() {\n        System.out.println("Static method in interface");\n    }\n}\n\nMyInterface.show(); // Output: Static method in interface',
      },
    },
    {
      content: {
        question: "How does the Optional class work in Java 8?",
        answer:
          "The `Optional` class is a container that may or may not contain a non-null value. It helps avoid `NullPointerException` by explicitly handling the absence of values.",
        explanation:
          "You can use methods like `isPresent()`, `ifPresent()`, and `orElse()` to check for and handle the presence or absence of a value in an `Optional` object.",
        codeSnippet:
          'import java.util.Optional;\n\npublic class Main {\n    public static void main(String[] args) {\n        Optional<String> name = Optional.ofNullable(null);\n        name.ifPresent(System.out::println); // Nothing will be printed\n        System.out.println(name.orElse("Default Value")); // Output: Default Value\n    }\n}',
      },
    },
    {
      content: {
        question:
          "Can you explain the concept of method references and provide an example?",
        answer:
          "Method references are a shorthand notation for calling a method in Java. They allow you to pass methods as arguments to higher-order functions (like those in the Stream API), improving readability and reducing verbosity.",
        explanation:
          "Method references can be used with instance methods, static methods, and constructors. There are four types of method references: 1) Static method reference, 2) Instance method reference of a particular object, 3) Instance method reference of an arbitrary object, and 4) Constructor reference.",
        codeSnippet:
          'import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.forEach(System.out::println); // Method reference to instance method \'println\'\n    }\n}',
      },
    },

    {
      content: {
        question:
          "What are Collectors in Java 8? Can you give an example of using a Collector?",
        answer:
          "Collectors are utility methods in the `java.util.stream.Collectors` class that provide common reduction operations like accumulating elements into a list, set, or map.",
        explanation:
          "Collectors are used with the Stream API to perform operations like grouping, partitioning, and accumulating elements. The `toList()` collector collects elements into a List.",
        codeSnippet:
          'import java.util.List;\nimport java.util.stream.Collectors;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        List<String> result = names.stream().collect(Collectors.toList());\n        System.out.println(result); // Output: [Alice, Bob, Charlie]\n    }\n}',
      },
    },

    {
      comparision: {
        question:
          "What is the difference between Stream and Collection in Java 8?",
        compareHeading: ["Feature", "Stream", "Collection"],
        comparision: [
          {
            Stream: {
              Definition:
                "A sequence of elements supporting sequential and parallel aggregate operations. Introduced in Java 8 for functional-style operations on collections.",
              Nature:
                "Does not store data. It only provides a mechanism to process data from a source such as a collection.",
              Operations:
                "Supports lazy evaluation. Operations on streams are not executed until a terminal operation is invoked.",
              Mutability:
                "Immutable. Once created, the stream cannot be modified.",
              Access: "Can be accessed sequentially or in parallel.",
              UseCase:
                "Used for performing computations, transformations, filtering, and aggregation of data from collections in a functional programming style.",
            },
          },
          {
            Collection: {
              Definition:
                "A data structure that holds elements and supports operations like add, remove, and iterate. A Collection is part of the Java Collections Framework.",
              Nature:
                "Stores data directly and provides methods for manipulating and accessing that data.",
              Operations:
                "Eager evaluation. Methods are executed immediately when invoked.",
              Mutability:
                "Mutable. Collections can be modified by adding, removing, or updating elements.",
              Access:
                "Always accessed sequentially. Does not support parallel processing directly (though collections can be transformed into streams).",
              UseCase:
                "Used to store, retrieve, and manipulate data in a variety of ways, such as using Lists, Sets, and Maps.",
            },
          },
        ],
        image: "",
      },
    },

    {
      content: {
        question:
          "What is the reduce() method in Java 8 Streams? How does it work?",
        answer:
          "The `reduce()` method in Java 8 is a terminal operation that combines elements of a stream using an associative accumulation function.",
        explanation:
          "It takes an identity value and a binary operator to reduce the stream to a single value, often used for operations like sum, multiplication, or concatenation.",
        codeSnippet:
          "import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4);\n        int sum = numbers.stream().reduce(0, (a, b) -> a + b);\n        System.out.println(sum); // Output: 10\n    }\n}",
      },
    },
    {
      content: {
        question: "How do you perform filtering using Streams in Java 8?",
        answer:
          "Filtering in Java 8 Streams is done using the `filter()` method, which allows you to specify a condition and filter elements based on that condition.",
        explanation:
          "The `filter()` method takes a Predicate (a boolean-valued function) and returns a new stream that only contains elements that satisfy the predicate.",
        codeSnippet:
          'import java.util.List;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.stream().filter(name -> name.startsWith("A")).forEach(System.out::println); // Output: Alice\n    }\n}',
      },
    },
    {
      content: {
        question: "What is Parallel Stream and when should you use it?",
        answer:
          "A Parallel Stream in Java 8 allows processing of stream elements in parallel, utilizing multiple CPU cores to process data concurrently.",
        explanation:
          "Parallel streams are used when operations on large data sets can be parallelized to improve performance. They should be used when the operations are independent and there is no need for synchronization.",
        codeSnippet:
          'import java.util.List;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.parallelStream().forEach(System.out::println); // Output: elements in parallel\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is Optional.isPresent() and Optional.ifPresent() used for?",
        answer:
          "`Optional.isPresent()` checks if a value is present in an `Optional`, and `Optional.ifPresent()` performs an action if the value is present.",
        explanation:
          "`isPresent()` returns a boolean indicating whether the value exists, while `ifPresent()` accepts a `Consumer` and performs the given action if the value is present.",
        codeSnippet:
          'import java.util.Optional;\n\npublic class Main {\n    public static void main(String[] args) {\n        Optional<String> name = Optional.of("Alice");\n        if (name.isPresent()) {\n            System.out.println(name.get()); // Output: Alice\n        }\n        name.ifPresent(System.out::println); // Output: Alice\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is method chaining in Java 8, and how is it implemented in streams?",
        answer:
          "Method chaining is the process of calling multiple methods on the same object, one after the other, in a single line of code.",
        explanation:
          "In Java 8, method chaining is commonly used with streams where each operation returns a new stream, enabling fluent and readable code.",
        codeSnippet:
          'import java.util.List;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.stream()\n             .filter(name -> name.startsWith("A"))\n             .map(String::toUpperCase)\n             .forEach(System.out::println); // Output: ALICE\n    }\n}',
      },
    },
    {
      content: {
        question: "How does Predicate work in Java 8 Streams?",
        answer:
          "A `Predicate` in Java 8 is a functional interface that represents a boolean-valued function. It is commonly used in stream operations like `filter()` to test conditions.",
        explanation:
          "Predicates are used to specify conditions that elements in a stream must meet to be included in the result. They can also be combined using logical operations such as `and()`, `or()`, and `negate()`.",
        codeSnippet:
          'import java.util.List;\nimport java.util.Arrays;\nimport java.util.function.Predicate;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        Predicate<String> startsWithA = name -> name.startsWith("A");\n        names.stream().filter(startsWithA).forEach(System.out::println); // Output: Alice\n    }\n}',
      },
    },
    {
      content: {
        question:
          "Can you explain how to use Collectors.groupingBy() to group data in streams?",
        answer:
          "The `Collectors.groupingBy()` method is a convenient collector in Java 8 used to group elements of a stream by a classifier function. It returns a `Map` where the key is the result of applying the classifier function and the value is a list of items that belong to that group.",
        explanation:
          "You can use `groupingBy()` to classify data based on any property or criteria. It's commonly used when you want to group objects based on specific attributes like age, category, or status.",
        codeSnippet:
          'import java.util.List;\nimport java.util.Map;\nimport java.util.Arrays;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Edward");\n        Map<Integer, List<String>> groupedByLength = names.stream()\n            .collect(Collectors.groupingBy(String::length));\n        System.out.println(groupedByLength); // Output: {3=[Bob], 5=[Alice, David], 7=[Charlie], 6=[Edward]}\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How do you handle NullPointerExceptions using the Optional class in Java 8?",
        answer:
          "The `Optional` class in Java 8 helps avoid `NullPointerExceptions` by providing a container object that may or may not contain a non-null value. You can use methods like `isPresent()`, `ifPresent()`, or `orElse()` to safely handle null values.",
        explanation:
          "Instead of directly checking for null, `Optional` provides a more declarative way to handle potential null values and avoid explicit null checks.",
        codeSnippet:
          'import java.util.Optional;\n\npublic class Main {\n    public static void main(String[] args) {\n        Optional<String> name = Optional.ofNullable(null);\n        name.ifPresent(System.out::println); // Nothing is printed as value is absent\n        String defaultName = name.orElse("Default Name");\n        System.out.println(defaultName); // Output: Default Name\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is the significance of Functional Programming in Java 8? How is it different from the OOP paradigm?",
        answer:
          "Functional programming (FP) in Java 8 emphasizes using pure functions, immutability, and first-class functions. It introduces features like lambda expressions, the Stream API, and `Optional` for better handling of side-effects and more declarative code.",
        explanation:
          "While OOP focuses on objects and their interactions, FP emphasizes functions, transformations, and immutability. Java 8 allows combining both paradigms, offering more flexible and concise code.",
        codeSnippet:
          "import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4);\n        numbers.stream()\n               .map(n -> n * 2)\n               .forEach(System.out::println); // Output: 2 4 6 8\n    }\n}",
      },
    },
    {
      content: {
        question:
          "What is the use of Supplier, Consumer, and Function interfaces in Java 8?",
        answer:
          "In Java 8, `Supplier`, `Consumer`, and `Function` are functional interfaces that represent common operations: `Supplier` provides a value, `Consumer` consumes a value without returning anything, and `Function` transforms a value from one type to another.",
        explanation:
          "`Supplier` is used for lazy evaluation, `Consumer` is used for actions on values (like printing or processing), and `Function` is used for mapping one value to another, often in the Stream API.",
        codeSnippet:
          'import java.util.function.Supplier;\nimport java.util.function.Consumer;\nimport java.util.function.Function;\n\npublic class Main {\n    public static void main(String[] args) {\n        Supplier<String> supplier = () -> "Hello, Java 8";\n        System.out.println(supplier.get()); // Output: Hello, Java 8\n\n        Consumer<String> consumer = s -> System.out.println(s.toUpperCase());\n        consumer.accept("hello"); // Output: HELLO\n\n        Function<Integer, String> function = n -> "Number: " + n;\n        System.out.println(function.apply(5)); // Output: Number: 5\n    }\n}',
      },
    },
    {
      comparision: {
        question:
          "How does Java 8's Date and Time API (java.time package) improve upon the old Date and Calendar classes?",
        compareHeading: [
          "Feature",
          "Old Date/Calendar Classes",
          "Java 8 Date and Time API (java.time)",
        ],
        comparision: [
          {
            "Old Date/Calendar Classes": {
              Definition:
                "The legacy classes for handling date and time in Java, which include Date and Calendar.",
              Problems:
                "Error-prone, thread-unsafe, and difficult to use with complex date-time operations. The Date class is mutable, making it cumbersome in multi-threaded environments.",
              Operations:
                "Date and Calendar require complex manipulation for formatting, parsing, and performing calculations.",
              "Time Zones":
                "Limited support for handling time zones and daylight saving time.",
              Immutability:
                "The Date class is mutable, and the Calendar class is also mutable, which can cause issues in multi-threaded environments.",
              UseCase:
                "Used in early versions of Java but considered outdated due to their limitations in handling modern date-time requirements.",
            },
          },
          {
            "Java 8 Date and Time API (java.time)": {
              Definition:
                "Introduced in Java 8, the java.time package provides a comprehensive and immutable model for handling dates, times, and durations.",
              Improvements:
                "Immutable and thread-safe. Provides rich API for date-time operations, including parsing, formatting, and calculations.",
              Operations:
                "Provides simple, fluent methods for handling date-time calculations, such as adding or subtracting days, months, or years.",
              "Time Zones":
                "Built-in comprehensive support for time zones and daylight saving time, making it easier to manage different regions.",
              Immutability:
                "All classes in java.time are immutable, ensuring better safety and reliability in multi-threaded environments.",
              UseCase:
                "The new Date and Time API is designed to simplify the handling of dates, times, and durations and supports modern, complex date-time operations.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What are CompletableFuture and Future? How do they differ in Java 8?",
        compareHeading: ["Feature", "Future", "CompletableFuture"],
        comparision: [
          {
            Future: {
              Definition:
                "An interface used to represent the result of an asynchronous computation. It allows you to check if the computation is complete and retrieve the result once it's available.",
              Methods:
                "Methods like get(), cancel(), and isDone() allow you to manage and check the status of the computation.",
              Completion:
                "Blocking: The get() method blocks the current thread until the computation completes.",
              Usage:
                "Used for simple asynchronous tasks where you need to retrieve the result at some point later, but it can block the calling thread.",
            },
          },
          {
            CompletableFuture: {
              Definition:
                "A subclass of Future introduced in Java 8 that represents a future result that can be manually completed or combined with other asynchronous tasks.",
              Methods:
                "Supports non-blocking methods like thenApply(), thenAccept(), and thenCompose(), allowing you to chain operations on the result once it's available.",
              Completion:
                "Non-blocking: You can register callbacks to be executed once the computation is complete, without blocking the calling thread.",
              Usage:
                "Used for more complex asynchronous workflows, supporting advanced features like composition and combining multiple asynchronous tasks.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What is the use of the toList(), toSet(), and joining() collectors in Java 8?",
        compareHeading: ["Feature", "toList()", "toSet()", "joining()"],
        comparision: [
          {
            "toList()": {
              Definition:
                "A collector that collects the elements of a stream into a List.",
              Usage:
                "Used when you want to collect the elements of a stream into a List (which preserves insertion order).",
              Output:
                "Returns a List containing all the elements of the stream.",
              Example:
                "List<String> list = stream.collect(Collectors.toList());",
              UseCase:
                "Used when the order of elements needs to be preserved and when duplicates are allowed.",
            },
          },
          {
            "toSet()": {
              Definition:
                "A collector that collects the elements of a stream into a Set.",
              Usage:
                "Used when you want to collect the elements of a stream into a Set (which does not preserve insertion order and eliminates duplicates).",
              Output:
                "Returns a Set containing all unique elements of the stream.",
              Example: "Set<String> set = stream.collect(Collectors.toSet());",
              UseCase:
                "Used when you need a collection of unique elements and order does not matter.",
            },
          },
          {
            "joining()": {
              Definition:
                "A collector that concatenates the elements of a stream into a single String.",
              Usage:
                "Used when you want to join the elements of a stream into a single string, optionally adding a delimiter, prefix, or suffix.",
              Output:
                "Returns a String by concatenating all elements of the stream with an optional delimiter, prefix, and suffix.",
              Example:
                'String result = stream.collect(Collectors.joining(", ", "[", "]")); // Output: [a, b, c]',
              UseCase:
                "Used when you need to produce a single string from a stream, such as creating comma-separated values or forming a string with custom formatting.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "How can Lambda expressions improve performance in Java?",
        answer:
          "Lambda expressions themselves do not directly improve performance but allow for more efficient use of parallel processing, especially when combined with the Stream API. They enable operations like filtering, mapping, and reducing data in a more concise and expressive manner, which can result in cleaner and more optimized code.",
        explanation:
          "By enabling functional programming techniques and making code more modular, lambdas facilitate parallel execution and better usage of multi-core processors, improving overall performance in certain scenarios.",
        codeSnippet:
          "import java.util.List;\nimport java.util.Arrays;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        List<Integer> evenNumbers = numbers.stream()\n            .filter(n -> n % 2 == 0)\n            .collect(Collectors.toList());\n        System.out.println(evenNumbers); // Output: [2, 4, 6, 8, 10]\n    }\n}",
      },
    },
    {
      content: {
        question:
          "How does Stream.collect() work, and what is the use of Collector.of()?",
        answer:
          "The `Stream.collect()` method is a terminal operation in Java 8 Streams that transforms the elements of a stream into a different form, usually a collection like a `List`, `Set`, or `Map`. `Collector.of()` is a method to create a custom collector that can be used to collect data into any desired format, providing more flexibility.",
        explanation:
          "The `collect()` method works by taking a `Collector` that defines how to accumulate the elements. `Collector.of()` allows you to define your custom collection logic by providing three functions: a supplier (initial value), an accumulator (how to add elements), and a combiner (how to merge partial results).",
        codeSnippet:
          "import java.util.stream.Collectors;\nimport java.util.List;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = List.of(1, 2, 3, 4, 5);\n        List<Integer> collected = numbers.stream().collect(Collectors.toList());\n        System.out.println(collected); // Output: [1, 2, 3, 4, 5]\n\n        // Custom collector using Collector.of()\n        List<Integer> customCollected = numbers.stream().collect(Collectors.of(ArrayList::new, List::add, List::addAll));\n        System.out.println(customCollected); // Output: [1, 2, 3, 4, 5]\n    }\n}",
      },
    },
    {
      content: {
        question:
          "How does the functional-style programming approach introduced in Java 8 make code more concise and readable?",
        answer:
          "Functional-style programming in Java 8, enabled by lambdas and the Stream API, makes code more concise and readable by focusing on what needs to be done rather than how it should be done. It allows developers to write declarative code that is shorter, less error-prone, and easier to reason about.",
        explanation:
          "Functional programming avoids the boilerplate code of traditional OOP, like loops and conditionals, by using expressions that transform data in a pipeline. This leads to cleaner and more expressive code that is easier to maintain and debug.",
        codeSnippet:
          "import java.util.List;\nimport java.util.Arrays;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        List<Integer> evenNumbers = numbers.stream()\n            .filter(n -> n % 2 == 0)\n            .map(n -> n * 2)\n            .collect(Collectors.toList());\n        System.out.println(evenNumbers); // Output: [4, 8, 12, 16, 20]\n    }\n}",
      },
    },
    {
      content: {
        question:
          "What are the new default interface methods in Java 8, and how are they different from the old methods?",
        answer:
          "In Java 8, interfaces can now have default methods with an implementation. This allows interfaces to evolve without breaking existing implementations. Unlike abstract methods, which must be implemented by any class that implements the interface, default methods provide a default behavior that can be optionally overridden.",
        explanation:
          "Default methods help achieve backward compatibility, allowing new methods to be added to interfaces without affecting classes that already implement them. This is different from old methods, which could only be abstract and required every implementing class to provide a concrete implementation.",
        codeSnippet:
          'interface MyInterface {\n    default void sayHello() {\n        System.out.println("Hello from default method!");\n    }\n}\n\nclass MyClass implements MyInterface {\n    // No need to override sayHello() unless custom behavior is required\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MyClass obj = new MyClass();\n        obj.sayHello(); // Output: Hello from default method!\n    }\n}',
      },
    },

    {
      content: {
        question:
          "What is the Consumer interface in Java 8, and how is it used?",
        answer:
          "The `Consumer` interface is a functional interface in Java 8 that represents an operation that accepts a single input and returns no result. It is often used to perform actions on objects without producing any output. The primary method in the `Consumer` interface is `accept(T t)`, which performs the operation on the given argument of type `T`.",
        explanation:
          "The `Consumer` interface has a single method `accept(T t)` that accepts an argument and performs an operation on it. It is commonly used in situations like iterating over collections or applying side-effect operations on objects without returning any result. The `forEach()` method of collections, for example, internally uses the `Consumer` interface to perform an operation on each element.",
        codeSnippet:
          'import java.util.function.Consumer;\nimport java.util.List;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Create a Consumer to print a string\n        Consumer<String> printString = s -> System.out.println(s);\n\n        // Use the Consumer to print a value\n        printString.accept("Hello, Consumer!"); // Output: Hello, Consumer!\n\n        // Use Consumer with a list\n        List<String> names = Arrays.asList("John", "Jane", "Doe");\n        names.forEach(printString); // Output: John\n                             //         Jane\n                             //         Doe\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is the Supplier interface in Java 8, and how is it used?",
        answer:
          "The `Supplier` interface in Java 8 is a functional interface that represents a function that supplies a result without taking any input. It is often used when you need to generate or retrieve a value without providing any input. The primary method in the `Supplier` interface is `get()`, which returns a result of type `T`.",
        explanation:
          "The `Supplier` interface has a single method `get()`, which returns a result of type `T`. It is commonly used for lazily providing data or generating values when needed, such as for random number generation, object creation, or returning default values.",
        codeSnippet:
          'import java.util.function.Supplier;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Create a Supplier to supply a default message\n        Supplier<String> defaultMessage = () -> "Hello, Supplier!";\n\n        // Use the Supplier to get the value\n        System.out.println(defaultMessage.get()); // Output: Hello, Supplier!\n\n        // Use Supplier for generating a random number\n        Supplier<Double> randomNumber = () -> Math.random();\n        System.out.println(randomNumber.get()); // Output: Random number between 0.0 and 1.0\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is the Predicate interface in Java 8, and how is it used?",
        answer:
          "The `Predicate` interface is a functional interface in Java 8 that represents a boolean-valued function of one argument. It has a single method `test()` that evaluates a given argument and returns a boolean result.",
        explanation:
          "Predicates are commonly used for filtering data or applying conditional checks. You can use `test()` to evaluate conditions, and combine multiple predicates using methods like `and()`, `or()`, and `negate()`.",
        codeSnippet:
          "import java.util.function.Predicate;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Create a Predicate to check if a number is even\n        Predicate<Integer> isEven = n -> n % 2 == 0;\n\n        // Test the Predicate\n        System.out.println(isEven.test(4)); // Output: true\n        System.out.println(isEven.test(5)); // Output: false\n\n        // Combine Predicates using 'and()'\n        Predicate<Integer> isPositiveEven = isEven.and(n -> n > 0);\n        System.out.println(isPositiveEven.test(4)); // Output: true\n        System.out.println(isPositiveEven.test(-4)); // Output: false\n    }\n}",
      },
    },
    {
      content: {
        question:
          "What is the Function interface in Java 8, and how is it used?",
        answer:
          "The `Function` interface in Java 8 is a functional interface that represents a function that accepts one argument and produces a result. It is used to transform or map data from one form to another. The primary method in the `Function` interface is `apply(T t)`, which accepts an argument of type `T` and returns a result of type `R`.",
        explanation:
          "The `Function` interface provides the method `apply(T t)` to transform or process input of type `T` and produce a result of type `R`. It is often used in functional programming when mapping, transforming, or processing data in streams or other functional contexts. Additional methods like `andThen()` and `compose()` allow function composition.",
        codeSnippet:
          "import java.util.function.Function;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Create a Function to square a number\n        Function<Integer, Integer> square = x -> x * x;\n\n        // Use the Function to apply the operation\n        System.out.println(square.apply(5)); // Output: 25\n\n        // Function composition using 'andThen()'\n        Function<Integer, Integer> addTen = x -> x + 10;\n        Function<Integer, Integer> addTenAndSquare = addTen.andThen(square);\n        System.out.println(addTenAndSquare.apply(5)); // Output: 225 (5 + 10 = 15, 15^2 = 225)\n\n        // Function composition using 'compose()'\n        Function<Integer, Integer> squareAndAddTen = square.compose(addTen);\n        System.out.println(squareAndAddTen.apply(5)); // Output: 225 (5 + 10 = 15, 15^2 = 225)\n    }\n}",
      },
    },

    {
      "content": {
        "question": "Separate Odd And Even Numbers",
        "answer": "Partition a list of integers into odd and even numbers using Java 8 streams.",
        "explanation": "The `partitioningBy` collector splits the stream into two groups: one for even numbers and one for odd numbers.",
        "codeSnippet": "listOfIntegers.stream()\n    .collect(Collectors.partitioningBy(i -> i % 2 == 0));"
      }
    },
    {
      "content": {
        "question": "Remove Duplicate Elements From List",
        "answer": "Use Java 8 streams to remove duplicate elements from a list.",
        "explanation": "The `distinct()` method filters out duplicate values, ensuring that only unique elements are collected.",
        "codeSnippet": "listOfStrings.stream()\n    .distinct()\n    .collect(Collectors.toList());"
      }
    },
    {
      "content": {
        "question": "Frequency Of Each Character In String",
        "answer": "Calculate the frequency of each character in a string using streams.",
        "explanation": "The `groupingBy` collector groups characters and counts their occurrences using `Collectors.counting()`.",
        "codeSnippet": "inputString.chars()\n    .mapToObj(c -> (char) c)\n    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));"
      }
    },
    {
      "content": {
        "question": "Frequency Of Each Element In An Array",
        "answer": "Find the frequency of each element in a list using Java 8 streams.",
        "explanation": "Similar to character frequency, this groups list elements and counts occurrences using `groupingBy`.",
        "codeSnippet": "anyList.stream()\n    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));"
      }
    },
    {
      "content": {
        "question": "Sort The List In Reverse Order",
        "answer": "Sort a list of elements in reverse order using Java 8 streams.",
        "explanation": "The `sorted` method with `Comparator.reverseOrder()` sorts elements in descending order.",
        "codeSnippet": "anyList.stream()\n    .sorted(Comparator.reverseOrder())\n    .forEach(System.out::println);"
      }
    },
    {
      "content": {
        "question": "Join List Of Strings With Prefix, Suffix And Delimiter",
        "answer": "Join a list of strings using a specified delimiter, prefix, and suffix.",
        "explanation": "`Collectors.joining()` concatenates strings with a given delimiter, prefix, and suffix.",
        "codeSnippet": "listOfStrings.stream()\n    .collect(Collectors.joining(\"Delimiter\", \"Prefix\", \"Suffix\"));"
      }
    },
    {
      "content": {
        "question": "Print Multiples Of 5 From The List",
        "answer": "Filter and print multiples of 5 from a list of integers.",
        "explanation": "The `filter` method selects numbers divisible by 5, and `forEach` prints them.",
        "codeSnippet": "listOfIntegers.stream()\n    .filter(i -> i % 5 == 0)\n    .forEach(System.out::println);"
      }
    },
    {
      "content": {
        "question": "Maximum & Minimum In A List",
        "answer": "Find the maximum and minimum elements in a list.",
        "explanation": "The `max` and `min` methods determine the largest and smallest values using a comparator.",
        "codeSnippet": "listOfIntegers.stream().max(Comparator.naturalOrder()).get();\nlistOfIntegers.stream().min(Comparator.naturalOrder()).get();"
      }
    },
    {
      "content": {
        "question": "Merge Two Unsorted Arrays Into Single Sorted Array",
        "answer": "Concatenate two arrays and sort the resulting array.",
        "explanation": "`IntStream.concat()` merges two streams, and `sorted()` orders the result.",
        "codeSnippet": "IntStream.concat(Arrays.stream(a), Arrays.stream(b))\n    .sorted()\n    .toArray();"
      }
    },
    {
      "content": {
        "question": "Anagram Program In Java 8",
        "answer": "Check if two strings are anagrams using Java 8 streams.",
        "explanation": "The strings are converted to uppercase, sorted, and joined. If they match, they are anagrams.",
        "codeSnippet": "s1 = Stream.of(s1.split(\"\"))\n    .map(String::toUpperCase)\n    .sorted()\n    .collect(Collectors.joining());\n\ns2 = Stream.of(s2.split(\"\"))\n    .map(String::toUpperCase)\n    .sorted()\n    .collect(Collectors.joining());\n\nif (s1.equals(s2)) {\n    System.out.println(\"Anagrams\");\n}"
      }
    },
    {
      "content": {
        "question": "Palindrome Program In Java 8",
        "answer": "Check if a string is a palindrome using Java 8 streams.",
        "explanation": "The `noneMatch` method verifies that characters at symmetric positions are equal.",
        "codeSnippet": "IntStream.range(0, str.length() / 2)\n    .noneMatch(i -> str.charAt(i) != str.charAt(str.length() - i - 1));"
      }
    },
    {
      "content": {
        "question": "Find Duplicate Elements From An Array",
        "answer": "Find duplicate elements in an array using Java 8 streams.",
        "explanation": "A `Set` is used to track seen elements, and duplicates are collected into another set.",
        "codeSnippet": "listOfIntegers.stream()\n    .filter(i -> !set.add(i))\n    .collect(Collectors.toSet());"
      }
    },
    {
      "content": {
        "question": "Fibonacci Series",
        "answer": "Generate the Fibonacci series using Java 8 streams.",
        "explanation": "The `iterate` method generates Fibonacci numbers by updating an array with new values.",
        "codeSnippet": "Stream.iterate(new int[]{0, 1}, f -> new int[]{f[1], f[0] + f[1]})\n    .limit(10)\n    .map(f -> f[0])\n    .forEach(i -> System.out.print(i + \" \"));"
      }
    }
    
  ],
};

export default java8Questions;
