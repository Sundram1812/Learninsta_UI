const javaStringQuestions = {
  id: 1,
  title: "Core Java - Basics and String Concepts",

  questions: [
    {
      content: {
        question: "What Is a String in Java?",
        answer:
          "A String in Java is an object that represents a sequence of characters.",
        explanation:
          "Strings are immutable and are part of the java.lang package. They are widely used for text manipulation.",
        codeSnippet: `
String str = "Hello, World!";
System.out.println(str); // Outputs: Hello, World!
        `,
      },
    },
    {
      content: {
        question: "How Can We Create a String Object in Java?",
        answer:
          "A String object can be created using string literals or the new keyword.",
        explanation:
          "String literals use the string constant pool, whereas the new keyword creates a new object in the heap.",
        codeSnippet: `
// Using string literal
String str1 = "Hello";

// Using new keyword
String str2 = new String("Hello");
        `,
      },
    },
    {
      content: {
        question: "Is String a Primitive or a Derived Type?",
        answer: "String is a derived type.",
        explanation:
          "Strings are not primitive; they are objects in Java and instances of the java.lang.String class.",
      },
    },
    {
      content: {
        question: "What Are the Benefits of Strings Being Immutable?",
        answer:
          "Immutability provides thread safety and allows for string interning.",
        explanation:
          "Immutable strings can be shared safely among threads and reduce memory overhead by allowing reuse of string literals.",
      },
    },
    {
      content: {
        question: "How Is a String Stored in Memory?",
        answer:
          "Strings are stored in the heap memory, either in the string constant pool or the regular heap.",
        explanation:
          "String literals are stored in the string constant pool, which is a special part of the heap, while objects created with the new keyword are stored in the regular heap.",
      },
    },
    {
      content: {
        question:
          "Are Interned Strings Eligible for Garbage Collection in Java?",
        answer: "Yes, interned strings are eligible for garbage collection.",
        explanation:
          "If an interned string has no references, it will be garbage collected.",
      },
    },
    {
      content: {
        question: "What Is the String Constant Pool?",
        answer:
          "The string constant pool is a special memory area in the heap for storing string literals.",
        explanation:
          "It allows Java to reuse string literals to optimize memory usage. If a string already exists in the pool, its reference is reused.",
      },
    },
    {
      content: {
        question: "Is String Thread-Safe? How?",
        answer: "Yes, strings are thread-safe because they are immutable.",
        explanation:
          "Since a string's value cannot be changed, multiple threads can safely access the same string instance without any synchronization.",
      },
    },
    {
      content: {
        question:
          "For Which String Operations Is It Important to Supply a Locale?",
        answer:
          "Locale is important for case conversions and formatting operations.",
        explanation:
          "Locale-sensitive operations like toUpperCase(), toLowerCase(), and formatting depend on the language and region-specific rules.",
        codeSnippet: `
String germanUpper = "straße".toUpperCase(Locale.GERMAN);
System.out.println(germanUpper); // Outputs: STRASSE
        `,
      },
    },
    {
      content: {
        question: "What Is the Underlying Character Encoding for Strings?",
        answer: "Strings in Java use UTF-16 encoding.",
        explanation:
          "Java's internal representation of strings is based on UTF-16, which supports a wide range of Unicode characters.",
      },
    },
    {
      content: {
        question:
          "How Can We Compare Two Strings in Java? What’s the Difference Between str1 == str2 and str1.equals(str2)?",
        answer: "Strings can be compared using == or the equals() method.",
        explanation:
          "The == operator compares references, while equals() checks the actual content of the strings.",
        codeSnippet: `
String str1 = "Hello";
String str2 = new String("Hello");
System.out.println(str1 == str2); // Outputs: false
System.out.println(str1.equals(str2)); // Outputs: true
        `,
      },
    },
    {
      content: {
        question: "How Can We Split a String in Java?",
        answer: "We can split a string using the split() method.",
        explanation:
          "The split() method splits the string into an array based on the provided regular expression.",
        codeSnippet: `
String str = "apple,banana,grape";
String[] fruits = str.split(",");
for (String fruit : fruits) {
    System.out.println(fruit);
}
// Outputs:
// apple
// banana
// grape
        `,
      },
    },
    {
      content: {
        question: "What Is StringJoiner?",
        answer:
          "StringJoiner is a class introduced in Java 8 to join strings with a delimiter.",
        explanation:
          "It allows efficient concatenation of strings with delimiters, and optionally with a prefix and suffix.",
        codeSnippet: `
StringJoiner joiner = new StringJoiner(", ", "[", "]");
joiner.add("Apple").add("Banana").add("Cherry");
System.out.println(joiner.toString()); // Outputs: [Apple, Banana, Cherry]
        `,
      },
    },
    {
      content: {
        question: "Difference Between String, StringBuffer, and StringBuilder?",
        answer:
          "String is immutable, StringBuffer is mutable and thread-safe, and StringBuilder is mutable but not thread-safe.",
        explanation:
          "StringBuffer is synchronized, making it slower but thread-safe, while StringBuilder is faster but not suitable for multi-threaded environments.",
      },
    },
    {
      content: {
        question:
          "Why Is It Safer to Store Passwords in a Char[] Array Rather Than a String?",
        answer:
          "Char[] is safer because it can be explicitly cleared from memory.",
        explanation:
          "Strings are immutable and stay in memory until garbage collected, potentially exposing sensitive data.",
      },
    },
    {
      content: {
        question: "What Does String’s intern() Method Do?",
        answer:
          "The intern() method adds a string to the string pool and returns its reference.",
        explanation:
          "If the string is already in the pool, it returns the reference; otherwise, it adds the string to the pool.",
      },
    },
    {
      content: {
        question:
          "How Can We Convert String to Integer and Integer to String in Java?",
        answer: "We can use Integer.parseInt() and String.valueOf().",
        explanation:
          "Integer.parseInt() converts a string to an integer, and String.valueOf() or Integer.toString() converts an integer to a string.",
        codeSnippet: `
// Convert String to Integer
int num = Integer.parseInt("123");

// Convert Integer to String
String str = String.valueOf(123);
        `,
      },
    },
    {
      content: {
        question: "What Is String.format() and How Can We Use It?",
        answer: "String.format() is used to format strings.",
        explanation:
          "It provides a way to create formatted strings using placeholders.",
        codeSnippet: `
String formatted = String.format("Hello, %s!", "John");
System.out.println(formatted); // Outputs: Hello, John!
        `,
      },
    },
    {
      content: {
        question: "How Can We Convert a String to Uppercase and Lowercase?",
        answer: "We can use the toUpperCase() and toLowerCase() methods.",
        explanation:
          "These methods return a new string with the converted case.",
        codeSnippet: `
String str = "Hello";
System.out.println(str.toUpperCase()); // Outputs: HELLO
System.out.println(str.toLowerCase()); // Outputs: hello
        `,
      },
    },
    {
      content: {
        question: "How Can We Get a Character Array from String?",
        answer: "We can use the toCharArray() method.",
        explanation: "This method converts the string into a character array.",
        codeSnippet: `
String str = "Hello";
char[] charArray = str.toCharArray();
System.out.println(Arrays.toString(charArray)); // Outputs: [H, e, l, l, o]
        `,
      },
    },
    {
      content: {
        question: "How Would We Convert a Java String into a Byte Array?",
        answer: "We can use the getBytes() method.",
        explanation:
          "This method converts the string into a byte array using the platform's default character set.",
        codeSnippet: `
String str = "Hello";
byte[] byteArray = str.getBytes();
System.out.println(Arrays.toString(byteArray)); // Outputs byte array representation
        `,
      },
    },
    {
      content: {
        question: "How Can We Reverse a String in Java?",
        answer:
          "We can reverse a string using a loop, StringBuilder, or recursion.",
        explanation: "The StringBuilder reverse() method is the simplest way.",
        codeSnippet: `
String str = "Hello";
String reversed = new StringBuilder(str).reverse().toString();
System.out.println(reversed); // Outputs: olleH
        `,
      },
    },
    {
      content: {
        question: "How Can We Check If a String Is a Palindrome or Not?",
        answer:
          "We can check if a string is a palindrome by comparing it with its reverse.",
        explanation:
          "If the string and its reverse are equal, it is a palindrome.",
        codeSnippet: `
String str = "madam";
boolean isPalindrome = str.equals(new StringBuilder(str).reverse().toString());
System.out.println(isPalindrome); // Outputs: true
        `,
      },
    },

    // const name = new type(arguments);

    {
      content: {
        question:
          "What is a String in Java and How is it different from other data types?",
        answer:
          "A String in Java is an object that represents a sequence of characters. It is different from primitive data types as it is a non-primitive, immutable, and reference type.",
        explanation:
          "Strings are stored as objects in the heap memory, while primitive data types are stored directly in memory.",
        codeSnippet: `
    String text = "Hello, Java!"; // String object
    int number = 10; // Primitive data type
          `,
      },
    },
    {
      content: {
        question: "How is a String created in Java?",
        answer:
          'A String can be created using a string literal (e.g., `String s = "Hello";`) or by using the `new` keyword (e.g., `String s = new String("Hello");`).',
        explanation:
          "String literals are stored in the String Pool, while using `new` creates a new object in the heap memory.",
        codeSnippet: `
    String str1 = "Hello"; // String literal
    String str2 = new String("Hello"); // Using new keyword
          `,
      },
    },
    {
      content: {
        question: "Why is String immutable in Java?",
        answer:
          "Strings are immutable in Java to ensure security, thread safety, and efficient memory usage through the String Pool.",
        explanation:
          "Immutability prevents unintended changes and allows sharing of String objects in the String Pool.",
        codeSnippet: `
    String s1 = "Hello";
    String s2 = s1; // Both s1 and s2 refer to the same "Hello" in the String Pool
          `,
      },
    },
    {
      content: {
        question: "What are the advantages of immutability of string in java?",
        answer:
          "Advantages include thread safety, security, caching (String Pool), and improved performance.",
        explanation:
          "Immutable Strings cannot be altered, making them safe for multi-threading and reducing memory overhead.",
        codeSnippet: `
    String s1 = "Hello";
    String s2 = "Hello"; // Reuses the same object from String Pool
          `,
      },
    },
    {
      content: {
        question:
          "What is the difference between == and .equals() when comparing Strings?",
        answer:
          "`==` compares references (memory addresses), while `.equals()` compares the content of the Strings.",
        explanation:
          "`==` checks if two references point to the same object, whereas `.equals()` checks if the content is the same.",
        codeSnippet: `
    String s1 = "Hello";
    String s2 = new String("Hello");
    System.out.println(s1 == s2); // false (different references)
    System.out.println(s1.equals(s2)); // true (same content)
          `,
      },
    },
    {
      content: {
        question: "What is the String Pool in Java?",
        answer:
          "The String Pool is a special memory area in the heap where String literals are stored to optimize memory usage.",
        explanation:
          "It allows reusing identical String literals, reducing memory overhead.",
        codeSnippet: `
    String s1 = "Hello";
    String s2 = "Hello"; // Reuses the same "Hello" from String Pool
          `,
      },
    },
    {
      content: {
        question: "How String Pool works in java?",
        answer:
          "When a String literal is created, Java checks the String Pool. If it exists, the reference is reused; otherwise, a new entry is added.",
        explanation:
          "This mechanism saves memory by avoiding duplicate String objects.",
        codeSnippet: `
    String s1 = "Hello";
    String s2 = "Hello"; // Reuses the same "Hello" from String Pool
          `,
      },
    },
    {
      content: {
        question: "How do you concatenate Strings in Java?",
        answer:
          "Strings can be concatenated using the `+` operator or the `concat()` method.",
        explanation:
          "The `+` operator is commonly used, while `concat()` is a method of the String class.",
        codeSnippet: `
    String s1 = "Hello";
    String s2 = "World";
    String result = s1 + " " + s2; // Using + operator
    String result2 = s1.concat(" ").concat(s2); // Using concat() method
          `,
      },
    },

    {
      comparision: {
        question:
          "How is a String created in Java and What is the difference between creating a String using a literal and using the new keyword?",
        compareHeading: ["Feature", "String Literal", "new Keyword"],
        comparision: [
          {
            "String Literal": {
              Definition:
                'Created using double quotes, e.g., String s = "Hello";',
              Memory:
                "Stored in the String Pool (a special memory area in the heap).",
              Performance:
                "More memory-efficient as it reuses existing strings in the pool.",
              UseCase:
                "Preferred when the same string value is used multiple times.",
            },
          },
          {
            "new Keyword": {
              Definition:
                'Created using the new operator, e.g., String s = new String("Hello");',
              Memory: "Stored in the heap memory (outside the String Pool).",
              Performance:
                "Less memory-efficient as it creates a new object every time.",
              UseCase: "Used when a new string object is explicitly required.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between == and .equals() when comparing Strings?",
        compareHeading: ["Feature", "==", ".equals()"],
        comparision: [
          {
            "==": {
              Definition:
                "Compares memory addresses (references) of two objects.",
              Usage:
                "Checks if two references point to the same object in memory.",
              UseCase: "Used for reference comparison.",
            },
          },
          {
            ".equals()": {
              Definition:
                "Compares the actual content (values) of two strings.",
              Usage:
                "Checks if two strings have the same sequence of characters.",
              UseCase: "Used for content comparison.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between using + and StringBuilder/StringBuffer?",
        compareHeading: ["Feature", "+ Operator", "StringBuilder/StringBuffer"],
        comparision: [
          {
            "+ Operator": {
              Definition: "Used for concatenating strings.",
              Performance:
                "Creates multiple intermediate string objects, leading to higher memory usage.",
              UseCase: "Suitable for small-scale concatenations.",
            },
          },
          {
            "StringBuilder/StringBuffer": {
              Definition: "Used for efficient string manipulation.",
              Performance:
                "Mutable and avoids creating intermediate objects, making it more memory-efficient.",
              UseCase:
                "Preferred for large-scale or frequent string manipulations.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between String, StringBuilder, and StringBuffer?",
        compareHeading: ["Feature", "String", "StringBuilder", "StringBuffer"],
        comparision: [
          {
            String: {
              Definition: "Immutable sequence of characters.",
              Mutability: "Immutable (cannot be changed after creation).",
              "Thread Safety": "Thread-safe (since it is immutable).",
              UseCase: "Used when the value of the string is constant.",
            },
          },
          {
            StringBuilder: {
              Definition: "Mutable sequence of characters.",
              Mutability: "Mutable (can be changed after creation).",
              "Thread Safety": "Not thread-safe.",
              UseCase: "Used for single-threaded string manipulations.",
            },
          },
          {
            StringBuffer: {
              Definition: "Mutable sequence of characters.",
              Mutability: "Mutable (can be changed after creation).",
              "Thread Safety": "Thread-safe (synchronized methods).",
              UseCase: "Used for multi-threaded string manipulations.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between StringBuilder and StringBuffer?",
        compareHeading: ["Feature", "StringBuilder", "StringBuffer"],
        comparision: [
          {
            StringBuilder: {
              Definition:
                "A mutable sequence of characters used for efficient string manipulation.",
              Mutability: "Mutable (can be modified after creation).",
              "Thread Safety": "Not thread-safe (no synchronization).",
              Performance: "Faster due to lack of synchronization overhead.",
              UseCase:
                "Ideal for single-threaded environments where thread safety is not required.",
            },
          },
          {
            StringBuffer: {
              Definition:
                "A mutable sequence of characters used for efficient string manipulation.",
              Mutability: "Mutable (can be modified after creation).",
              "Thread Safety": "Thread-safe (synchronized methods).",
              Performance: "Slower due to synchronization overhead.",
              UseCase:
                "Ideal for multi-threaded environments where thread safety is required.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question:
          "How do you remove leading and trailing whitespace from a String?",
        answer: "Use the `.trim()` method.",
        explanation:
          "The `.trim()` method removes whitespace from both ends of a String.",
        codeSnippet: `
      String str = "  Hello World  ";
      String trimmed = str.trim(); // "Hello World"
          `,
      },
    },
    {
      content: {
        question: "How do you replace characters in a String?",
        answer: "Use the `.replace()` or `.replaceAll()` method.",
        explanation:
          "`.replace()` replaces all occurrences of a character or sequence, while `.replaceAll()` supports regex.",
        codeSnippet: `
      String str = "Hello World";
      String replaced = str.replace('o', 'a'); // "Hella Warld"
      String replacedAll = str.replaceAll("o", "a"); // "Hella Warld"
          `,
      },
    },
    {
      content: {
        question: "How do you split a String into an array of substrings?",
        answer: "Use the `.split()` method.",
        explanation:
          "The `.split()` method divides a String based on a specified delimiter or regex.",
        codeSnippet: `
      String str = "apple,banana,orange";
      String[] fruits = str.split(","); // ["apple", "banana", "orange"]
          `,
      },
    },
    {
      content: {
        question: "How do you check if a String contains a substring?",
        answer: "Use the `.contains()` method.",
        explanation:
          "The `.contains()` method checks if a substring exists within the String.",
        codeSnippet: `
      String str = "Hello World";
      boolean contains = str.contains("World"); // true
          `,
      },
    },
    {
      content: {
        question:
          "How do you find the index of a character or substring in a String?",
        answer: "Use the `.indexOf()` or `.lastIndexOf()` method.",
        explanation:
          "`.indexOf()` returns the first occurrence, while `.lastIndexOf()` returns the last occurrence.",
        codeSnippet: `
      String str = "Hello World";
      int index = str.indexOf('o'); // 4
      int lastIndex = str.lastIndexOf('o'); // 7
          `,
      },
    },
    {
      content: {
        question: "How do you extract a substring from a String?",
        answer: "Use the `.substring()` method.",
        explanation:
          "The `.substring()` method extracts a portion of the String based on start and end indices.",
        codeSnippet: `
      String str = "Hello World";
      String sub = str.substring(6, 11); // "World"
          `,
      },
    },
    {
      content: {
        question: "How do you compare two Strings lexicographically?",
        answer: "Use the `.compareTo()` method.",
        explanation:
          "The `.compareTo()` method returns 0 if equal, a negative value if the first String is smaller, and a positive value if larger.",
        codeSnippet: `
      String str1 = "apple";
      String str2 = "banana";
      int result = str1.compareTo(str2); // Negative value
          `,
      },
    },
    {
      content: {
        question: "How do you check if a String is empty or null?",
        answer: "Use `.isEmpty()` or check for null explicitly.",
        explanation:
          "`.isEmpty()` checks if the String has zero length, while `== null` checks if the String is null.",
        codeSnippet: `
      String str = "";
      boolean isEmpty = str.isEmpty(); // true
      boolean isNull = str == null; // false
          `,
      },
    },
    {
      content: {
        question:
          "How do you count the occurrences of a character in a String?",
        answer: "Use a loop or `.chars().filter()`.",
        explanation:
          "Iterate through the String and count matches or use Java 8 streams for a concise solution.",
        codeSnippet: `
      String str = "hello";
      char target = 'l';
      long count = str.chars().filter(ch -> ch == target).count(); // 2
          `,
      },
    },
    {
      content: {
        question: "How do you check if a String is a palindrome?",
        answer: "Compare the String with its reverse.",
        explanation: "A palindrome reads the same forwards and backwards.",
        codeSnippet: `
      String str = "madam";
      boolean isPalindrome = str.equals(new StringBuilder(str).reverse().toString()); // true
          `,
      },
    },
    {
      content: {
        question: "How do you remove duplicate characters from a String?",
        answer: "Use a `Set` or Java 8 streams.",
        explanation:
          "A `Set` automatically removes duplicates due to its unique property.",
        codeSnippet: `
      String str = "hello";
      String unique = str.chars().distinct().mapToObj(c -> String.valueOf((char) c)).collect(Collectors.joining()); // "helo"
          `,
      },
    },
    {
      content: {
        question:
          "How do you find the first non-repeated character in a String?",
        answer: "Use a `LinkedHashMap` to track character counts.",
        explanation:
          "A `LinkedHashMap` maintains insertion order, making it easy to find the first non-repeated character.",
        codeSnippet: `
      String str = "swiss";
      char firstNonRepeated = str.chars()
          .mapToObj(c -> (char) c)
          .collect(Collectors.groupingBy(Function.identity(), LinkedHashMap::new, Collectors.counting()))
          .entrySet().stream()
          .filter(entry -> entry.getValue() == 1)
          .map(Map.Entry::getKey)
          .findFirst().orElse(null); // 'w'
          `,
      },
    },
    {
      content: {
        question: "How do you check if two Strings are anagrams of each other?",
        answer: "Sort and compare the characters.",
        explanation: "Anagrams have the same characters in a different order.",
        codeSnippet: `
      String str1 = "listen";
      String str2 = "silent";
      boolean isAnagram = Arrays.equals(str1.chars().sorted().toArray(), str2.chars().sorted().toArray()); // true
          `,
      },
    },
    {
      content: {
        question:
          "How do you reverse words in a sentence without reversing the characters?",
        answer: "Split the sentence, reverse the array, and join.",
        explanation:
          "Split by spaces, reverse the word order, and concatenate with spaces.",
        codeSnippet: `
      String sentence = "Hello World";
      String reversed = Arrays.stream(sentence.split(" "))
          .reduce((word1, word2) -> word2 + " " + word1)
          .orElse(""); // "World Hello"
          `,
      },
    },
    {
      content: {
        question: "How do you count the number of words in a String?",
        answer:
          "Split the String by spaces and count the resulting array length.",
        explanation:
          "Split by spaces and handle multiple spaces or edge cases.",
        codeSnippet: `
      String str = "Hello World";
      int wordCount = str.split("\\s+").length; // 2
          `,
      },
    },
    {
      content: {
        question: "How do you convert a String to a character array?",
        answer: "Use the `.toCharArray()` method.",
        explanation:
          "This method converts the String into an array of characters.",
        codeSnippet: `
      String str = "hello";
      char[] charArray = str.toCharArray(); // ['h', 'e', 'l', 'l', 'o']
          `,
      },
    },
    {
      content: {
        question:
          "Write a program to find the longest substring without repeating characters.",
        answer: "Use a sliding window approach.",
        explanation:
          "Track characters in a window and adjust the window when a duplicate is found.",
        codeSnippet: `
      String str = "abcabcbb";
      int maxLength = 0;
      Map<Character, Integer> map = new HashMap<>();
      for (int start = 0, end = 0; end < str.length(); end++) {
          char currentChar = str.charAt(end);
          if (map.containsKey(currentChar)) {
              start = Math.max(map.get(currentChar) + 1, start);
          }
          maxLength = Math.max(maxLength, end - start + 1);
          map.put(currentChar, end);
      }
      System.out.println(maxLength); // 3
          `,
      },
    },
    {
      content: {
        question: "Write a program to find the longest palindrome in a String.",
        answer: "Use dynamic programming or expand around centers.",
        explanation:
          "Check all possible substrings and find the longest palindrome.",
        codeSnippet: `
      String str = "babad";
      String longestPalindrome = "";
      for (int i = 0; i < str.length(); i++) {
          String odd = expandAroundCenter(str, i, i);
          String even = expandAroundCenter(str, i, i + 1);
          if (odd.length() > longestPalindrome.length()) longestPalindrome = odd;
          if (even.length() > longestPalindrome.length()) longestPalindrome = even;
      }
      System.out.println(longestPalindrome); // "bab"
          `,
      },
    },
    {
      content: {
        question:
          "Write a program to check if a String is a valid number (e.g., integer, float).",
        answer: "Use regex or try-catch with parsing.",
        explanation:
          "Regex can validate the format, while parsing checks if it can be converted to a number.",
        codeSnippet: `
      String str = "123.45";
      boolean isValidNumber = str.matches("-?\\d+(\\.\\d+)?"); // true
          `,
      },
    },
    {
      content: {
        question: "Write a program to find all permutations of a String.",
        answer: "Use recursion or backtracking.",
        explanation: "Generate all possible arrangements of characters.",
        codeSnippet: `
      public static void permute(String str, String ans) {
          if (str.length() == 0) {
              System.out.println(ans);
              return;
          }
          for (int i = 0; i < str.length(); i++) {
              char ch = str.charAt(i);
              String remaining = str.substring(0, i) + str.substring(i + 1);
              permute(remaining, ans + ch);
          }
      }
      permute("abc", ""); // abc, acb, bac, bca, cab, cba
          `,
      },
    },
    {
      content: {
        question:
          "Write a program to find the smallest and largest word in a String.",
        answer: "Split the String and compare word lengths.",
        explanation:
          "Iterate through the words and track the smallest and largest.",
        codeSnippet: `
      String str = "Hello World in Java";
      String[] words = str.split(" ");
      String smallest = words[0], largest = words[0];
      for (String word : words) {
          if (word.length() < smallest.length()) smallest = word;
          if (word.length() > largest.length()) largest = word;
      }
      System.out.println("Smallest: " + smallest + ", Largest: " + largest); // Smallest: in, Largest: Hello
          `,
      },
    },
  ],
};

export default javaStringQuestions;
