const javaCollectionQuestions = {
  questions: [
    {
      content: {
        question: "What is the Java Collections Framework?",
        answer:
          "The Java Collections Framework is a unified architecture that represents and manipulates collections of objects, such as lists, sets, and maps. It provides several classes and interfaces to store, retrieve, and manipulate data.",
        explanation:
          "The Collections Framework is designed to simplify data handling, reduce redundancy, and improve code reusability by providing a standard interface for various collection classes like ArrayList, HashSet, and HashMap.",
        codeSnippet:
          'import java.util.*;\n\npublic class CollectionsExample {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add("Java");\n        list.add("Collections");\n        System.out.println(list);\n\n        Set<String> set = new HashSet<>();\n        set.add("Apple");\n        set.add("Banana");\n        System.out.println(set);\n\n        Map<Integer, String> map = new HashMap<>();\n        map.put(1, "One");\n        map.put(2, "Two");\n        System.out.println(map);\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What are some methods available in the Collections utility class?",
        answer:
          "The Collections utility class in Java provides static methods for performing operations on collections, such as sorting, searching, reversing, shuffling, and synchronizing.",
        explanation:
          "Some common methods include `sort()`, `reverse()`, `shuffle()`, `binarySearch()`, `max()`, `min()`, `synchronizedList()`, and `fill()`. These methods are designed to simplify common tasks like sorting or searching within collections.",
        codeSnippet:
          'import java.util.*;\n\npublic class CollectionsExample {\n    public static void main(String[] args) {\n        List<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 2, 4));\n        Collections.sort(list);\n        System.out.println("Sorted list: " + list);\n        Collections.shuffle(list);\n        System.out.println("Shuffled list: " + list);\n        System.out.println("Max value: " + Collections.max(list));\n    }\n}',
      },
    },
    {
      content: {
        question: "How does the TreeSet ensure that elements are ordered?",
        answer:
          "TreeSet ensures that elements are ordered by maintaining a sorted order according to their natural ordering or a custom comparator provided at the time of TreeSet creation.",
        explanation:
          "Internally, TreeSet uses a Red-Black tree structure, which is a self-balancing binary search tree. It keeps the elements in ascending order by default, and when a custom comparator is provided, it uses that comparator to determine the order.",
        codeSnippet:
          'import java.util.*;\n\npublic class TreeSetExample {\n    public static void main(String[] args) {\n        TreeSet<Integer> set = new TreeSet<>();\n        set.add(5);\n        set.add(1);\n        set.add(3);\n        set.add(2);\n        System.out.println("TreeSet in order: " + set);\n    }\n}',
      },
    },

    {
      comparision: {
        question:
          "What is the significance of the null element in HashSet, HashMap, and Hashtable?",
        compareHeading: ["Feature", "HashSet", "HashMap", "Hashtable"],
        comparision: [
          {
            HashSet: {
              "Null Handling": "Allows one null element in the set.",
              Significance:
                "The null element is treated as a valid element, and it does not affect the uniqueness of other elements.",
              Behavior:
                "In case of multiple null entries, only one null element is stored.",
            },
          },
          {
            HashMap: {
              "Null Handling": "Allows one null key and multiple null values.",
              Significance:
                "The null key is treated as a valid key and can be associated with a value. Null values can also be stored against any key, including the null key.",
              Behavior:
                "In case of a null key, the hash code is not used, and comparison of keys with null requires special handling.",
            },
          },
          {
            Hashtable: {
              "Null Handling": "Does not allow null keys or null values.",
              Significance:
                "Null elements are not allowed in either the key or the value, which ensures no ambiguity in key/value retrieval.",
              Behavior:
                "Trying to insert null keys or values results in a NullPointerException.",
            },
          },
        ],
        image: "",
      },
    },

    {
      content: {
        question:
          "What are the main benefits of using the Collections Framework in Java?",
        answer:
          "The main benefits of using the Collections Framework in Java are: unified architecture, high performance, easy manipulation of data, and the ability to use predefined classes and interfaces for efficient data storage and retrieval.",
        explanation:
          "By using the framework, developers can leverage reusable data structures and algorithms. It also promotes code clarity and reduces the need for writing custom data structures.",
        codeSnippet:
          'import java.util.*;\n\npublic class CollectionsBenefits {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add("Java");\n        list.add("Collections");\n        System.out.println("List: " + list);\n\n        Set<String> set = new HashSet<>();\n        set.add("Apple");\n        set.add("Banana");\n        System.out.println("Set: " + set);\n\n        Map<Integer, String> map = new HashMap<>();\n        map.put(1, "One");\n        map.put(2, "Two");\n        System.out.println("Map: " + map);\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What are the main interfaces of the Java Collections Framework?",
        answer:
          "The main interfaces of the Java Collections Framework are Collection, List, Set, Queue, and Map.",
        explanation:
          "Each interface serves a different purpose: Collection is the root interface, List represents ordered collections, Set is for unique elements, Queue handles FIFO data, and Map stores key-value pairs.",
        codeSnippet:
          'import java.util.*;\n\npublic class CollectionsInterfaces {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add("Java");\n        list.add("Collections");\n\n        Set<String> set = new HashSet<>();\n        set.add("Apple");\n        set.add("Banana");\n\n        Queue<String> queue = new LinkedList<>();\n        queue.add("First");\n        queue.add("Second");\n\n        Map<Integer, String> map = new HashMap<>();\n        map.put(1, "One");\n        map.put(2, "Two");\n\n        System.out.println("List: " + list);\n        System.out.println("Set: " + set);\n        System.out.println("Queue: " + queue);\n        System.out.println("Map: " + map);\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is the performance difference between ArrayList and LinkedList for adding/removing elements?",
        answer:
          "ArrayList and LinkedList differ in performance for adding and removing elements due to their underlying data structures. ArrayList uses a dynamic array, while LinkedList uses a doubly linked list.",
        explanation:
          "In an ArrayList, adding or removing elements at the end is generally O(1) unless resizing is required. However, inserting or removing elements at the beginning or middle of the list requires shifting elements, resulting in O(n) time complexity. In contrast, LinkedList allows for O(1) insertions and removals at both ends, but operations in the middle require traversing the list, making them O(n) in the worst case.",
        codeSnippet:
          'import java.util.*;\n\npublic class ListPerformanceExample {\n    public static void main(String[] args) {\n        // ArrayList Performance\n        List<Integer> arrayList = new ArrayList<>();\n        long start = System.nanoTime();\n        for (int i = 0; i < 1000000; i++) {\n            arrayList.add(i);\n        }\n        System.out.println("ArrayList add time: " + (System.nanoTime() - start));\n\n        // LinkedList Performance\n        List<Integer> linkedList = new LinkedList<>();\n        start = System.nanoTime();\n        for (int i = 0; i < 1000000; i++) {\n            linkedList.add(i);\n        }\n        System.out.println("LinkedList add time: " + (System.nanoTime() - start));\n\n        // Removing from ArrayList\n        start = System.nanoTime();\n        arrayList.remove(500000);\n        System.out.println("ArrayList remove time: " + (System.nanoTime() - start));\n\n        // Removing from LinkedList\n        start = System.nanoTime();\n        linkedList.remove(500000);\n        System.out.println("LinkedList remove time: " + (System.nanoTime() - start));\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is the Iterator interface and how is it used in Java Collections?",
        answer:
          "The Iterator interface in Java provides methods to iterate over the elements in a collection. It allows for sequential access to elements while preventing modification of the underlying collection structure during iteration.",
        explanation:
          "The Iterator interface provides methods like `hasNext()`, `next()`, and `remove()` to traverse through a collection. It is commonly used in for-each loops and manual iteration.",
        codeSnippet:
          'import java.util.*;\n\npublic class IteratorExample {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add("Java");\n        list.add("Collections");\n        Iterator<String> iterator = list.iterator();\n        while(iterator.hasNext()) {\n            System.out.println(iterator.next());\n        }\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How does LinkedList improve over ArrayList for specific use cases?",
        answer:
          "LinkedList improves over ArrayList in scenarios where frequent insertion and deletion operations are required, especially when working with elements at the beginning or middle of the list.",
        explanation:
          "Unlike ArrayList, which uses an array and has a fixed size, LinkedList is implemented as a doubly linked list, allowing for efficient insertion and deletion at both ends and in the middle, but with slower random access.",
        codeSnippet:
          'import java.util.*;\n\npublic class LinkedListExample {\n    public static void main(String[] args) {\n        LinkedList<String> list = new LinkedList<>();\n        list.add("Java");\n        list.addFirst("Python");\n        list.addLast("C++");\n        System.out.println(list);\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is the role of the Comparable and Comparator interfaces in sorting collections?",
        answer:
          "Comparable is used to define a natural ordering for objects, while Comparator is used to provide custom sorting behavior. Comparable is typically implemented within the class, whereas Comparator is used externally.",
        explanation:
          "Comparable allows an object to compare itself with another object of the same class, while Comparator defines a separate comparison strategy, allowing for different sorting logic.",
        codeSnippet:
          'import java.util.*;\n\nclass Person implements Comparable<Person> {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    @Override\n    public int compareTo(Person other) {\n        return this.age - other.age;\n    }\n}\n\nclass AgeComparator implements Comparator<Person> {\n    @Override\n    public int compare(Person p1, Person p2) {\n        return p1.name.compareTo(p2.name);\n    }\n}\n\npublic class SortExample {\n    public static void main(String[] args) {\n        List<Person> list = new ArrayList<>();\n        list.add(new Person("John", 30));\n        list.add(new Person("Alice", 25));\n        Collections.sort(list, new AgeComparator());\n        for (Person p : list) {\n            System.out.println(p.name + " " + p.age);\n        }\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is the Map interface in Java, and how does it differ from the Collection interface?",
        answer:
          "The Map interface represents a collection of key-value pairs, where each key is associated with exactly one value. It differs from the Collection interface, which represents a single collection of objects and does not support key-value associations.",
        explanation:
          "The Map interface allows for efficient retrieval of values based on their keys, while the Collection interface only deals with individual objects without any key-based structure.",
        codeSnippet:
          'import java.util.*;\n\npublic class MapExample {\n    public static void main(String[] args) {\n        Map<Integer, String> map = new HashMap<>();\n        map.put(1, "One");\n        map.put(2, "Two");\n        System.out.println(map);\n    }\n}',
      },
    },
    {
      content: {
        question:
          "Explain how the PriorityQueue works in Java and provide an example.",
        answer:
          "The PriorityQueue in Java is a queue that orders elements based on their natural ordering or a custom comparator. It is typically used for implementing priority-based scheduling.",
        explanation:
          "PriorityQueue does not guarantee FIFO order; instead, it prioritizes elements with the lowest or highest priority based on the comparator or the element's natural ordering.",
        codeSnippet:
          "import java.util.*;\n\npublic class PriorityQueueExample {\n    public static void main(String[] args) {\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        pq.add(10);\n        pq.add(20);\n        pq.add(5);\n        while (!pq.isEmpty()) {\n            System.out.println(pq.poll());\n        }\n    }\n}",
      },
    },
    {
      content: {
        question: "What is the significance of the ConcurrentHashMap in Java?",
        answer:
          "ConcurrentHashMap is a thread-safe variant of HashMap that allows for concurrent read and write operations without blocking the entire map. It is designed for multi-threaded environments.",
        explanation:
          "Unlike HashMap, ConcurrentHashMap divides the map into segments, allowing multiple threads to access different segments concurrently without interfering with each other, ensuring better performance in multi-threaded applications.",
        codeSnippet:
          'import java.util.concurrent.*;\n\npublic class ConcurrentHashMapExample {\n    public static void main(String[] args) throws InterruptedException {\n        ConcurrentHashMap<Integer, String> map = new ConcurrentHashMap<>();\n        map.put(1, "One");\n        map.put(2, "Two");\n        Thread t1 = new Thread(() -> map.put(3, "Three"));\n        Thread t2 = new Thread(() -> System.out.println(map.get(1)));\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n        System.out.println(map);\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How can you create a synchronized version of a collection in Java?",
        answer:
          "In Java, you can create a synchronized version of a collection by using the `Collections.synchronizedList()`, `Collections.synchronizedSet()`, or `Collections.synchronizedMap()` methods.",
        explanation:
          "These methods wrap the original collection in a synchronized version, ensuring that all operations on the collection are thread-safe. However, it's important to manually synchronize on the collection when iterating over it to avoid potential concurrency issues.",
        codeSnippet:
          "import java.util.*;\n\npublic class SynchronizedCollectionExample {\n    public static void main(String[] args) {\n        List<Integer> list = new ArrayList<>();\n        list.add(1);\n        list.add(2);\n        list.add(3);\n\n        List<Integer> synchronizedList = Collections.synchronizedList(list);\n\n        // Synchronized block for iteration\n        synchronized (synchronizedList) {\n            for (Integer num : synchronizedList) {\n                System.out.println(num);\n            }\n        }\n    }\n}",
      },
    },
    {
      content: {
        question:
          "What is a SortedMap and how does it differ from a regular Map?",
        answer:
          "A SortedMap is a subtype of the Map interface that maintains its keys in a sorted order, according to their natural ordering or a custom comparator. It is part of the java.util package and is typically implemented by classes like TreeMap.",
        explanation:
          "Unlike a regular Map, which does not guarantee any specific order for its keys, a SortedMap ensures that its keys are always ordered. The keys in a SortedMap are sorted based on their natural ordering (if they implement Comparable) or according to the Comparator passed to the SortedMap implementation.",
        codeSnippet:
          'import java.util.*;\n\npublic class SortedMapExample {\n    public static void main(String[] args) {\n        SortedMap<Integer, String> sortedMap = new TreeMap<>();\n        sortedMap.put(3, "Three");\n        sortedMap.put(1, "One");\n        sortedMap.put(2, "Two");\n\n        System.out.println("SortedMap: " + sortedMap); // Keys are automatically sorted\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How does Java handle the resizing of an ArrayList when more elements are added?",
        answer:
          "In Java, an ArrayList automatically resizes itself when it reaches its capacity limit. When more elements are added, the ArrayList creates a new larger array and copies the elements from the old array to the new one.",
        explanation:
          "ArrayList starts with a default capacity (usually 10). As elements are added, if the capacity is reached, it doubles the size of the array to accommodate more elements. This resizing process involves creating a new array with more space and copying the existing elements, which can be an expensive operation. However, the ArrayList growth factor is designed to optimize performance and minimize the number of resizing operations.",
        codeSnippet:
          'import java.util.*;\n\npublic class ArrayListResizingExample {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        for (int i = 0; i < 20; i++) {\n            list.add(i);\n            System.out.println("Added element: " + i + ", List size: " + list.size());\n        }\n    }\n}',
      },
    },

    {
      content: {
        question: "What is the fail-fast behavior in Java Collections?",
        answer:
          "The fail-fast behavior in Java Collections refers to the condition where a collection, such as an ArrayList or HashMap, immediately throws a `ConcurrentModificationException` if it is modified while being iterated over using an iterator.",
        explanation:
          "This behavior helps to prevent inconsistent or unpredictable results when a collection is being modified during iteration. It ensures that if the collection is changed structurally (e.g., elements are added or removed), the iterator will detect the change and throw an exception.",
        codeSnippet:
          'import java.util.*;\n\npublic class FailFastExample {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add("One");\n        list.add("Two");\n        list.add("Three");\n        Iterator<String> iterator = list.iterator();\n        while (iterator.hasNext()) {\n            System.out.println(iterator.next());\n            list.add("Four");  // This will trigger a ConcurrentModificationException\n        }\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What are the advantages of using LinkedHashMap over HashMap?",
        answer:
          "LinkedHashMap extends HashMap and maintains the order of elements based on their insertion order or access order, making it useful when you need predictable iteration order. In contrast, HashMap does not guarantee any specific order of elements.",
        explanation:
          "The key advantage of LinkedHashMap over HashMap is that it preserves the order in which elements were added (insertion order) or the order in which they were last accessed (access order). This makes LinkedHashMap ideal for use cases like caching, where access order matters. However, LinkedHashMap has slightly more overhead due to the additional linked list structure that maintains the ordering.",
        codeSnippet:
          'import java.util.*;\n\npublic class LinkedHashMapExample {\n    public static void main(String[] args) {\n        Map<Integer, String> map = new LinkedHashMap<>();\n        map.put(1, "One");\n        map.put(2, "Two");\n        map.put(3, "Three");\n\n        // Insertion order is preserved\n        for (Map.Entry<Integer, String> entry : map.entrySet()) {\n            System.out.println(entry.getKey() + ": " + entry.getValue());\n        }\n    }\n}',
      },
    },

    {
      comparision: {
        question:
          "What are the differences between Collection and Collections in Java?",
        compareHeading: ["Feature", "Collection", "Collections"],
        comparision: [
          {
            Collection: {
              Definition:
                "An interface that provides a framework to store and manipulate a group of objects.",
              Type: "Part of java.util package as an interface.",
              Purpose:
                "Defines methods like add(), remove(), size(), etc., for handling groups of objects.",
              Inheritance: "Parent of List, Set, and Queue interfaces.",
              Usage:
                "Used to define the structure and behavior of collections.",
            },
          },
          {
            Collections: {
              Definition:
                "A utility class that provides static methods to operate on collections.",
              Type: "A final class in java.util package.",
              Purpose:
                "Provides methods for sorting, searching, reversing, and more.",
              Inheritance:
                "Not related to the Collection interface; it is a utility class.",
              Usage:
                "Used for operations like Collections.sort(), Collections.shuffle(), etc.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question: "What is the difference between ArrayList and LinkedList?",
        compareHeading: ["Feature", "ArrayList", "LinkedList"],
        comparision: [
          {
            ArrayList: {
              Implementation: "Backed by a dynamic array.",
              Performance: "Faster for retrieving elements (O(1)).",
              "Memory Usage": "Uses more memory for resizing operations.",
              "Insertion/Deletion":
                "Slow for insertions and deletions (O(n)) due to shifting of elements.",
              UseCase: "Preferred when read operations are more frequent.",
            },
          },
          {
            LinkedList: {
              Implementation: "Backed by a doubly linked list.",
              Performance:
                "Slower for retrieval (O(n)) but faster for insertions and deletions (O(1) at known positions).",
              "Memory Usage":
                "Consumes more memory due to node storage (data + pointers).",
              "Insertion/Deletion":
                "Efficient for frequent insertions and deletions.",
              UseCase: "Preferred when insertions and deletions are frequent.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question: "What is the difference between HashSet and TreeSet?",
        compareHeading: ["Feature", "HashSet", "TreeSet"],
        comparision: [
          {
            HashSet: {
              Ordering: "Does not guarantee any order of elements.",
              Performance:
                "Faster due to hash-based storage (O(1) for basic operations).",
              "Null Handling": "Allows one null element.",
              Implementation: "Uses a hash table for storage.",
              UseCase: "Preferred for quick searches and insertions.",
            },
          },
          {
            TreeSet: {
              Ordering:
                "Maintains elements in natural order or custom order defined by a comparator.",
              Performance:
                "Slower due to tree-based storage (O(log n) for basic operations).",
              "Null Handling": "Does not allow null elements.",
              Implementation: "Uses a Red-Black tree for storage.",
              UseCase: "Preferred when a sorted collection is required.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question: "What is the difference between HashMap and Hashtable?",
        compareHeading: ["Feature", "HashMap", "Hashtable"],
        comparision: [
          {
            HashMap: {
              "Thread Safety": "Not thread-safe.",
              "Null Handling": "Allows one null key and multiple null values.",
              Performance: "Faster due to lack of synchronization.",
              Legacy: "Part of Java 1.2 Collection Framework.",
              UseCase: "Preferred in non-threaded applications.",
            },
          },
          {
            Hashtable: {
              "Thread Safety": "Thread-safe (synchronized).",
              "Null Handling": "Does not allow null keys or values.",
              Performance: "Slower due to synchronization overhead.",
              Legacy: "Considered a legacy class; existed before Java 2.",
              UseCase:
                "Preferred in threaded applications requiring synchronization.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between Vector and ArrayList? Why is Vector considered legacy?",
        compareHeading: ["Feature", "Vector", "ArrayList"],
        comparision: [
          {
            Vector: {
              "Thread Safety": "Thread-safe (synchronized).",
              Performance: "Slower due to synchronization overhead.",
              Growth: "Doubles the size of the array when resized.",
              Legacy: "Considered a legacy class; introduced in JDK 1.0.",
              UseCase:
                "Rarely used; replaced by ArrayList in modern applications.",
            },
          },
          {
            ArrayList: {
              "Thread Safety": "Not thread-safe.",
              Performance: "Faster due to lack of synchronization.",
              Growth: "Increases its size by 50% when resized.",
              Legacy:
                "Introduced in JDK 1.2 as part of the Collection Framework.",
              UseCase: "Preferred for non-threaded applications.",
            },
          },
        ],
        image: "",
      },
    },

    {
      comparision: {
        question:
          "What is the Iterator interface, and how is it different from the ListIterator?",
        compareHeading: ["Feature", "Iterator", "ListIterator"],
        comparision: [
          {
            Iterator: {
              Definition:
                "An interface used to iterate over elements in a collection (e.g., List, Set, Map).",
              Direction: "Supports only forward traversal.",
              "Supported Collections":
                "Applicable to all types of collections in the Java Collection Framework.",
              Methods: "hasNext(), next(), and remove().",
              "Bidirectional Support": "Does not support backward traversal.",
              Modification:
                "Allows removal of elements during iteration using remove().",
              UseCase: "Used for simple iteration through elements.",
            },
          },
          {
            ListIterator: {
              Definition:
                "An interface that extends Iterator and is specifically designed for iterating over List collections.",
              Direction: "Supports both forward and backward traversal.",
              "Supported Collections":
                "Applicable only to List collections (e.g., ArrayList, LinkedList).",
              Methods:
                "hasNext(), next(), remove(), hasPrevious(), previous(), add(), and set().",
              "Bidirectional Support":
                "Supports backward traversal using hasPrevious() and previous().",
              Modification:
                "Allows adding, modifying, and removing elements during iteration.",
              UseCase:
                "Used when bidirectional traversal or advanced operations are required.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question: "How does ArrayList differ from an array in Java?",
        compareHeading: ["Feature", "Array", "ArrayList"],
        comparision: [
          {
            Array: {
              Definition:
                "A fixed-size data structure that stores elements of the same type.",
              Size: "Size is fixed at the time of creation and cannot be changed.",
              Type: "Can store elements of any type (primitive or reference).",
              Memory:
                "Uses contiguous memory and is efficient in terms of memory usage.",
              Resizing:
                "Resizing is not possible once declared; a new array must be created.",
              Performance:
                "Faster when the size is known in advance and does not need resizing.",
            },
          },
          {
            ArrayList: {
              Definition:
                "A resizable array implementation of the List interface.",
              Size: "Size is dynamic and can grow or shrink as elements are added or removed.",
              Type: "Can only store reference types (objects), not primitives directly (but uses autoboxing for primitive types).",
              Memory:
                "Uses more memory as it has to accommodate extra space for resizing.",
              Resizing:
                "Automatically resizes when elements exceed its capacity.",
              Performance:
                "May be slightly slower compared to arrays due to resizing overhead and additional features like dynamic resizing.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between List, Set, and Queue interfaces in the Collections Framework?",
        compareHeading: ["Feature", "List", "Set", "Queue"],
        comparision: [
          {
            List: {
              Definition:
                "An ordered collection that allows duplicate elements.",
              Ordering: "Maintains insertion order of elements.",
              Duplicates: "Allows duplicate elements.",
              Access: "Supports positional access (by index).",
              UseCase:
                "Used when order matters, and duplicate elements are allowed.",
              "Example Implementations": "ArrayList, LinkedList, Vector.",
            },
          },
          {
            Set: {
              Definition:
                "A collection that does not allow duplicate elements.",
              Ordering:
                "Does not guarantee any specific order unless implemented by a specific subclass (e.g., TreeSet).",
              Duplicates: "Does not allow duplicate elements.",
              Access: "Does not support positional access (no indices).",
              UseCase:
                "Used when uniqueness is required, and order does not matter.",
              "Example Implementations": "HashSet, TreeSet, LinkedHashSet.",
            },
          },
          {
            Queue: {
              Definition:
                "A collection used for holding elements prior to processing, following a FIFO (First-In-First-Out) order.",
              Ordering:
                "Maintains the order in which elements are inserted (FIFO).",
              Duplicates: "Allows duplicate elements.",
              Access:
                "Supports methods like offer(), poll(), peek(), which are specifically designed for queue operations.",
              UseCase:
                "Used when elements need to be processed in the order they are added, like task scheduling.",
              "Example Implementations":
                "LinkedList (as Queue), PriorityQueue.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What are Vector and ArrayList in Java, and how do they differ?",
        compareHeading: ["Feature", "Vector", "ArrayList"],
        comparision: [
          {
            Vector: {
              Definition:
                "A resizable array that implements the List interface, similar to ArrayList but with thread synchronization.",
              "Thread Safety":
                "Thread-safe (synchronized), meaning it is safe for concurrent access by multiple threads.",
              Growth:
                "Doubles the size of the array when it runs out of space.",
              Performance: "Slower due to synchronization overhead.",
              Legacy: "Considered a legacy class, introduced in Java 1.0.",
              UseCase:
                "Used when thread safety is important, but generally replaced by more modern classes.",
            },
          },
          {
            ArrayList: {
              Definition:
                "A resizable array that implements the List interface, offering dynamic resizing but without synchronization.",
              "Thread Safety":
                "Not thread-safe, meaning external synchronization is required if accessed by multiple threads.",
              Growth: "Increases its size by 50% when it runs out of space.",
              Performance:
                "Faster than Vector due to lack of synchronization overhead.",
              Legacy:
                "Part of the Java Collection Framework (JDK 1.2 and later).",
              UseCase:
                "Preferred in single-threaded applications or when external synchronization is provided for concurrent access.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question: "What is the difference between HashMap and TreeMap in Java?",
        compareHeading: ["Feature", "HashMap", "TreeMap"],
        comparision: [
          {
            HashMap: {
              Definition:
                "A map implementation that stores key-value pairs using a hash table.",
              Ordering:
                "Does not guarantee any order of keys or values (unordered).",
              Performance:
                "Faster in general (O(1) for basic operations like get() and put()).",
              "Null Handling": "Allows one null key and multiple null values.",
              "Key Comparison":
                "Keys are compared using the hashCode() method.",
              UseCase:
                "Preferred when fast access and insertion are needed without concern for ordering.",
            },
          },
          {
            TreeMap: {
              Definition:
                "A map implementation that stores key-value pairs in a Red-Black tree structure.",
              Ordering:
                "Maintains keys in sorted order (natural order or custom comparator).",
              Performance:
                "Slower (O(log n) for basic operations) due to tree structure.",
              "Null Handling":
                "Does not allow null keys, but allows null values.",
              "Key Comparison":
                "Keys are compared using compareTo() or a Comparator.",
              UseCase:
                "Preferred when the keys need to be stored in a sorted order.",
            },
          },
        ],
        image: "",
      },
    },
    {
      comparision: {
        question:
          "What are the key differences between Queue and Deque interfaces in the Java Collections Framework?",
        compareHeading: ["Feature", "Queue", "Deque"],
        comparision: [
          {
            Queue: {
              Definition:
                "A collection used to hold elements before processing, following a FIFO (First-In-First-Out) order.",
              Access:
                "Supports operations like offer(), poll(), and peek() for FIFO processing.",
              Order: "Follows FIFO order by default.",
              Types:
                "Used to represent simple queues, where elements are processed in order of arrival.",
              UseCase:
                "Used in scenarios like task scheduling, message handling, etc.",
            },
          },
          {
            Deque: {
              Definition:
                "A double-ended queue that allows elements to be added or removed from both ends (front and back).",
              Access:
                "Supports operations like addFirst(), addLast(), removeFirst(), removeLast(), peekFirst(), peekLast(), etc.",
              Order: "Supports both FIFO and LIFO (Last-In-First-Out) orders.",
              Types: "Used for implementing both queues and stacks.",
              UseCase:
                "Used in situations where elements need to be processed from both ends, like dequeuing and stack operations.",
            },
          },
        ],
        image: "",
      },
    },
  ],
};

export default javaCollectionQuestions;
