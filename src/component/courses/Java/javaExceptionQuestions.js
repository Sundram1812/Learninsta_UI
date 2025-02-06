const javaExceptionQuestions = {
  id: 1,
  title: "Java - Exception",
  questions: [
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
      content: {
        question: "How is an exception different from an error?",
        answer:
          "An exception represents a recoverable issue, while an error represents a serious, non-recoverable issue.",
        explanation:
          "Exceptions are caused by application-level issues like invalid input or missing files. Errors indicate critical system-level problems like memory overflow or JVM errors, which the application typically cannot handle.",
        codeSnippet: `
  // Exception Example
  try {
      int[] arr = {1, 2};
      System.out.println(arr[2]); // ArrayIndexOutOfBoundsException
  } catch (ArrayIndexOutOfBoundsException e) {
      System.out.println("Exception handled.");
  }
  
  // Error Example
  throw new OutOfMemoryError("Simulated error.");
          `,
      },
    },
    {
      content: {
        question:
          "What are the key differences between checked and unchecked exceptions?",
        answer:
          "Checked exceptions are checked at compile-time, while unchecked exceptions are checked at runtime.",
        explanation:
          "Checked exceptions must be declared in the `throws` clause or handled in a try-catch block, while unchecked exceptions (subclasses of `RuntimeException`) do not require explicit handling.",
        codeSnippet: `
  // Checked Exception Example
  try {
      FileReader file = new FileReader("file.txt"); // FileNotFoundException
  } catch (FileNotFoundException e) {
      System.out.println("Exception handled.");
  }
  
  // Unchecked Exception Example
  int result = 10 / 0; // ArithmeticException
          `,
      },
    },
    {
      content: {
        question: "Explain the hierarchy of exceptions in Java.",
        answer:
          "The exception hierarchy in Java starts with the `Throwable` class, which has two main subclasses: `Error` and `Exception`.",
        explanation:
          "`Throwable` is the root class for all exceptions and errors. Errors (e.g., StackOverflowError) represent critical system issues, while exceptions (e.g., IOException) represent recoverable application issues.",
        codeSnippet: `
  // Exception Hierarchy
  Throwable
  ├── Error (e.g., OutOfMemoryError)
  └── Exception
      ├── Checked Exception (e.g., IOException)
      └── RuntimeException (Unchecked Exception, e.g., NullPointerException)
          `,
      },
    },
    {
      content: {
        question: "What is the base class for all exceptions in Java?",
        answer: "The base class for all exceptions in Java is `Throwable`.",
        explanation:
          "`Throwable` is the superclass of both `Error` and `Exception`. It defines common methods like `getMessage()` and `printStackTrace()`.",
        codeSnippet: `
  Throwable t = new Exception("Base Exception");
  System.out.println(t.getMessage()); // Outputs: Base Exception
          `,
      },
    },
    {
      content: {
        question: "What is the purpose of the try-catch block?",
        answer:
          "The try-catch block is used to handle exceptions and prevent the program from terminating abnormally.",
        explanation:
          "The `try` block contains code that might throw an exception, while the `catch` block defines how to handle that exception.",
        codeSnippet: `
  try {
      int result = 10 / 0; // Throws ArithmeticException
  } catch (ArithmeticException e) {
      System.out.println("Exception caught: " + e.getMessage());
  }
          `,
      },
    },
    {
      content: {
        question: "What is the difference between throw and throws in Java?",
        answer:
          "`throw` is used to explicitly throw an exception, while `throws` is used to declare the exceptions a method might throw.",
        explanation:
          "`throw` is used within a method to create an exception object, and `throws` is part of a method signature.",
        codeSnippet: `
  // Using throw
  public void testThrow() {
      throw new IllegalArgumentException("Invalid argument!");
  }
  
  // Using throws
  public void testThrows() throws IOException {
      FileReader file = new FileReader("file.txt");
  }
          `,
      },
    },
    {
      content: {
        question: "Can a try block exist without a catch block?",
        answer:
          "Yes, a try block can exist without a catch block if it is followed by a finally block.",
        explanation:
          "The `finally` block ensures that cleanup code is executed even if an exception is not handled.",
        codeSnippet: `
  try {
      int result = 10 / 2; // No exception thrown
  } finally {
      System.out.println("Finally block executed.");
  }
          `,
      },
    },
    {
      content: {
        question: "What happens if no exception is thrown in a try block?",
        answer:
          "If no exception is thrown in a try block, the catch block is skipped, and execution continues with the next statement.",
        explanation:
          "The catch block is executed only when an exception occurs in the try block. Otherwise, it is bypassed.",
        codeSnippet: `
  try {
      System.out.println("No exception in try block.");
  } catch (Exception e) {
      System.out.println("This will not be executed.");
  }
  System.out.println("Program continues.");
          `,
      },
    },
    {
      content: {
        question:
          "Can we write multiple catch blocks for a single try block? If yes, how does it work?",
        answer:
          "Yes, multiple catch blocks can be used for a single try block to handle different types of exceptions.",
        explanation:
          "The first catch block matching the thrown exception type is executed. Subsequent catch blocks are ignored.",
        codeSnippet: `
  try {
      int result = 10 / 0; // Throws ArithmeticException
  } catch (ArithmeticException e) {
      System.out.println("ArithmeticException handled.");
  } catch (Exception e) {
      System.out.println("General exception handled.");
  }
          `,
      },
    },
    {
      content: {
        question: "What is the purpose of the finally block?",
        answer:
          "The finally block is used to execute cleanup code after a try-catch block, regardless of whether an exception occurs.",
        explanation:
          "It is commonly used to close resources like files, database connections, or sockets.",
        codeSnippet: `
  try {
      FileReader file = new FileReader("file.txt");
  } catch (FileNotFoundException e) {
      System.out.println("Exception caught: " + e.getMessage());
  } finally {
      System.out.println("Cleanup code executed.");
  }
          `,
      },
    },
    {
      content: {
        question: "Can a finally block be skipped?",
        answer:
          "A finally block can be skipped if the JVM exits (e.g., using System.exit()) before the finally block is reached.",
        explanation:
          "Normally, the finally block is always executed, except when the JVM terminates abruptly.",
        codeSnippet: `
  try {
      System.out.println("Try block executed.");
      System.exit(0); // Skips finally block
  } finally {
      System.out.println("This will not be executed.");
  }
          `,
      },
    },
    {
      content: {
        question:
          "What happens if an exception is thrown inside a finally block?",
        answer:
          "If an exception is thrown inside a finally block, it overrides any exception thrown in the try or catch block.",
        explanation:
          "The exception from the finally block is propagated, potentially hiding other exceptions.",
        codeSnippet: `
  try {
      throw new Exception("Exception in try block.");
  } finally {
      throw new RuntimeException("Exception in finally block."); // Overrides previous exception
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the difference between Exception and RuntimeException?",
        answer:
          "Exception is the base class for all exceptions, while RuntimeException is a subclass of Exception used for unchecked exceptions.",
        explanation:
          "Checked exceptions (direct subclasses of Exception) must be explicitly handled, while RuntimeExceptions do not require explicit handling.",
        codeSnippet: `
  // Checked Exception
  try {
      FileReader file = new FileReader("file.txt"); // IOException
  } catch (IOException e) {
      System.out.println("Checked exception handled.");
  }
  
  // Unchecked Exception
  int result = 10 / 0; // RuntimeException (ArithmeticException)
          `,
      },
    },
    {
      content: {
        question: "What are the key differences between Error and Exception?",
        answer:
          "Errors represent critical system-level issues, while exceptions represent recoverable application-level issues.",
        explanation:
          "Errors (e.g., OutOfMemoryError) are beyond the application's control, while exceptions (e.g., IOException) can be caught and handled to recover from the problem.",
        codeSnippet: `
  // Example of Error
  throw new OutOfMemoryError("Critical system issue.");
  
  // Example of Exception
  try {
      throw new IOException("Recoverable application issue.");
  } catch (IOException e) {
      System.out.println("Exception handled.");
  }
          `,
      },
    },

    {
      content: {
        question:
          "What are custom exceptions, and how do you create one in Java?",
        answer:
          "Custom exceptions are user-defined exceptions that extend the `Exception` or `RuntimeException` class.",
        explanation:
          "Custom exceptions allow you to create exceptions that are specific to your application's needs. You can define them by creating a new class that extends one of the built-in exception classes.",
        codeSnippet: `
  public class MyCustomException extends Exception {
      public MyCustomException(String message) {
          super(message);
      }
  }
  
  public class TestCustomException {
      public static void main(String[] args) throws MyCustomException {
          throw new MyCustomException("This is a custom exception!");
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "Can a single catch block handle multiple exception types? How?",
        answer:
          "Yes, a single catch block can handle multiple exception types using the multi-catch syntax (|).",
        explanation:
          "In Java 7 and later, you can catch multiple exceptions in a single catch block by separating them with a pipe (|). This reduces code duplication.",
        codeSnippet: `
  try {
      int result = 10 / 0;
  } catch (ArithmeticException | NullPointerException e) {
      System.out.println("Exception caught: " + e.getMessage());
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the use of the throws keyword in a method declaration?",
        answer:
          "The `throws` keyword is used in a method declaration to specify that the method might throw one or more exceptions.",
        explanation:
          "By declaring exceptions with `throws`, a method notifies the calling code that it may encounter certain exceptions, and those exceptions must be handled or declared by the caller.",
        codeSnippet: `
  public void myMethod() throws IOException {
      throw new IOException("IO Exception occurred.");
  }
          `,
      },
    },
    {
      content: {
        question: "What is the default exception handling mechanism in Java?",
        answer:
          "The default exception handling mechanism in Java is that the JVM will terminate the program if an exception is not caught and handled.",
        explanation:
          "If an exception is thrown and not caught within the method, it is propagated up the call stack. If no catch block handles it, the JVM prints the stack trace and terminates the program.",
        codeSnippet: `
  public class DefaultExceptionHandling {
      public static void main(String[] args) {
          int result = 10 / 0; // ArithmeticException is not handled
      }
  }
          `,
      },
    },
    {
      content: {
        question: "What happens if an exception is not caught?",
        answer:
          "If an exception is not caught, it propagates up the call stack, and if it remains uncaught, the program will terminate.",
        explanation:
          "When an exception is not handled in a method, it is thrown back to the caller, and this continues until the exception is caught or the program exits.",
        codeSnippet: `
  public class UncaughtException {
      public static void main(String[] args) {
          try {
              int result = 10 / 0; // ArithmeticException
          } catch (Exception e) {
              System.out.println("Exception handled.");
          }
      }
  }
          `,
      },
    },
    {
      content: {
        question: "What are the keywords used in exception handling?",
        answer:
          "The keywords are `try`, `catch`, `finally`, `throw`, and `throws`.",
        explanation:
          "`try` defines a block of code to test for exceptions, `catch` handles exceptions, `finally` executes cleanup code, `throw` throws an exception, and `throws` declares exceptions a method might throw.",
        codeSnippet: "",
      },
    },
    {
      content: {
        question: "What is the try-catch-finally block?",
        answer:
          "A `try-catch-finally` block is used to handle exceptions in Java.",
        explanation:
          "The `try` block contains code that might throw an exception, the `catch` block handles the exception, and the `finally` block executes code regardless of whether an exception occurs.",
        codeSnippet: `
    try {
        int result = 10 / 0;
    } catch (ArithmeticException e) {
        System.out.println("Exception caught: " + e.getMessage());
    } finally {
        System.out.println("This will always execute.");
    }
          `,
      },
    },

    {
      comparision: {
        question:
          "What is the difference between checked and unchecked exceptions?",
        compareHeading: [
          "Feature",
          "Checked Exceptions",
          "Unchecked Exceptions",
        ],
        comparision: [
          {
            "Checked Exceptions": {
              Definition: "Exceptions that are checked at compile-time.",
              Handling:
                "Must be either caught using try-catch or declared in the method signature using throws.",
              Examples: "IOException, SQLException, ClassNotFoundException.",
              UseCase:
                "Used for scenarios where recovery is possible, e.g., file not found.",
            },
          },
          {
            "Unchecked Exceptions": {
              Definition: "Exceptions that are checked at runtime.",
              Handling: "Not required to be caught or declared.",
              Examples:
                "NullPointerException, ArrayIndexOutOfBoundsException, ArithmeticException.",
              UseCase:
                "Used for programming errors, e.g., null pointer access.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question: "What is the difference between Error and Exception?",
        compareHeading: [ "Error", "Exception"],
        comparision: [
          {
            Error: {
              Definition:
                "Represents serious issues that are not expected to be handled by the application.",
              Type: "Unchecked (extends Throwable).",
              Examples:
                "OutOfMemoryError, StackOverflowError, VirtualMachineError.",
              UseCase:
                "Indicates severe problems like system crashes or resource exhaustion.",
            },
          },
          {
            Exception: {
              Definition:
                "Represents issues that can be handled by the application.",
              Type: "Can be checked or unchecked (extends Throwable).",
              Examples: "IOException, NullPointerException, SQLException.",
              UseCase:
                "Used for recoverable issues like file not found or invalid input.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "What is the purpose of the finally block?",
        answer:
          "The `finally` block is used to execute code that must run regardless of whether an exception occurs.",
        explanation:
          "It is typically used for cleanup activities like closing files or releasing resources.",
        codeSnippet: "",
      },
    },

    {
      content: {
        question: "How does exception propagation work in Java?",
        answer:
          "Exception propagation in Java occurs when an exception is thrown in a method and is passed up the call stack until it is caught or it reaches the top.",
        explanation:
          "When an exception is thrown, it is passed from the method to the caller. If not caught, it propagates further up the stack to higher methods until it's either handled or reaches the main method, terminating the program.",
        codeSnippet: `
  public class ExceptionPropagation {
      public void method1() throws ArithmeticException {
          method2();
      }
  
      public void method2() throws ArithmeticException {
          int result = 10 / 0; // ArithmeticException
      }
  
      public static void main(String[] args) {
          ExceptionPropagation ep = new ExceptionPropagation();
          try {
              ep.method1();
          } catch (ArithmeticException e) {
              System.out.println("Exception caught in main.");
          }
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the significance of the StackTrace in exception handling?",
        answer:
          "The StackTrace provides detailed information about the sequence of method calls leading to the exception.",
        explanation:
          "The stack trace helps developers understand where the exception occurred, which methods were involved, and the state of the program when the exception was thrown.",
        codeSnippet: `
  try {
      int result = 10 / 0; // ArithmeticException
  } catch (ArithmeticException e) {
      e.printStackTrace(); // Prints the stack trace
  }
          `,
      },
    },
    {
      "comparision": {
        "question": "What is the difference between throw and throws?",
        "compareHeading": [ "throw", "throws"],
        "comparision": [
          {
            "throw": {
              "Definition": "Used to explicitly throw an exception from a method or block.",
              "Usage": "Used inside a method or block to generate an exception.",
              "Exception Type": "Requires an instance of an exception to be thrown.",
              "Handling": "Needs to be handled using try-catch or declared using 'throws'.",
              "UseCase": "Used when you need to generate a custom exception or propagate an exception manually."
            }
          },
          {
            "throws": {
              "Definition": "Used in a method signature to declare that the method may throw one or more exceptions.",
              "Usage": "Used in the method declaration to specify potential exceptions.",
              "Exception Type": "Declares exception types rather than throwing instances.",
              "Handling": "Indicates that the caller of the method must handle the specified exceptions.",
              "UseCase": "Used when a method is expected to throw exceptions and needs to inform the caller."
            }
          }
        ],
        "image": ""
      }
    },
    {
      "comparision": {
        "question": "What is the difference between final, finally, and finalize?",
        "compareHeading": [ "final", "finally", "finalize"],
        "comparision": [
          {
            "final": {
              "Definition": "A keyword used to declare constants, prevent method overriding, and prevent class inheritance.",
              "Usage": "Applied to variables, methods, and classes.",
              "Behavior": "Final variables cannot be reassigned, final methods cannot be overridden, and final classes cannot be inherited.",
              "Handling": "Handled at the compile-time by enforcing restrictions.",
              "UseCase": "Used for creating constants, ensuring immutability, and preventing modifications in inheritance."
            }
          },
          {
            "finally": {
              "Definition": "A block used in exception handling to execute code regardless of whether an exception occurs or not.",
              "Usage": "Used with try-catch blocks.",
              "Behavior": "Ensures execution of cleanup code (e.g., closing resources) after try-catch execution.",
              "Handling": "Runs even if an exception is not caught or if return is used inside try or catch.",
              "UseCase": "Used for resource cleanup (closing files, releasing memory, etc.)."
            }
          },
          {
            "finalize": {
              "Definition": "A method in the Object class that is called by the garbage collector before an object is destroyed.",
              "Usage": "Defined inside a class by overriding the finalize() method.",
              "Behavior": "Runs once before an object is garbage collected, but execution is not guaranteed.",
              "Handling": "Called by the garbage collector, but execution timing is unpredictable.",
              "UseCase": "Used for resource cleanup, but is generally replaced by try-with-resources and explicit resource management."
            }
          }
        ],
        "image": ""
      }
    },
    {
      "comparision": {
        "question": "What is the difference between printStackTrace() and toString() in exception handling?",
        "compareHeading": [ "printStackTrace()", "toString()"],
        "comparision": [
          {
            "printStackTrace()": {
              "Definition": "A method used to print the detailed exception stack trace, which includes the exception type, message, and the sequence of method calls that led to the exception.",
              "Output": "Prints detailed information about the exception, including the stack trace, to the console (stderr).",
              "Purpose": "Helps in debugging by providing a complete trace of where the exception occurred.",
              "Return Type": "Returns nothing (void), directly prints the stack trace to the standard error output.",
              "Usage": "Typically used for debugging to understand the flow of execution before an exception was thrown.",
              "Example": "Exception.printStackTrace();"
            }
          },
          {
            "toString()": {
              "Definition": "A method that returns a string representation of the exception, typically including the exception class name and the exception message.",
              "Output": "Returns a concise message containing the exception class name and message, without the full stack trace.",
              "Purpose": "Provides a brief description of the exception without detailed debugging information.",
              "Return Type": "Returns a String containing the exception class name and message.",
              "Usage": "Used when a short, readable description of the exception is needed instead of a full stack trace.",
              "Example": "System.out.println(exception.toString());"
            }
          }
        ],
        "image": ""
      }
    },

    {
      "content": {
        "question": "What is a StackOverflowError?",
        "answer": "A StackOverflowError is a runtime error that occurs when a program exceeds the stack size limit due to excessive recursion or deep method call chains.",
        "explanation": "It typically happens when a recursive function does not have a proper base condition, causing infinite recursion and eventually exhausting the stack memory.",
        "codeSnippet": "public class StackOverflowExample {\n    public static void recursiveMethod() {\n        recursiveMethod(); // Infinite recursion\n    }\n    public static void main(String[] args) {\n        recursiveMethod();\n    }\n}"
      }
    },
    {
      "content": {
        "question": "What is an OutOfMemoryError?",
        "answer": "An OutOfMemoryError occurs when the Java Virtual Machine (JVM) runs out of memory and cannot allocate more objects.",
        "explanation": "This can happen due to memory leaks, excessive object creation, or improper memory allocation in Java applications.",
        "codeSnippet": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class OutOfMemoryExample {\n    public static void main(String[] args) {\n        List<int[]> list = new ArrayList<>();\n        while (true) {\n            list.add(new int[1000000]); // Keeps allocating memory\n        }\n    }\n}"
      }
    },
    {
      "content": {
        "question": "What is a NoClassDefFoundError?",
        "answer": "A NoClassDefFoundError is an error that occurs when the JVM cannot find a class that was available during compilation but is missing at runtime.",
        "explanation": "This typically happens due to missing class files, incorrect classpath configurations, or runtime dependencies being unavailable.",
        "codeSnippet": "// This error occurs when a compiled class is missing from the runtime classpath.\n// Example:\n// Compile: javac Example.java\n// Run without the .class file: java Example"
      }
    },
    {
      "content": {
        "question": "What is a ClassNotFoundException?",
        "answer": "A ClassNotFoundException is a checked exception that occurs when a class is dynamically loaded using `Class.forName()` or `ClassLoader.loadClass()`, but the class cannot be found.",
        "explanation": "Unlike NoClassDefFoundError, which occurs when a class is missing at runtime, ClassNotFoundException happens specifically when trying to load a class dynamically.",
        "codeSnippet": "public class ClassNotFoundExample {\n    public static void main(String[] args) {\n        try {\n            Class.forName(\"com.example.NonExistentClass\"); // Class does not exist\n        } catch (ClassNotFoundException e) {\n            e.printStackTrace();\n        }\n    }\n}"
      }
    },
    {
      "content": {
        "question": "What is a FileNotFoundException?",
        "answer": "A FileNotFoundException is an exception thrown when an attempt to open a file denoted by a pathname fails because the file does not exist.",
        "explanation": "This usually happens when trying to read a file that is missing, moved, or has incorrect permissions.",
        "codeSnippet": "import java.io.File;\nimport java.io.FileInputStream;\nimport java.io.FileNotFoundException;\n\npublic class FileNotFoundExample {\n    public static void main(String[] args) {\n        try {\n            File file = new File(\"non_existent_file.txt\");\n            FileInputStream fis = new FileInputStream(file);\n        } catch (FileNotFoundException e) {\n            e.printStackTrace();\n        }\n    }\n}"
      }
    },
    {
      "content": {
        "question": "What is an IOException?",
        "answer": "An IOException is a checked exception that signals a failure during input or output operations.",
        "explanation": "It commonly occurs when working with file operations, network communication, or stream operations.",
        "codeSnippet": "import java.io.*;\n\npublic class IOExceptionExample {\n    public static void main(String[] args) {\n        try {\n            BufferedReader reader = new BufferedReader(new FileReader(\"non_existent_file.txt\"));\n            System.out.println(reader.readLine());\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}"
      }
    },
    {
      "content": {
        "question": "What is a SQLException?",
        "answer": "A SQLException is an exception that occurs when there is an issue with executing SQL queries in Java database operations.",
        "explanation": "It can be caused by incorrect SQL syntax, invalid database connections, constraint violations, or accessing non-existent tables or columns.",
        "codeSnippet": "import java.sql.*;\n\npublic class SQLExceptionExample {\n    public static void main(String[] args) {\n        try {\n            Connection conn = DriverManager.getConnection(\"jdbc:mysql://localhost:3306/test\", \"user\", \"password\");\n            Statement stmt = conn.createStatement();\n            ResultSet rs = stmt.executeQuery(\"SELECT * FROM non_existent_table\"); // Table does not exist\n        } catch (SQLException e) {\n            e.printStackTrace();\n        }\n    }\n}"
      }
    },
    {
      "content": {
        "question": "What is a ConcurrentModificationException?",
        "answer": "A ConcurrentModificationException is thrown when a collection is modified while iterating over it using an iterator, but not through the iterator’s own methods.",
        "explanation": "This typically happens when removing elements from a list using a standard `for` loop instead of using an `Iterator`.",
        "codeSnippet": "import java.util.*;\n\npublic class ConcurrentModificationExample {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>(Arrays.asList(\"A\", \"B\", \"C\"));\n        for (String item : list) {\n            if (item.equals(\"B\")) {\n                list.remove(item); // Throws ConcurrentModificationException\n            }\n        }\n    }\n}"
      }
    },
    
    
    {
      content: {
        question: "Explain the concept of try-with-resources.",
        answer:
          "Try-with-resources is a feature introduced in Java 7 that allows automatic closing of resources such as files and streams.",
        explanation:
          "With try-with-resources, resources that implement `AutoCloseable` or `Closeable` are automatically closed at the end of the `try` block, even if an exception occurs.",
        codeSnippet: `
  try (FileReader file = new FileReader("file.txt")) {
      // Use file
  } catch (IOException e) {
      System.out.println("Exception handled.");
  }
          `,
      },
    },
    {
      content: {
        question: "What is the AutoCloseable interface in Java?",
        answer:
          "The `AutoCloseable` interface defines a method `close()` that is used to release resources like file handles or database connections.",
        explanation:
          "Classes that manage resources such as streams or database connections should implement the `AutoCloseable` interface to ensure resources are closed automatically when used in try-with-resources.",
        codeSnippet: `
  public class MyResource implements AutoCloseable {
      public void close() {
          System.out.println("Resource closed.");
      }
  }
  try (MyResource resource = new MyResource()) {
      // Use resource
  }
          `,
      },
    },
    {
      content: {
        question: "How do you rethrow an exception in Java?",
        answer:
          "An exception can be rethrown in Java using the `throw` keyword inside a `catch` block.",
        explanation:
          "Rethrowing an exception allows it to be handled by higher-level methods. It is often done when the method cannot handle the exception but wants to pass it on.",
        codeSnippet: `
  try {
      int result = 10 / 0; // ArithmeticException
  } catch (ArithmeticException e) {
      System.out.println("Exception caught.");
      throw e; // Rethrow the exception
  }
          `,
      },
    },
    {
      content: {
        question: "Can you catch an exception thrown by the finally block?",
        answer:
          "No, exceptions thrown in the `finally` block cannot be caught by a `catch` block in the same try-catch-finally construct.",
        explanation:
          "If an exception occurs in the `finally` block, it overrides any exception thrown earlier in the try or catch blocks.",
        codeSnippet: `
  try {
      int result = 10 / 0; // ArithmeticException
  } finally {
      throw new RuntimeException("Exception in finally block"); // Exception cannot be caught here
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the difference between NoClassDefFoundError and ClassNotFoundException?",
        answer:
          "`NoClassDefFoundError` is an error that occurs when the JVM cannot find a class during runtime, while `ClassNotFoundException` is a checked exception thrown when a class cannot be found dynamically using reflection.",
        explanation:
          "`NoClassDefFoundError` occurs when a class that was available during compile-time is not found during runtime, whereas `ClassNotFoundException` occurs when using methods like `Class.forName()` to load a class that is not available.",
        codeSnippet: `
  // NoClassDefFoundError (runtime error)
  public class Test {
      public static void main(String[] args) {
          // Assuming class 'NonExistentClass' is missing
          NonExistentClass obj = new NonExistentClass();
      }
  }
  
  // ClassNotFoundException (checked exception)
  try {
      Class.forName("NonExistentClass"); // ClassNotFoundException
  } catch (ClassNotFoundException e) {
      e.printStackTrace();
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the IllegalArgumentException, and when should it be used?",
        answer:
          "The `IllegalArgumentException` is an unchecked exception thrown when a method receives an argument that is illegal or inappropriate.",
        explanation:
          "This exception is typically thrown when an argument does not meet the expected conditions, such as when an invalid value is passed to a method.",
        codeSnippet: `
  public void setAge(int age) {
      if (age < 0) {
          throw new IllegalArgumentException("Age cannot be negative.");
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the NullPointerException, and how can it be prevented?",
        answer:
          "A `NullPointerException` occurs when an application tries to use a `null` object reference.",
        explanation:
          "It can be prevented by ensuring that references are not null before performing operations on them.",
        codeSnippet: `
  String str = null;
  if (str != null) {
      System.out.println(str.length()); // Avoid NullPointerException
  }
          `,
      },
    },
    {
      content: {
        question: "How does the assert keyword relate to exception handling?",
        answer:
          "The `assert` keyword is used for debugging purposes to check invariants, and it can throw an `AssertionError` if the condition being asserted is false.",
        explanation:
          "Assertions are typically used during development and testing to catch bugs. If an assertion fails, an `AssertionError` is thrown, which is an unchecked exception.",
        codeSnippet: `
  assert x > 0 : "x must be positive"; // Throws AssertionError if x is not positive
          `,
      },
    },
    {
      content: {
        question: "What are chained exceptions, and how do they work?",
        answer:
          "Chained exceptions allow an exception to be wrapped by another exception, enabling better tracking of the cause of an error.",
        explanation:
          "In Java, a chained exception can be created by passing an existing exception as the second argument to a new exception. This provides more information about the root cause of an error.",
        codeSnippet: `
  try {
      throw new IOException("File not found");
  } catch (IOException e) {
      throw new RuntimeException("Runtime exception occurred", e); // Chained exception
  }
          `,
      },
    },
    {
      content: {
        question: "What is the purpose of the Throwable class in Java?",
        answer:
          "The `Throwable` class is the superclass of all errors and exceptions in Java, and it provides methods for getting details about an exception or error.",
        explanation:
          "The `Throwable` class is the root class from which all error and exception classes inherit. It has methods for handling stack traces and getting exception details.",
        codeSnippet: `
  try {
      throw new Exception("Test exception");
  } catch (Exception e) {
      System.out.println(e.getMessage());
      e.printStackTrace(); // Using Throwable methods
  }
          `,
      },
    },
    {
      content: {
        question: "Can a constructor throw an exception?",
        answer:
          "Yes, constructors can throw exceptions, and they must be declared in the constructor signature using `throws`.",
        explanation:
          "If a constructor cannot complete its task due to an error (e.g., invalid argument), it can throw an exception, which must be caught or declared by the calling code.",
        codeSnippet: `
  public class MyClass {
      public MyClass() throws IOException {
          throw new IOException("Constructor failed");
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the difference between try-catch-finally and try-with-resources?",
        answer:
          "The main difference is that try-with-resources automatically handles closing resources that implement `AutoCloseable`.",
        explanation:
          "In a traditional `try-catch-finally` block, you manually close resources. In `try-with-resources`, the resources are automatically closed when the `try` block completes.",
        codeSnippet: `
  try (FileReader fr = new FileReader("file.txt")) {
      // Use the file
  } catch (IOException e) {
      e.printStackTrace();
  }
  // No need for a finally block to close the resource
          `,
      },
    },
    {
      content: {
        question: "How do you handle exceptions in multithreading?",
        answer:
          "Exceptions in multithreading are typically handled within each thread, and can be propagated back to the main thread or logged.",
        explanation:
          "Each thread can catch its own exceptions, and any uncaught exceptions can be captured by `Thread.setDefaultUncaughtExceptionHandler` or similar methods.",
        codeSnippet: `
  Thread thread = new Thread(() -> {
      try {
          throw new RuntimeException("Exception in thread");
      } catch (Exception e) {
          System.out.println("Handled in thread");
      }
  });
  thread.start();
          `,
      },
    },
    {
      content: {
        question: "What is the InterruptedException, and when is it thrown?",
        answer:
          "The `InterruptedException` is thrown when a thread is waiting, sleeping, or otherwise paused, and another thread interrupts it.",
        explanation:
          "This exception is typically thrown when a thread that is in a blocking state (e.g., sleep or wait) is interrupted by another thread, signaling that it should stop what it is doing.",
        codeSnippet: `
  Thread.sleep(1000); // Can throw InterruptedException
  Thread.currentThread().interrupt(); // Interrupts the thread
          `,
      },
    },
    {
      content: {
        question:
          "What are the differences between final, finally, and finalize()?",
        answer:
          "`final` is used to declare constants, `finally` is used to execute code after a try-catch block, and `finalize()` is a method used for object cleanup before garbage collection.",
        explanation:
          "`final` is used for variables, methods, and classes that cannot be modified. `finally` is a block that always executes after a try-catch, and `finalize()` is a method called before an object is garbage collected.",
        codeSnippet: `
  final int x = 10; // final variable
  try {
      // code
  } finally {
      // always executed
  }
  protected void finalize() {
      // cleanup code
  }
          `,
      },
    },
    {
      content: {
        question: "How does the java.util.logging package handle exceptions?",
        answer:
          "The `java.util.logging` package provides tools to log exceptions, including stack traces, to various output streams or files.",
        explanation:
          "You can use `Logger` to log exceptions and their stack traces. This is useful for debugging and tracking errors in production systems.",
        codeSnippet: `
  import java.util.logging.*;
  
  Logger logger = Logger.getLogger(MyClass.class.getName());
  try {
      throw new Exception("Test exception");
  } catch (Exception e) {
      logger.log(Level.SEVERE, "Exception occurred", e);
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is a suppressed exception, and how is it handled in Java?",
        answer:
          "A suppressed exception occurs when an exception is thrown in a `finally` block, but it does not replace the original exception.",
        explanation:
          "Suppressed exceptions are accessible through the `getSuppressed()` method, which is available in `Throwable`. They occur when exceptions are thrown in `finally` blocks during resource closing.",
        codeSnippet: `
  try (FileReader fr = new FileReader("file.txt")) {
      // code
  } catch (IOException e) {
      System.out.println("Exception caught");
      for (Throwable t : e.getSuppressed()) {
          System.out.println("Suppressed: " + t.getMessage());
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "How would you design an application with global exception handling?",
        answer:
          "You can implement global exception handling by using a central handler, such as `Thread.setDefaultUncaughtExceptionHandler` or an exception handler for a web application (e.g., `@ControllerAdvice` in Spring).",
        explanation:
          "A global handler can catch exceptions across the application, logging them, displaying error messages, or handling them in a consistent manner.",
        codeSnippet: `
  Thread.setDefaultUncaughtExceptionHandler((thread, throwable) -> {
      System.out.println("Global handler: " + throwable.getMessage());
  });
          `,
      },
    },
    {
      content: {
        question:
          "What are some best practices for handling exceptions in Java?",
        answer:
          "Some best practices include catching only specific exceptions, not swallowing exceptions, logging exceptions, and using custom exceptions where appropriate.",
        explanation:
          "It’s important to handle exceptions with care. Catching specific exceptions is better than catching `Exception`, and logging is crucial for diagnosing issues.",
        codeSnippet: `
  try {
      int result = 10 / 0;
  } catch (ArithmeticException e) {
      System.out.println("Handled exception: " + e.getMessage());
      logger.log(Level.SEVERE, "Exception caught", e);
  }
          `,
      },
    },
    {
      content: {
        question: "How does exception handling affect performance in Java?",
        answer:
          "Exception handling can impact performance, especially when exceptions are thrown frequently, as they involve additional processing like stack trace generation.",
        explanation:
          "While exceptions are useful for error handling, they should not be used for normal control flow, as creating and throwing exceptions can be costly in terms of performance.",
        codeSnippet: `
  try {
      // Normal code execution
  } catch (Exception e) {
      // Exception handling
  }
          `,
      },
    },
    {
      content: {
        question: "What are phantom exceptions?",
        answer:
          "Phantom exceptions refer to exceptions that are thrown indirectly, often as a result of low-level system operations or from libraries.",
        explanation:
          "These exceptions might not be explicitly thrown by the application but occur as a side effect of background operations like garbage collection.",
        codeSnippet: `
  try {
      // Phantom exception might occur due to system-level operations
  } catch (SomeException e) {
      System.out.println("Phantom exception caught");
  }
          `,
      },
    },
    {
      content: {
        question:
          "Can you override a method and make it throw fewer exceptions?",
        answer:
          "Yes, a subclass can override a method and throw fewer exceptions than the superclass method, as long as the exceptions are not declared as checked exceptions.",
        explanation:
          "This is allowed because the subclass is narrowing the scope of exceptions it may throw, which is a valid design choice in exception handling.",
        codeSnippet: `
  @Override
  public void myMethod() throws IOException { // Can throw fewer exceptions than the superclass
      // Implementation
  }
          `,
      },
    },
    {
      content: {
        question:
          "How does exception handling work in functional programming (e.g., using Streams or CompletableFuture)?",
        answer:
          "In functional programming, exceptions can be handled using techniques like `try-catch` within lambda expressions or using specific methods in the `CompletableFuture` API.",
        explanation:
          "Functional programming paradigms in Java allow handling exceptions with functional interfaces or using `Optional` and `CompletableFuture` to capture and process errors in a more declarative manner.",
        codeSnippet: `
  CompletableFuture.supplyAsync(() -> {
      if (true) throw new RuntimeException("Async error");
      return "Success";
  }).exceptionally(e -> {
      System.out.println(e.getMessage());
      return "Fallback";
  });
          `,
      },
    },
    {
      content: {
        question: "What happens if you throw an exception in a static block?",
        answer:
          "If an exception is thrown in a static block, the class fails to load, resulting in a `ExceptionInInitializerError`.",
        explanation:
          "A static block is executed when a class is loaded, so any exception that occurs in the static block will prevent the class from being initialized. If it's a checked exception, it must be handled in the static block.",
        codeSnippet: `
  public class TestClass {
      static {
          if (true) {
              throw new RuntimeException("Exception in static block");
          }
      }
  
      public static void main(String[] args) {
          try {
              new TestClass();
          } catch (ExceptionInInitializerError e) {
              System.out.println("Caught: " + e.getCause());
          }
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "How can you handle exceptions when working with file I/O in Java?",
        answer:
          "You can handle exceptions in file I/O using try-catch blocks or try-with-resources to automatically close resources.",
        explanation:
          "File I/O operations often throw `IOException` or its subclasses. Using try-with-resources ensures that file streams are closed properly even if an exception occurs.",
        codeSnippet: `
  import java.io.*;
  
  public class FileExample {
      public static void main(String[] args) {
          try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
              String line;
              while ((line = reader.readLine()) != null) {
                  System.out.println(line);
              }
          } catch (FileNotFoundException e) {
              System.out.println("File not found: " + e.getMessage());
          } catch (IOException e) {
              System.out.println("I/O error: " + e.getMessage());
          }
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the order of execution when an exception is thrown inside nested try-catch-finally blocks?",
        answer:
          "When an exception is thrown inside nested try-catch-finally blocks, control moves to the nearest enclosing catch block. Finally blocks are executed in reverse order of nesting.",
        explanation:
          "Each `finally` block is executed after its corresponding try-catch, even if an exception propagates to an outer block.",
        codeSnippet: `
  public class NestedTryCatch {
      public static void main(String[] args) {
          try {
              System.out.println("Outer try block");
              try {
                  System.out.println("Inner try block");
                  throw new RuntimeException("Exception in inner try");
              } catch (RuntimeException e) {
                  System.out.println("Caught in inner catch: " + e.getMessage());
                  throw e; // Rethrow exception
              } finally {
                  System.out.println("Inner finally block");
              }
          } catch (Exception e) {
              System.out.println("Caught in outer catch: " + e.getMessage());
          } finally {
              System.out.println("Outer finally block");
          }
      }
  }
          `,
      },
    },
    {
      content: {
        question: "How do you log exceptions in a Java application?",
        answer:
          "Exceptions in a Java application can be logged using logging frameworks like `java.util.logging`, `Log4j`, or `SLF4J`.",
        explanation:
          "Logging exceptions is a best practice to help with debugging and tracking issues in production. Use logging frameworks to log error messages and stack traces.",
        codeSnippet: `
  import java.util.logging.*;
  
  public class LoggingExample {
      private static final Logger logger = Logger.getLogger(LoggingExample.class.getName());
  
      public static void main(String[] args) {
          try {
              throw new RuntimeException("Test exception");
          } catch (RuntimeException e) {
              logger.log(Level.SEVERE, "Exception occurred", e);
          }
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "Write a program to demonstrate custom exception handling with a real-world example.",
        answer:
          "A custom exception can be created by extending the `Exception` or `RuntimeException` class. Here's an example demonstrating insufficient balance handling in a bank account.",
        explanation:
          "This example creates a custom exception `InsufficientFundsException` to handle situations where a user tries to withdraw more money than available in their account.",
        codeSnippet: `
  class InsufficientFundsException extends Exception {
      public InsufficientFundsException(String message) {
          super(message);
      }
  }
  
  class BankAccount {
      private double balance;
  
      public BankAccount(double initialBalance) {
          this.balance = initialBalance;
      }
  
      public void withdraw(double amount) throws InsufficientFundsException {
          if (amount > balance) {
              throw new InsufficientFundsException("Insufficient funds. Available balance: " + balance);
          }
          balance -= amount;
          System.out.println("Withdrawal successful. Remaining balance: " + balance);
      }
  }
  
  public class CustomExceptionExample {
      public static void main(String[] args) {
          BankAccount account = new BankAccount(500);
  
          try {
              account.withdraw(600);
          } catch (InsufficientFundsException e) {
              System.out.println("Exception: " + e.getMessage());
          }
      }
  }
          `,
      },
    },
    {
      "content": {
        "question": "Write a program to demonstrate try-catch-finally.",
        "answer": "A try-catch-finally block is used to handle exceptions in Java. The `finally` block always executes, regardless of whether an exception is thrown or not.",
        "explanation": "The `try` block contains code that may throw an exception, the `catch` block handles the exception, and the `finally` block executes cleanup code such as closing resources.",
        "codeSnippet": "public class TryCatchFinallyExample {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0; // This will throw an ArithmeticException\n        } catch (ArithmeticException e) {\n            System.out.println(\"Exception caught: \" + e.getMessage());\n        } finally {\n            System.out.println(\"Finally block executed\");\n        }\n    }\n}"
      }
    },
    {
      "content": {
        "question": "Write a program to demonstrate try-with-resources.",
        "answer": "The try-with-resources statement automatically closes resources that implement the `AutoCloseable` interface.",
        "explanation": "This feature, introduced in Java 7, ensures that resources like files or database connections are properly closed, even if an exception occurs.",
        "codeSnippet": "import java.io.*;\n\npublic class TryWithResourcesExample {\n    public static void main(String[] args) {\n        try (BufferedReader br = new BufferedReader(new FileReader(\"sample.txt\"))) {\n            System.out.println(br.readLine());\n        } catch (IOException e) {\n            System.out.println(\"Exception: \" + e.getMessage());\n        }\n    }\n}"
      }
    },
    {
      "content": {
        "question": "Write a program to create a custom exception.",
        "answer": "A custom exception is a user-defined exception class that extends `Exception` or `RuntimeException`.",
        "explanation": "Custom exceptions are useful when you want to define application-specific errors and handle them appropriately.",
        "codeSnippet": "class CustomException extends Exception {\n    public CustomException(String message) {\n        super(message);\n    }\n}\n\npublic class CustomExceptionExample {\n    public static void main(String[] args) {\n        try {\n            throw new CustomException(\"This is a custom exception\");\n        } catch (CustomException e) {\n            System.out.println(\"Caught: \" + e.getMessage());\n        }\n    }\n}"
      }
    },
    {
      "content": {
        "question": "What will happen if you return a value from a finally block?",
        "answer": "If a `finally` block contains a `return` statement, it will override any return value from the `try` or `catch` block.",
        "explanation": "The `finally` block executes after the `try` or `catch` block, and if it contains a `return`, that value is returned instead of any value from `try` or `catch`.",
        "codeSnippet": "public class FinallyReturnExample {\n    public static int testMethod() {\n        try {\n            return 10;\n        } catch (Exception e) {\n            return 20;\n        } finally {\n            return 30; // This value overrides previous returns\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(testMethod()); // Output: 30\n    }\n}"
      }
    },
    {
      "content": {
        "question": "Can you catch multiple exceptions in a single catch block? (Java 7+)",
        "answer": "Yes, Java 7 introduced multi-catch, allowing multiple exceptions to be caught in a single `catch` block using the `|` operator.",
        "explanation": "This feature simplifies code and reduces redundancy when handling multiple exception types with similar handling logic.",
        "codeSnippet": "public class MultiCatchExample {\n    public static void main(String[] args) {\n        try {\n            int[] arr = new int[5];\n            arr[10] = 30 / 0; // This may throw ArithmeticException or ArrayIndexOutOfBoundsException\n        } catch (ArithmeticException | ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Caught exception: \" + e);\n        }\n    }\n}"
      }
    }
  ],
};

export default javaExceptionQuestions;

