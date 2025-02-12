const springbootRestApiQuestions={
    title: "Springboot Rest API",
    questions: [
        {
            "content": {
              "question": "What is REST, and what are its key principles?",
              "answer": "REST (Representational State Transfer) is an architectural style for designing networked applications that rely on stateless communication and standard HTTP methods.",
              "explanation": "<div><strong>REST Principles:</strong></div><ul><li><strong>Statelessness:</strong> Each request from a client contains all the information needed to process it, and the server does not store client state.</li><li><strong>Client-Server Architecture:</strong> The client and server are separate, allowing independent evolution.</li><li><strong>Uniform Interface:</strong> Resources are accessed using standard HTTP methods (GET, POST, PUT, DELETE).</li><li><strong>Resource-Based:</strong> Everything is treated as a resource, identified by URIs.</li><li><strong>Cacheability:</strong> Responses can be cached to improve performance.</li><li><strong>Layered System:</strong> The architecture is composed of multiple layers, improving scalability and security.</li></ul>",
              "codeSnippet": "// Example of RESTful API endpoint in Spring Boot\n@RestController\n@RequestMapping(\"/api\")\npublic class ProductController {\n    @GetMapping(\"/products/{id}\")\n    public ResponseEntity<String> getProduct(@PathVariable int id) {\n        return ResponseEntity.ok(\"Product details for ID: \" + id);\n    }\n}"
            }
          },
          {
            "comparision": {
              "question": "What is the difference between REST and SOAP?",
              "compareHeading": ["REST", "SOAP"],
              "comparision": [
                {
                  "REST": {
                    "Definition": "A lightweight architectural style that uses standard HTTP methods for communication.",
                    "Protocol": "Uses HTTP as the primary protocol.",
                    "Message Format": "Supports multiple formats like JSON, XML, and plain text.",
                    "Performance": "Faster and more efficient due to less overhead.",
                    "Flexibility": "More flexible and scalable, suitable for web and mobile applications.",
                    "State": "Stateless; each request from a client contains all necessary information.",
                    "Security": "Relies on standard web security mechanisms like HTTPS and OAuth.",
                    "Example": "GET https://api.example.com/users/1 → Returns JSON or XML response."
                  }
                },
                {
                  "SOAP": {
                    "Definition": "A protocol for exchanging structured information using XML-based messaging.",
                    "Protocol": "Can use various protocols like HTTP, SMTP, and TCP.",
                    "Message Format": "Uses XML exclusively for message format.",
                    "Performance": "Slower due to XML processing and additional headers.",
                    "Flexibility": "Less flexible and more complex due to strict standards.",
                    "State": "Can be stateless or stateful, depending on the implementation.",
                    "Security": "Provides built-in security with WS-Security, making it more suitable for enterprise applications.",
                    "Example": "SOAP message contains an XML envelope with headers and body."
                  }
                }
              ],
              "image": ""
            }
          },
          {
            "content": {
              "question": "How do you create a simple REST API using Spring Boot?",
              "answer": "In Spring Boot, a REST API can be created using the `@RestController` annotation along with `@RequestMapping` to define endpoints.",
              "explanation": "<div><strong>Steps to create a REST API in Spring Boot:</strong></div><ul><li><strong>Step 1:</strong> Create a Spring Boot project with Spring Web dependency.</li><li><strong>Step 2:</strong> Define a controller using `@RestController`.</li><li><strong>Step 3:</strong> Use `@RequestMapping` or specific HTTP method annotations like `@GetMapping`, `@PostMapping`, `@PutMapping`, and `@DeleteMapping`.</li><li><strong>Step 4:</strong> Implement business logic and return responses.</li></ul>",
              "codeSnippet": "// Example of a simple REST API in Spring Boot\n@RestController\n@RequestMapping(\"/api\")\npublic class HelloController {\n    @GetMapping(\"/hello\")\n    public ResponseEntity<String> sayHello() {\n        return ResponseEntity.ok(\"Hello, World!\");\n    }\n}"
            }
          },
          {
            "content": {
              "question": "What is the purpose of the @RestController annotation in Spring Boot?",
              "answer": "The `@RestController` annotation in Spring Boot is used to create RESTful web services by combining `@Controller` and `@ResponseBody`.",
              "explanation": "<div><strong>Purpose of @RestController:</strong></div><ul><li><strong>Combines @Controller and @ResponseBody:</strong> Eliminates the need to annotate each method with `@ResponseBody`.</li><li><strong>Handles REST requests:</strong> Simplifies the development of REST APIs.</li><li><strong>Automatically serializes responses:</strong> Returns data in JSON or XML format.</li></ul>",
              "codeSnippet": "// Example of @RestController usage\n@RestController\n@RequestMapping(\"/api\")\npublic class UserController {\n    @GetMapping(\"/users\")\n    public List<String> getUsers() {\n        return List.of(\"Alice\", \"Bob\", \"Charlie\");\n    }\n}"
            }
          },
          {
            "comparision": {
              "question": "What is the difference between @RequestMapping and @GetMapping?",
              "compareHeading": ["@RequestMapping", "@GetMapping"],
              "comparision": [
                {
                  "@RequestMapping": {
                    "Definition": "A generic annotation used to map HTTP requests to handler methods in Spring MVC.",
                    "HTTP Methods": "Supports multiple HTTP methods like GET, POST, PUT, DELETE, etc.",
                    "Usage": "Can be used at both class and method levels for broader request mapping.",
                    "Flexibility": "More flexible as it can handle different types of requests.",
                    "Example": "@RequestMapping(value = \"/users\", method = RequestMethod.GET)\npublic List<User> getUsers() { return userService.getAllUsers(); }"
                  }
                },
                {
                  "@GetMapping": {
                    "Definition": "A specialized annotation that maps HTTP GET requests to specific handler methods.",
                    "HTTP Methods": "Specifically designed for handling GET requests only.",
                    "Usage": "Can only be used at the method level for handling GET requests.",
                    "Flexibility": "Less flexible as it is restricted to GET requests.",
                    "Example": "@GetMapping(\"/users\")\npublic List<User> getUsers() { return userService.getAllUsers(); }"
                  }
                }
              ],
              "image": ""
            }
          },
          {
            "content": {
              "question": "What are the different HTTP methods used in RESTful services?",
              "answer": "RESTful services use standard HTTP methods such as GET, POST, PUT, DELETE, PATCH, and OPTIONS for performing CRUD operations.",
              "explanation": "<div><strong>Common HTTP Methods in RESTful Services:</strong></div><ul><li><strong>GET:</strong> Retrieves data from the server (Read operation).</li><li><strong>POST:</strong> Creates a new resource on the server (Create operation).</li><li><strong>PUT:</strong> Updates or replaces an existing resource (Update operation).</li><li><strong>DELETE:</strong> Removes a resource from the server (Delete operation).</li><li><strong>PATCH:</strong> Partially updates a resource.</li><li><strong>OPTIONS:</strong> Retrieves supported HTTP methods for a resource.</li></ul>",
              "codeSnippet": "// Example of different HTTP methods in Spring Boot\n@RestController\n@RequestMapping(\"/api/products\")\npublic class ProductController {\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<String> getProduct(@PathVariable int id) {\n        return ResponseEntity.ok(\"Product details for ID: \" + id);\n    }\n\n    @PostMapping\n    public ResponseEntity<String> createProduct(@RequestBody String product) {\n        return ResponseEntity.status(HttpStatus.CREATED).body(\"Product created: \" + product);\n    }\n\n    @PutMapping(\"/{id}\")\n    public ResponseEntity<String> updateProduct(@PathVariable int id, @RequestBody String product) {\n        return ResponseEntity.ok(\"Product updated: \" + product);\n    }\n\n    @DeleteMapping(\"/{id}\")\n    public ResponseEntity<String> deleteProduct(@PathVariable int id) {\n        return ResponseEntity.ok(\"Product deleted with ID: \" + id);\n    }\n}"
            }
          },
          {
            "comparision": {
              "question": "What is the difference between @PathVariable and @RequestParam?",
              "compareHeading": ["@PathVariable", "@RequestParam"],
              "comparision": [
                {
                  "@PathVariable": {
                    "Definition": "Used to extract values from the URI path.",
                    "Usage": "Maps dynamic values from the URL path to method parameters.",
                    "Required": "Required by default but can be made optional using 'required = false'.",
                    "Use Case": "When the variable is part of the URL structure.",
                    "Example": "@GetMapping(\"/users/{id}\")\npublic User getUser(@PathVariable(\"id\") Long userId) {\n  return userService.getUserById(userId);\n}"
                  }
                },
                {
                  "@RequestParam": {
                    "Definition": "Used to extract query parameters from the request URL.",
                    "Usage": "Maps query string parameters to method parameters.",
                    "Required": "Required by default but can be made optional using 'required = false'.",
                    "Use Case": "When the variable is passed as a query parameter.",
                    "Example": "@GetMapping(\"/users\")\npublic User getUser(@RequestParam(\"id\") Long userId) {\n  return userService.getUserById(userId);\n}"
                  }
                }
              ],
              "image": ""
            }
          },
          {
            "content": {
              "question": "How do you pass parameters to a REST API in Spring Boot?",
              "answer": "In Spring Boot, parameters can be passed to a REST API using path variables (`@PathVariable`), query parameters (`@RequestParam`), and request body (`@RequestBody`).",
              "explanation": "<div><strong>Ways to Pass Parameters in a REST API:</strong></div><ul><li><strong>Path Variables (`@PathVariable`):</strong> Used to pass dynamic values in the URL.</li><li><strong>Query Parameters (`@RequestParam`):</strong> Used to pass optional parameters in the request URL.</li><li><strong>Request Body (`@RequestBody`):</strong> Used for sending JSON data in the request body.</li></ul>",
              "codeSnippet": "// Example of passing parameters in Spring Boot\n@RestController\n@RequestMapping(\"/api\")\npublic class UserController {\n    \n    // Using @PathVariable\n    @GetMapping(\"/users/{id}\")\n    public ResponseEntity<String> getUserById(@PathVariable int id) {\n        return ResponseEntity.ok(\"User details for ID: \" + id);\n    }\n    \n    // Using @RequestParam\n    @GetMapping(\"/users\")\n    public ResponseEntity<String> getUserByName(@RequestParam String name) {\n        return ResponseEntity.ok(\"User details for name: \" + name);\n    }\n    \n    // Using @RequestBody\n    @PostMapping(\"/users\")\n    public ResponseEntity<String> createUser(@RequestBody String user) {\n        return ResponseEntity.status(HttpStatus.CREATED).body(\"User created: \" + user);\n    }\n}"
            }
          },
          {
            "content": {
              "question": "How do you handle JSON data in a Spring Boot REST API?",
              "answer": "Spring Boot automatically handles JSON data using the Jackson library, allowing seamless conversion between Java objects and JSON format.",
              "explanation": "<div><strong>Handling JSON in Spring Boot:</strong></div><ul><li><strong>Jackson Integration:</strong> Spring Boot includes Jackson to serialize and deserialize JSON automatically.</li><li><strong>@RequestBody:</strong> Used to accept JSON input in a request.</li><li><strong>@ResponseBody:</strong> (or `@RestController`) Converts Java objects to JSON responses.</li><li><strong>@JsonProperty & @JsonIgnore:</strong> Used for customizing JSON serialization/deserialization.</li></ul>",
              "codeSnippet": "// Example of handling JSON data in Spring Boot\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    \n    // Handling JSON input with @RequestBody\n    @PostMapping\n    public ResponseEntity<User> createUser(@RequestBody User user) {\n        return ResponseEntity.status(HttpStatus.CREATED).body(user);\n    }\n}\n\n// User model with JSON annotations\nclass User {\n    @JsonProperty(\"user_id\")\n    private int id;\n    private String name;\n    \n    @JsonIgnore\n    private String password;\n    \n    // Getters and Setters\n}"
            }
          },
          {
            "content": {
              "question": "How do you enable Cross-Origin Resource Sharing (CORS) in Spring Boot?",
              "answer": "CORS (Cross-Origin Resource Sharing) can be enabled in Spring Boot using `@CrossOrigin`, global configuration with `WebMvcConfigurer`, or by configuring the `CorsRegistry`.",
              "explanation": "<div><strong>Ways to Enable CORS in Spring Boot:</strong></div><ul><li><strong>Using `@CrossOrigin`:</strong> Applied at the controller or method level to allow cross-origin requests.</li><li><strong>Global Configuration (`WebMvcConfigurer`):</strong> Configures CORS for all endpoints in the application.</li><li><strong>Spring Security Configuration:</strong> If Spring Security is enabled, CORS needs to be configured in the security filter chain.</li></ul>",
              "codeSnippet": "// 1. Enabling CORS using @CrossOrigin\n@RestController\n@RequestMapping(\"/api\")\n@CrossOrigin(origins = \"http://example.com\")\npublic class UserController {\n    @GetMapping(\"/users\")\n    public ResponseEntity<String> getUsers() {\n        return ResponseEntity.ok(\"User list\");\n    }\n}\n\n// 2. Global CORS Configuration using WebMvcConfigurer\n@Configuration\npublic class CorsConfig implements WebMvcConfigurer {\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping(\"/**\").allowedOrigins(\"http://example.com\");\n    }\n}\n"
            }
          },
          {
            "content": {
              "question": "How does Spring Boot handle exception handling in REST APIs?",
              "answer": "Spring Boot provides multiple ways to handle exceptions, including `@ExceptionHandler`, `@ControllerAdvice`, and the `ResponseStatusException` class.",
              "explanation": "<div><strong>Exception handling in Spring Boot:</strong></div><ul><li><strong>@ExceptionHandler:</strong> Handles specific exceptions at the controller level.</li><li><strong>@ControllerAdvice:</strong> Handles exceptions globally for all controllers.</li><li><strong>ResponseStatusException:</strong> Throws exceptions with HTTP status codes.</li></ul>",
              "codeSnippet": "// Using @ExceptionHandler\n@RestController\n@RequestMapping(\"/api\")\npublic class UserController {\n    @GetMapping(\"/user/{id}\")\n    public String getUser(@PathVariable int id) {\n        if (id <= 0) throw new UserNotFoundException(\"User not found\");\n        return \"User found\";\n    }\n    \n    @ExceptionHandler(UserNotFoundException.class)\n    public ResponseEntity<String> handleException(UserNotFoundException ex) {\n        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);\n    }\n}\n\n// Global Exception Handling using @ControllerAdvice\n@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleAllExceptions(Exception ex) {\n        return new ResponseEntity<>(\"Internal Server Error\", HttpStatus.INTERNAL_SERVER_ERROR);\n    }\n}"
            }
          },
          {
            "content": {
              "question": "What is @ResponseEntity, and how is it used in REST APIs?",
              "answer": "`ResponseEntity` is a class in Spring Boot used to represent the entire HTTP response, including the status code, headers, and body.",
              "explanation": "<div><strong>Usage of ResponseEntity in REST APIs:</strong></div><ul><li><strong>Custom HTTP Status Codes:</strong> Allows setting specific HTTP response status codes.</li><li><strong>Response Headers:</strong> Enables sending custom headers in the response.</li><li><strong>Flexible Response Body:</strong> Supports returning objects, strings, or other data types.</li></ul>",
              "codeSnippet": "// Example of using ResponseEntity in Spring Boot\n@RestController\n@RequestMapping(\"/api\")\npublic class UserController {\n    \n    @GetMapping(\"/users/{id}\")\n    public ResponseEntity<String> getUser(@PathVariable int id) {\n        if (id <= 0) {\n            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(\"Invalid user ID\");\n        }\n        return ResponseEntity.ok(\"User details for ID: \" + id);\n    }\n\n    @PostMapping(\"/users\")\n    public ResponseEntity<String> createUser(@RequestBody String user) {\n        return ResponseEntity.status(HttpStatus.CREATED).body(\"User created: \" + user);\n    }\n}"
            }
          },
          {
            "content": {
              "question": "How do you implement request validation in Spring Boot REST APIs?",
              "answer": "Spring Boot provides request validation using the `@Valid` or `@Validated` annotations along with the Jakarta Bean Validation API (e.g., `@NotNull`, `@Size`, `@Min`, `@Max`).",
              "explanation": "<div><strong>Steps to Implement Request Validation:</strong></div><ul><li><strong>Use Bean Validation Annotations:</strong> Add annotations like `@NotNull`, `@Size`, `@Email`, etc., in the request model.</li><li><strong>Apply @Valid or @Validated:</strong> Use `@Valid` in the controller method to trigger validation.</li><li><strong>Handle Validation Errors:</strong> Use `BindingResult` or `@ExceptionHandler` to manage validation errors.</li></ul>",
              "codeSnippet": "// Example of request validation in Spring Boot\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    \n    @PostMapping\n    public ResponseEntity<String> createUser(@Valid @RequestBody User user) {\n        return ResponseEntity.status(HttpStatus.CREATED).body(\"User created: \" + user.getName());\n    }\n}\n\n// User Model with Validation Annotations\nclass User {\n    @NotNull(message = \"Name cannot be null\")\n    @Size(min = 3, message = \"Name must be at least 3 characters long\")\n    private String name;\n    \n    @Email(message = \"Invalid email format\")\n    private String email;\n    \n    @Min(value = 18, message = \"Age must be at least 18\")\n    private int age;\n    \n    // Getters and Setters\n}"
            }
          },
          {
            "content": {
              "question": "What is content negotiation in Spring Boot REST API?",
              "answer": "Content negotiation in Spring Boot allows a REST API to serve different response formats (e.g., JSON, XML) based on client requests.",
              "explanation": "<div><strong>How Content Negotiation Works:</strong></div><ul><li><strong>Accept Header:</strong> The client specifies the desired response format using the `Accept` HTTP header (e.g., `Accept: application/json`).</li><li><strong>URL Path Extension:</strong> The API can support formats like `/users.json` or `/users.xml`.</li><li><strong>Query Parameter:</strong> The format can be specified as a query parameter (e.g., `/users?format=json`).</li></ul><div><strong>Spring Boot Supports:</strong></div><ul><li>JSON (default) via Jackson</li><li>XML via Jackson Dataformat XML or JAXB</li></ul>",
              "codeSnippet": "// Example of Content Negotiation in Spring Boot\n@RestController\n@RequestMapping(\"/api\")\npublic class UserController {\n    \n    @GetMapping(value = \"/users\", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })\n    public List<User> getUsers() {\n        return List.of(new User(\"Alice\"), new User(\"Bob\"));\n    }\n}\n\n// User Model with XML Support\n@XmlRootElement // Enables XML serialization\nclass User {\n    private String name;\n    \n    public User() {}\n    public User(String name) { this.name = name; }\n    \n    // Getters and Setters\n}"
            }
          },
          {
            "content": {
              "question": "How do you implement pagination and sorting in a REST API using Spring Data JPA?",
              "answer": "Spring Data JPA provides built-in support for pagination and sorting using the `Pageable` interface and `Page` objects.",
              "explanation": "<div><strong>Steps to Implement Pagination and Sorting:</strong></div><ul><li><strong>Use `Pageable` in Repository Methods:</strong> The `Pageable` parameter allows automatic pagination.</li><li><strong>Return a `Page<T>` Object:</strong> This includes total elements and pages.</li><li><strong>Enable Sorting:</strong> Use `Sort.by(\"field\")` or `Sort.Direction` in the request.</li></ul>",
              "codeSnippet": "// Example of Pagination and Sorting in Spring Boot\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n    Page<User> findAll(Pageable pageable);\n}\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @GetMapping\n    public ResponseEntity<Page<User>> getUsers(\n        @RequestParam(defaultValue = \"0\") int page,\n        @RequestParam(defaultValue = \"5\") int size,\n        @RequestParam(defaultValue = \"id\") String sortBy) {\n        \n        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));\n        Page<User> users = userRepository.findAll(pageable);\n        return ResponseEntity.ok(users);\n    }\n}\n\n// Sample Request: GET /api/users?page=0&size=5&sortBy=name"
            }
          },
          {
            "content": {
              "question": "How do you secure a REST API using Spring Security?",
              "answer": "Spring Security secures REST APIs by implementing authentication and authorization mechanisms, such as Basic Authentication, JWT, and OAuth2.",
              "explanation": "<div><strong>Ways to Secure a REST API in Spring Boot:</strong></div><ul><li><strong>Basic Authentication:</strong> Uses username and password for authentication.</li><li><strong>JWT (JSON Web Token):</strong> A token-based authentication mechanism for stateless security.</li><li><strong>OAuth2:</strong> Provides a secure way for client applications to access APIs.</li><li><strong>Role-Based Access Control (RBAC):</strong> Restricts access based on user roles.</li></ul>",
              "codeSnippet": "// Example of Securing a REST API with Spring Security\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf().disable()\n            .authorizeHttpRequests()\n            .requestMatchers(\"/api/public\").permitAll()\n            .requestMatchers(\"/api/admin\").hasRole(\"ADMIN\")\n            .anyRequest().authenticated()\n            .and()\n            .httpBasic(); // Basic Authentication\n        return http.build();\n    }\n}\n\n// Example Controller with Secured Endpoints\n@RestController\n@RequestMapping(\"/api\")\npublic class UserController {\n    @GetMapping(\"/public\")\n    public ResponseEntity<String> publicEndpoint() {\n        return ResponseEntity.ok(\"Public Access\");\n    }\n    \n    @GetMapping(\"/admin\")\n    public ResponseEntity<String> adminEndpoint() {\n        return ResponseEntity.ok(\"Admin Access\");\n    }\n}"
            }
          },
          {
            "content": {
              "question": "What are the advantages of using RestTemplate? Why is it deprecated in favor of WebClient?",
              "answer": "`RestTemplate` is a synchronous HTTP client for making REST API calls, but it has been deprecated in favor of `WebClient`, which is more efficient and supports reactive programming.",
              "explanation": "<div><strong>Advantages of `RestTemplate`:</strong></div><ul><li>Easy-to-use synchronous HTTP client.</li><li>Built-in methods for common HTTP operations (`GET`, `POST`, `PUT`, `DELETE`).</li><li>Supports serialization and deserialization of request/response bodies.</li></ul><div><strong>Why was it replaced by `WebClient`?</strong></div><ul><li>`RestTemplate` is blocking (synchronous), which can lead to performance issues.</li><li>`WebClient` is non-blocking and supports reactive programming, making it more efficient for high-performance applications.</li><li>`WebClient` provides better support for streaming large data responses.</li></ul>",
              "codeSnippet": "// Example of using WebClient instead of RestTemplate\n@Configuration\npublic class WebClientConfig {\n    @Bean\n    public WebClient webClient() {\n        return WebClient.builder().baseUrl(\"https://api.example.com\").build();\n    }\n}\n\n@RestController\n@RequestMapping(\"/api\")\npublic class UserController {\n    @Autowired\n    private WebClient webClient;\n    \n    @GetMapping(\"/users\")\n    public Mono<String> getUsers() {\n        return webClient.get()\n                .uri(\"/users\")\n                .retrieve()\n                .bodyToMono(String.class);\n    }\n}"
            }
          },
          {
            "content": {
              "question": "How do you log requests and responses in a Spring Boot REST API?",
              "answer": "Spring Boot provides several ways to log requests and responses, including `HandlerInterceptor`, `Filter`, and `Logging libraries` like SLF4J with Logback.",
              "explanation": "<div><strong>Ways to Log Requests and Responses:</strong></div><ul><li><strong>Using Filters:</strong> A custom `OncePerRequestFilter` can capture request and response details.</li><li><strong>Using HandlerInterceptor:</strong> Logs request details before and after execution.</li><li><strong>Using Actuator and Logging Config:</strong> Enables request tracing via `logging.level` properties.</li></ul>",
              "codeSnippet": "// Example: Logging Requests and Responses Using a Filter\n@Component\npublic class LoggingFilter extends OncePerRequestFilter {\n    private static final Logger logger = LoggerFactory.getLogger(LoggingFilter.class);\n\n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)\n            throws ServletException, IOException {\n        logger.info(\"Incoming Request: {} {}\", request.getMethod(), request.getRequestURI());\n        filterChain.doFilter(request, response);\n        logger.info(\"Outgoing Response: Status {}\", response.getStatus());\n    }\n}"
            }
          },
          {
            "content": {
              "question": "How do you document a REST API using Swagger in Spring Boot?",
              "answer": "Swagger is a tool used to document and test REST APIs in Spring Boot. It is implemented using the `springdoc-openapi` library.",
              "explanation": "<div><strong>Steps to Integrate Swagger in Spring Boot:</strong></div><ul><li><strong>Add Dependency:</strong> Use `springdoc-openapi-starter-webmvc-ui` for Swagger UI.</li><li><strong>Enable API Documentation:</strong> The API is automatically exposed at `/swagger-ui.html`.</li><li><strong>Use Annotations:</strong> Add `@Operation` and `@ApiResponses` for better API descriptions.</li></ul>",
              "codeSnippet": "// 1. Add Dependency in pom.xml\n<dependency>\n    <groupId>org.springdoc</groupId>\n    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>\n    <version>2.0.2</version>\n</dependency>\n\n// 2. Example of Using Swagger Annotations\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    \n    @Operation(summary = \"Get user by ID\", description = \"Retrieves a user by their unique ID\")\n    @ApiResponses(value = {\n        @ApiResponse(responseCode = \"200\", description = \"User found\"),\n        @ApiResponse(responseCode = \"404\", description = \"User not found\")\n    })\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<String> getUser(@PathVariable int id) {\n        return ResponseEntity.ok(\"User details for ID: \" + id);\n    }\n}\n\n// Swagger UI URL: http://localhost:8080/swagger-ui.html"
            }
          },
          {
            "content": {
              "question": "How do you handle rate limiting in a Spring Boot REST API?",
              "answer": "Rate limiting in Spring Boot can be implemented using libraries like `Bucket4j`, `Resilience4j`, or API Gateway solutions such as `Spring Cloud Gateway`.",
              "explanation": "<div><strong>Ways to Implement Rate Limiting:</strong></div><ul><li><strong>Using Bucket4j:</strong> A token-bucket-based rate limiting library for controlling API requests.</li><li><strong>Using Resilience4j:</strong> Provides rate limiting with circuit breaker patterns.</li><li><strong>Using API Gateway:</strong> Limits requests at the gateway level before reaching the service.</li></ul>",
              "codeSnippet": "// Example: Implementing Rate Limiting with Bucket4j\n@Component\n@Aspect\npublic class RateLimitingAspect {\n    private final Map<String, Bucket> cache = new ConcurrentHashMap<>();\n    \n    private Bucket createNewBucket() {\n        return Bucket4j.builder()\n                .addLimit(Bandwidth.classic(5, Refill.intervally(5, Duration.ofMinutes(1))))\n                .build();\n    }\n\n    @Around(\"@annotation(RateLimited)\")\n    public Object rateLimit(ProceedingJoinPoint joinPoint) throws Throwable {\n        String key = \"global\";\n        cache.putIfAbsent(key, createNewBucket());\n        Bucket bucket = cache.get(key);\n        if (bucket.tryConsume(1)) {\n            return joinPoint.proceed();\n        } else {\n            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS).body(\"Rate limit exceeded\");\n        }\n    }\n}\n\n// Example Usage\n@RestController\n@RequestMapping(\"/api\")\npublic class UserController {\n    @RateLimited\n    @GetMapping(\"/users\")\n    public ResponseEntity<String> getUsers() {\n        return ResponseEntity.ok(\"User data\");\n    }\n}"
            }
          },
          {
            "content": {
              "question": "How can we modify an incoming request in a Spring Boot REST API?",
              "answer": "Spring Boot provides ways to modify incoming requests using `Filters`, `Interceptors`, or `Request Wrappers`.",
              "explanation": "<div><strong>Ways to Modify Incoming Requests:</strong></div><ul><li><strong>Using Filters:</strong> Implements `javax.servlet.Filter` to preprocess requests.</li><li><strong>Using Interceptors:</strong> Implements `HandlerInterceptor` to modify requests before reaching the controller.</li><li><strong>Using Request Wrappers:</strong> Extends `HttpServletRequestWrapper` to modify request data.</li></ul>",
              "codeSnippet": "// Example: Modifying Request Body Using a Request Wrapper\n@Component\npublic class RequestBodyFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)\n            throws ServletException, IOException {\n        ContentCachingRequestWrapper wrappedRequest = new ContentCachingRequestWrapper(request);\n        filterChain.doFilter(wrappedRequest, response);\n        String requestBody = new String(wrappedRequest.getContentAsByteArray(), StandardCharsets.UTF_8);\n        System.out.println(\"Modified Request Body: \" + requestBody);\n    }\n}\n\n// Example: Modifying Headers Using an Interceptor\n@Component\npublic class CustomInterceptor implements HandlerInterceptor {\n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {\n        HttpServletRequestWrapper modifiedRequest = new HttpServletRequestWrapper(request) {\n            @Override\n            public String getHeader(String name) {\n                if (\"Custom-Header\".equals(name)) {\n                    return \"Modified-Value\";\n                }\n                return super.getHeader(name);\n            }\n        };\n        return true;\n    }\n}"
            }
          }
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
    ]
}

export default springbootRestApiQuestions;