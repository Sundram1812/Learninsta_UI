const javaMultithreadingQuestions = {

  title: "Java - Multithreading",

  questions: [
    {
      content: {
        question: "What is multithreading in Java?",
        answer:
          "Multithreading in Java is the concurrent execution of two or more threads.",
        explanation:
          "Each thread is an independent path of execution. Multithreading is used to perform multiple tasks simultaneously, enhancing the performance of applications.",
        codeSnippet: `
  class MyThread extends Thread {
      public void run() {
          System.out.println("Thread is running...");
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          MyThread thread = new MyThread();
          thread.start();
      }
  }
          `,
      },
    },
    {
      content: {
        question: "How is multithreading different from multitasking?",
        answer:
          "Multithreading focuses on multiple threads within a single process, whereas multitasking involves multiple processes.",
        explanation:
          "Multithreading operates within a single application and shares resources, whereas multitasking involves multiple applications, each running in its own process, managed by the operating system.",
        codeSnippet: null,
      },
    },
    {
      content: {
        question: "What is the difference between a process and a thread?",
        answer:
          "A process is an independent program under execution, while a thread is a lightweight sub-process within a process.",
        explanation:
          "A process has its own memory space, while threads share the same memory space of the process they belong to.",
        codeSnippet: null,
      },
    },
    {
      content: {
        question: "What are the benefits of multithreading?",
        answer:
          "The benefits include better CPU utilization, concurrent execution, and responsiveness in applications.",
        explanation:
          "Multithreading allows efficient resource usage and smooth user experiences by handling tasks concurrently, such as running a background operation while keeping the UI responsive.",
        codeSnippet: null,
      },
    },
    {
      content: {
        question: "What are the states in the lifecycle of a thread?",
        answer:
          "The states are New, Runnable, Running, Blocked/Waiting, and Terminated.",
        explanation:
          "A thread starts in the New state, moves to Runnable when start() is called, Running when it gets CPU, Blocked/Waiting if it's waiting for resources, and Terminated after completion.",
        codeSnippet: null,
      },
    },
    {
      content: {
        question: "How do you create a thread in Java?",
        answer:
          "You can create a thread by extending the Thread class or implementing the Runnable interface.",
        explanation:
          "Extending Thread allows overriding the run() method, while Runnable is preferred when your class already extends another class.",
        codeSnippet: `
  class MyThread extends Thread {
      public void run() {
          System.out.println("Thread using Thread class");
      }
  }
  
  class MyRunnable implements Runnable {
      public void run() {
          System.out.println("Thread using Runnable interface");
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          new MyThread().start();
          new Thread(new MyRunnable()).start();
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the difference between extending Thread class and implementing Runnable interface?",
        answer:
          "Extending Thread directly inherits the Thread class, while implementing Runnable allows flexibility to extend another class.",
        explanation:
          "Runnable is preferred in scenarios requiring multiple inheritance, as Java supports single inheritance for classes but multiple inheritance for interfaces.",
        codeSnippet: null,
      },
    },
    {
      content: {
        question: "What is the purpose of the start() method in threads?",
        answer: "The start() method begins the execution of a thread.",
        explanation:
          "It creates a new call stack for the thread and internally calls the run() method of the thread.",
        codeSnippet: `
  Thread thread = new Thread(() -> System.out.println("Thread started"));
  thread.start(); // Starts the thread
          `,
      },
    },
    {
      content: {
        question:
          "Can we call the run() method of a thread directly? What happens if we do so?",
        answer:
          "Yes, you can call the run() method directly, but it will execute in the current thread instead of starting a new one.",
        explanation:
          "Calling run() directly does not create a separate call stack; it treats the method as a normal method call.",
        codeSnippet: `
  Thread thread = new Thread(() -> System.out.println("Thread executed via run()"));
  thread.run(); // Executes in the main thread
          `,
      },
    },
    {
      content: {
        question: "How can you stop a thread in Java?",
        answer:
          "A thread can be stopped using flags, interruption, or by letting it complete its task.",
        explanation:
          "Java does not provide a direct method like stop() (deprecated) for safe termination. Instead, you should use flags or the interrupt() method for graceful termination.",
        codeSnippet: `
  class StoppableThread extends Thread {
      private volatile boolean running = true;
  
      public void run() {
          while (running) {
              System.out.println("Running...");
          }
      }
  
      public void stopThread() {
          running = false;
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          StoppableThread thread = new StoppableThread();
          thread.start();
          thread.stopThread();
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the difference between yield(), sleep(), and join() methods?",
        answer:
          "yield() pauses the current thread to allow other threads to execute, sleep() pauses the thread for a specific time, and join() waits for another thread to finish.",
        explanation:
          "yield() and sleep() are static methods of Thread class, while join() is an instance method used to ensure a thread's completion before proceeding.",
        codeSnippet: `
  Thread thread = new Thread(() -> System.out.println("Thread working"));
  thread.start();
  thread.join(); // Waits for thread to finish
          `,
      },
    },
    {
      content: {
        question: "How can you check if a thread is alive?",
        answer: "You can check using the isAlive() method.",
        explanation:
          "The isAlive() method returns true if the thread has been started and has not yet completed execution.",
        codeSnippet: `
  Thread thread = new Thread(() -> {});
  thread.start();
  System.out.println(thread.isAlive());
          `,
      },
    },
    {
      content: {
        question:
          "What is a daemon thread, and how is it different from a user thread?",
        answer:
          "A daemon thread is a background thread that terminates when all user threads finish.",
        explanation:
          "Daemon threads are typically used for background tasks like garbage collection. You can set a thread as a daemon using the setDaemon(true) method.",
        codeSnippet: `
  Thread daemonThread = new Thread(() -> System.out.println("Daemon thread"));
  daemonThread.setDaemon(true);
  daemonThread.start();
          `,
      },
    },
    {
      content: {
        question: "How can you set a thread's priority in Java?",
        answer:
          "You can set a thread's priority using the setPriority() method.",
        explanation:
          "Thread priorities range from 1 (MIN_PRIORITY) to 10 (MAX_PRIORITY), with the default priority being 5 (NORM_PRIORITY).",
        codeSnippet: `
  Thread thread = new Thread(() -> System.out.println("Thread with priority"));
  thread.setPriority(Thread.MAX_PRIORITY);
  thread.start();
          `,
      },
    },
    {
      content: {
        question: "What happens if a thread throws an uncaught exception?",
        answer:
          "If a thread throws an uncaught exception, the JVM handles it using the default uncaught exception handler.",
        explanation:
          "You can customize the behavior by setting your own UncaughtExceptionHandler using Thread. setDefaultUncaughtExceptionHandler()",
        codeSnippet: `
  Thread thread = new Thread(() -> {
      throw new RuntimeException("Test exception");
  });
  thread.setUncaughtExceptionHandler((t, e) -> System.out.println("Exception: " + e));
  thread.start();
          `,
      },
    },

    {
      content: {
        question: "What is thread synchronization, and why is it needed?",
        answer:
          "Thread synchronization is a mechanism to control the access of multiple threads to shared resources.",
        explanation:
          "Synchronization prevents data inconsistency and ensures thread safety by allowing only one thread to access a critical section at a time.",
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
          Thread t1 = new Thread(() -> counter.increment());
          Thread t2 = new Thread(() -> counter.increment());
          t1.start();
          t2.start();
      }
  }
          `,
      },
    },
    {
      content: {
        question: "How do you achieve thread synchronization in Java?",
        answer:
          "You achieve synchronization using the synchronized keyword or the Lock interface.",
        explanation:
          "The synchronized keyword can be applied to methods or blocks of code, while the Lock interface provides more control and flexibility.",
        codeSnippet: `
  class Counter {
      private int count = 0;
  
      public void increment() {
          synchronized (this) {
              count++;
          }
      }
  
      public int getCount() {
          return count;
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is a synchronized block, and how is it different from a synchronized method?",
        answer:
          "A synchronized block locks only a specific section of code, while a synchronized method locks the entire method.",
        explanation:
          "Synchronized blocks are more fine-grained and allow better performance by reducing the scope of synchronization.",
        codeSnippet: `
  class Counter {
      private int count = 0;
  
      public void increment() {
          synchronized (this) {
              count++;
          }
      }
  
      public synchronized void decrement() {
          count--;
      }
  }
          `,
      },
    },
    {
      content: {
        question: "What is the purpose of the volatile keyword in Java?",
        answer:
          "The volatile keyword ensures visibility of changes to a variable across threads.",
        explanation:
          "It prevents threads from caching the value of a variable and forces them to read it directly from the main memory.",
        codeSnippet: `
  class VolatileExample {
      private volatile boolean running = true;
  
      public void stopRunning() {
          running = false;
      }
  
      public void run() {
          while (running) {
              System.out.println("Running...");
          }
      }
  }
          `,
      },
    },
    {
      content: {
        question: "What is thread safety, and how do you achieve it in Java?",
        answer:
          "Thread safety ensures that shared resources are accessed correctly by multiple threads.",
        explanation:
          "You can achieve thread safety using synchronization, the volatile keyword, thread-safe collections, or immutability.",
        codeSnippet: `
  import java.util.concurrent.locks.ReentrantLock;
  
  class Counter {
      private int count = 0;
      private ReentrantLock lock = new ReentrantLock();
  
      public void increment() {
          lock.lock();
          try {
              count++;
          } finally {
              lock.unlock();
          }
      }
  
      public int getCount() {
          return count;
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "Explain wait(), notify(), and notifyAll() methods in multithreading.",
        answer:
          "These methods are used for inter-thread communication in Java.",
        explanation:
          "wait() makes a thread wait until it is notified, notify() wakes up one waiting thread, and notifyAll() wakes up all waiting threads.",
        codeSnippet: `
  class SharedResource {
      public synchronized void produce() throws InterruptedException {
          System.out.println("Producing...");
          wait();
          System.out.println("Resumed after notify");
      }
  
      public synchronized void consume() {
          System.out.println("Consuming...");
          notify();
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the difference between synchronized and Lock interface in Java?",
        answer:
          "The synchronized keyword is simpler to use, while the Lock interface provides more control and flexibility.",
        explanation:
          "Locks allow try-lock operations, timeouts, and interruptible locking, which are not possible with synchronized.",
        codeSnippet: `
  import java.util.concurrent.locks.Lock;
  import java.util.concurrent.locks.ReentrantLock;
  
  class Counter {
      private int count = 0;
      private Lock lock = new ReentrantLock();
  
      public void increment() {
          lock.lock();
          try {
              count++;
          } finally {
              lock.unlock();
          }
      }
  }
          `,
      },
    },
    {
      content: {
        question: "What is the ThreadLocal class in Java?",
        answer: "ThreadLocal provides thread-local variables.",
        explanation:
          "Each thread accessing a ThreadLocal variable gets its own independent copy, ensuring no interference between threads.",
        codeSnippet: `
  class ThreadLocalExample {
      private static ThreadLocal<Integer> threadLocal = ThreadLocal.withInitial(() -> 0);
  
      public static void main(String[] args) {
          Thread t1 = new Thread(() -> threadLocal.set(1));
          Thread t2 = new Thread(() -> threadLocal.set(2));
          t1.start();
          t2.start();
      }
  }
          `,
      },
    },
    {
      content: {
        question: "What are thread pools, and why are they used?",
        answer: "Thread pools are a collection of reusable threads.",
        explanation:
          "They improve performance by reusing threads and managing the number of concurrent threads efficiently.",
        codeSnippet: null,
      },
    },
    {
      content: {
        question: "How do you create a thread pool in Java?",
        answer: "You can create a thread pool using the Executors class.",
        explanation:
          "The Executors class provides methods to create thread pools like fixed thread pools, cached thread pools, etc.",
        codeSnippet: `
  import java.util.concurrent.ExecutorService;
  import java.util.concurrent.Executors;
  
  public class Main {
      public static void main(String[] args) {
          ExecutorService executor = Executors.newFixedThreadPool(5);
          for (int i = 0; i < 10; i++) {
              executor.submit(() -> System.out.println(Thread.currentThread().getName()));
          }
          executor.shutdown();
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the Callable interface, and how is it different from Runnable?",
        answer:
          "The Callable interface allows tasks to return a result and throw exceptions, while Runnable does not.",
        explanation:
          "Callable is part of java.util.concurrent and is used for tasks that need to return a result asynchronously.",
        codeSnippet: `
  import java.util.concurrent.Callable;
  
  class MyTask implements Callable<String> {
      public String call() {
          return "Task result";
      }
  }
          `,
      },
    },
    {
      content: {
        question: "What is the Future interface in Java?",
        answer:
          "The Future interface represents the result of an asynchronous computation.",
        explanation:
          "It provides methods to check if the computation is complete, retrieve the result, or cancel the task.",
        codeSnippet: `
  import java.util.concurrent.ExecutorService;
  import java.util.concurrent.Executors;
  import java.util.concurrent.Future;
  
  public class Main {
      public static void main(String[] args) throws Exception {
          ExecutorService executor = Executors.newSingleThreadExecutor();
          Future<String> future = executor.submit(() -> "Hello from Callable");
          System.out.println(future.get());
          executor.shutdown();
      }
  }
          `,
      },
    },
    {
      content: {
        question: "Explain the ExecutorService framework.",
        answer:
          "The ExecutorService framework provides a way to manage and control thread execution.",
        explanation:
          "It simplifies thread management by providing thread pools, task submission, and task scheduling features.",
        codeSnippet: `
  import java.util.concurrent.ExecutorService;
  import java.util.concurrent.Executors;
  
  public class Main {
      public static void main(String[] args) {
          ExecutorService executor = Executors.newFixedThreadPool(3);
          for (int i = 0; i < 5; i++) {
              executor.submit(() -> System.out.println(Thread.currentThread().getName()));
          }
          executor.shutdown();
      }
  }
          `,
      },
    },
    {
      content: {
        question: "How does the ReentrantLock work in Java?",
        answer:
          "ReentrantLock is a Lock implementation that allows threads to acquire the same lock multiple times.",
        explanation:
          "It provides advanced features like fair locking and interruptible lock acquisition.",
        codeSnippet: `
  import java.util.concurrent.locks.ReentrantLock;
  
  class Counter {
      private int count = 0;
      private ReentrantLock lock = new ReentrantLock();
  
      public void increment() {
          lock.lock();
          try {
              count++;
          } finally {
              lock.unlock();
          }
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "What is the difference between CountDownLatch and CyclicBarrier?",
        answer:
          "CountDownLatch is used for waiting for other threads to complete tasks, while CyclicBarrier is used to synchronize threads at a common point.",
        explanation:
          "CountDownLatch cannot be reused, but CyclicBarrier can be reused after all threads reach the barrier.",
        codeSnippet: `
  import java.util.concurrent.CountDownLatch;
  
  class Main {
      public static void main(String[] args) throws InterruptedException {
          CountDownLatch latch = new CountDownLatch(3);
  
          Runnable worker = () -> {
              System.out.println(Thread.currentThread().getName() + " working");
              latch.countDown();
          };
  
          new Thread(worker).start();
          new Thread(worker).start();
          new Thread(worker).start();
  
          latch.await();
          System.out.println("All tasks completed");
      }
  }
          `,
      },
    },

    {
      content: {
        question: "What is context switching in multithreading?",
        answer:
          "Context switching is the process of saving the state of a currently executing thread and restoring the state of a different thread to resume its execution.",
        explanation:
          "In multithreading, the CPU switches between threads to simulate concurrency. During this process, the state of the current thread (such as registers, program counter, etc.) is stored, and the state of the next thread to be executed is loaded. Although context switching allows multitasking, it incurs overhead, impacting performance.",
        codeSnippet: `
  /* Simulating thread context switching */
  class Task implements Runnable {
      private final String name;
  
      public Task(String name) {
          this.name = name;
      }
  
      @Override
      public void run() {
          for (int i = 1; i <= 5; i++) {
              System.out.println(name + " is executing step " + i);
              try {
                  Thread.sleep(100); // Simulates task execution and allows context switching
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Thread t1 = new Thread(new Task("Thread-1"));
          Thread t2 = new Thread(new Task("Thread-2"));
          t1.start();
          t2.start();
      }
  }
          `,
      },
    },
    {
      content: {
        question: "How do you handle thread interference issues in Java?",
        answer:
          "Thread interference issues are handled using synchronization mechanisms like synchronized blocks, synchronized methods, or locks.",
        explanation:
          "Thread interference occurs when two or more threads attempt to modify shared resources concurrently, leading to data inconsistency. By synchronizing access to the critical section, only one thread can execute the code at a time, ensuring data integrity.",
        codeSnippet: `
  class Counter {
      private int count = 0;
  
      public synchronized void increment() {
          count++;
      }
  
      public synchronized int getCount() {
          return count;
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Counter counter = new Counter();
          Thread t1 = new Thread(() -> {
              for (int i = 0; i < 1000; i++) counter.increment();
          });
          Thread t2 = new Thread(() -> {
              for (int i = 0; i < 1000; i++) counter.increment();
          });
          t1.start();
          t2.start();
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "Explain how thread starvation can occur in a priority-based scheduling system.",
        answer:
          "Thread starvation occurs when lower-priority threads are unable to execute because higher-priority threads monopolize the CPU.",
        explanation:
          "In a priority-based scheduling system, the CPU prioritizes higher-priority threads, potentially leaving lower-priority threads in a waiting state indefinitely. This can happen if high-priority threads are always active and block the execution of lower-priority threads.",
        codeSnippet: `
  class Task implements Runnable {
      private final String name;
  
      public Task(String name) {
          this.name = name;
      }
  
      @Override
      public void run() {
          for (int i = 1; i <= 5; i++) {
              System.out.println(name + " is executing step " + i);
          }
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Thread highPriority = new Thread(new Task("High Priority"));
          Thread lowPriority = new Thread(new Task("Low Priority"));
  
          highPriority.setPriority(Thread.MAX_PRIORITY); // Priority 10
          lowPriority.setPriority(Thread.MIN_PRIORITY);  // Priority 1
  
          highPriority.start();
          lowPriority.start();
      }
  }
          `,
      },
    },
    {
      content: {
        question: "How would you design a producer-consumer problem in Java?",
        answer:
          "The producer-consumer problem can be designed using a shared queue with synchronization mechanisms such as wait() and notify().",
        explanation:
          "The producer adds items to the queue, and the consumer removes items from the queue. Synchronization ensures that the producer waits when the queue is full and the consumer waits when the queue is empty. This prevents data corruption and ensures proper coordination.",
        codeSnippet: `
  import java.util.LinkedList;
  import java.util.Queue;
  
  class SharedQueue {
      private final Queue<Integer> queue = new LinkedList<>();
      private final int capacity;
  
      public SharedQueue(int capacity) {
          this.capacity = capacity;
      }
  
      public synchronized void produce(int value) throws InterruptedException {
          while (queue.size() == capacity) {
              wait(); // Wait until space is available
          }
          queue.add(value);
          System.out.println("Produced: " + value);
          notifyAll(); // Notify consumers
      }
  
      public synchronized int consume() throws InterruptedException {
          while (queue.isEmpty()) {
              wait(); // Wait until items are available
          }
          int value = queue.poll();
          System.out.println("Consumed: " + value);
          notifyAll(); // Notify producers
          return value;
      }
  }
  
  public class ProducerConsumer {
      public static void main(String[] args) {
          SharedQueue sharedQueue = new SharedQueue(5);
  
          Thread producer = new Thread(() -> {
              for (int i = 0; i < 10; i++) {
                  try {
                      sharedQueue.produce(i);
                  } catch (InterruptedException e) {
                      e.printStackTrace();
                  }
              }
          });
  
          Thread consumer = new Thread(() -> {
              for (int i = 0; i < 10; i++) {
                  try {
                      sharedQueue.consume();
                  } catch (InterruptedException e) {
                      e.printStackTrace();
                  }
              }
          });
  
          producer.start();
          consumer.start();
      }
  }
          `,
      },
    },
    {
      content: {
        question:
          "Can two threads access two synchronized methods of the same object simultaneously? Why or why not?",
        answer:
          "No, two threads cannot access two synchronized methods of the same object simultaneously because both methods share the same intrinsic lock.",
        explanation:
          "When a thread accesses a synchronized method, it acquires the object's intrinsic lock. Other threads trying to access any synchronized method of the same object must wait until the lock is released. This ensures mutual exclusion and prevents data corruption.",
        codeSnippet: `
  class SharedResource {
      public synchronized void method1() {
          System.out.println(Thread.currentThread().getName() + " entered method1");
          try {
              Thread.sleep(2000); // Simulating some work
          } catch (InterruptedException e) {
              e.printStackTrace();
          }
          System.out.println(Thread.currentThread().getName() + " exiting method1");
      }
  
      public synchronized void method2() {
          System.out.println(Thread.currentThread().getName() + " entered method2");
          try {
              Thread.sleep(2000); // Simulating some work
          } catch (InterruptedException e) {
              e.printStackTrace();
          }
          System.out.println(Thread.currentThread().getName() + " exiting method2");
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          SharedResource resource = new SharedResource();
  
          Thread t1 = new Thread(() -> resource.method1(), "Thread-1");
          Thread t2 = new Thread(() -> resource.method2(), "Thread-2");
  
          t1.start();
          t2.start();
      }
  }
          `,
      },
    },

    {
      content: {
        question: "What does the start() method do in Java threads?",
        answer:
          "The `start()` method begins the execution of a thread by calling its `run()` method.",
        explanation:
          "It creates a new thread and schedules it for execution, while `run()` contains the code to be executed in the thread.",
        codeSnippet: `
    Thread thread = new Thread(() -> System.out.println("Thread running"));
    thread.start(); // Starts the thread
          `,
      },
    },
    {
      content: {
        question: "What does the run() method do in Java threads?",
        answer:
          "The `run()` method contains the code that is executed when the thread is started.",
        explanation:
          "It is called by the `start()` method and defines the task the thread will perform.",
        codeSnippet: `
    Thread thread = new Thread(() -> {
        System.out.println("Thread is running");
    });
    thread.start(); // Calls the run() method
          `,
      },
    },
    {
      content: {
        question: "What does the sleep(long millis) method do in Java threads?",
        answer:
          "The `sleep(long millis)` method pauses the execution of the current thread for the specified number of milliseconds.",
        explanation: "It is used to introduce a delay in thread execution.",
        codeSnippet: `
    try {
        Thread.sleep(1000); // Pauses the thread for 1 second
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
          `,
      },
    },
    {
      content: {
        question: "What does the join() method do in Java threads?",
        answer:
          "The `join()` method waits for a thread to complete its execution before continuing the current thread.",
        explanation:
          "It is used to ensure that one thread finishes before another proceeds.",
        codeSnippet: `
    Thread thread = new Thread(() -> {
        System.out.println("Thread running");
    });
    thread.start();
    thread.join(); // Waits for the thread to finish
    System.out.println("Thread finished");
          `,
      },
    },
    {
      content: {
        question: "What does the yield() method do in Java threads?",
        answer:
          "The `yield()` method pauses the current thread and allows other threads of the same priority to execute.",
        explanation:
          "It is a hint to the thread scheduler to give other threads a chance to run.",
        codeSnippet: `
    Thread.yield(); // Pauses the current thread
          `,
      },
    },
    {
      content: {
        question: "What does the interrupt() method do in Java threads?",
        answer:
          "The `interrupt()` method interrupts a thread, setting its interrupted status to true.",
        explanation:
          "It is used to stop or wake up a thread that is blocked or sleeping.",
        codeSnippet: `
    Thread thread = new Thread(() -> {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println("Thread interrupted");
        }
    });
    thread.start();
    thread.interrupt(); // Interrupts the thread
          `,
      },
    },
    {
      content: {
        question: "What does the isInterrupted() method do in Java threads?",
        answer:
          "The `isInterrupted()` method checks if a thread has been interrupted without clearing the interrupted status.",
        explanation:
          "It returns `true` if the thread's interrupted status is set, otherwise `false`.",
        codeSnippet: `
    Thread thread = new Thread(() -> {
        while (!Thread.currentThread().isInterrupted()) {
            System.out.println("Running");
        }
    });
    thread.start();
    thread.interrupt(); // Interrupts the thread
          `,
      },
    },
    {
      content: {
        question: "What does the interrupted() method do in Java threads?",
        answer:
          "The `interrupted()` method checks if the current thread has been interrupted and clears the interrupted status.",
        explanation:
          "It is a static method that checks and clears the interrupted flag.",
        codeSnippet: `
    if (Thread.interrupted()) {
        System.out.println("Thread was interrupted");
    }
          `,
      },
    },
    {
      content: {
        question: "What does the isAlive() method do in Java threads?",
        answer: "The `isAlive()` method checks if a thread is still running.",
        explanation:
          "It returns `true` if the thread is active, otherwise `false`.",
        codeSnippet: `
    Thread thread = new Thread(() -> {
        System.out.println("Thread running");
    });
    thread.start();
    System.out.println("Thread alive: " + thread.isAlive());
          `,
      },
    },
    {
      content: {
        question: "What does the isDaemon() method do in Java threads?",
        answer:
          "The `isDaemon()` method checks if a thread is a daemon thread.",
        explanation:
          "Daemon threads are background threads that do not prevent the JVM from exiting.",
        codeSnippet: `
    Thread thread = new Thread(() -> {
        System.out.println("Daemon thread running");
    });
    thread.setDaemon(true); // Set as daemon thread
    thread.start();
    System.out.println("Is daemon: " + thread.isDaemon());
          `,
      },
    },
    {
      content: {
        question: "What does the currentThread() method do in Java threads?",
        answer:
          "The `currentThread()` method returns a reference to the currently executing thread.",
        explanation:
          "It is a static method used to access the current thread's properties.",
        codeSnippet: `
    Thread currentThread = Thread.currentThread();
    System.out.println("Current thread: " + currentThread.getName());
          `,
      },
    },
  ],
};

export default javaMultithreadingQuestions;
