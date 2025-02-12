const serviceCommunication = {
  title: "Service Communication",
  questions: [
    {
      content: {
        question:
          "What are the different ways microservices communicate with each other?",
        answer:
          "Microservices communicate using synchronous (REST, gRPC) and asynchronous (Message Queues, Event Streaming) communication methods.",
        explanation:
          "<div><strong>Ways Microservices Communicate:</strong></div><ul><li><strong>REST APIs:</strong> Services communicate using HTTP requests with JSON or XML data.</li><li><strong>gRPC:</strong> Uses Protocol Buffers for efficient, high-performance communication.</li><li><strong>Message Queues:</strong> Asynchronous messaging using RabbitMQ, Apache Kafka, or ActiveMQ.</li><li><strong>Event-Driven Communication:</strong> Services publish events that others consume via event streaming platforms.</li><li><strong>Service Discovery:</strong> Eureka or Consul enables services to locate and communicate dynamically.</li></ul>",
        codeSnippet:
          '// 1. REST API Communication using WebClient (Synchronous)\n@Service\npublic class UserService {\n    private final WebClient webClient;\n\n    public UserService(WebClient.Builder webClientBuilder) {\n        this.webClient = webClientBuilder.baseUrl("http://order-service").build();\n    }\n\n    public Mono<String> getOrderDetails() {\n        return webClient.get()\n                .uri("/orders/1")\n                .retrieve()\n                .bodyToMono(String.class);\n    }\n}\n\n// 2. Asynchronous Communication using Kafka (Event-Driven)\n@Service\npublic class OrderProducer {\n    private final KafkaTemplate<String, String> kafkaTemplate;\n\n    public void sendOrderEvent(String order) {\n        kafkaTemplate.send("order-topic", order);\n    }\n}\n\n// Kafka Consumer\n@Service\npublic class OrderConsumer {\n    @KafkaListener(topics = "order-topic", groupId = "order-group")\n    public void listen(String message) {\n        System.out.println("Received Order Event: " + message);\n    }\n}\n\n// 3. Using Feign Client (Declarative HTTP Communication)\n@FeignClient(name = "order-service")\npublic interface OrderClient {\n    @GetMapping("/orders/{id}")\n    String getOrder(@PathVariable("id") Long id);\n}',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between synchronous and asynchronous communication in microservices?",
        compareHeading: [
          "Synchronous Communication",
          "Asynchronous Communication",
        ],
        comparision: [
          {
            "Synchronous Communication": {
              Definition:
                "A request-response communication model where the client waits for a response from the service before proceeding.",
              Working:
                "One service calls another and waits for a response before continuing execution.",
              "Response Time":
                "Generally slower, as it waits for the response before proceeding.",
              Dependency:
                "Tightly coupled; failure in one service can impact others.",
              Reliability:
                "Less resilient to failures since a service unavailability can block operations.",
              "Common Protocols": "HTTP, REST, gRPC.",
              Example:
                "A user authentication service calling a payment service via REST API and waiting for the response.",
            },
          },
          {
            "Asynchronous Communication": {
              Definition:
                "A non-blocking communication model where the client sends a request and continues execution without waiting for a response.",
              Working:
                "The sender and receiver communicate via message queues, events, or streams.",
              "Response Time":
                "Faster, as services continue processing without waiting for responses.",
              Dependency:
                "Loosely coupled; failure in one service does not block others.",
              Reliability:
                "More resilient as messages can be retried or queued for later processing.",
              "Common Protocols":
                "Message queues (Kafka, RabbitMQ), WebSockets, Event-Driven Architecture.",
              Example:
                "An order service publishes an event to a message queue, and the payment service processes it asynchronously.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question:
          "How do you implement inter-service communication using RestTemplate?",
        answer:
          "Inter-service communication using `RestTemplate` is implemented by making HTTP requests to other microservices within the Spring Boot ecosystem.",
        explanation:
          "<div><strong>Steps to Implement Inter-Service Communication Using RestTemplate:</strong></div><ul><li><strong>Define a RestTemplate Bean:</strong> Create a `RestTemplate` bean in a `@Configuration` class.</li><li><strong>Use RestTemplate in Services:</strong> Inject `RestTemplate` and use methods like `getForObject`, `postForEntity`, etc.</li><li><strong>Handle Response:</strong> Extract response data and handle errors appropriately.</li><li><strong>Service Discovery (Optional):</strong> Use Eureka or Consul for dynamic service lookup instead of hardcoded URLs.</li></ul>",
        codeSnippet:
          '// 1. Creating a RestTemplate Bean\n@Configuration\npublic class RestTemplateConfig {\n    @Bean\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n}\n\n// 2. Using RestTemplate to Call Another Microservice\n@Service\npublic class UserService {\n    private final RestTemplate restTemplate;\n\n    @Autowired\n    public UserService(RestTemplate restTemplate) {\n        this.restTemplate = restTemplate;\n    }\n\n    public String getOrderDetails(Long orderId) {\n        String orderServiceUrl = "http://order-service/orders/" + orderId;\n        return restTemplate.getForObject(orderServiceUrl, String.class);\n    }\n}\n\n// 3. Handling POST Requests with RestTemplate\npublic ResponseEntity<String> createOrder(Order order) {\n    String orderServiceUrl = "http://order-service/orders";\n    return restTemplate.postForEntity(orderServiceUrl, order, String.class);\n}\n\n// 4. Exchanging Data with Headers\npublic ResponseEntity<String> getOrderWithHeaders(Long orderId) {\n    HttpHeaders headers = new HttpHeaders();\n    headers.set("Authorization", "Bearer some-token");\n    HttpEntity<String> entity = new HttpEntity<>(headers);\n    \n    return restTemplate.exchange(\n        "http://order-service/orders/" + orderId, \n        HttpMethod.GET, \n        entity, \n        String.class\n    );\n}\n',
      },
    },
    {
      content: {
        question:
          "What is WebClient, and how does it improve service-to-service communication?",
        answer:
          "WebClient is a non-blocking, reactive HTTP client introduced in Spring WebFlux to improve service-to-service communication by enabling asynchronous and efficient request handling.",
        explanation:
          "<div><strong>Advantages of WebClient Over RestTemplate:</strong></div><ul><li><strong>Non-blocking and Reactive:</strong> Uses reactive streams to handle requests asynchronously.</li><li><strong>Better Performance:</strong> Optimized for large-scale microservices with high concurrency.</li><li><strong>Supports Streaming:</strong> Handles large responses efficiently.</li><li><strong>Improved Error Handling:</strong> Provides reactive error handling and retries.</li><li><strong>More Flexible:</strong> Supports synchronous and asynchronous execution.</li></ul>",
        codeSnippet:
          '// 1. Creating a WebClient Bean\n@Configuration\npublic class WebClientConfig {\n    @Bean\n    public WebClient webClient() {\n        return WebClient.builder().baseUrl("http://order-service").build();\n    }\n}\n\n// 2. Using WebClient to Make GET Requests\n@Service\npublic class OrderService {\n    private final WebClient webClient;\n\n    @Autowired\n    public OrderService(WebClient webClient) {\n        this.webClient = webClient;\n    }\n\n    public Mono<String> getOrderDetails(Long orderId) {\n        return webClient.get()\n                .uri("/orders/{id}", orderId)\n                .retrieve()\n                .bodyToMono(String.class);\n    }\n}\n\n// 3. Making a POST Request with WebClient\npublic Mono<String> createOrder(Order order) {\n    return webClient.post()\n            .uri("/orders")\n            .bodyValue(order)\n            .retrieve()\n            .bodyToMono(String.class);\n}\n\n// 4. Handling Errors with WebClient\npublic Mono<String> getOrderSafely(Long orderId) {\n    return webClient.get()\n            .uri("/orders/{id}", orderId)\n            .retrieve()\n            .onStatus(HttpStatus::is4xxClientError, response -> Mono.error(new RuntimeException("Client Error")))\n            .onStatus(HttpStatus::is5xxServerError, response -> Mono.error(new RuntimeException("Server Error")))\n            .bodyToMono(String.class);\n}',
      },
    },
    {
      content: {
        question:
          "How does Feign Client simplify communication between microservices?",
        answer:
          "Feign Client simplifies communication between microservices by providing a declarative way to define HTTP clients, reducing boilerplate code compared to RestTemplate or WebClient.",
        explanation:
          "<div><strong>Advantages of Feign Client:</strong></div><ul><li><strong>Declarative HTTP Requests:</strong> Define API calls using simple Java interfaces.</li><li><strong>Built-in Load Balancing:</strong> Integrates with Ribbon and Eureka for service discovery.</li><li><strong>Less Boilerplate Code:</strong> Eliminates the need to manually construct HTTP requests.</li><li><strong>Easy Integration with Spring Security:</strong> Supports authentication headers easily.</li></ul>",
        codeSnippet:
          '// 1. Enable Feign Client in Spring Boot\n@EnableFeignClients\n@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}\n\n// 2. Define a Feign Client Interface\n@FeignClient(name = "order-service", url = "http://localhost:8081")\npublic interface OrderClient {\n    @GetMapping("/orders/{id}")\n    String getOrder(@PathVariable("id") Long id);\n}\n\n// 3. Inject Feign Client in Service\n@Service\npublic class UserService {\n    private final OrderClient orderClient;\n\n    @Autowired\n    public UserService(OrderClient orderClient) {\n        this.orderClient = orderClient;\n    }\n\n    public String fetchOrder(Long orderId) {\n        return orderClient.getOrder(orderId);\n    }\n}\n\n// 4. Using Feign Client with Authentication Headers\n@FeignClient(name = "order-service")\npublic interface SecureOrderClient {\n    @GetMapping("/orders/{id}")\n    @Headers("Authorization: Bearer {token}")\n    String getOrder(@PathVariable("id") Long id, @Param("token") String token);\n}\n',
      },
    },
    {
      content: {
        question:
          "What are the advantages of using message brokers like Kafka or RabbitMQ for microservices communication?",
        answer:
          "Message brokers like Kafka and RabbitMQ provide asynchronous, reliable, and scalable communication between microservices, reducing tight coupling and improving system resilience.",
        explanation:
          "<div><strong>Advantages of Using Message Brokers:</strong></div><ul><li><strong>Asynchronous Communication:</strong> Services can process messages independently, improving responsiveness.</li><li><strong>Decoupling of Services:</strong> Producers and consumers operate independently, enhancing scalability.</li><li><strong>Reliability:</strong> Messages are persisted and retried in case of failures, ensuring no data loss.</li><li><strong>Load Balancing:</strong> Messages can be distributed among multiple consumers to handle high traffic.</li><li><strong>Event-Driven Architecture:</strong> Enables real-time processing and analytics by streaming events.</li></ul>",
        codeSnippet:
          '// 1. Configuring Kafka Producer in Spring Boot\n@Configuration\npublic class KafkaProducerConfig {\n    @Bean\n    public KafkaTemplate<String, String> kafkaTemplate(ProducerFactory<String, String> producerFactory) {\n        return new KafkaTemplate<>(producerFactory);\n    }\n}\n\n// 2. Sending Messages to a Kafka Topic\n@Service\npublic class OrderProducer {\n    private final KafkaTemplate<String, String> kafkaTemplate;\n    \n    @Autowired\n    public OrderProducer(KafkaTemplate<String, String> kafkaTemplate) {\n        this.kafkaTemplate = kafkaTemplate;\n    }\n    \n    public void sendOrderEvent(String order) {\n        kafkaTemplate.send("order-topic", order);\n    }\n}\n\n// 3. Consuming Messages from Kafka\n@Service\npublic class OrderConsumer {\n    @KafkaListener(topics = "order-topic", groupId = "order-group")\n    public void listen(String message) {\n        System.out.println("Received Order Event: " + message);\n    }\n}\n\n// 4. RabbitMQ Producer Example\n@Service\npublic class RabbitMQProducer {\n    private final AmqpTemplate amqpTemplate;\n\n    @Autowired\n    public RabbitMQProducer(AmqpTemplate amqpTemplate) {\n        this.amqpTemplate = amqpTemplate;\n    }\n\n    public void sendMessage(String message) {\n        amqpTemplate.convertAndSend("order-exchange", "order-routing-key", message);\n    }\n}\n\n// 5. RabbitMQ Consumer Example\n@Service\n@RabbitListener(queues = "order-queue")\npublic class RabbitMQConsumer {\n    public void receiveMessage(String message) {\n        System.out.println("Received Order Message: " + message);\n    }\n}\n',
      },
    },
    {
      content: {
        question:
          "How do you handle failures in service-to-service communication?",
        answer:
          "Failures in service-to-service communication can be handled using techniques like retries, circuit breakers, fallbacks, and timeouts to improve resilience and reliability.",
        explanation:
          "<div><strong>Strategies to Handle Failures in Microservices Communication:</strong></div><ul><li><strong>Retries:</strong> Automatically retry failed requests to handle temporary issues.</li><li><strong>Timeouts:</strong> Set request timeouts to avoid waiting indefinitely for a response.</li><li><strong>Circuit Breaker Pattern:</strong> Prevents repeated failures by stopping requests to a failing service after a threshold.</li><li><strong>Fallback Mechanism:</strong> Provides an alternative response when the main service fails.</li><li><strong>Event-Driven Messaging:</strong> Use message brokers like Kafka or RabbitMQ to decouple services and ensure eventual consistency.</li></ul>",
        codeSnippet:
          '// 1. Handling Failures Using Resilience4j Circuit Breaker\n@Configuration\npublic class Resilience4jConfig {\n    @Bean\n    public CircuitBreakerConfig circuitBreakerConfig() {\n        return CircuitBreakerConfig.custom()\n            .failureRateThreshold(50)\n            .waitDurationInOpenState(Duration.ofMillis(1000))\n            .slidingWindowSize(5)\n            .build();\n    }\n}\n\n// 2. Applying Circuit Breaker and Fallback in a Service\n@Service\npublic class OrderService {\n    private final WebClient webClient;\n\n    @Autowired\n    public OrderService(WebClient webClient) {\n        this.webClient = webClient;\n    }\n\n    @CircuitBreaker(name = "orderService", fallbackMethod = "fallbackOrder")\n    public Mono<String> getOrder(Long orderId) {\n        return webClient.get()\n                .uri("/orders/{id}", orderId)\n                .retrieve()\n                .bodyToMono(String.class);\n    }\n\n    public Mono<String> fallbackOrder(Long orderId, Throwable ex) {\n        return Mono.just("Fallback Order Response: Service Unavailable");\n    }\n}\n\n// 3. Setting Timeouts in WebClient\n@Bean\npublic WebClient webClient() {\n    return WebClient.builder()\n            .baseUrl("http://order-service")\n            .clientConnector(new ReactorClientHttpConnector(\n                HttpClient.create().responseTimeout(Duration.ofSeconds(3))\n            ))\n            .build();\n}\n\n// 4. Implementing Retry Mechanism\n@Retry(name = "orderService", maxAttempts = 3)\npublic Mono<String> getOrderWithRetry(Long orderId) {\n    return webClient.get()\n            .uri("/orders/{id}", orderId)\n            .retrieve()\n            .bodyToMono(String.class);\n}',
      },
    },
    {
      content: {
        question:
          "What is gRPC, and how does it compare to REST in microservices?",
        answer:
          "gRPC (Google Remote Procedure Call) is a high-performance, open-source RPC framework that uses Protocol Buffers for serialization and HTTP/2 for communication, making it faster and more efficient than traditional REST APIs.",
        explanation:
          "<div><strong>Comparison of gRPC and REST:</strong></div><ul><li><strong>Performance:</strong> gRPC is faster due to HTTP/2 and binary serialization (Protocol Buffers), whereas REST uses JSON over HTTP/1.1, making it heavier.</li><li><strong>Streaming:</strong> gRPC supports bi-directional streaming, enabling real-time data exchange, while REST is limited to request-response.</li><li><strong>Type Safety:</strong> gRPC uses strongly-typed Protocol Buffers (.proto), reducing parsing errors, whereas REST relies on JSON, which is more flexible but less strict.</li><li><strong>Interoperability:</strong> REST is widely supported across different platforms and languages, while gRPC requires gRPC-specific client libraries.</li><li><strong>Use Cases:</strong> gRPC is ideal for high-performance microservices and real-time communication, while REST is better for web applications and public APIs.</li></ul>",
        codeSnippet:
          '// 1. Define a gRPC Service using Protocol Buffers\nsyntax = "proto3";\n\nservice OrderService {\n    rpc GetOrder (OrderRequest) returns (OrderResponse);\n}\n\nmessage OrderRequest {\n    int64 orderId = 1;\n}\n\nmessage OrderResponse {\n    string orderDetails = 1;\n}\n\n// 2. Implement the gRPC Service in Spring Boot\n@Service\npublic class OrderServiceImpl extends OrderServiceGrpc.OrderServiceImplBase {\n    @Override\n    public void getOrder(OrderRequest request, StreamObserver<OrderResponse> responseObserver) {\n        String orderDetails = "Order Details for ID: " + request.getOrderId();\n        OrderResponse response = OrderResponse.newBuilder().setOrderDetails(orderDetails).build();\n        responseObserver.onNext(response);\n        responseObserver.onCompleted();\n    }\n}\n\n// 3. gRPC Client in Spring Boot\n@GrpcClient("order-service")\nprivate OrderServiceGrpc.OrderServiceBlockingStub orderServiceStub;\n\npublic String fetchOrder(Long orderId) {\n    OrderRequest request = OrderRequest.newBuilder().setOrderId(orderId).build();\n    OrderResponse response = orderServiceStub.getOrder(request);\n    return response.getOrderDetails();\n}',
      },
    },
    {
      content: {
        question:
          "What is API Composition, and when should it be used in microservices?",
        answer:
          "API Composition is a pattern used in microservices where an API Gateway or a dedicated aggregator service combines data from multiple microservices into a single response, reducing the need for multiple client requests.",
        explanation:
          "<div><strong>When to Use API Composition:</strong></div><ul><li><strong>Aggregating Data:</strong> When a client needs data from multiple microservices, API Composition reduces the number of requests.</li><li><strong>Reducing Latency:</strong> Instead of making sequential API calls, a single request to an API Composer can fetch all required data efficiently.</li><li><strong>Improving Maintainability:</strong> Clients are abstracted from direct dependencies on multiple services, making front-end development easier.</li><li><strong>Enhancing Performance:</strong> API Composition helps optimize database queries and minimize redundant calls.</li></ul>",
        codeSnippet:
          '// Example: API Composition in Spring Boot\n@RestController\n@RequestMapping("/aggregator")\npublic class ApiCompositionController {\n    private final WebClient webClient;\n\n    @Autowired\n    public ApiCompositionController(WebClient.Builder webClientBuilder) {\n        this.webClient = webClientBuilder.build();\n    }\n\n    @GetMapping("/user-details/{userId}")\n    public Mono<UserDetailsDTO> getUserDetails(@PathVariable Long userId) {\n        Mono<UserDTO> userMono = webClient.get().uri("http://user-service/users/" + userId)\n                                          .retrieve().bodyToMono(UserDTO.class);\n        Mono<OrderDTO> orderMono = webClient.get().uri("http://order-service/orders/user/" + userId)\n                                           .retrieve().bodyToMono(OrderDTO.class);\n        return Mono.zip(userMono, orderMono)\n                   .map(tuple -> new UserDetailsDTO(tuple.getT1(), tuple.getT2()));\n    }\n}\n\n// DTO for Aggregated Response\npublic class UserDetailsDTO {\n    private UserDTO user;\n    private OrderDTO order;\n\n    public UserDetailsDTO(UserDTO user, OrderDTO order) {\n        this.user = user;\n        this.order = order;\n    }\n\n    // Getters and Setters\n}',
      },
    },
    {
      content: {
        question:
          "How does event-driven architecture help in microservices communication?",
        answer:
          "Event-driven architecture enables microservices to communicate asynchronously by publishing and subscribing to events, improving scalability, decoupling, and fault tolerance.",
        explanation:
          "<div><strong>Benefits of Event-Driven Architecture in Microservices:</strong></div><ul><li><strong>Loose Coupling:</strong> Microservices interact through events rather than direct API calls, making them independent.</li><li><strong>Scalability:</strong> Services can process events independently, handling high loads efficiently.</li><li><strong>Resilience:</strong> If a service fails, events can still be processed later, preventing system-wide failures.</li><li><strong>Real-Time Processing:</strong> Supports real-time event streaming for applications requiring instant updates.</li><li><strong>Flexibility:</strong> New services can subscribe to existing events without modifying the existing system.</li></ul>",
        codeSnippet:
          '// 1. Define an Event in Spring Boot\npublic class OrderCreatedEvent {\n    private Long orderId;\n    private String status;\n\n    public OrderCreatedEvent(Long orderId, String status) {\n        this.orderId = orderId;\n        this.status = status;\n    }\n\n    // Getters and Setters\n}\n\n// 2. Publish an Event Using Spring Boot and Kafka\n@Component\npublic class OrderEventPublisher {\n    private final KafkaTemplate<String, OrderCreatedEvent> kafkaTemplate;\n\n    @Autowired\n    public OrderEventPublisher(KafkaTemplate<String, OrderCreatedEvent> kafkaTemplate) {\n        this.kafkaTemplate = kafkaTemplate;\n    }\n\n    public void publishOrderEvent(OrderCreatedEvent event) {\n        kafkaTemplate.send("order-events", event);\n    }\n}\n\n// 3. Consume an Event in Another Microservice\n@Component\n@KafkaListener(topics = "order-events", groupId = "inventory-group")\npublic class OrderEventListener {\n    @KafkaHandler\n    public void handleOrderEvent(OrderCreatedEvent event) {\n        System.out.println("Received order event: " + event.getOrderId());\n        // Process the order event in inventory service\n    }\n}\n',
      },
    },
  ],
};

export default serviceCommunication;
