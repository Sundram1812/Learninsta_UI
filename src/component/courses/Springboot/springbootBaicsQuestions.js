const springbootBaicsQuestions = {
  title: "Java Springboot basics",

  questions: [
    {
      content: {
        question: "What is Spring Boot?",
        answer:
          "Spring Boot is an open-source Java framework that simplifies the development of Spring applications by providing built-in configurations, an embedded server, and production-ready features.",
        explanation:
          "Spring Boot eliminates the need for extensive XML configuration by offering convention over configuration. It provides features like auto-configuration, starter dependencies, and an embedded server (Tomcat, Jetty, or Undertow) to help developers build and deploy applications quickly.",
        codeSnippet:
          "@SpringBootApplication\npublic class MyApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApplication.class, args);\n    }\n}",
      },
    },

    {
      comparision: {
        question: "How does Spring Boot differ from the Spring Framework?",
        compareHeading: ["Spring Framework", "Spring Boot"],
        comparision: [
          {
            "Spring Framework": {
              Definition:
                "A comprehensive framework for Java-based enterprise applications that provides dependency injection, transaction management, and various integrations.",
              Configuration:
                "Requires extensive XML or Java-based configuration for setting up beans, dependencies, and application context.",
              "Embedded Server":
                "Does not provide an embedded server. You need to configure external servers like Tomcat, Jetty, or Undertow separately.",
              "Microservices Support":
                "Requires manual configuration and integration with Spring Cloud for microservices development.",
              "Starter Dependencies":
                "Does not provide pre-configured starter dependencies. Developers must manually add and configure dependencies.",
              "Main Focus":
                "Provides a foundation for building enterprise-grade applications with flexibility in configuring components.",
            },
          },
          {
            "Spring Boot": {
              Definition:
                "An extension of the Spring Framework that simplifies application development by providing auto-configuration, embedded servers, and opinionated defaults.",
              Configuration:
                "Supports convention over configuration with auto-configuration, reducing the need for manual setup.",
              "Embedded Server":
                "Comes with embedded servers like Tomcat, Jetty, or Undertow, eliminating the need for external configuration.",
              "Microservices Support":
                "Designed for microservices architecture with built-in support for Spring Cloud and easy REST API development.",
              "Starter Dependencies":
                "Provides pre-configured starter dependencies like `spring-boot-starter-web`, reducing the need for manual dependency management.",
              "Main Focus":
                "Simplifies the development of stand-alone, production-ready Spring applications with minimal setup.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "What are the main advantages of using Spring Boot?",
        answer:
          "Spring Boot offers several advantages, including Auto-configuration, Embedded Server, Microservices Support, Production-ready features, and Reduced Boilerplate Code.",
        explanation:
          "Spring Boot simplifies Spring application development by eliminating the need for extensive XML configuration. It includes features like embedded Tomcat/Jetty servers, starter dependencies, Spring Boot Actuator for monitoring, and microservices-friendly architecture.",
        codeSnippet:
          "// Example of a simple Spring Boot application\n@SpringBootApplication\npublic class MyApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApplication.class, args);\n    }\n}",
      },
    },

    {
      content: {
        question: "Explain the key features of Spring Boot.",
        answer:
          "Spring Boot provides key features such as Auto-Configuration, Spring Boot Starters, Embedded Server, Spring Boot Actuator, and Externalized Configuration.",
        explanation:
          "Spring Boot simplifies Spring application development with features like Auto-configuration (configures beans automatically), Starters (predefined dependencies), Embedded Server (Tomcat/Jetty included), Actuator (monitoring tools), and Externalized Configuration (application.properties or YAML files for flexible settings).",
        codeSnippet:
          "// Example of a simple Spring Boot application\n@SpringBootApplication\npublic class MyApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApplication.class, args);\n    }\n}",
      },
    },

    {
      content: {
        question: "What is the IoC Container in Spring Boot?",
        answer:
          "The IoC (Inversion of Control) Container in Spring Boot is responsible for managing the lifecycle and dependencies of Spring beans.",
        explanation:"<div><strong>Key Features of IoC Container:</strong></div><ul><li><strong>Dependency Injection:</strong> Automatically injects dependencies into beans.</li><li><strong>Bean Management:</strong> Creates, configures, and manages beans.</li><li><strong>Configuration Handling:</strong> Supports annotations (`@Component`, `@Service`, `@Repository`) and XML configurations.</li><li><strong>Loose Coupling:</strong> Decouples object creation and dependency management.</li></ul><div><strong>Types of IoC Containers in Spring:</strong></div><ul><li><strong>BeanFactory:</strong> Basic container, lightweight, used for simple applications.</li><li><strong>ApplicationContext:</strong> Advanced container with more features like event propagation, internationalization, and AOP integration.</li></ul>",
        codeSnippet:
          '// Example: IoC Container in Action\n@Component\npublic class MyService {\n    public void serve() {\n        System.out.println("Service is running...");\n    }\n}\n\n@RestController\npublic class MyController {\n    private final MyService myService;\n\n    // IoC Container automatically injects MyService\n    @Autowired\n    public MyController(MyService myService) {\n        this.myService = myService;\n    }\n\n    @GetMapping("/run")\n    public String runService() {\n        myService.serve();\n        return "Service Executed!";\n    }\n}',
      },
    },
    {
      content: {
        question: "What is Dependency Injection in Spring Boot?",
        answer:
          "Dependency Injection (DI) is a design pattern in which the Spring IoC container automatically injects dependencies into a class, rather than the class creating them itself.",
        explanation:"<div><strong>Key Concepts of Dependency Injection:</strong></div><ul><li><strong>Inversion of Control (IoC):</strong> The control of object creation is given to the Spring container.</li><li><strong>Loose Coupling:</strong> Objects depend on interfaces, not concrete implementations.</li><li><strong>Types of Dependency Injection:</strong><ul><li><strong>Constructor Injection:</strong> Dependencies are injected via the constructor.</li><li><strong>Setter Injection:</strong> Dependencies are injected via setter methods.</li><li><strong>Field Injection:</strong> Dependencies are injected directly into fields using `@Autowired`.</li></ul></li></ul><div><strong>Benefits of Dependency Injection:</strong></div><ul><li>Improves testability (easy mocking in unit tests).</li><li>Reduces boilerplate code.</li><li>Enhances maintainability and scalability.</li></ul>",
        codeSnippet:
          "// Example: Constructor Injection (Recommended)\n@Service\npublic class UserService {\n    private final UserRepository userRepository;\n    \n    @Autowired\n    public UserService(UserRepository userRepository) {\n        this.userRepository = userRepository;\n    }\n}\n\n// Example: Setter Injection\n@Service\npublic class OrderService {\n    private OrderRepository orderRepository;\n    \n    @Autowired\n    public void setOrderRepository(OrderRepository orderRepository) {\n        this.orderRepository = orderRepository;\n    }\n}\n\n// Example: Field Injection (Not Recommended for Testing)\n@Service\npublic class PaymentService {\n    @Autowired\n    private PaymentRepository paymentRepository;\n}",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between a Spring Bean and a Java Bean?",
        compareHeading: ["Spring Bean", "Java Bean"],
        comparision: [
          {
            "Spring Bean": {
              Definition:
                "An object managed by the Spring IoC (Inversion of Control) container.",
              Purpose:
                "Used for dependency injection, lifecycle management, and application configuration in Spring.",
              "Lifecycle Management":
                "Fully managed by the Spring container with lifecycle callbacks like @PostConstruct and @PreDestroy.",
              Configuration:
                "Defined using @Component, @Bean, or XML configuration.",
              "Dependency Injection":
                "Supports dependency injection using annotations like @Autowired.",
              Example: "@Component\npublic class MyBean { }",
            },
          },
          {
            "Java Bean": {
              Definition:
                "A simple Java class that follows specific conventions such as having a no-argument constructor, private fields, and getter/setter methods.",
              Purpose:
                "Used for encapsulating data and providing a standard way to define reusable components.",
              "Lifecycle Management":
                "Managed manually by the developer without an external container.",
              Configuration:
                "Defined as a standard Java class without requiring any framework-specific annotations.",
              "Dependency Injection":
                "Does not support dependency injection by default.",
              Example:
                "public class MyJavaBean {\n  private String name;\n  public MyJavaBean() {}\n  public String getName() { return name; }\n  public void setName(String name) { this.name = name; }\n}",
            },
          },
        ],
        image: "",
      },
    },

    {
      content: {
        question:
          "What is Spring Boot Starter? Name some commonly used starters.",
        answer:
          "Spring Boot Starters are pre-configured dependency descriptors that simplify adding dependencies for different functionalities in a Spring Boot application.",
        explanation:"<div><strong>Spring Boot Starters</strong> bundle commonly used dependencies, reducing the need for manual configuration. They follow a naming convention like <code>spring-boot-starter-*</code>. Commonly used starters include:</div><ul><li><strong>spring-boot-starter-web:</strong> For building web applications.</li><li><strong>spring-boot-starter-data-jpa:</strong> For working with databases using JPA.</li><li><strong>spring-boot-starter-security:</strong> For implementing security features.</li><li><strong>spring-boot-starter-test:</strong> For testing support.</li><li><strong>spring-boot-starter-thymeleaf:</strong> For using Thymeleaf as a template engine.</li></ul>",
        codeSnippet:
          "dependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'\n}",
      },
    },
    {
      content: {
        question:
          "What is Spring Boot Auto-configuration, and how does it work?",
        answer:
          "Spring Boot Auto-configuration automatically configures Spring applications based on the classpath dependencies and predefined conventions.",
        explanation:"<div><strong>Auto-configuration</strong> eliminates the need for manual bean definitions by detecting the required configurations based on dependencies. It works using <code>@EnableAutoConfiguration</code> (included in <code>@SpringBootApplication</code>) and conditionally loads beans using <code>@ConditionalOnClass</code>, <code>@ConditionalOnMissingBean</code>, and other annotations. Developers can override default configurations using <code>application.properties</code> or custom bean definitions.</div>",
        codeSnippet:
          "@SpringBootApplication\npublic class MyApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApplication.class, args);\n    }\n}",
      },
    },
    {
      content: {
        question: "How does Spring Boot handle dependency management?",
        answer:
          "Spring Boot uses a curated dependency management approach where it provides predefined versions of commonly used libraries through the Spring Boot Starter Parent or Spring Boot Dependencies BOM.",
        explanation:
          "Spring Boot simplifies dependency management by automatically handling compatible versions of libraries. It offers:\n- **Spring Boot Starter Parent**: A parent POM that provides default dependency versions, reducing manual configuration.\n- **Spring Boot Dependencies BOM**: A Bill of Materials (BOM) that ensures version compatibility when using Spring Boot dependencies.\n- Developers can override specific dependency versions if needed by declaring them explicitly.",
        codeSnippet:
          "<!-- Using Spring Boot Starter Parent -->\n<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>3.1.0</version>\n</parent>\n\n<!-- Importing Spring Boot BOM -->\n<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-dependencies</artifactId>\n            <version>3.1.0</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>",
      },
    },
    {
      content: {
        question:
          "What is the purpose of the application.properties or application.yml file?",
        answer:
          "The `application.properties` or `application.yml` file is used to configure Spring Boot applications by externalizing settings such as database connections, server ports, logging levels, and other application-specific properties.",
        explanation:
          "Spring Boot allows configuration through `application.properties` (key-value format) or `application.yml` (YAML format) to make applications flexible and environment-independent. These files are automatically loaded and can be overridden using command-line arguments or environment variables.",
        codeSnippet:
          "# application.properties example\nserver.port=8081\nspring.datasource.url=jdbc:mysql://localhost:3306/mydb\nspring.datasource.username=root\nspring.datasource.password=secret\n\n# application.yml example\nserver:\n  port: 8081\nspring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/mydb\n    username: root\n    password: secret",
      },
    },
    {
      content: {
        question: "What is Spring Boot Actuator? List some useful endpoints.",
        answer:
          "Spring Boot Actuator is a module that provides production-ready features for monitoring and managing Spring Boot applications.",
        explanation:"<div><strong>Spring Boot Actuator</strong> exposes various endpoints that provide insights into the application’s health, metrics, environment, and more. It helps in debugging and performance monitoring. Some commonly used Actuator endpoints include:</div><ul><li><strong>/actuator/health:</strong> Shows application health status.</li><li><strong>/actuator/info:</strong> Displays application metadata.</li><li><strong>/actuator/metrics:</strong> Provides various performance metrics.</li><li><strong>/actuator/env:</strong> Displays environment properties.</li><li><strong>/actuator/mappings:</strong> Shows all registered request mappings.</li></ul><div>To enable Actuator, add <code>spring-boot-starter-actuator</code> to dependencies and configure it in <code>application.properties</code>.</div>",
        codeSnippet:
          "dependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-actuator'\n}\n\n# application.properties examplemanagement.endpoints.web.exposure.include=*",
      },
    },
    {
      content: {
        question: "What are Spring Boot Profiles, and why are they useful?",
        answer:
          "Spring Boot Profiles allow developers to define different configurations for different environments, such as development, testing, and production.",
        explanation:
          "Spring Boot Profiles enable environment-specific settings by allowing different property files or bean definitions to be activated based on the selected profile. This makes applications more flexible and manageable.\n\nTo use profiles:\n- Define profile-specific configuration files like `application-dev.properties` or `application-prod.yml`.\n- Activate a profile using `spring.profiles.active` in `application.properties` or via environment variables.",
        codeSnippet:
          "# application-dev.properties\nserver.port=8081\nspring.datasource.url=jdbc:mysql://localhost:3306/devdb\n\n# application-prod.properties\nserver.port=9090\nspring.datasource.url=jdbc:mysql://prod-db-server:3306/proddb\n\n# Activate a profile\nspring.profiles.active=dev",
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
                "@SpringBootApplication\npublic class MyApp { public static void main(String[] args) { SpringApplication.run(MyApp.class, args); } }",
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
                "@Configuration\n@EnableAutoConfiguration\npublic class MyApp { public static void main(String[] args) { SpringApplication.run(MyApp.class, args); } }",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "How can you create a REST API using Spring Boot?",
        answer:
          "A REST API in Spring Boot can be created using the `@RestController` annotation along with `@GetMapping`, `@PostMapping`, `@PutMapping`, and `@DeleteMapping` for handling different HTTP requests.",
        explanation:
          "Spring Boot simplifies REST API development with built-in support for JSON responses and request mapping. The `@RestController` annotation is used to create RESTful endpoints, and methods are mapped to HTTP verbs using annotations like `@GetMapping` and `@PostMapping`.",
        codeSnippet:
          '@RestController\n@RequestMapping("/api")\npublic class UserController {\n    @GetMapping("/users")\n    public List<String> getUsers() {\n        return List.of("John", "Jane", "Doe");\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is Spring Boot DevTools, and how does it help in development?",
        answer:
          "Spring Boot DevTools is a module that enhances the development experience by enabling features like automatic application restarts, live reload, and improved debugging.",
        explanation:
          "Spring Boot DevTools automatically restarts the application when files are modified, reducing the need for manual restarts. It also supports live reload with browsers and provides enhanced debugging tools. This improves development speed and efficiency.",
        codeSnippet:
          "dependencies {\n    developmentOnly 'org.springframework.boot:spring-boot-devtools'\n}",
      },
    },
    {
      content: {
        question:
          "How do you configure a database in a Spring Boot application?",
        answer:
          "A database can be configured in a Spring Boot application by setting the database connection properties in `application.properties` or `application.yml` and using Spring Data JPA for ORM support.",
        explanation:
          "Spring Boot allows easy database configuration using properties like `spring.datasource.url`, `spring.datasource.username`, and `spring.datasource.password`. It supports databases like MySQL, PostgreSQL, and H2. When using JPA, `spring-boot-starter-data-jpa` should be included as a dependency.",
        codeSnippet:
          "# application.properties example\nspring.datasource.url=jdbc:mysql://localhost:3306/mydb\nspring.datasource.username=root\nspring.datasource.password=secret\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\nspring.jpa.hibernate.ddl-auto=update",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between @Component, @Service, and @Repository annotations?",
        compareHeading: ["@Component", "@Service", "@Repository"],
        comparision: [
          {
            "@Component": {
              Definition:
                "A generic annotation indicating that a class is a Spring-managed component.",
              Purpose:
                "Used to define a Spring bean that can be auto-detected and registered in the application context.",
              Usage:
                "Can be applied to any class that should be managed as a Spring bean, including controllers, services, and repositories.",
              "Special Behavior":
                "Does not provide additional semantics beyond marking the class as a bean.",
              Example: "@Component\npublic class MyComponent { }",
            },
          },
          {
            "@Service": {
              Definition:
                "A specialization of @Component used to define service layer components.",
              Purpose:
                "Indicates that a class contains business logic and service-related operations.",
              Usage:
                "Used to mark service classes in the business layer to improve code readability and maintainability.",
              "Special Behavior":
                "Semantically indicates that the class is part of the service layer, but behaves the same as @Component.",
              Example: "@Service\npublic class MyService { }",
            },
          },
          {
            "@Repository": {
              Definition:
                "A specialization of @Component used for DAO (Data Access Object) components.",
              Purpose:
                "Indicates that a class handles database operations and interacts with the persistence layer.",
              Usage:
                "Used to mark repository classes that interact with databases via JPA, JDBC, or other persistence mechanisms.",
              "Special Behavior":
                "Provides additional exception translation for database-related exceptions, converting them into Spring DataAccessException.",
              Example: "@Repository\npublic class MyRepository { }",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "What is the role of @RestController in Spring Boot?",
        answer:
          "The `@RestController` annotation in Spring Boot is used to create RESTful web services by combining `@Controller` and `@ResponseBody`.",
        explanation:
          "In a Spring Boot application, `@RestController` simplifies the development of REST APIs by automatically serializing Java objects into JSON responses. Unlike `@Controller`, it does not require `@ResponseBody` on each method, as it is applied to all methods within the class.",
        codeSnippet:
          '@RestController\n@RequestMapping("/api")\npublic class UserController {\n    @GetMapping("/users")\n    public List<String> getUsers() {\n        return List.of("John", "Jane", "Doe");\n    }\n}',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between @Controller and @RestController?",
        compareHeading: ["@Controller", "@RestController"],
        comparision: [
          {
            "@Controller": {
              Definition:
                "A Spring MVC annotation used to define a controller that handles web requests and returns views.",
              Purpose:
                "Used in MVC-based applications where the response needs to be rendered as a view (e.g., JSP, Thymeleaf).",
              "Response Type":
                "Returns a view name that is resolved by a ViewResolver.",
              Usage:
                "Requires @ResponseBody annotation on methods to return JSON or XML data instead of a view.",
              Example:
                '@Controller\npublic class MyController {\n    @GetMapping("/home")\n    public String home() {\n        return "home"; // Returns a view name\n    }\n}',
            },
          },
          {
            "@RestController": {
              Definition:
                "A specialized version of @Controller that combines @Controller and @ResponseBody.",
              Purpose:
                "Used to create RESTful web services by returning JSON or XML responses directly.",
              "Response Type":
                "Automatically serializes the return value as JSON or XML instead of resolving a view.",
              Usage:
                "No need to use @ResponseBody explicitly for each method, as it's applied globally.",
              Example:
                '@RestController\npublic class MyRestController {\n    @GetMapping("/data")\n    public String getData() {\n        return "Hello, World"; // Returns JSON response\n    }\n}',
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question:
          "What is an embedded server in Spring Boot? Which servers does Spring Boot support?",
        answer:
          "An embedded server in Spring Boot is a built-in application server that allows running Spring Boot applications as standalone applications without requiring external server deployment.",
        explanation:"<div><strong>Spring Boot</strong> eliminates the need to deploy applications on external servers like Tomcat or Jetty by providing embedded servers. This makes development and deployment easier. Spring Boot supports multiple embedded servers, including:</div><ul><li><strong>Tomcat (default)</strong></li><li><strong>Jetty</strong></li><li><strong>Undertow</strong></li></ul><div>Developers can change the embedded server by excluding the default one and adding the desired server dependency.</div>",
        codeSnippet:
          "<!-- Example: Using Jetty instead of Tomcat -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n    <exclusions>\n        <exclusion>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-tomcat</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-jetty</artifactId>\n</dependency>",
      },
    },
    {
      content: {
        question: "How can you handle exceptions in Spring Boot?",
        answer:
          "Spring Boot provides multiple ways to handle exceptions, including `@ExceptionHandler`, `@ControllerAdvice`, and the `ResponseStatusException` class.",
        explanation:"<div><strong>Exception handling in Spring Boot</strong> can be done using:</div><ul><li><strong>@ExceptionHandler:</strong> Handles specific exceptions at the controller level.</li><li><strong>@ControllerAdvice:</strong> Handles exceptions globally for all controllers.</li><li><strong>ResponseStatusException:</strong> Throws exceptions with HTTP status codes.</li></ul>",
        codeSnippet:
          '// Using @ExceptionHandler\n@RestController\n@RequestMapping("/api")\npublic class UserController {\n    @GetMapping("/user/{id}")\n    public String getUser(@PathVariable int id) {\n        if (id <= 0) throw new UserNotFoundException("User not found");\n        return "User found";\n    }\n    \n    @ExceptionHandler(UserNotFoundException.class)\n    public ResponseEntity<String> handleException(UserNotFoundException ex) {\n        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);\n    }\n}\n\n// Global Exception Handling using @ControllerAdvice\n@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleAllExceptions(Exception ex) {\n        return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);\n    }\n}',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between @RequestMapping and @GetMapping?",
        compareHeading: ["@RequestMapping", "@GetMapping"],
        comparision: [
          {
            "@RequestMapping": {
              Definition:
                "A general-purpose annotation used to map HTTP requests to handler methods in Spring MVC.",
              Purpose:
                "Can be used to map multiple HTTP methods (GET, POST, PUT, DELETE, etc.) to a single method or class.",
              "HTTP Method Support":
                "Supports all HTTP methods using the 'method' attribute (e.g., method = RequestMethod.GET).",
              Usage:
                "Used when handling multiple request types or for broader mapping configurations.",
              Example:
                '@RequestMapping(value = "/users", method = RequestMethod.GET)\npublic List<User> getUsers() { return userService.getAllUsers(); }',
            },
          },
          {
            "@GetMapping": {
              Definition:
                "A specialized annotation introduced in Spring 4.3 as a shortcut for @RequestMapping with method = RequestMethod.GET.",
              Purpose: "Specifically designed for handling HTTP GET requests.",
              "HTTP Method Support":
                "Only supports GET requests; does not handle other HTTP methods.",
              Usage:
                "Preferred for RESTful API development when handling GET requests.",
              Example:
                '@GetMapping("/users")\npublic List<User> getUsers() { return userService.getAllUsers(); }',
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "How can you secure a Spring Boot application?",
        answer:
          "A Spring Boot application can be secured using Spring Security, JWT authentication, OAuth2, and role-based access control (RBAC).",
        explanation:"<div><strong>Spring Boot</strong> provides built-in security support with Spring Security. Common security mechanisms include:</div><ul><li><strong>Spring Security:</strong> Provides authentication and authorization features.</li><li><strong>Basic Authentication:</strong> Uses HTTP-based authentication.</li><li><strong>JWT (JSON Web Token):</strong> For stateless authentication in microservices.</li><li><strong>OAuth2:</strong> For social logins and third-party authentication.</li><li><strong>Role-Based Access Control (RBAC):</strong> Restricts access based on user roles.</li></ul><div>Spring Boot Security can be enabled by adding <code>spring-boot-starter-security</code> dependency and configuring authentication providers.</div>",
        codeSnippet:
          'dependencies {\n    implementation \'org.springframework.boot:spring-boot-starter-security\'\n}\n\n// Security Configuration using Java-based approach\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.authorizeHttpRequests(auth -> auth\n                .requestMatchers("/admin").hasRole("ADMIN")\n                .anyRequest().authenticated())\n            .formLogin();\n        return http.build();\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is Spring Boot's default logging framework? How can you configure logging levels?",
        answer:
          "Spring Boot uses **Logback** as its default logging framework but also supports other frameworks like Log4j2 and Java Util Logging (JUL).",
        explanation:"<div><strong>Spring Boot</strong> provides built-in logging support using Logback, which can be configured via <code>application.properties</code>, <code>logback.xml</code>, or programmatically. Logging levels define the severity of logs and can be set globally or per package using properties like:</div><ul><li><strong>TRACE</strong> (most detailed)</li><li><strong>DEBUG</strong></li><li><strong>INFO</strong> (default)</li><li><strong>WARN</strong></li><li><strong>ERROR</strong> (least detailed)</li></ul><div>Developers can configure logging levels in <code>application.properties</code> or use a custom <code>logback.xml</code> file for advanced configurations.</div>",
        codeSnippet:
          '# application.properties example\nlogging.level.root=INFO\nlogging.level.org.springframework=DEBUG\nlogging.level.com.example=TRACE\n\n// logback.xml example\n<configuration>\n    <logger name="com.example" level="DEBUG"/>\n    <root level="INFO">\n        <appender-ref ref="STDOUT"/>\n    </root>\n</configuration>',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between @Qualifier and @Primary annotation?",
        compareHeading: ["@Qualifier", "@Primary"],
        comparision: [
          {
            "@Qualifier": {
              Definition:
                "An annotation used to specify a specific bean when multiple beans of the same type exist.",
              Purpose:
                "Used for fine-grained control in dependency injection by explicitly specifying which bean should be injected.",
              Usage:
                "Applied to @Autowired fields or constructor parameters to resolve ambiguity when multiple beans are available.",
              Priority: "Lower priority; only used when explicitly specified.",
              Example:
                '@Component("beanA")\nclass BeanA {}\n@Component("beanB")\nclass BeanB {}\n@Autowired\n@Qualifier("beanA")\nprivate BeanA myBean;',
            },
          },
          {
            "@Primary": {
              Definition:
                "An annotation that gives higher preference to a specific bean when multiple beans of the same type exist.",
              Purpose:
                "Used to set a default bean to be injected when no specific @Qualifier is provided.",
              Usage:
                "Applied at the bean level to mark it as the primary choice for dependency injection.",
              Priority:
                "Higher priority; used by default unless an explicit @Qualifier is specified.",
              Example:
                "@Primary\n@Component\nclass PrimaryBean {}\n@Component\nclass SecondaryBean {}\n@Autowired\nprivate PrimaryBean myBean;",
            },
          },
        ],
        image: "",
      },
    },
  ],
};

export default springbootBaicsQuestions;
