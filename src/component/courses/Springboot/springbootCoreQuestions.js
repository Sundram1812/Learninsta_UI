const springbootCoreQuestions = {
  title: "Springboot Core",
  questions: [
    {
      content: {
        question: "How does a Spring Boot application start?",
        answer:
          "A Spring Boot application starts with the `main` method, which calls `SpringApplication.run()` to bootstrap the application.",
        explanation:
          "<div><strong>Spring Boot Application Startup Process:</strong></div> <ul> <li><strong>Self-Contained Applications</strong> - Spring Boot applications include an embedded server such as <code>Tomcat</code>, <code>Jetty</code>, or <code>Undertow</code>.</li> <li><strong>Key Features of <code>@SpringBootApplication</code>:</strong> <ul> <li>Enables <strong>auto-configuration</strong>.</li> <li>Performs <strong>component scanning</strong>.</li> <li>Applies <strong>Spring Boot defaults</strong>.</li> </ul> </li> <li><strong>Steps in <code>SpringApplication.run()</code> Execution:</strong> <ul> <li><strong>Initialize ApplicationContext</strong> - Sets up the Spring container.</li> <li><strong>Load Beans and Configurations</strong> - Scans and initializes necessary components.</li> <li><strong>Start Embedded Web Server</strong> - If it's a web application, an embedded server is started.</li> <li><strong>Run the Application</strong> - The application executes and becomes operational.</li> </ul> </li> </ul>",
        codeSnippet:
          "@SpringBootApplication\npublic class MyApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApplication.class, args);\n    }\n}",
      },
    },
    {
      comparision: {
        question: "What is the difference between Spring Boot and Spring MVC?",
        compareHeading: ["Spring Boot", "Spring MVC"],
        comparision: [
          {
            "Spring Boot": {
              Definition:
                "A framework built on top of Spring that simplifies application development with auto-configuration and embedded servers.",
              Purpose:
                "Provides a complete environment for developing stand-alone, production-ready Spring applications with minimal configuration.",
              Configuration:
                "Uses convention over configuration with auto-configuration, reducing the need for XML or manual setup.",
              "Embedded Server":
                "Includes embedded servers like Tomcat, Jetty, and Undertow, eliminating the need for external deployment.",
              "Dependency Management":
                "Uses Spring Boot Starters for easy dependency management and setup.",
              "Use Case":
                "Best suited for microservices, RESTful APIs, and rapid development of Spring applications.",
            },
          },
          {
            "Spring MVC": {
              Definition:
                "A module of the Spring Framework used for building web applications following the Model-View-Controller (MVC) architecture.",
              Purpose:
                "Facilitates the development of traditional web applications by separating concerns into Model, View, and Controller layers.",
              Configuration:
                "Requires manual configuration using XML or Java-based configurations for setting up web applications.",
              "Embedded Server":
                "Does not provide an embedded server; requires external deployment on Tomcat, Jetty, or other servlet containers.",
              "Dependency Management":
                "Requires manual dependency management using Spring Core and other required libraries.",
              "Use Case":
                "Best suited for traditional web applications that require MVC architecture and template rendering.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question:
          "How does Spring Boot handle dependency management using the parent POM?",
        answer:
          "Spring Boot simplifies dependency management by providing a **parent POM (`spring-boot-starter-parent`)** that includes predefined versions of commonly used dependencies, reducing the need for manual version management.",
        explanation:
          "<div><strong>Spring Boot Starter Parent:</strong></div> <ul> <li><strong>Purpose</strong> - When a project uses <code>spring-boot-starter-parent</code> as its parent POM, it inherits default dependency versions and useful Maven configurations.</li> <li><strong>Key Benefits:</strong> <ul> <li><strong>Predefined Dependency Versions</strong> - No need to specify versions for commonly used libraries.</li> <li><strong>Automatic Inheritance of Plugins & Defaults</strong> - Includes essential Maven plugin configurations.</li> <li><strong>Customizable Dependencies</strong> - Developers can override dependency versions when needed.</li> </ul> </li> <li><strong>Alternative Approach:</strong> - Spring Boot provides a BOM (Bill of Materials) approach using <code>spring-boot-dependencies</code> to manage dependencies without using the parent POM.</li> </ul>",
        codeSnippet:
          "<!-- Using Spring Boot Parent POM -->\n<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>3.1.0</version>\n    <relativePath/> <!-- Prevents looking for parent POM in the local repository -->\n</parent>\n\n<!-- Overriding Dependency Versions -->\n<properties>\n    <java.version>17</java.version>\n    <spring-boot.version>3.1.0</spring-boot.version>\n</properties>\n\n<!-- Using BOM Instead of Parent POM -->\n<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-dependencies</artifactId>\n            <version>3.1.0</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>",
      },
    },
    {
      content: {
        question: "What is the scope of a bean in Spring Boot?",
        answer:
          "In Spring Boot, the scope of a bean defines its lifecycle and how it is created and shared within the application context.",
        explanation:"<div><strong>Types of Bean Scopes in Spring Boot:</strong></div> <ul> <li><strong>Singleton (Default)</strong> - Only one instance of the bean is created and shared across the application.</li> <li><strong>Prototype</strong> - A new instance of the bean is created each time it is requested.</li> <li><strong>Request (Web Scope)</strong> - A new bean instance is created for each HTTP request.</li> <li><strong>Session (Web Scope)</strong> - A new bean instance is created for each user session.</li> <li><strong>Application (Web Scope)</strong> - A single instance is created and shared across the entire application.</li> <li><strong>WebSocket (Web Scope)</strong> - A new bean instance is created for each WebSocket session.</li> </ul> <div><strong>Example Usage:</strong></div> <ul> <li><strong>Singleton</strong> - Shared across the application (default behavior).</li> <li><strong>Prototype</strong> - Useful for stateful beans where a new instance is required each time.</li> <li><strong>Request/Session/Application/WebSocket</strong> - Used in web applications to manage per-user or per-request data.</li> </ul>",
        codeSnippet:
          '// Example: Defining Bean Scope in Spring Boot\n@Component\n@Scope("singleton") // Default scope (Singleton)\npublic class MySingletonBean {\n    public MySingletonBean() {\n        System.out.println("Singleton Bean Created");\n    }\n}\n\n@Component\n@Scope("prototype") // Creates a new instance every time\npublic class MyPrototypeBean {\n    public MyPrototypeBean() {\n        System.out.println("Prototype Bean Created");\n    }\n}\n\n// Example Usage in a Controller\n@RestController\n@RequestMapping("/scope")\npublic class ScopeController {\n    @Autowired\n    private MySingletonBean singletonBean1;\n    \n    @Autowired\n    private MyPrototypeBean prototypeBean1;\n    \n    @GetMapping("/test")\n    public String testScope() {\n        MyPrototypeBean prototypeBean2 = new MyPrototypeBean();\n        return "Check logs to see bean creation!";\n    }\n}',
      },
    },
    {
      content: {
        question: "What is the Bean Lifecycle in Spring Boot?",
        answer:
          "The Bean Lifecycle in Spring Boot refers to the different stages a bean goes through from creation to destruction within the Spring IoC container.",
        explanation:
          '<div><strong>Bean Lifecycle Stages:</strong></div>\n<ul>\n<li><strong>Instantiation</strong> - Spring creates an instance of the bean.</li>\n<li><strong>Populate Properties</strong> - Spring injects dependencies into the bean.</li>\n<li><strong>Bean Initialization:</strong>\n    <ul>\n        <li><code>@PostConstruct</code> - Method runs after dependency injection.</li>\n        <li><code>InitializingBean#afterPropertiesSet()</code> - Interface-based init method.</li>\n        <li>Custom init method (Defined in <code>@Bean(initMethod = "init")</code>).</li>\n    </ul>\n</li>\n<li><strong>Bean Ready to Use</strong> - The bean is fully initialized and can be used.</li>\n<li><strong>Bean Destruction:</strong>\n    <ul>\n        <li><code>@PreDestroy</code> - Runs before the bean is removed from the container.</li>\n        <li><code>DisposableBean#destroy()</code> - Interface-based destroy method.</li>\n        <li>Custom destroy method (Defined in <code>@Bean(destroyMethod = "destroy")</code>).</li>\n    </ul>\n</li>\n</ul>\n\n<div><strong>Ways to Customize Bean Lifecycle:</strong></div>\n<ul>\n<li>Using annotations: <code>@PostConstruct</code> and <code>@PreDestroy</code></li>\n<li>Implementing <code>InitializingBean</code> and <code>DisposableBean</code> interfaces</li>\n<li>Defining custom init and destroy methods in <code>@Bean</code></li>\n</ul>',
        codeSnippet:
          '// Example: Bean Lifecycle with @PostConstruct and @PreDestroy\n@Component\npublic class MyBean {\n    public MyBean() {\n        System.out.println("Bean Instantiated");\n    }\n\n    @PostConstruct\n    public void init() {\n        System.out.println("Bean Initialized");\n    }\n\n    @PreDestroy\n    public void destroy() {\n        System.out.println("Bean Destroyed");\n    }\n}\n\n// Example: Custom Init and Destroy Methods in @Bean\n@Configuration\npublic class AppConfig {\n    @Bean(initMethod = "customInit", destroyMethod = "customDestroy")\n    public MyCustomBean myCustomBean() {\n        return new MyCustomBean();\n    }\n}\n\npublic class MyCustomBean {\n    public void customInit() {\n        System.out.println("Custom Init Method");\n    }\n    \n    public void customDestroy() {\n        System.out.println("Custom Destroy Method");\n    }\n}',
      },
    },

    {
      content: {
        question: "What is the purpose of `spring-boot-starter-parent`?",
        answer:
          "The `spring-boot-starter-parent` is a special parent POM in Spring Boot that provides default configurations, dependency management, and plugin settings for Spring Boot applications.",
        explanation:"<div><strong>Extending <code>spring-boot-starter-parent</code> Benefits:</strong></div> <ul> <li><strong>Dependency Management</strong> - Automatically provides compatible versions of common dependencies.</li> <li><strong>Plugin Configuration</strong> - Pre-configured Maven plugins for packaging, testing, and running the application.</li> <li><strong>Java Version Management</strong> - Defaults to a specific Java version but can be overridden.</li> <li><strong>Simplifies Application Setup</strong> - Reduces boilerplate code and ensures best practices.</li> </ul> ",
        codeSnippet:
          "<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>3.1.0</version>\n    <relativePath/> <!-- Prevents searching for the parent POM in the local repository -->\n</parent>\n\n<properties>\n    <java.version>17</java.version>\n</properties>",
      },
    },
    {
      content: {
        question: "How can you override default properties in Spring Boot?",
        answer:
          "Spring Boot allows overriding default properties by specifying custom values in `application.properties`, `application.yml`, command-line arguments, environment variables, or Java system properties.",
        explanation:"<div><strong>Ways to Override Default Properties in Spring Boot:</strong></div> <ul> <li><strong><code>application.properties</code> or <code>application.yml</code> (Most Common)</strong> - Define properties in <code>src/main/resources/application.properties</code>.</li> <li><strong>Command-line Arguments (Highest Priority)</strong> - Pass properties as <code>--key=value</code> when running the application.</li> <li><strong>Environment Variables</strong> - Set properties as OS-level environment variables.</li> <li><strong>Java System Properties</strong> - Pass properties using <code>-Dkey=value</code> when starting the JVM.</li> <li><strong>Profiles (<code>application-{profile}.properties</code>)</strong> - Use profiles for environment-specific overrides (e.g., <code>application-dev.properties</code>).</li> </ul>",
        codeSnippet:
          "# application.properties (Overriding default server port)\nserver.port=8081\n\n# application.yml\nserver:\n  port: 8081\n\n// Command-line argument\njava -jar myapp.jar --server.port=9090\n\n// Java System Property\njava -Dserver.port=9090 -jar myapp.jar",
      },
    },
    {
      content: {
        question: "What is `@Component` annotation in Spring Boot?",
        answer:
          "The `@Component` annotation is a generic stereotype annotation used to mark a class as a Spring-managed bean.",
        explanation:
          "Spring automatically detects classes annotated with `@Component` during component scanning and registers them in the application context. It is the base annotation for other specialized annotations like `@Service`, `@Repository`, and `@Controller`.",
        codeSnippet:
          '@Component\npublic class MyComponent {\n    public String getMessage() {\n        return "Hello from Component!";\n    }\n}',
      },
    },
    {
      content: {
        question: "What is `@Controller` annotation in Spring Boot?",
        answer:
          "The `@Controller` annotation is a specialization of `@Component` used to define Spring MVC controllers.",
        explanation:
          "Classes annotated with `@Controller` handle HTTP requests and return view templates (e.g., JSP, Thymeleaf). Unlike `@RestController`, it does not return JSON responses directly.",
        codeSnippet:
          "@Controller\n@RequestMapping(\"/home\")\npublic class HomeController {\n    @GetMapping\n    public String homePage() {\n        return \"home\"; // Returns a view named 'home.html' or 'home.jsp'\n    }\n}",
      },
    },
    {
      content: {
        question: "What is `@Service` annotation in Spring Boot?",
        answer:
          "The `@Service` annotation is a specialization of `@Component` used to define business logic service classes.",
        explanation:
          "It is mainly used to indicate that a class contains business logic and can be injected into controllers or other components via dependency injection.",
        codeSnippet:
          '@Service\npublic class UserService {\n    public String getUser() {\n        return "John Doe";\n    }\n}',
      },
    },
    {
      content: {
        question: "What is `@Repository` annotation in Spring Boot?",
        answer:
          "The `@Repository` annotation is a specialization of `@Component` used to indicate that a class is responsible for database operations.",
        explanation:
          "It is primarily used in the DAO (Data Access Object) layer and enables automatic exception translation for database-related errors.",
        codeSnippet:
          "@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n    Optional<User> findByUsername(String username);\n}",
      },
    },
    {
      content: {
        question:
          "How does Spring Boot handle exception handling? Explain `@ControllerAdvice`.",
        answer:
          "Spring Boot provides multiple ways to handle exceptions, including `@ExceptionHandler`, `@ControllerAdvice`, and `ResponseStatusException`.",
        explanation:"<div><strong>Exception Handling in Spring Boot:</strong></div> <ul> <li><strong><code>@ExceptionHandler</code></strong> - Handles specific exceptions inside a controller.</li> <li><strong><code>@ControllerAdvice</code></strong> - Provides global exception handling across multiple controllers.</li> <li><strong><code>ResponseStatusException</code></strong> - Throws exceptions with specific HTTP status codes.</li> </ul> <div><strong><code>@ControllerAdvice</code> Overview:</strong></div> <ul> <li>Acts as a global exception-handling mechanism applicable to all controllers.</li> <li>Allows defining centralized exception handlers using <code>@ExceptionHandler</code>.</li> <li>Separates exception-handling logic from controller logic for better maintainability.</li> </ul>",
        codeSnippet:
          '// Custom Exception Class\npublic class UserNotFoundException extends RuntimeException {\n    public UserNotFoundException(String message) {\n        super(message);\n    }\n}\n\n// Global Exception Handler using @ControllerAdvice\n@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(UserNotFoundException.class)\n    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex) {\n        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);\n    }\n    \n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleGeneralException(Exception ex) {\n        return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);\n    }\n}\n\n// Controller Example\n@RestController\n@RequestMapping("/users")\npublic class UserController {\n    @GetMapping("/{id}")\n    public String getUser(@PathVariable int id) {\n        if (id <= 0) throw new UserNotFoundException("User not found");\n        return "User found";\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is the use of `@Transactional` annotation in Spring Boot?",
        answer:
          "The `@Transactional` annotation in Spring Boot is used to manage transactions automatically, ensuring data consistency and rollback in case of errors.",
        explanation:"<div><strong>Spring Boot Transaction Management:</strong> <code>@Transactional</code> ensures atomicity by rolling back changes if an operation fails, manages propagation for nested transactions, and improves performance by optimizing transactional contexts. By default, it rolls back only on unchecked exceptions (<code>RuntimeException</code>), but can be customized using <code>rollbackFor</code> for checked exceptions.</div>",
        codeSnippet:
          '@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @Transactional // Ensures rollback if an exception occurs\n    public void createUser(User user) {\n        userRepository.save(user);\n        if (user.getName().equals("error")) {\n            throw new RuntimeException("Simulating an error");\n        }\n    }\n}\n\n// Rollback for both checked and unchecked exceptions\n@Transactional(rollbackFor = Exception.class)\npublic void updateUser(User user) {\n    userRepository.save(user);\n}',
      },
    },
    {
      content: {
        question: "What is the `transient` keyword in Java?",
        answer:
          "The `transient` keyword in Java is used to indicate that a variable should not be serialized when an object is converted into a byte stream.",
        explanation:
          "In Java, when an object is serialized using `ObjectOutputStream`, all its fields are serialized by default. However, if a field is marked as `transient`, its value will not be saved, preventing sensitive or unnecessary data from being persisted.\n\n### Key Points:\n- Prevents serialization of specific fields.\n- Commonly used for security (e.g., passwords) or non-serializable fields.\n- During deserialization, transient fields are initialized with default values (e.g., `null` for objects, `0` for integers).",
        codeSnippet:
          'import java.io.*;\n\nclass User implements Serializable {\n    private static final long serialVersionUID = 1L;\n    private String username;\n    private transient String password; // This field will not be serialized\n\n    public User(String username, String password) {\n        this.username = username;\n        this.password = password;\n    }\n\n    public String toString() {\n        return "Username: " + username + ", Password: " + password;\n    }\n}\n\npublic class TransientExample {\n    public static void main(String[] args) throws Exception {\n        User user = new User("JohnDoe", "secret123");\n        \n        // Serialize\n        ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("user.ser"));\n        out.writeObject(user);\n        out.close();\n\n        // Deserialize\n        ObjectInputStream in = new ObjectInputStream(new FileInputStream("user.ser"));\n        User deserializedUser = (User) in.readObject();\n        in.close();\n\n        System.out.println(deserializedUser); // Password will be null\n    }\n}',
      },
    },
    {
      content: {
        question: "How do you enable CORS in a Spring Boot application?",
        answer:
          "CORS (Cross-Origin Resource Sharing) can be enabled in a Spring Boot application using `@CrossOrigin`, a global configuration class, or a filter.",
        explanation:"<div><strong>Enabling CORS in Spring Boot:</strong> Browsers block cross-origin requests by default for security reasons. Spring Boot provides multiple ways to enable CORS: <ul> <li><strong>Using <code>@CrossOrigin</code></strong> - Apply at the controller or method level to allow CORS for specific endpoints.</li> <li><strong>Global CORS Configuration (<code>WebMvcConfigurer</code>)</strong> - Defines CORS settings for all endpoints.</li> <li><strong>CORS Filter (<code>CorsFilter</code>)</strong> - Provides finer control over CORS policies.</li> </ul> </div>",
        codeSnippet:
          '// 1. Enable CORS for a Specific Controller Method\n@RestController\n@RequestMapping("/api")\npublic class MyController {\n    @CrossOrigin(origins = "http://example.com") // Allows only example.com\n    @GetMapping("/data")\n    public String getData() {\n        return "Hello, CORS!";\n    }\n}\n\n// 2. Global CORS Configuration (Recommended for Multiple Endpoints)\n@Configuration\npublic class CorsConfig implements WebMvcConfigurer {\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping("/**")\n                .allowedOrigins("http://example.com")\n                .allowedMethods("GET", "POST", "PUT", "DELETE")\n                .allowedHeaders("*")\n                .allowCredentials(true);\n    }\n}\n\n// 3. Using CorsFilter for Custom CORS Handling\n@Bean\npublic FilterRegistrationBean<CorsFilter> corsFilter() {\n    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n    CorsConfiguration config = new CorsConfiguration();\n    config.setAllowedOrigins(Arrays.asList("http://example.com"));\n    config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));\n    config.setAllowedHeaders(Arrays.asList("*"));\n    source.registerCorsConfiguration("/**", config);\n    FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));\n    return bean;\n}',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between @SpringBootApplication and @EnableAutoConfiguration?",
        compareHeading: ["@SpringBootApplication", "@EnableAutoConfiguration"],
        comparision: [
          {
            "@SpringBootApplication": {
              Definition:
                "A convenience annotation that combines @Configuration, @EnableAutoConfiguration, and @ComponentScan.",
              Purpose:
                "Used to mark the main class of a Spring Boot application, enabling auto-configuration, component scanning, and configuration.",
              Scope:
                "Covers a broader functionality by including component scanning and configuration along with auto-configuration.",
              Usage:
                "Recommended for use in Spring Boot applications as it simplifies setup.",
              Example:
                "@SpringBootApplication\npublic class MyApp {\n  public static void main(String[] args) {\n    SpringApplication.run(MyApp.class, args);\n  }\n}",
            },
          },
          {
            "@EnableAutoConfiguration": {
              Definition:
                "An annotation that enables Spring Boot's auto-configuration mechanism.",
              Purpose:
                "Used to automatically configure Spring Boot components based on classpath dependencies.",
              Scope:
                "Only focuses on auto-configuration without including component scanning or additional configuration.",
              Usage:
                "Can be used when more fine-grained control over configuration is needed, but @SpringBootApplication is preferred.",
              Example:
                "@Configuration\n@EnableAutoConfiguration\npublic class MyApp {\n  public static void main(String[] args) {\n    SpringApplication.run(MyApp.class, args);\n  }\n}",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "What is Spring Data JPA, and how is it used in Spring Boot?",
        answer:
          "Spring Data JPA is a part of the Spring Data project that simplifies database interactions by providing a higher-level abstraction over JPA (Java Persistence API). It reduces boilerplate code required for database operations in a Spring Boot application.",
        explanation:"<div><strong>Spring Data JPA Overview:</strong> It provides a repository layer to simplify CRUD operations using built-in methods and integrates with Hibernate (default JPA provider in Spring Boot). <ul> <li><strong>Simplified Repository Interface</strong> - Eliminates boilerplate DAO code.</li> <li><strong>Automatic Query Generation</strong> - Methods like <code>findByName(String name)</code> auto-generate queries.</li> <li><strong>Pagination & Sorting</strong> - Supported via <code>PagingAndSortingRepository</code>.</li> <li><strong>Custom Queries</strong> - Supports JPQL and native SQL.</li> <li><strong>Hibernate Integration</strong> - Uses Hibernate as the default ORM provider.</li> </ul> </div>",
        codeSnippet:
          '// 1. Define an Entity\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n    private String email;\n    \n    // Getters and Setters\n}\n\n// 2. Create a Repository Interface\npublic interface UserRepository extends JpaRepository<User, Long> {\n    List<User> findByName(String name); // Automatically generates SQL query\n}\n\n// 3. Use Repository in a Service\n@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    public List<User> getUsersByName(String name) {\n        return userRepository.findByName(name);\n    }\n}\n\n// 4. Use in a Controller\n@RestController\n@RequestMapping("/users")\npublic class UserController {\n    @Autowired\n    private UserService userService;\n    \n    @GetMapping("/by-name/{name}")\n    public List<User> getUsers(@PathVariable String name) {\n        return userService.getUsersByName(name);\n    }\n}',
      },
    },
    {
      content: {
        question: "How does Spring Boot support caching? Explain `@Cacheable`.",
        answer:
          "Spring Boot provides built-in caching support using the `@Cacheable`, `@CachePut`, and `@CacheEvict` annotations. It supports various caching providers like Ehcache, Redis, and Caffeine.",
        explanation:"<div><strong>Spring Boot Caching:</strong> Caching improves performance by storing frequently accessed data in memory, reducing database calls. <ul> <li><strong>Using <code>@Cacheable</code></strong> - Caches method results based on parameters.</li> <li><strong>Cache Retrieval</strong> - If the method is called again with the same parameters, the cached result is returned.</li> <li><strong>Configuration</strong> - Defined in <code>application.properties</code>, supports providers like ConcurrentMapCache, Redis, and Ehcache.</li> <li><strong>Enabling Caching</strong> - Requires <code>@EnableCaching</code> in the main class.</li> </ul> </div>",
        codeSnippet:
          '// 1. Enable Caching in Spring Boot\n@SpringBootApplication\n@EnableCaching\npublic class MyApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApplication.class, args);\n    }\n}\n\n// 2. Using @Cacheable to Cache Method Results\n@Service\npublic class UserService {\n    @Cacheable("users") // Caches method result under \'users\' cache\n    public User getUserById(Long id) {\n        System.out.println("Fetching user from database...");\n        return userRepository.findById(id).orElse(null);\n    }\n}\n\n// 3. application.properties (Optional for Cache Configuration)\nspring.cache.type=simple // Uses ConcurrentMapCache by default',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between @PathVariable and @RequestParam in Spring Boot?",
        compareHeading: ["@PathVariable", "@RequestParam"],
        comparision: [
          {
            "@PathVariable": {
              Definition: "Used to extract values from the URI path variables.",
              Purpose:
                "Maps dynamic values from the URL path to method parameters.",
              Usage: "Used when the URL itself contains variable segments.",
              Required:
                "Required by default, but can be made optional using 'required = false'.",
              Example:
                '@GetMapping("/users/{id}")\npublic User getUser(@PathVariable("id") Long userId) {\n    return userService.getUserById(userId);\n}',
            },
          },
          {
            "@RequestParam": {
              Definition:
                "Used to extract query parameters from the request URL.",
              Purpose:
                "Maps request parameters (query strings) to method parameters.",
              Usage:
                "Used when passing data in the URL as key-value pairs after '?' in the query string.",
              Required:
                "Required by default, but can be made optional using 'required = false'.",
              Example:
                '@GetMapping("/users")\npublic User getUser(@RequestParam("id") Long userId) {\n    return userService.getUserById(userId);\n}',
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "What is `@PathVariable` and `@RequestParam` in Spring Boot?",
        answer:
          "`@PathVariable` and `@RequestParam` are used to extract values from HTTP requests in Spring Boot controllers.",
        explanation:"<div><strong>Difference Between <code>@PathVariable</code> and <code>@RequestParam</code>:</strong></div> <ul> <li><strong><code>@PathVariable</code></strong> - Extracts values from <strong>URL path segments</strong>, used for dynamic URI mapping. <strong>Example:</strong> <code>/users/{id}</code> → Extracts <code>id</code> from the path.</li> <li><strong><code>@RequestParam</code></strong> - Extracts values from <strong>query parameters</strong> in the URL, used for optional or required parameters. <strong>Example:</strong> <code>/users?name=John</code> → Extracts <code>name</code> from the query string.</li> </ul>",
        codeSnippet:
          '// Example using @PathVariable\n@RestController\n@RequestMapping("/users")\npublic class UserController {\n    @GetMapping("/{id}")\n    public String getUserById(@PathVariable("id") Long userId) {\n        return "User ID: " + userId;\n    }\n\n    // Example using @RequestParam\n    @GetMapping("/search")\n    public String searchUser(@RequestParam("name") String userName) {\n        return "Searching for user: " + userName;\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What are the different ways to deploy a Spring Boot application?",
        answer:
          "Spring Boot applications can be deployed in multiple ways, including as an executable JAR, WAR file, or in cloud environments.",
        explanation:"<div><strong>Spring Boot Deployment Options:</strong></div> <ul> <li><strong>Embedded Server (JAR Deployment)</strong> - Runs as a standalone JAR with an embedded server like Tomcat, Jetty, or Undertow (<code>java -jar app.jar</code>).</li> <li><strong>WAR Deployment to External Server</strong> - Converts the application to a WAR file and deploys it on external servers like Apache Tomcat or WildFly.</li> <li><strong>Containerized Deployment (Docker & Kubernetes)</strong> - Packages the application as a Docker container and deploys it using Kubernetes (<code>docker build -t myapp .</code> → <code>docker run -p 8080:8080 myapp</code>).</li> <li><strong>Cloud Deployment</strong> - Deploys on AWS, Azure, or Google Cloud using PaaS services like Elastic Beanstalk, App Engine, or Heroku.</li> <li><strong>Using Build Tools (Maven/Gradle)</strong> - Builds the application using <code>mvn package</code> or <code>gradle build</code> and deploys artifacts to repositories like Nexus or JFrog.</li> <li><strong>Using Spring Boot Admin</strong> - Manages and monitors applications remotely.</li> <li><strong>Serverless Deployment</strong> - Deploys using AWS Lambda or Azure Functions for event-driven execution.</li> </ul>",
        codeSnippet:
          "// Example: Converting to WAR for External Server Deployment\n@SpringBootApplication\npublic class MyApplication extends SpringBootServletInitializer {\n    @Override\n    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {\n        return application.sources(MyApplication.class);\n    }\n\n    public static void main(String[] args) {\n        SpringApplication.run(MyApplication.class, args);\n    }\n}",
      },
    },
    {
      content: {
        question:
          "How do you handle application configuration for different environments in Spring Boot?",
        answer:
          "Spring Boot provides multiple ways to manage configurations for different environments, such as `application.properties`, `application.yml`, profiles, and external configuration sources.",
        explanation:"<div><strong>Ways to Handle Environment-Specific Configuration:</strong></div> <ul> <li><strong>Profiles (`application-{profile}.properties` or `.yml`)</strong> - Define environment-specific config files (e.g., `application-dev.properties`, `application-prod.properties`) and activate profiles using <code>spring.profiles.active=dev</code> or <code>-Dspring.profiles.active=prod</code>.</li> <li><strong>Environment Variables</strong> - Define external variables and reference them in properties (e.g., <code>server.port=${SERVER_PORT:8080}</code>).</li> <li><strong>Command-Line Arguments</strong> - Pass config values at runtime (e.g., <code>java -jar app.jar --server.port=9090</code>).</li> <li><strong>`@Profile` Annotation</strong> - Define beans for specific environments using <code>@Profile('dev')</code>.</li> <li><strong>External Configuration Sources</strong> - Load configs from `.env` files, AWS SSM, Kubernetes ConfigMaps, etc.</li> </ul>",
        codeSnippet:
          '// Example: application-dev.properties\nserver.port=8081\ndatabase.url=jdbc:mysql://localhost/dev_db\n\n// Example: application-prod.properties\nserver.port=9090\ndatabase.url=jdbc:mysql://prod-server/prod_db\n\n// Activate Profile via JVM Argument\n-Dspring.profiles.active=prod\n\n// Example: Using @Profile in a Spring Component\n@Service\n@Profile("prod")\npublic class ProdService {\n    public String getMessage() {\n        return "Production Mode";\n    }\n}',
      },
    },
    {
      content: {
        question: "What is `@Async` in Spring Boot, and how does it work?",
        answer:
          "`@Async` is a Spring Boot annotation that allows methods to run asynchronously in a separate thread without blocking the main execution flow.",
        explanation:"<div><strong>How `@Async` Works:</strong></div> <ul> <li><strong>Enables Asynchronous Execution</strong> - Runs the method in a separate thread, allowing the main thread to continue.</li> <li><strong>Requires `@EnableAsync`</strong> - Must be enabled in a Spring Boot configuration class.</li> <li><strong>Uses a Thread Pool</strong> - Defaults to `SimpleAsyncTaskExecutor` but can be customized.</li> <li><strong>Returns `CompletableFuture` (Optional)</strong> - Supports asynchronous result handling.</li> </ul> <div><strong>Benefits:</strong></div> <ul> <li>Improves performance for time-consuming tasks (e.g., email sending, API calls).</li> <li>Prevents blocking the main thread.</li> <li>Works seamlessly with Spring Boot services and components.</li> </ul>",
        codeSnippet:
          '// 1. Enable Async Processing\n@Configuration\n@EnableAsync\npublic class AsyncConfig {}\n\n// 2. Define an Async Method\n@Service\npublic class AsyncService {\n    @Async\n    public void performTask() {\n        System.out.println("Task started: " + Thread.currentThread().getName());\n        try { Thread.sleep(2000); } catch (InterruptedException e) {}\n        System.out.println("Task completed");\n    }\n}\n\n// 3. Call Async Method\n@RestController\n@RequestMapping("/async")\npublic class AsyncController {\n    @Autowired\n    private AsyncService asyncService;\n    \n    @GetMapping("/run")\n    public String runAsyncTask() {\n        asyncService.performTask();\n        return "Task started!";\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How can you implement pagination and sorting in Spring Boot with Spring Data JPA?",
        answer:
          "Spring Boot provides built-in support for pagination and sorting using Spring Data JPA's `PagingAndSortingRepository` and `Pageable` interface.",
        explanation:"<div><strong>Pagination and Sorting in Spring Data JPA:</strong></div> <ul> <li><strong>Pagination:</strong> Splits large datasets into smaller pages for better performance.</li> <li><strong>Sorting:</strong> Orders data based on specified fields in ascending or descending order.</li> <li><strong>Spring Data JPA provides:</strong> <ul> <li>`Pageable` - Specifies page number, size, and sorting.</li> <li>`Page` - Returns paginated results.</li> <li>`Sort` - Defines sorting criteria.</li> </ul> </li> </ul> <div><strong>Steps to Implement:</strong></div> <ul> <li>Use `JpaRepository` or `PagingAndSortingRepository`.</li> <li>Use `Pageable` in repository methods.</li> <li>Return `Page<T>` instead of `List<T>`.</li> </ul>",
        codeSnippet:
          '// 1. Define Entity\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n    private String email;\n}\n\n// 2. Create Repository with Pagination and Sorting\npublic interface UserRepository extends JpaRepository<User, Long> {\n    Page<User> findByName(String name, Pageable pageable); // Custom query with pagination\n}\n\n// 3. Implement Pagination in Service Layer\n@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    public Page<User> getUsers(int page, int size) {\n        Pageable pageable = PageRequest.of(page, size, Sort.by("name").ascending());\n        return userRepository.findAll(pageable);\n    }\n}\n\n// 4. Use Pagination in Controller\n@RestController\n@RequestMapping("/users")\npublic class UserController {\n    @Autowired\n    private UserService userService;\n    \n    @GetMapping("/paginated")\n    public Page<User> getUsers(@RequestParam(defaultValue = "0") int page,\n                               @RequestParam(defaultValue = "5") int size) {\n        return userService.getUsers(page, size);\n    }\n}',
      },
    },


    {
      content: {
        question:
          "What is Spring Boot Security, and how can you implement authentication and authorization?",
        answer:
          "Spring Boot Security is a powerful framework that provides authentication, authorization, and security features for Java applications with minimal configuration.",
        explanation:"<div><strong>Key Features of Spring Boot Security:</strong></div> <ul> <li><strong>Authentication:</strong> Verifies user identity (e.g., username/password, JWT, OAuth2).</li> <li><strong>Authorization:</strong> Determines resource access based on roles.</li> <li><strong>CSRF Protection:</strong> Prevents cross-site request forgery attacks.</li> <li><strong>Session Management:</strong> Controls user sessions securely.</li> <li><strong>Password Encoding:</strong> Uses bcrypt hashing for secure password storage.</li> </ul> <div><strong>Steps to Implement Authentication & Authorization:</strong></div> <ul> <li>Add `spring-boot-starter-security` dependency.</li> <li>Configure `UserDetailsService` for authentication.</li> <li>Use `@PreAuthorize` or `@Secured` for role-based access.</li> <li>Implement JWT for token-based authentication (optional).</li> </ul>",
        codeSnippet:
          '// 1. Add Security Dependency (pom.xml)\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n\n// 2. Configure Security (Authentication & Authorization)\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        return http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers("/admin").hasRole("ADMIN")\n                .requestMatchers("/user").hasAnyRole("USER", "ADMIN")\n                .requestMatchers("/public").permitAll()\n                .anyRequest().authenticated())\n            .formLogin()\n            .and()\n            .build();\n    }\n\n    @Bean\n    public UserDetailsService userDetailsService() {\n        UserDetails user = User.withDefaultPasswordEncoder()\n            .username("user")\n            .password("password")\n            .roles("USER")\n            .build();\n        \n        UserDetails admin = User.withDefaultPasswordEncoder()\n            .username("admin")\n            .password("admin")\n            .roles("ADMIN")\n            .build();\n\n        return new InMemoryUserDetailsManager(user, admin);\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How does Spring Boot integrate with external messaging systems like Kafka or RabbitMQ?",
        answer:
          "Spring Boot integrates seamlessly with external messaging systems like Apache Kafka and RabbitMQ using Spring Boot Starters and Spring Cloud Stream.",
        explanation:"<div><strong>Integration with Messaging Systems:</strong></div> <p>Spring Boot provides auto-configuration support for Kafka and RabbitMQ, enabling event-driven architectures.</p> <ul> <li><strong>Kafka Integration:</strong> Use `spring-kafka` dependency, configure producer/consumer properties, and use `@KafkaListener` to consume messages.</li> <li><strong>RabbitMQ Integration:</strong> Use `spring-boot-starter-amqp` dependency, define a message queue with `@RabbitListener`, and manage messages asynchronously.</li> <li><strong>Spring Cloud Stream:</strong> Provides a unified API for various messaging systems, using `@EnableBinding` and functional interfaces for message processing.</li> </ul>",
        codeSnippet:
          '// Example: Kafka Producer & Consumer\n// 1. Add Dependency (pom.xml)\n<dependency>\n    <groupId>org.springframework.kafka</groupId>\n    <artifactId>spring-kafka</artifactId>\n</dependency>\n\n// 2. Configure Kafka Properties (application.properties)\nspring.kafka.bootstrap-servers=localhost:9092\nspring.kafka.consumer.group-id=my-group\n\n// 3. Kafka Producer\n@Service\npublic class KafkaProducer {\n    @Autowired\n    private KafkaTemplate<String, String> kafkaTemplate;\n    \n    public void sendMessage(String message) {\n        kafkaTemplate.send("my-topic", message);\n    }\n}\n\n// 4. Kafka Consumer\n@Service\npublic class KafkaConsumer {\n    @KafkaListener(topics = "my-topic", groupId = "my-group")\n    public void listen(String message) {\n        System.out.println("Received: " + message);\n    }\n}\n\n// Example: RabbitMQ Listener\n@Service\npublic class RabbitMQListener {\n    @RabbitListener(queues = "my-queue")\n    public void receiveMessage(String message) {\n        System.out.println("Received from RabbitMQ: " + message);\n    }\n}',
      },
    },
    {
      content: {
        question: "What is the role of WebClient in Spring Boot?",
        answer:
          "WebClient is a non-blocking, reactive web client introduced in Spring WebFlux to make asynchronous HTTP requests.",
        explanation:"<div><strong>Features of WebClient:</strong></div> <ul> <li><strong>Non-blocking & Reactive:</strong> Works well with reactive programming (Mono, Flux).</li> <li><strong>Asynchronous Requests:</strong> Handles long-running API calls efficiently.</li> <li><strong>Supports Streaming:</strong> Processes large responses in chunks.</li> <li><strong>Better Performance:</strong> Uses Netty for improved scalability.</li> </ul> <div><strong>When to Use WebClient?</strong></div> <ul> <li>In reactive applications.</li> <li>For making non-blocking API calls.</li> </ul>",
        codeSnippet:
          '// Example: WebClient Usage\nWebClient webClient = WebClient.create("https://api.example.com");\n\npublic Mono<String> getData() {\n    return webClient.get()\n        .uri("/data")\n        .retrieve()\n        .bodyToMono(String.class);\n}',
      },
    },
    {
      content: {
        question: "What is the role of RestTemplate in Spring Boot?",
        answer:
          "RestTemplate is a synchronous HTTP client in Spring Boot used to make REST API calls.",
        explanation:"<div><strong>Features of RestTemplate:</strong></div><ul><li><strong>Synchronous Calls:</strong> Blocks the thread until the response is received.</li><li><strong>Supports Various HTTP Methods:</strong> GET, POST, PUT, DELETE, etc.</li><li><strong>Easier Integration:</strong> Works well with traditional Spring MVC applications.</li></ul><div><strong>When to Use RestTemplate?</strong></div><ul><li>In non-reactive applications.</li><li>When synchronous behavior is acceptable.</li></ul>",
        codeSnippet:
          '// Example: RestTemplate Usage\n@RestController\npublic class ApiController {\n    private final RestTemplate restTemplate = new RestTemplate();\n\n    @GetMapping("/call-api")\n    public String callApi() {\n        return restTemplate.getForObject("https://api.example.com/data", String.class);\n    }\n}',
      },
    },
    {
      comparision: {
        question:
          "What is the role of WebClient in Spring Boot, and how is it different from RestTemplate?",
        compareHeading: ["WebClient", "RestTemplate"],
        comparision: [
          {
            WebClient: {
              Definition:
                "A non-blocking, reactive web client introduced in Spring WebFlux for making asynchronous HTTP requests.",
              Purpose:
                "Used for making reactive, non-blocking API calls to external services with better scalability.",
              "Concurrency Model":
                "Uses reactive programming and Project Reactor (Mono, Flux) for handling responses.",
              "Blocking/Non-blocking":
                "Non-blocking, making it suitable for high-concurrency applications.",
              "Preferred Use Case":
                "Recommended for reactive applications, microservices, and event-driven architectures.",
              Example:
                'WebClient webClient = WebClient.create();\nwebClient.get()\n  .uri("https://api.example.com/data")\n  .retrieve()\n  .bodyToMono(String.class)\n  .subscribe(System.out::println);',
            },
          },
          {
            RestTemplate: {
              Definition:
                "A synchronous, blocking HTTP client used for making REST API calls in Spring applications.",
              Purpose:
                "Used for traditional, blocking-style API calls where each request waits for a response before proceeding.",
              "Concurrency Model":
                "Uses imperative programming with standard Java threads.",
              "Blocking/Non-blocking":
                "Blocking, making it less suitable for high-concurrency applications.",
              "Preferred Use Case":
                "Best for simple, synchronous applications where reactive programming is not needed.",
              Example:
                'RestTemplate restTemplate = new RestTemplate();\nString response = restTemplate.getForObject("https://api.example.com/data", String.class);\nSystem.out.println(response);',
            },
          },
        ],
        image: "",
      },
    },
  ],
};

export default springbootCoreQuestions;
