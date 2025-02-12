const springbootMicroservice = {
  title: "Springboot Microservice",
  questions: [
    {
      content: {
        question: "Why is Spring Boot preferred for building microservices?",
        answer:
          "Spring Boot is preferred for building microservices due to its auto-configuration, embedded servers, seamless integration with Spring Cloud, and production-ready features like monitoring and security.",
        explanation:
          "<div><strong>Reasons Why Spring Boot is Preferred for Microservices:</strong></div><ul><li><strong>Auto-Configuration:</strong> Reduces boilerplate code and automatically configures dependencies.</li><li><strong>Embedded Servers:</strong> Comes with Tomcat, Jetty, or Undertow, eliminating the need for external server deployment.</li><li><strong>Spring Cloud Integration:</strong> Provides tools for service discovery (Eureka), configuration management (Config Server), API Gateway (Zuul/Gateway), and circuit breakers (Resilience4j/Hystrix).</li><li><strong>Production-Ready Features:</strong> Includes Actuator for monitoring, Micrometer for metrics, and security integrations.</li><li><strong>Scalability:</strong> Supports containerization with Docker and orchestration with Kubernetes.</li><li><strong>Event-Driven Support:</strong> Easily integrates with message brokers like Kafka and RabbitMQ for asynchronous communication.</li></ul>",
        codeSnippet:
          '// Example of a simple Spring Boot microservice\n@SpringBootApplication\n@RestController\n@RequestMapping("/api/greetings")\npublic class GreetingService {\n    public static void main(String[] args) {\n        SpringApplication.run(GreetingService.class, args);\n    }\n    \n    @GetMapping("/{name}")\n    public ResponseEntity<String> greet(@PathVariable String name) {\n        return ResponseEntity.ok("Hello, " + name + "!");\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What are the key features of Spring Boot that support microservices development?",
        answer:
          "Spring Boot provides features like auto-configuration, embedded servers, Spring Cloud integration, Actuator for monitoring, and seamless security support to facilitate microservices development.",
        explanation:
          "<div><strong>Key Features of Spring Boot for Microservices Development:</strong></div><ul><li><strong>Auto-Configuration:</strong> Reduces the need for manual configuration, making development faster.</li><li><strong>Embedded Servers:</strong> Includes Tomcat, Jetty, or Undertow, allowing standalone service deployment.</li><li><strong>Spring Cloud Integration:</strong> Supports microservices patterns like service discovery (Eureka), API gateway (Zuul/Spring Cloud Gateway), and circuit breakers (Resilience4j/Hystrix).</li><li><strong>Spring Boot Actuator:</strong> Provides built-in endpoints for monitoring and health checks.</li><li><strong>Security & Authentication:</strong> Integrates with OAuth2, JWT, and Spring Security for authentication and authorization.</li><li><strong>Resilience & Fault Tolerance:</strong> Offers retry mechanisms, circuit breakers, and bulkheads via Resilience4j.</li><li><strong>Event-Driven Architecture Support:</strong> Works seamlessly with Kafka, RabbitMQ, and other message brokers for asynchronous communication.</li></ul>",
        codeSnippet:
          "// Example of Spring Boot Actuator for monitoring\n@SpringBootApplication\npublic class MicroserviceApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MicroserviceApplication.class, args);\n    }\n}\n\n// application.properties configurationmanagement.endpoints.web.exposure.include=health,info,metrics\nmanagement.endpoint.health.show-details=always",
      },
    },
    {
      content: {
        question: "How do you create a microservice using Spring Boot?",
        answer:
          "A microservice in Spring Boot can be created by setting up a Spring Boot application, defining REST endpoints, and configuring necessary dependencies for service communication and database integration.",
        explanation:
          "<div><strong>Steps to Create a Microservice Using Spring Boot:</strong></div><ul><li><strong>Step 1: Set Up a Spring Boot Project:</strong> Use Spring Initializr to generate a Spring Boot application with dependencies like Spring Web, Spring Boot Actuator, and Spring Data JPA.</li><li><strong>Step 2: Define a REST Controller:</strong> Create RESTful endpoints using `@RestController` to expose APIs.</li><li><strong>Step 3: Connect to a Database (Optional):</strong> Configure database properties in `application.properties` and define entity classes.</li><li><strong>Step 4: Implement Business Logic:</strong> Use a service layer to handle business logic and interact with the database.</li><li><strong>Step 5: Run the Microservice:</strong> Use `SpringApplication.run()` to start the service.</li></ul>",
        codeSnippet:
          '// Step 1: Define the main Spring Boot application\n@SpringBootApplication\npublic class MicroserviceApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MicroserviceApplication.class, args);\n    }\n}\n\n// Step 2: Create a REST Controller\n@RestController\n@RequestMapping("/api/greetings")\npublic class GreetingController {\n    @GetMapping("/{name}")\n    public ResponseEntity<String> greet(@PathVariable String name) {\n        return ResponseEntity.ok("Hello, " + name + "!");\n    }\n}\n\n// Step 3: Configure application.properties\nserver.port=8081\nspring.application.name=greeting-service',
      },
    },
    {
      content: {
        question:
          "What dependencies are required to build a microservices application in Spring Boot?",
        answer:
          "To build a microservices application in Spring Boot, essential dependencies include Spring Web, Spring Boot Actuator, Spring Cloud (for service discovery, config, and resilience), and Spring Data JPA (for database interaction).",
        explanation:
          "<div><strong>Key Dependencies for Microservices Development:</strong></div><ul><li><strong>Spring Web:</strong> Provides RESTful API capabilities.</li><li><strong>Spring Boot Actuator:</strong> Enables monitoring and health checks.</li><li><strong>Spring Cloud Dependencies:</strong> Includes tools like Eureka (service discovery), Spring Cloud Config (centralized configuration), and Resilience4j (circuit breaker).</li><li><strong>Spring Data JPA:</strong> Simplifies database access and ORM.</li><li><strong>Spring Security:</strong> Secures APIs with authentication and authorization.</li><li><strong>Spring Cloud Gateway:</strong> Provides an API gateway for routing and security.</li><li><strong>Spring Boot DevTools (Optional):</strong> Enhances development with live reload and automatic restarts.</li></ul>",
        codeSnippet:
          "// Example of Maven dependencies for a Spring Boot microservice\n<dependencies>\n    <!-- Spring Boot Web for REST APIs -->\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n\n    <!-- Spring Boot Actuator for monitoring -->\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n\n    <!-- Spring Cloud Netflix Eureka Client for service discovery -->\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    </dependency>\n\n    <!-- Spring Data JPA for database access -->\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-data-jpa</artifactId>\n    </dependency>\n\n    <!-- Spring Security for authentication and authorization -->\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-security</artifactId>\n    </dependency>\n</dependencies>",
      },
    },
    {
      content: {
        question:
          "How does Spring Boot simplify configuration management in microservices?",
        answer:
          "Spring Boot simplifies configuration management in microservices through its externalized configuration support, Spring Cloud Config Server, and environment-specific property files.",
        explanation:
          "<div><strong>Ways Spring Boot Simplifies Configuration Management:</strong></div><ul><li><strong>Externalized Configuration:</strong> Allows configurations to be stored in `application.properties` or `application.yml`, making it easy to change without modifying code.</li><li><strong>Environment-Specific Configurations:</strong> Supports different configurations for `dev`, `test`, and `prod` environments using files like `application-dev.properties`.</li><li><strong>Spring Cloud Config Server:</strong> Provides a centralized configuration service that enables microservices to fetch configurations from a remote repository (e.g., Git).</li><li><strong>Profiles:</strong> Enables different settings based on `spring.profiles.active`, ensuring smooth environment transitions.</li><li><strong>Vault Integration:</strong> Supports secure storage of sensitive configurations using Spring Cloud Vault.</li><li><strong>Dynamic Property Updates:</strong> Supports dynamic reloading of configurations without restarting services when using Spring Cloud Config and Actuator.</li></ul>",
        codeSnippet:
          '// Example of environment-specific configuration\n# application-dev.properties\nserver.port=8081\nspring.datasource.url=jdbc:mysql://localhost:3306/dev_db\n\n# application-prod.properties\nserver.port=8082\nspring.datasource.url=jdbc:mysql://prod-db-host:3306/prod_db\n\n// Enabling profiles in application.properties\nspring.profiles.active=dev\n\n// Example of Spring Cloud Config Server dependency in pom.xml\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-config-server</artifactId>\n</dependency>\n\n// Example of using Spring Cloud Config Client\n@RefreshScope\n@RestController\npublic class ConfigClientController {\n    @Value("${config.property}")\n    private String configProperty;\n    \n    @GetMapping("/config")\n    public String getConfig() {\n        return configProperty;\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is Spring Boot Actuator, and how does it help in monitoring microservices?",
        answer:
          "Spring Boot Actuator is a set of production-ready features that help monitor and manage Spring Boot applications by providing built-in endpoints for health checks, metrics, and system monitoring.",
        explanation:
          "<div><strong>How Spring Boot Actuator Helps in Monitoring Microservices:</strong></div><ul><li><strong>Health Checks:</strong> The `/actuator/health` endpoint provides insights into the application's health status.</li><li><strong>Metrics:</strong> The `/actuator/metrics` endpoint gives system metrics like memory usage, CPU load, and active threads.</li><li><strong>Loggers:</strong> Allows dynamic log level changes at runtime using `/actuator/loggers`.</li><li><strong>Application Info:</strong> The `/actuator/info` endpoint provides custom application metadata.</li><li><strong>Tracing & Auditing:</strong> Supports integration with tools like Micrometer, Prometheus, and Zipkin for distributed tracing and monitoring.</li><li><strong>Security & Management:</strong> Actuator endpoints can be secured and exposed selectively using Spring Security.</li></ul>",
        codeSnippet:
          '// Step 1: Add Spring Boot Actuator dependency in pom.xml\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n\n// Step 2: Enable Actuator Endpoints in application.properties\nmanagement.endpoints.web.exposure.include=health,info,metrics\nmanagement.endpoint.health.show-details=always\n\n// Step 3: Example REST Controller to Expose Actuator Data\n@RestController\n@RequestMapping("/api")\npublic class MonitoringController {\n    @GetMapping("/status")\n    public String status() {\n        return "Microservice is running fine!";\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How do you enable and configure CORS in a Spring Boot microservice?",
        answer:
          "CORS (Cross-Origin Resource Sharing) in a Spring Boot microservice can be enabled using `@CrossOrigin` annotation, global configuration via `WebMvcConfigurer`, or security configuration in Spring Security.",
        explanation:
          "<div><strong>Ways to Enable and Configure CORS in Spring Boot:</strong></div><ul><li><strong>Using @CrossOrigin:</strong> Apply directly to specific controllers or methods.</li><li><strong>Global Configuration with WebMvcConfigurer:</strong> Define CORS settings globally for all endpoints.</li><li><strong>Spring Security Configuration:</strong> When using Spring Security, explicitly configure CORS policies to avoid conflicts.</li></ul>",
        codeSnippet:
          '// Method 1: Using @CrossOrigin on Controller\n@RestController\n@RequestMapping("/api")\n@CrossOrigin(origins = "http://example.com")\npublic class MyController {\n    @GetMapping("/data")\n    public String getData() {\n        return "CORS Enabled Data";\n    }\n}\n\n// Method 2: Global CORS Configuration in WebMvcConfigurer\n@Configuration\npublic class CorsConfig implements WebMvcConfigurer {\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping("/**")\n                .allowedOrigins("http://example.com")\n                .allowedMethods("GET", "POST", "PUT", "DELETE")\n                .allowCredentials(true);\n    }\n}\n\n// Method 3: Configuring CORS in Spring Security\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.cors().and().csrf().disable()\n            .authorizeHttpRequests(auth -> auth.anyRequest().authenticated());\n        return http.build();\n    }\n\n    @Bean\n    public CorsConfigurationSource corsConfigurationSource() {\n        CorsConfiguration configuration = new CorsConfiguration();\n        configuration.setAllowedOrigins(List.of("http://example.com"));\n        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));\n        configuration.setAllowCredentials(true);\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n        source.registerCorsConfiguration("/**", configuration);\n        return source;\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How do you implement inter-service communication in a Spring Boot microservices application?",
        answer:
          "Inter-service communication in a Spring Boot microservices application can be implemented using REST APIs (RestTemplate or WebClient), messaging queues (RabbitMQ, Kafka), and service discovery (Eureka, Consul).",
        explanation:
          "<div><strong>Ways to Implement Inter-Service Communication:</strong></div><ul><li><strong>REST API Communication:</strong> Services communicate via HTTP using RestTemplate (deprecated) or WebClient.</li><li><strong>Feign Client:</strong> Declarative HTTP client for calling other microservices easily.</li><li><strong>Message Brokers:</strong> Asynchronous communication using RabbitMQ, Apache Kafka, or ActiveMQ.</li><li><strong>Service Discovery:</strong> Eureka or Consul helps dynamically locate services without hardcoded URLs.</li><li><strong>API Gateway:</strong> Spring Cloud Gateway or Zuul acts as a single entry point for communication.</li></ul>",
        codeSnippet:
          '// 1. Using WebClient (Recommended for REST Communication)\n@Service\npublic class MyService {\n    private final WebClient webClient;\n\n    public MyService(WebClient.Builder webClientBuilder) {\n        this.webClient = webClientBuilder.baseUrl("http://user-service").build();\n    }\n\n    public Mono<String> getUserData() {\n        return webClient.get()\n                .uri("/users/1")\n                .retrieve()\n                .bodyToMono(String.class);\n    }\n}\n\n// 2. Using Feign Client (Declarative HTTP Communication)\n@FeignClient(name = "user-service")\npublic interface UserClient {\n    @GetMapping("/users/{id}")\n    String getUser(@PathVariable("id") Long id);\n}\n\n// 3. Using Kafka for Event-Driven Communication\n@Service\npublic class MessageProducer {\n    private final KafkaTemplate<String, String> kafkaTemplate;\n\n    public MessageProducer(KafkaTemplate<String, String> kafkaTemplate) {\n        this.kafkaTemplate = kafkaTemplate;\n    }\n\n    public void sendMessage(String message) {\n        kafkaTemplate.send("my-topic", message);\n    }\n}\n\n// Kafka Consumer\n@Service\npublic class MessageConsumer {\n    @KafkaListener(topics = "my-topic", groupId = "my-group")\n    public void listen(String message) {\n        System.out.println("Received message: " + message);\n    }\n}',
      },
    },
    {
      content: {
        question: "How do you handle exceptions in a Spring Boot microservice?",
        answer:
          "Exceptions in a Spring Boot microservice can be handled using `@ExceptionHandler` for controller-level handling, `@ControllerAdvice` for global exception handling, and `ResponseStatusException` for setting HTTP response statuses.",
        explanation:
          "<div><strong>Ways to Handle Exceptions in a Spring Boot Microservice:</strong></div><ul><li><strong>@ExceptionHandler:</strong> Used in controllers to catch specific exceptions.</li><li><strong>@ControllerAdvice:</strong> A centralized exception handling mechanism for the entire application.</li><li><strong>ResponseStatusException:</strong> Throws exceptions with appropriate HTTP status codes.</li><li><strong>Custom Exception Classes:</strong> Helps create meaningful error messages for API responses.</li><li><strong>Logging:</strong> Logs exceptions using `SLF4J` or `Logback` for debugging.</li></ul>",
        codeSnippet:
          '// 1. Handling exceptions at the controller level using @ExceptionHandler\n@RestController\n@RequestMapping("/api")\npublic class UserController {\n    @GetMapping("/user/{id}")\n    public String getUser(@PathVariable int id) {\n        if (id <= 0) throw new UserNotFoundException("User not found");\n        return "User found";\n    }\n\n    @ExceptionHandler(UserNotFoundException.class)\n    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex) {\n        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);\n    }\n}\n\n// 2. Global exception handling using @ControllerAdvice\n@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleAllExceptions(Exception ex) {\n        return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);\n    }\n}\n\n// 3. Using ResponseStatusException for exception handling\n@GetMapping("/product/{id}")\npublic ResponseEntity<String> getProduct(@PathVariable int id) {\n    if (id <= 0) {\n        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid Product ID");\n    }\n    return ResponseEntity.ok("Product found");\n}\n\n// 4. Defining a custom exception class\npublic class UserNotFoundException extends RuntimeException {\n    public UserNotFoundException(String message) {\n        super(message);\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How can you secure a Spring Boot microservice using Spring Security?",
        answer:
          "Spring Boot microservices can be secured using Spring Security by implementing authentication, authorization, JWT-based security, OAuth2, and API Gateway security policies.",
        explanation:
          "<div><strong>Ways to Secure a Spring Boot Microservice:</strong></div><ul><li><strong>Basic Authentication:</strong> Secures APIs with username and password.</li><li><strong>JWT Authentication:</strong> Uses JSON Web Tokens for stateless authentication.</li><li><strong>OAuth2 Authentication:</strong> Implements Single Sign-On (SSO) with an authorization server.</li><li><strong>Role-Based Access Control (RBAC):</strong> Restricts access based on user roles.</li><li><strong>API Gateway Security:</strong> Applies security at the API Gateway level to protect microservices.</li></ul>",
        codeSnippet:
          '// 1. Adding Spring Security Dependency in pom.xml\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n\n// 2. Configuring Basic Authentication\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.csrf().disable()\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers("/public/**").permitAll()\n                .requestMatchers("/admin/**").hasRole("ADMIN")\n                .anyRequest().authenticated())\n            .httpBasic();\n        return http.build();\n    }\n}\n\n// 3. Implementing JWT Authentication\n@Service\npublic class JwtUtil {\n    private final String SECRET_KEY = "secret";\n\n    public String generateToken(String username) {\n        return Jwts.builder()\n                .setSubject(username)\n                .setIssuedAt(new Date())\n                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))\n                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)\n                .compact();\n    }\n\n    public String extractUsername(String token) {\n        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getSubject();\n    }\n}\n\n// 4. OAuth2 Authentication Configuration\n@Configuration\n@EnableWebSecurity\npublic class OAuth2SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.oauth2Login();\n        return http.build();\n    }\n}',
      },
    },
  ],
};

export default springbootMicroservice;
